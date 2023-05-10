from rest_framework import serializers
from django.contrib.auth.models import User
from . models import *

class CreatePostSerializer(serializers.ModelSerializer):
    class Meta:
        model = CreatePost
        fields = '__all__'

class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField( write_only = True )

    def create(self,validated_data):
        user = User.objects.create(
            username=validated_data['username'],
            email=validated_data['email'],
            
        )
        user.set_password(validated_data['password'])
        user.save()
        return user
    class Meta:
        model = User
        fields = ['username','email' , 'password']

class FileCaseSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = FileCase
        fields = '__all__'
        

class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        fields = '__all__'
