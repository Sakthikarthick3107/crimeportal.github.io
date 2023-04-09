from django.shortcuts import render
from rest_framework.views import APIView
from . models import *
from . serializers import *
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.core.mail import send_mail
from django.conf import settings
from django.http import JsonResponse

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

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
@api_view(['GET'])
def getRoutes(request):
    routes=[
        '/sample /token',
        '/sample/token/refresh',
    ]
    return Response(routes)

    
class FileCaseView(APIView):
    def get(self,request):
        output=[
            {
                'typeofcrime':output.typeofcrime,
                'crimelocation':output.crimelocation,
                'timehappened':output.timehappened,
                'datehappened':output.datehappened,
                'victim':output.victim,
                'suspect':output.suspect,
                'crimestory':output.crimestory,
            } for output in FileCase.objects.all()
        ]
        return Response(output)

    def post(self,request):
        serializer=FileCaseSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            send_mail(serializer.validated_data['typeofcrime'],"You are filed a case under the category mentioned above. We will looking forward to your case and acknowledge to you shortly.-By *****",settings.EMAIL_HOST_USER,['sakthikarthick3107@gmail.com'],fail_silently=False)
            serializer.save()
            return Response(serializer.data)
               