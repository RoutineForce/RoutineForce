from rest_framework import serializers 
from .models import Routine, User, RoutineRegistration, Login, Comment, CommonCode, Heart, Point

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
    user_login = serializers.PrimaryKeyRelatedField(queryset=User.objects.all())
    class Meta:
        model = RoutineRegistration # 모델 설정 
        fields = ('user_id','user_login')

class LoginSerializer(serializers.ModelSerializer): 
    class Meta:
        model = Login # 모델 설정 
        fields = "__all__"

class CommentSerializer(serializers.ModelSerializer): 
    class Meta:
        model = Comment # 모델 설정 
        fields = "__all__"

class CommonCodeSerializer(serializers.ModelSerializer): 
    class Meta:
        model = CommonCode # 모델 설정 
        fields = "__all__"

class HeartSerializer(serializers.ModelSerializer): 
    class Meta:
        model = Heart # 모델 설정 
        fields = "__all__"

class PointSerializer(serializers.ModelSerializer): 
    class Meta:
        model = Point # 모델 설정 
        fields = "__all__"

