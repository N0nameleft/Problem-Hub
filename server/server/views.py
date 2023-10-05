from django.shortcuts import render
from rest_framework import viewsets
from rest_framework import permissions
from server.serializers import ProblemSerializer, UserSerializer
from .models import User, Problem
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken
from django.http import JsonResponse, FileResponse
from django.views.decorators.csrf import csrf_exempt
from .models import UploadedFile
from .Problemformatvalidation import validate_zip_structure

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

def upload_file(request):
    if request.method == 'POST':
        uploaded_file = request.FILES['file']

        # Validate the ZIP contents before saving
        if not validate_zip_structure(uploaded_file):  # Assuming validate_zip_contents returns True if valid, False otherwise
            return JsonResponse({'message': 'Invalid ZIP contents'}, status=400)  # Return a 400 Bad Request status

        file_instance = UploadedFile(file=uploaded_file)
        file_instance.save()
        return JsonResponse({'message': 'File uploaded successfully'})

def download_file(request, file_id):
    file_instance = UploadedFile.objects.get(id=file_id)
    return FileResponse(file_instance.file)