from django.shortcuts import render
from .serializers import RoutineSerializer, UserSerializer, UserRoutineSerializer, LoginSerializer 
from .models import Routine, User, RoutineRegistration, Login
from rest_framework import viewsets, status
from rest_framework.views import APIView
from rest_framework.decorators import action
from rest_framework.response import Response
import requests
import json
import jwt
import datetime
from django_filters import rest_framework as filters
from django.http import HttpResponse, JsonResponse
from .login import Provider
from .utils import LoginConfirm
from django.core import serializers

#from settings import SECRET_KEY
#SECRET_KEY = 
SECRET_KEY = 'django-insecure-xecoq22xndesta5&^9sf#8txztg*q63!yi-c4+6wmojl4eimhe'

# Create your views here.

#def index(request):
#    return render(request, "routineforce/index.html")
#def test(request):
#    return render(request, "routineforce/index.html")

class RoutineFilter(filters.FilterSet):
    class Meta:
        model = Routine
        fields = '__all__'

class UserFilter(filters.FilterSet):
    class Meta:
        model = User
        fields = '__all__'

class UserRoutineFilter(filters.FilterSet):
    class Meta:
        model = RoutineRegistration
        fields = '__all__'


class RoutineViewSet(viewsets.ModelViewSet):
    queryset = Routine.objects.all()
    serializer_class = RoutineSerializer
    filter_backends = [filters.DjangoFilterBackend]
    #filterset_fields = ['status', 'type', 'id', 'certification_type', 'body_type']

    def list(self, request, *args, **kwargs):
        queryset = self.queryset
        fromIndex = self.request.query_params.get('start', None)
        if fromIndex:
            fromIndex = int(fromIndex)
            toIndex = int(self.request.query_params.get('count', None))
            qs1 =  RoutineFilter(self.request.GET, queryset=queryset)
            qs1 = qs1.qs
            qs1 = qs1[fromIndex:toIndex]
            #qs1 = json.dumps(qs1)
            qs1 = serializers.serialize("json", qs1) 
            return HttpResponse(qs1)
            #return Response(qs1, status=status.HTTP_200_OK)
        else :
            qs2 = RoutineFilter(self.request.GET, queryset=queryset)
            qs2 = qs2.qs
            qs2 = serializers.serialize("json",qs2)
        return HttpResponse(qs2)
        #return Response(qs2, status=status.HTTP_200_OK)
    @LoginConfirm
    def create(self, request, *args, **kwargs):
        return Response(serializer.data, status=status.HTTP_201_CREATED)


    
class UserRoutineViewSet(viewsets.ModelViewSet):
    queryset = RoutineRegistration.objects.all()
    serializer_class = UserRoutineSerializer
    filter_backends = [filters.DjangoFilterBackend]
    #filterset_fields = ['status', 'type', 'id', 'certification_type', 'body_type']

    def get_queryset(self):
        queryset = self.queryset
        fromIndex = self.request.query_params.get('start', None)
        if fromIndex:
            fromIndex = int(fromIndex)
            toIndex = int(self.request.query_params.get('count', None))
            qs1 =  UserRoutineFilter(self.request.GET, queryset=queryset)
            qs1 = qs1.qs
            return qs1[fromIndex:toIndex]
        else :
            qs2 = UserRoutineFilter(self.request.GET, queryset=queryset)
            qs2 = qs2.qs
        return qs2

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    filter_backends = [filters.DjangoFilterBackend]
    #filterset_fields = ['status', 'type', 'id', 'certification_type', 'body_type']

    def get_queryset(self):
        queryset = self.queryset
        fromIndex = self.request.query_params.get('start', None)
        if fromIndex:
            fromIndex = int(fromIndex)
            toIndex = int(self.request.query_params.get('count', None))
            qs1 =  UserRoutineFilter(self.request.GET, queryset=queryset)
            qs1 = qs1.qs
            return qs1[fromIndex:toIndex]
        else :
            qs2 = UserFilter(self.request.GET, queryset=queryset)
            qs2 = qs2.qs
        return qs2

APP_ADMIN_KEY = "00b918e1b430f796b039aefb8e5ebc24"

class LoginAPI(APIView):

    def get(self, request):
        headers = {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': f'KakaoAK {APP_ADMIN_KEY}',
        }

        data = {
            'target_id_type': 'user_id',
            'target_id': '2027486874'
        }
        response = requests.post('https://kapi.kakao.com/v1/user/unlink', headers=headers, data=data)
        return Response("logout")
    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            #do login
            code=serializer.data.get('code')
            service=serializer.data.get('service')
            if service == 'T0101':
                provider = Provider().fortytwo
            elif service == 'T0102':
                provider = Provider().kakao
            elif service == 'T0103':
                provider = Provider().naver
            elif service == 'T0104':
                provider = Provider().google
            userdata = provider(code)
            print(type(userdata))
            print(userdata)
            payload = {
                    'exp' : datetime.datetime.utcnow() + datetime.timedelta(seconds=7200),
                    'id' : userdata['id'],
                    'provider' : service
                    }
            if User.objects.filter(id=userdata['id'], login=service).exists():
                #print("user exists")
                routineforce_token = jwt.encode(payload, SECRET_KEY, algorithm='HS256')
                return JsonResponse({"token": routineforce_token}, status=status.HTTP_200_OK)
            else :
                User(
                        id = userdata['id'],
                        login = service,
                        name = userdata['name'],
                        email = userdata['email'],
                        image_path = userdata['image_path']
                ).save()
                routineforce_token = jwt.encode(payload, SECRET_KEY, algorithm='HS256')
            return JsonResponse({"token": routineforce_token}, status=status.HTTP_200_OK)
            #return Response('Login Successed!' ,status=status.HTTP_200_OK)
        else :
            return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
        return Response(serializer.errors)

        
#################### 같은 쿼리셋, 시리얼라이저 쓰면 라우터가 구분 못하나?
#class LoginViewSet(viewsets.ModelViewSet):
#    queryset = User.objects.all()
#    #serializer_class = UserSerializer
#
#    @action(detail=False, methods=['post'])
#    def checkuser(self, request):
#        queryset = self.get_object()
#        access_token = request.query_params.get('access_token', None)
#        print(access_token)
#        profile_request = requests.get(
#                "https://kapi.kakao.com/v2/user/me", headers={"Authorization" : f"Bearer {access_token}"},
#        )
#        profile_json = profile_request.json()
#        kakao_account = profile_json.get("kakao_accoount")
#        email = kakao_account.get("email", None)
#        user_id = profile_json.get("id")
        #print(kakao_account)
        #print(email)
        #print(user_id)
#        return (user_id)
