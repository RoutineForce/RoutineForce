from django.shortcuts import render
from .serializers import RoutineSerializer 
from .models import Routine
from rest_framework import viewsets


# Create your views here.

def index(request):
    return render(request, "routineforce/index.html")
def test(request):
    return render(request, "routineforce/index.html")

class RoutineViewSet(viewsets.ModelViewSet):
    queryset = Routine.objects.all()
    serializer_class = RoutineSerializer
