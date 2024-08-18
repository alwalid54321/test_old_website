from django.shortcuts import render
from django.utils import timezone
from .models import *
import random
# Create your views here.

def i_did(request):
    i_done = ido.objects.filter(done_at__lte=timezone.now()).order_by('?')
    context = {"i_done": i_done}
    return render(request, "index.html", context)


def random_quote(request):
    random_quote = Quote.objects.order_by('?').first()  # Select a random quote
    return render(request, 'index.html', {'random_quote': random_quote})
  

# def research_view(request):
#   # view logic
#   return render(request, 'research.html')

  
