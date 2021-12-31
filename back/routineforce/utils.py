import jwt
import json
from .models import User
from django.http import JsonResponse, HttpResponse
from rest_framework import status
from rest_framework.authentication import BaseAuthentication
from django.contrib.auth.models import AnonymousUser

SECRET_KEY = 'django-insecure-xecoq22xndesta5&^9sf#8txztg*q63!yi-c4+6wmojl4eimhe'


class LoginConfirm(BaseAuthentication):

    def authenticate(self, request):
        token = request.headers.get("Authorization", None)
        try:
            if token:
                token_payload = jwt.decode(token, SECRET_KEY, algorithms="HS256")
                print(token_payload)
                print(token_payload['id'])
                user = User.objects.get(uid=token_payload['id'], provider=token_payload['provider'])
                print('authuser', user)
                # request.user = user
                return (user, token)
            return (AnonymousUser, None)
            #return JsonResponse({'message': "Login Needed"}, status=status.HTTP_401_UNAUTHORIZED)
        
        except jwt.ExpiredSignatureError:
            return ({'message' : "Token Expired"}, None)
            #return JsonResponse({'message': "Token Expired"}, status=status.HTTP_401_UNAUTHORIZED)
        
        except jwt.DecodeError:
            return ({'message': "Invalid Decode"}, None)
            #return JsonResponse({'message': "Invalid User"}, status=status.HTTP_401_UNAUTHORIZED)
        
        except User.DoesNotExist:
            return ({'message': "Invalid User"}, None)
            #return JsonResponse({'message': "Invalid User"}, status=status.HTTP_401_UNAUTHORIZED)
