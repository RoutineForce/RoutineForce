"""back URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.conf.urls import url, include
from rest_framework import routers
#from routineforce import views as main_views
from routineforce.views import RoutineViewSet, UserViewSet, UserRoutineViewSet, LoginAPI

router = routers.DefaultRouter()
#routerUser = routers.DefaultRouter()
#routerUserRoutine = routers.DefaultRouter()
#routerLogin = routers.DefaultRouter()
router.register(r'routine', RoutineViewSet)
router.register(r'user', UserViewSet)
router.register(r'userroutine', UserRoutineViewSet)
#userlogin = LoginViewSet.as_view({'post':'create'})
#router.register(r'login', LoginViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    #path('', main_views.index, name="index"),
    #path('routine/', RoutineViewSet.as_view()),
    path('', include(router.urls)),
    path('login', LoginAPI.as_view()),
    #path('', include(routerUser.urls)),
    #url(r'^', include(userlogin.urls)),
    #path('', include(routerLogin.urls)),
    #path('', include(routerUserRoutine.urls)),
]
