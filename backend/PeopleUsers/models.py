from django.db import models

# Create your models here.

class PeopleUser(models.Model):
    name=models.CharField(max_length=30)
    dob=models.CharField(max_length=30)
    gender=models.CharField(max_length=20)
    email=models.EmailField(max_length=40)
    address=models.CharField(max_length=200)
    mobile=models.CharField(max_length=20)
    district=models.CharField(max_length=20)
    aadhar=models.CharField(max_length=20)
    career=models.CharField(max_length=30)
    created = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering=['-created']

    def __str__(self):
        return self.email
