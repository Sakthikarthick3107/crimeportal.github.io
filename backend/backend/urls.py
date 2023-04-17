from django.contrib import admin
from django.urls import path,include
from django.conf import settings
from django.conf.urls.static import static
from api.views import *
from api import views
from PeopleUsers.views import *
from rest_framework_simplejwt.views import TokenRefreshView
    


urlpatterns = [
    path('admin/', admin.site.urls),

    path('',FileCaseView.as_view(),name='FileCase'),
    # path('/<str:username>/',FileCaseView.as_view(),name='FileCase-detail'),
    path('api/token/',MyTokenObtainPairView.as_view(),name='token_obtain_pair'),
    path('api/token/refresh/',TokenRefreshView.as_view(),name='token_refresh'),
    path('api/posts/',CreatePostView.as_view(),name='posts'),
    path('api/register/',UserCreateAPIView.as_view() , name='register'),

    path('peopleusers/register/',PeopleUserCreateAPIView.as_view(),name='peopleregister'),
    path('peopleusers/token/',MyUserTokenObtainPairView.as_view(),name='user_token_obtain_pair'),
    path('peopleusers/token/refresh',TokenRefreshView.as_view(),name='user_token_refresh')
]

if settings.DEBUG:
    urlpatterns += static( settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)
