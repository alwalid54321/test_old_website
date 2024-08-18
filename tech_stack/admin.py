from django.contrib import admin
from .models import *
# Register your models here.
0


# class StackAdmin(admin.ModelAdmin):
#     # inlines = [CommentAdmin]
#     search_fields = ( 'name')
#     list_display = ['name','image', 'link']



admin.site.register(techstack)


 
admin.site.site_header= 'Boss area '
admin.site.site_title= 'Boss area only'
admin.site.index_title= 'Boss area only'

