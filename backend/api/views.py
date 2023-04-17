from django.shortcuts import render
from rest_framework.views import APIView
from . models import *
from . serializers import *
from rest_framework.response import Response
from rest_framework.decorators import api_view,permission_classes
from rest_framework.permissions import IsAuthenticated , AllowAny
from django.core.mail import send_mail
from django.conf import settings
from django.http import JsonResponse
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import generics ,viewsets,status
from django.contrib.auth.models import User


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['username'] = user.username
        # ...

        return token
class MyTokenObtainPairView (TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


# Create your views here.


  
class FileCaseView(APIView):
    # def get_object(self,pk):
    #     try:
    #         return FileCase.objects.get(pk=pk)
    #     except FileCase.DoesNotExist:
    #         raise Http404


    def get(self,request):
        output=FileCase.objects.all()
        serializer=FileCaseSerializer(output , many=True)
        return Response(serializer.data)
    
    def post(self,request):
        serializer=FileCaseSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            #send_mail(serializer.validated_data['typeofcrime'],"Hi "+serializer.validated_data['victim']   +"You are filed a case under the category mentioned above. We will looking forward to your case and acknowledge to you shortly.-By *****",settings.EMAIL_HOST_USER,[serializer.validated_data['email']],fail_silently=False)
            serializer.save()
            return Response(serializer.data)

class CreatePostView(APIView):
    parser_classes = (MultiPartParser, FormParser)

    def get(self, request):
        posts = CreatePost.objects.all()
        serializer = CreatePostSerializer(posts, many=True)
        return Response(serializer.data)

    def post(self, request):
        posts_serializer = CreatePostSerializer(data=request.data)
        if posts_serializer.is_valid():
            posts_serializer.save()
            return Response(posts_serializer.data)
        else:
            print('error', posts_serializer.errors)
            return Response(posts_serializer.errors)
               
class UserCreateAPIView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class= UserSerializer
    permission_classes = [AllowAny]

