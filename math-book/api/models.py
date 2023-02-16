from django.db import models

# Create your models here.
class Question (models.Model):
    marker = models.CharField(max_length=55)
    answer = models.CharField(max_length=33)
    date = models.DateField()