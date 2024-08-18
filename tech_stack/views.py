from django.shortcuts import render
from .models import *
from django.utils import timezone

# Create your views here.

# views.py



def tech_stack(request):

  stack = techstack.objects.filter().order_by('?')
  
  return render(request, 'techstack.html', {'stack': stack})