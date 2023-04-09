from django.contrib import admin
from django.urls import path,include
from api.views import getRoutes,FileCaseView,MyTokenObtainPairView
from api import views


from rest_framework_simplejwt.views import(
       
        TokenRefreshView,
    )


urlpatterns = [
    path('admin/', admin.site.urls),

    path('',FileCaseView.as_view(),name='FileCase'),

    path('sample/',views.getRoutes),
    path('sample/token/',MyTokenObtainPairView.as_view(),name='token_obtain_pair'),
    path('sample/token/refresh/',TokenRefreshView.as_view(),name='token_refresh')
]
