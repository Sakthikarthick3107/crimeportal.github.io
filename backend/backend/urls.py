from django.contrib import admin
from django.urls import path,include
from django.conf import settings
from django.conf.urls.static import static
from api.views import *
from PeopleUsers.views import *
from rest_framework_simplejwt.views import TokenRefreshView
from rest_framework.authtoken.views import obtain_auth_token
    


urlpatterns = [
    path('admin/', admin.site.urls),

    path('',AdminCaseView.as_view(),name='Admin Case View'),
    
    path('status/<int:id>/update/',Status.as_view(),name='Admin-Case-Status'),

    path('<str:accuser>',FileCaseView.as_view(),name='User Case View'),
    
    path('api/token/',MyTokenObtainPairView.as_view(),name='token_obtain_pair'),
    path('api/token/refresh/',TokenRefreshView.as_view(),name='token_refresh'),
    path('api/posts/',CreatePostView.as_view(),name='posts'),
    path('api/register/',UserCreateAPIView.as_view() , name='register'),
    path('api/messages/',MessageView.as_view() , name='Messages'),
    path('peopleusers/details/',PeopleUserCreateAPIView.as_view(),name='Personal Details'),
    
    
    path('superuser-verify/', SuperuserVerifyAPIView.as_view(), name='superuser-verify'),
]

if settings.DEBUG:
    urlpatterns += static( settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)
