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
from routineforce.views import RoutineViewSet, UserViewSet, UserRoutineViewSet, LoginAPI, CommentViewSet, CommonCodeViewSet, HeartViewSet, PointViewSet

##############swagger modules###############
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
################################

router = routers.DefaultRouter()
#routerUser = routers.DefaultRouter()
#routerUserRoutine = routers.DefaultRouter()
#routerLogin = routers.DefaultRouter()
router.register(r'routine', RoutineViewSet)
router.register(r'user', UserViewSet, basename='user')
router.register(r'user-routine', UserRoutineViewSet)
router.register(r'comment', CommentViewSet)
router.register(r'heart', HeartViewSet)
router.register(r'point', PointViewSet)
router.register(r'common-code', CommonCodeViewSet)
#userlogin = LoginViewSet.as_view({'post':'create'})
#router.register(r'login', LoginViewSet)

###################swagger###########
schema_view = get_schema_view(
   openapi.Info(
      title="Snippets API",
      default_version='v1',
      description="Test description",
      terms_of_service="https://www.google.com/policies/terms/",
      contact=openapi.Contact(email="contact@snippets.local"),
      license=openapi.License(name="BSD License"),
   ),
   public=True,
   permission_classes=(permissions.AllowAny,),
)
######################################

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
    ###########swagger configuration###########
    url(r'^swagger(?P<format>\.json|\.yaml)$', schema_view.without_ui(cache_timeout=0), name='schema-json'),
    url(r'^swagger/$', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    url(r'^redoc/$', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
]
