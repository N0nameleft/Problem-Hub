from django.shortcuts import render
from rest_framework import viewsets
from .serializers import ServerSerializer
from .models import User, Fact

# Create your views here.

class ServerView(viewsets.ModelViewSet):
    serializer_class = ServerSerializer
    queryset = User.objects.all()

class ServerView(viewsets.ModelViewSet):
    serializer_class = ServerSerializer
    queryset = Fact.objects.all()