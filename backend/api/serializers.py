from rest_framework import serializers
from . models import *

class FileCaseSerializer(serializers.ModelSerializer):
    class Meta:
        model=FileCase
        fields='__all__'