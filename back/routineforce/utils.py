import jwt
import json
from .models import User
from django.http import JsonResponse, HttpResponse
from rest_framework import status

SECRET_KEY = 'django-insecure-xecoq22xndesta5&^9sf#8txztg*q63!yi-c4+6wmojl4eimhe'

class LoginConfirm:
    def __init__(self, original_function):
        self.original_function = original_function

    def __call__(self, request, *args, **kwargs):
        token = request.headers.get("Authorization", None)
        try:
            if token:
                token_payload = jwt.decode(token, SECRET_KEY, algorithms="HS256")
                user = User.objects.get(id=token_payload['id'], login=token_payload['provider'])
                request.user = user
                return self.original_function(self, request, *args, **kwargs)
            
            return JsonResponse({'message':"Login Needed"}, status=status.HTTP_401_UNAUTHORIZED)
        
        except jwt.ExpiredSignatureError:
            return JsonResponse({'message':"Token Expired"}, status=status.HTTP_401_UNAUTHORIZED)
        
        except jwt.DecodeError:
            return JsonResponse({'message':"Invalid User"}, status=status.HTTP_401_UNAUTHORIZED)
        
        except User.DoesNotExist:
            return JsonResponse({'message':"Invalid User"}, status=status.HTTP_401_UNAUTHORIZED)
