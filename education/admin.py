from django.contrib import admin

# Register your models here.
from django.contrib import admin
from .models import *
# Register your models here.


# class eduAdmin(admin.ModelAdmin):
#     # inlines = [CommentAdmin]
#     search_fields = ( 'name')
#     list_display = ['name','image', 'link']



admin.site.register(self_edu)
admin.site.register(onl_edu)



admin.site.site_header= 'Boss area '
admin.site.site_title= 'Boss area only'
admin.site.index_title= 'Boss area only'