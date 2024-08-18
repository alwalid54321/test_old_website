from django.db import models

# Create your models here.


class ido(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField(max_length=2000)
    done_at = models.DateTimeField(null=True, blank=True,)
    def __str__(self):
        return self.title


class Quote(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField(max_length=250)
    def __str__(self):
        return self.title
