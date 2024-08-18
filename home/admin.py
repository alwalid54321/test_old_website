from django.contrib import admin
from django.urls import path
from .models import *
# Register your models here.

admin.site.register(ido)
admin.site.register(Quote)




admin.site.site_header= 'Boss area '
admin.site.site_title= 'Boss area only'
admin.site.index_title= 'Boss area only'