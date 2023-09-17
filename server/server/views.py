from django.shortcuts import render
from rest_framework import viewsets
from server.serializers import FactSerializer
from server.serializers import UserSerializer
from .models import User, Fact

# Create your views here.

class UserView(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()

class FactView(viewsets.ModelViewSet):
    serializer_class = FactSerializer
    queryset = Fact.objects.all()