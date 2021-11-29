from rest_framework import serializers 
from .models import Routine 

class RoutineSerializer(serializers.ModelSerializer): 
    class Meta:
        model = Routine # 모델 설정 
        fields = ('id','title', 'status','type','day_run', 'dues', 'penalty', 'headcount_min', 'headcount_max', 'location', 'certification_type', 'intro', 'body', 'body_type', 'image_path')

