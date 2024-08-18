from django.db import models

# Create your models here.

class self_edu(models.Model):
    name = models.CharField(max_length=200, blank=True, null=True)
    title = models.CharField(max_length=200, blank=True, null=True)
    description = models.TextField(max_length=2000, blank=True, null=True,)
    date = models.DateField(blank=True, null=True,default='2020-01-01')
    def __str__(self):
        return self.name
    
class onl_edu(models.Model):
    name = models.CharField(max_length=200, blank=True, null=True)
    image = models.ImageField(upload_to='images/', blank=True, null=True)
    link = models.URLField(max_length=200,blank=True, null=True)
    def __str__(self):
        return self.name