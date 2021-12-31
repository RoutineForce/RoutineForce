from django.shortcuts import render

from .paginations import Pagination
from .permissions import IsOwnerOrReadOnly
from .serializers import RoutineSerializer, UserSerializer, UserRoutineSerializer, LoginSerializer 
from .serializers import CommentSerializer, CommonCodeSerializer, PointSerializer, HeartSerializer 
from .models import Routine, User, RoutineRegistration, Login, Comment, CommonCode, Heart, Point
from rest_framework import viewsets, status
from rest_framework.views import APIView
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.exceptions import NotFound, ParseError
import requests
import json
import jwt
import datetime
from django_filters import rest_framework as filters
from django.http import HttpResponse, JsonResponse
from .login import Provider
from .utils import LoginConfirm
from django.core import serializers
from django.core.exceptions import FieldError, ObjectDoesNotExist, FieldDoesNotExist
from django.utils.datastructures import MultiValueDictKeyError
from django.db import models

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
    #fields = User._meta.concrete_fields
    #model_fields = [f.name for f in User._meta.fields]
    #print(fields)
    #print(model_fields)

    class Meta:
        model = User
        fields = '__all__'

class UserRoutineFilter(filters.FilterSet):
    class Meta:
        model = RoutineRegistration
        fields = '__all__'

class CommentFilter(filters.FilterSet):
    class Meta:
        model = Routine
        fields = '__all__'

class CommonCodeFilter(filters.FilterSet):
    class Meta:
        model = Routine
        fields = '__all__'

class HeartFilter(filters.FilterSet):
    class Meta:
        model = Routine
        fields = '__all__'

class PointFilter(filters.FilterSet):
    class Meta:
        model = Routine
        fields = '__all__'


class RoutineViewSet(viewsets.ModelViewSet):
    queryset = Routine.objects.all()
    serializer_class = RoutineSerializer
    pagination_class = Pagination
    permission_classes = [IsOwnerOrReadOnly, ]
    authentication_classes = [LoginConfirm, ]
    filterset_fields = '__all__'

    # def get_object(self, art):
    #    article = get_object_or_404(Article, pk=article_pk)
    #    self.check_object_permissions(self.request, article)
    #    return article
    # @LoginConfirm
    # def create(self, request, *args, **kwargs):
    #    return Response(serializer.data, status=status.HTTP_201_CREATED)
    

class UserRoutineViewSet(viewsets.ModelViewSet):
    queryset = RoutineRegistration.objects.all()
    serializer_class = UserRoutineSerializer
    pagination_class = Pagination
    filterset_fields = '__all__'

    # @LoginConfirm
    def create(self, request, *args, **kwargs):
        serializer = UserRoutineSerializer(data=request.data)
        if serializer.is_valid():
            #    print(serializer.data['user_id'])
            #    #user_id = User.objects.get(id=serializer.data['user_id'])
            #    #user_auth = CommonCode.objects.get(code_id=serializer.data['user_auth']),
            #    #print(user_id)
            #    #print(user_auth)
            RoutineRegistration(
                        user_id=User.objects.get(id=serializer.data['user_id']),
                        routine_id=Routine.objects.get(id=serializer.data['routine_id']),
                        user_auth=CommonCode.objects.get(code_id=serializer.data['user_auth']),
                ).save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        # return Response(serializer.data, status=status.HTTP_201_CREATED)


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.order_by('pk')
    serializer_class = UserSerializer
    pagination_class = Pagination
    filterset_fields = '__all__'

    # def list(self, request, *args, **kwargs):
    #     res = super().list(request, *args, **kwargs)
    #     return res


class CommentViewSet(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    pagination_class = Pagination
    filterset_fields = '__all__'


class CommonCodeViewSet(viewsets.ModelViewSet):
    queryset = CommonCode.objects.all()
    serializer_class = CommonCodeSerializer
    pagination_class = Pagination
    filterset_fields = '__all__'


class PointViewSet(viewsets.ModelViewSet):
    queryset = Point.objects.all()
    serializer_class = PointSerializer
    pagination_class = Pagination
    filterset_fields = '__all__'


class HeartViewSet(viewsets.ModelViewSet):
    queryset = Heart.objects.all()
    serializer_class = HeartSerializer
    pagination_class = Pagination
    filterset_fields = '__all__'


APP_ADMIN_KEY = "00b918e1b430f796b039aefb8e5ebc24"


class LoginAPI(APIView):
    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            # do login
            print(serializer.data)
            code=serializer.data.get('code')
            provider=serializer.data.get('provider')
            if provider == 'T0101':
                login = Provider().fortytwo
            elif provider == 'T0102':
                login = Provider().kakao
            elif provider == 'T0103':
                login = Provider().naver
            elif provider == 'T0104':
                login = Provider().google
            try:
                userdata = login(code)
            except requests.HTTPError:
                return Response({'error': 'provider-500'}, status=400)
            except TypeError:
                return Response(status=400)
            payload = {
                    'exp': datetime.datetime.utcnow() + datetime.timedelta(seconds=7200),
                    'id': userdata['uid'],
                    'provider': provider
                    }
            if User.objects.filter(uid=userdata['uid'], provider=provider).exists():
                routineforce_token = jwt.encode(payload, SECRET_KEY, algorithm='HS256')
                return JsonResponse({"token": routineforce_token}, status=status.HTTP_200_OK)
            else :
                User(
                        uid = userdata['uid'],
                        provider = provider,
                        name = userdata['name'],
                        email = userdata['email'],
                        image_path = userdata['image_path']
                ).save()
                routineforce_token = jwt.encode(payload, SECRET_KEY, algorithm='HS256')
            return JsonResponse({"token": routineforce_token}, status=status.HTTP_200_OK)
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
