from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import generics
from .models import *
from .serializers import *


# Create your views here.

class PeopleUserCreateAPIView(APIView):

    def get(self, request):
        posts = PeopleUser.objects.all()
        serializer = PeopleUserSerializer(posts, many=True)
        return Response(serializer.data)

    def post(self, request):
        user_serializer = PeopleUserSerializer(data=request.data)
        if user_serializer.is_valid():
            user_serializer.save()
            return Response(user_serializer.data)
        else:
            print('error', user_serializer.errors)
            return Response(user_serializer.errors)




