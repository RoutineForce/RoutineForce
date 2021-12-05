from django.shortcuts import render
from .serializers import RoutineSerializer, UserSerializer, UserRoutineSerializer 
from .models import Routine, User, RoutineRegistration
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from django_filters import rest_framework as filters

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

