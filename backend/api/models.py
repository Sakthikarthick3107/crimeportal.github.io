from django.db import models
from django.contrib.auth.models import User
from django.utils.html import mark_safe
from django.utils import timezone
#from django.contrib.auth.models import AbstractBaseUser
# Create your models here.



class FileCase(models.Model):
    accuser=models.CharField(max_length=30,null=True)
    email=models.EmailField(max_length=30,null=True)
    typeofcrime=models.CharField(max_length=100)
    crimelocation=models.CharField(max_length=20)
    timehappened=models.CharField(max_length=10)
    datehappened=models.CharField(max_length=50)
    victim=models.CharField(max_length=200)
    suspect=models.CharField(max_length=20)
    crimestory=models.TextField()
    created=models.DateTimeField(auto_now_add=True)
    status=models.BooleanField(default=False)
    
    class Meta:
        ordering=['-created']

class CreatePost(models.Model):
    title = models.CharField(max_length=50)
    description=models.TextField()
    image=models.ImageField(upload_to='post_images')
    created=models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering=['-created']

    def __str__(self):
        return self.title
    

    def img_preview(self):
        return mark_safe ('<img src= "{url}" width = "300" /> '.format (
            url=self.image.url
        ) )
    
class Message(models.Model):
    commentor = models.CharField(max_length=30)
    message = models.TextField()
    created = models.DateTimeField(auto_now_add=True)
    class Meta:
        ordering = ['-created']
