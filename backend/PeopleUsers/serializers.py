from rest_framework import serializers
from . models import *


class PeopleUserSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = PeopleUser
        fields = '__all__'

