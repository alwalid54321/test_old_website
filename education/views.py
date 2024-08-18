from django.shortcuts import render
from django.utils import timezone
from .models import *

# Create your views here.
def education(request):
  self = self_edu.objects.filter().order_by('?')
  onl = onl_edu.objects.filter().order_by('?')
  context = {"self": self, "onl": onl}
  return render(request, "education.html", context)