from django.contrib import admin
from .models import *
# Register your models here.

@admin.register(FileCase)
class FileCaseModel(admin.ModelAdmin):
    list_display=[ 'accuser' ,'email' ,'typeofcrime']

class CreatePostAdmin(admin.ModelAdmin):
    readonly_fields = ['img_preview']
admin.site.register(CreatePost , CreatePostAdmin)

@admin.register(Message)
class MessageModel(admin.ModelAdmin):
    list_display=[ 'commentor' , 'message']