from rest_framework import serializers 
from .models import Routine, User, RoutineRegistration

class RoutineSerializer(serializers.ModelSerializer): 
    class Meta:
        model = Routine # 모델 설정 
        fields = "__all__"
        #fields = ('id','title', 'status','type','day_run', 'dues', 'penalty', 'headcount_min', 'headcount_max', 'location', 'certification_type', 'intro', 'body', 'body_type','image_path')

class UserSerializer(serializers.ModelSerializer): 
    class Meta:
        model = User # 모델 설정 
        fields = "__all__"

class UserRoutineSerializer(serializers.ModelSerializer): 
    class Meta:
        model = RoutineRegistration # 모델 설정 
        fields = "__all__"

