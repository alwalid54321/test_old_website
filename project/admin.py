from django.contrib import admin
from .models import *

# Register your models here.

admin.site.register(main_project)
admin.site.register(web_project)


admin.site.site_header= 'Boss area '
admin.site.site_title= 'Boss area only'
admin.site.index_title= 'Boss area only'