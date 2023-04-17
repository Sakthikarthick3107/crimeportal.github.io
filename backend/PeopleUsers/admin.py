from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
# Register your models here.

from .  models import  *

class PeopleUserAdmin(UserAdmin):
    model=PeopleUser
    list_display = ['email' , 'name' , 'is_active' , 'is_staff' ]
    list_filter = ['is_active' , 'is_staff' ]
    filter_horizontal=[]
    list_editable = ['is_active' , 'is_staff']
    search_fields=[ 'email' , 'name']
    ordering = ['email']
    fieldsets=(
        (None ,{'fields':('email','password')} ),
        ('Personal info',{ 'fields':('name','dob','gender','address','mobile','district','aadhar','career')}),
        ( 'Permissions' ,{ 'fields':('is_active','is_staff' ,'is_superuser') }  ),
        ('Important dates',{'fields':['last_login']}),
        )
    add_fieldsets = (
        (None , {
            'classes' : ('wide,'),
            'fields' :('name', 'email', 'password1','password2' ),
        }),
    )
    
    

admin.site.register(PeopleUser,PeopleUserAdmin)
