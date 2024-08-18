from django.db import models


# Create your models here.

class techstack(models.Model):
    name = models.CharField(max_length=200, blank=True, null=True, unique=True)
    description = models.TextField(blank=True, null=True)
    image = models.ImageField(upload_to='tech_stack_images/', blank=True, null=True)
    link = models.URLField(blank=True, null=True)
    def __str__(self):
        return self.name

# class project(models.Model):
#     name = models.CharField(max_length=200)
#     description = models.TextField()
#     link = models.URLField()
#     stack = models.ManyToManyField(tech_stack)
#     def __str__(self):
#         return self.name