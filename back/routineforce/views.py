from django.shortcuts import render
from .serializers import RoutineSerializer 
from .models import Routine
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response

# Create your views here.

def index(request):
    return render(request, "routineforce/index.html")
def test(request):
    return render(request, "routineforce/index.html")

class RoutineViewSet(viewsets.ModelViewSet):
    queryset = Routine.objects.all()
    serializer_class = RoutineSerializer

    @action(detail=False)
    def pending(self, request):
        qs = Routine.objects.filter(status='pending')
        serializer = self.get_serializer(qs, many=True)
        return Response(serializer.data)
