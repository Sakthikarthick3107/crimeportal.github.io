from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from rest_framework import generics
from .models import *
from .serializers import *
from rest_framework_simplejwt.views import TokenObtainPairView , TokenRefreshView

# Create your views here.

class PeopleUserCreateAPIView(generics.CreateAPIView):
    queryset = PeopleUser.objects.all()
    serializer_class= PeopleUserSerializer
    permission_classes = [AllowAny]

class MyUserTokenObtainPairView(TokenObtainPairView):
    serializer_class = PeopleUserTokenObtainPairSerializer


