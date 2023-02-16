from .serializers import QuestionSerializer
from .models import Question
from rest_framework import viewsets

from django.shortcuts import render

# Create your views here.
class QuestionViewset(viewsets.ModelViewSet):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer