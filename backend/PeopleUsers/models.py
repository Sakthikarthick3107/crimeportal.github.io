from django.db import models
from django.contrib.auth.models import AbstractBaseUser
from . managers import *
# Create your models here.

class PeopleUser(AbstractBaseUser):
    name=models.CharField(max_length=30)
    dob=models.CharField(max_length=30)
    gender=models.CharField(max_length=20)
    email=models.EmailField(unique=True)
    address=models.CharField(max_length=200)
    mobile=models.CharField(max_length=20)
    district=models.CharField(max_length=20)
    aadhar=models.CharField(max_length=20)
    career=models.CharField(max_length=30)
    is_active=models.BooleanField(default=True)
    is_staff=models.BooleanField(default=False)
    is_superuser=models.BooleanField(default=False)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name' , 'mobile', 'aadhar' ]

    objects = PeopleUserManager()

    def __str__(self):
        return self.email
