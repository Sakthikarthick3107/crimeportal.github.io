from rest_framework import serializers
from . models import *
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer , TokenRefreshSerializer
from django.contrib.auth import authenticate , get_user_model
from django.contrib.auth.validators import UnicodeUsernameValidator

class PeopleUserSerializer(serializers.ModelSerializer):
    password = serializers.CharField( write_only = True )

    def create(self,validated_data):
        peopleuser = PeopleUser.objects.create(
            name=validated_data['name'],
            dob=validated_data['dob'],
            gender=validated_data['gender'],
            email=validated_data['email'],
            address=validated_data['address'],
            mobile=validated_data['mobile'],
            district=validated_data['district'],
            aadhar=validated_data['aadhar'],
            career=validated_data['career'],
        )
        peopleuser.set_password(validated_data['password'])
        peopleuser.save()
        return peopleuser
    class Meta:
        model = PeopleUser
        fields = ['name','dob','gender','email','password','address','mobile','district','aadhar','career']

PeopleUser = get_user_model()

class PeopleUserTokenObtainPairSerializer(TokenObtainPairSerializer):
    
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Customize token claims
        token['email'] = user.email
        
        return token

    def validate(self, attrs):
        email = attrs.get('email')
        password = attrs.get('password')

        # Check that both email and password are present
        if email and password:
            try:
                user=PeopleUser.objects.get(email=email)
            except PeopleUser.DoesNotExist:
                pass
            else:
                if user.check_password(password):
                    data= super().validate(attrs)
                    data['email'] = user.email
        
        raise serializers.ValidationError('Invalid email or password')
    # @classmethod
    # def get_token(cls,user):
    #     token = super().get_token(user)

    #     token['email' ] = user.email
    #     return token

    # def validate(self,attrs):
    #     data = super().validate(attrs)
    #     user=PeopleUser.objects.get(email=data['email'])

    #     if not user.check_password(data['password']):
    #         raise ValidationError('Invalid email or Password')

    #     data['user_id'] = user.pk
    #     return data


    