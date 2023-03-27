from django.db import models
#from django.contrib.auth.models import AbstractBaseUser
# Create your models here.
class FileCase(models.Model):
    typeofcrime=models.CharField(max_length=100)
    crimelocation=models.CharField(max_length=20)
    timehappened=models.CharField(max_length=10)
    datehappened=models.CharField(unique=True , max_length=50)
    victim=models.CharField(max_length=200)
    suspect=models.CharField(max_length=20)
    crimestory=models.TextField()
    #posted=models.DateTimeField(auto_now=True|timesince)
    created=models.DateTimeField(auto_now_add=True)
    
    class Meta:
        ordering=['-created']
    
    