from django.shortcuts import render
from rest_framework import viewsets
from server.serializers import ProblemSerializer, UserSerializer
from .models import User, Problem

# Create your views here.

class UserView(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()

class ProblemView(viewsets.ModelViewSet):
    serializer_class = ProblemSerializer
    queryset = Problem.objects.all()