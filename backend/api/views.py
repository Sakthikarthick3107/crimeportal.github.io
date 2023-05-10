from django.shortcuts import render,get_object_or_404
from rest_framework.views import APIView
from . models import *
from . serializers import *
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated , AllowAny
from django.core.mail import send_mail
from django.conf import settings
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.authtoken.models import Token
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework import generics ,status
from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import AccessToken,RefreshToken
from django.contrib.auth import authenticate, get_user_model


User = get_user_model()

class SuperuserVerifyAPIView(APIView):
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')

        user = authenticate(username=username, password=password)
        if not user:
            return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)

        if user.is_superuser:
            
            access_token = AccessToken.for_user(user)
            refresh_token = RefreshToken.for_user(user)
            access_token['username'] = user.username
            return Response({'access_token': str(access_token),'refresh_token': str(refresh_token)}, status=status.HTTP_200_OK)

        else:
            return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)




class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        token['username'] = user.username
        token['email']=user.email
        return token
class MyTokenObtainPairView (TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


# Create your views here.

class AdminCaseView(APIView):
    def get(self,request):
        output = FileCase.objects.all()
        serializer=FileCaseSerializer(output , many=True)
        return Response(serializer.data)
    def post(self,request):
        serializer=FileCaseSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            send_mail("Online Crime Reporting System","Hey "+ serializer.validated_data['accuser']  +"You are filed a case under the category" +serializer.validated_data['typeofcrime'] +" ,case ID:"+serializer.validated_data['id'] +". We will looking forward to your case and acknowledge to you shortly.-By ADMIN",settings.EMAIL_HOST_USER,[serializer.validated_data['email']],fail_silently=False)
            
            serializer.save()
            return Response(serializer.data)
    
class Status(APIView):
    def put(self,request,id):
        my_status = FileCase.objects.get(id=id)
        serializer = FileCaseSerializer(instance = my_status , data = request.data) 
        if serializer.is_valid():
            serializer.save()
            return Response (serializer.data)
        else:
            return Response(serializer.errors , status = status.HTTP_404_BAD_REQUEST)
  
class FileCaseView(APIView):
    
    def get(self,request,accuser):
        output = get_object_or_404(FileCase,accuser=accuser)
        output_data={
            'id':output.id,
            'accuser' : output.accuser,
            'email' : output.email,
            'typeofcrime' : output.typeofcrime,
            'crimelocation': output.crimelocation,
            'timehappened' : output.timehappened,
            'datehappened' : output.datehappened,
            'victim' : output.victim,
            'suspect' : output.suspect,
            'crimestory' : output.crimestory,
            'status':output.status
        }
        return Response(output_data)

        
    
    
    
    

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

class MessageView(APIView):
    
    def get(self,request):
        output=Message.objects.all()
        serializer=MessageSerializer(output , many=True)
        return Response(serializer.data)
    
    def post(self,request):
        serializer=MessageSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):

            serializer.save()
            return Response(serializer.data)