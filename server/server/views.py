from django.shortcuts import render
from rest_framework import viewsets
from rest_framework import permissions
from server.serializers import ProblemSerializer, UserSerializer
from .models import User, Problem
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken

# Create your views here.

class UserView(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all().order_by('id')
    permission_classes = [permissions.IsAuthenticated]

class ProblemView(viewsets.ModelViewSet):
    serializer_class = ProblemSerializer
    queryset = Problem.objects.all()
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

class ProblemsAPIView(APIView):
    def get(self, request, *args, **kwargs):
        problems = Problem.objects.select_related('user').all()  # Optimize by fetching related user in the same query
        serializer = ProblemSerializer(problems, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
class ProblemsByIdsAPIView(APIView):
    def get(self, request, ids, *args, **kwargs):
        # Split the passed IDs using "+" as a delimiter
        ids_list = ids.split("+")
        problems = Problem.objects.filter(problem_id__in=ids_list).select_related('user')
        
        # Serializing the fetched problems
        serializer = ProblemSerializer(problems, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
