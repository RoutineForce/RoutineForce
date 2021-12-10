from django.shortcuts import render
from .serializers import RoutineSerializer, UserSerializer, UserRoutineSerializer, LoginSerializer 
from .models import Routine, User, RoutineRegistration, Login
from rest_framework import viewsets, status
from rest_framework.views import APIView
from rest_framework.decorators import action
from rest_framework.response import Response
import requests
import json
from django_filters import rest_framework as filters
from django.http import HttpResponse

# Create your views here.

def index(request):
    return render(request, "routineforce/index.html")
def test(request):
    return render(request, "routineforce/index.html")

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

    def get_queryset(self):
        queryset = self.queryset
        fromIndex = self.request.query_params.get('start', None)
        if fromIndex:
            fromIndex = int(fromIndex)
            toIndex = int(self.request.query_params.get('count', None))
            qs1 =  RoutineFilter(self.request.GET, queryset=queryset)
            qs1 = qs1.qs
            return qs1[fromIndex:toIndex]
        else :
            qs2 = RoutineFilter(self.request.GET, queryset=queryset)
            qs2 = qs2.qs
        return qs2

    #    search = self.request.query_params.get('search', None)
    #    if search:
    #        queryset = queryset.filter(status=search)
    #    return queryset
    #@action(detail=False)
    #def pending(self, request):
    #    qs = Routine.objects.filter(status='pending')
    #    serializer = self.get_serializer(qs, many=True)
    #    return Response(serializer.data)
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

routine_url = "http://ec2-13-124-86-205.ap-northeast-2.compute.amazonaws.com:8000"
REST_API_KEY = "10597e3006de4b770f6463b53a4324d2"
redirect_uri = "http://localhost:3000/loginreturn/kakao"
class LoginAPI(APIView):

    #def get(self, request):
    #    return Respones()
    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            #do login
            code=serializer.data.get('code')
            #print(code)
            #print(type(code))
            #print(serializer.data)
            #print(type(serializer.data))
            service=serializer.data.get('service')
            headers = {
                'Content-Type': 'application/x-www-form-urlencoded',
            }

            data = {
                'grant_type': 'authorization_code',
                'client_id': f'{REST_API_KEY}',
                'redirect_uri': f'redirect_uri',
                'code': f'{code}',
            }

            token_response = requests.post('https://kauth.kakao.com/oauth/token', headers=headers, data=data)
            response_json = token_response.json()
            print(response_json)
            print(type(response_json))
            print(response_json["access_token"])
            access_token = response_json["access_token"]
            headers = {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': f'Bearer {access_token}',
            }

            data = {
                'property_keys': '["properties.nickname", "properties.profile_image", "kakao_account.email"]'
            }
            
            kakao_response = requests.post('https://kapi.kakao.com/v2/user/me', headers=headers, data=data)
            routineforce_user_response = requests.get('http://ec2-13-124-86-205.ap-northeast-2.compute.amazonaws.com:8000/user')
            print(kakao_response.text)
            print(routineforce_user_response)
            return Response('Login Successed!' ,status=status.HTTP_200_OK)
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
