from django.contrib import admin

# Register your models here.

from .  models import  *

@admin.register(PeopleUser)
class PeopleUserModel(admin.ModelAdmin):
    list_display=[ 'name' , 'gender' , 'career' , 'district']