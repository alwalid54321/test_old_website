from django.shortcuts import render
from .models import *
from django.utils import timezone
# Create your views here.

# def project(request):
#     return render(request, "/templates/project/project.html",)

def projects(request):
    web = web_project.objects.filter(done_at__lte=timezone.now()).order_by('-done_at')
    main = main_project.objects.filter(done_at__lte=timezone.now()).order_by('-done_at')
    context = {"web": web, "main": main}
    return render(request, "project/project.html", context)
# def project_main(request):
#     main = main_project.objects.filter(done_at__lte=timezone.now()).order_by('-done_at')
#     context = {"main": main}
#     return render(request, "project/project_main.html", context)
# def project_web(request):
#     web = web_project.objects.filter(done_at__lte=timezone.now()).order_by('-done_at')
#     context = {"web": web}
#     return render(request, "project/project_web.html", context)

# def project_web(request):
#     web = web_project.objects.filter(done_at__lte=timezone.now()).order_by('-done_at')
#     return render(request, "project/project.html", {"web": web})