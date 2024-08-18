from django.db import models

# Create your models here.

class main_project(models.Model):
    name = models.CharField(max_length=70,)
    description = models.TextField(blank=True,)
    image = models.ImageField(upload_to="project_images/", blank=True, null=True)
    done_at = models.DateField(blank=True, null=True,)
    demo = models.URLField(blank=True,)
    link = models.URLField(blank=True,)
    status = models.CharField(max_length=10, blank=True, null=True,)
    def __str__(self):
        return self.name
    class Meta:
        ordering = ["done_at"]
class project_status(models.Model):
        project = models.ForeignKey(main_project, on_delete=models.CASCADE,)
        PENDING = "pending"
        IN_PROGRESS = "in_progress"
        COMPLETED = "completed"
        def __str__(self):
            return self.name

class web_project(models.Model):
    name = models.CharField(max_length=70,)
    description = models.TextField(blank=True,)
    image = models.ImageField(upload_to="project_images/", blank=True, null=True,)
    done_at = models.DateField(blank=True, null=True,)
    demo = models.URLField(blank=True,)
    link = models.URLField(blank=True,)
    status = models.CharField(max_length=10, null=True,)
    def __str__(self):
        return self.name
    class Meta:
        ordering = ["name"]
    class Meta:
        ordering = ["done_at"]    