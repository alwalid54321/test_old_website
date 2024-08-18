from django.urls import path
# from django.contrib import admin
from . import views
from .views import *

urlpatterns = [
    path("", views.i_did, name="index"),
 
] 