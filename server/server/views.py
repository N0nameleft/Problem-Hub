import io
import zipfile
from django.http import HttpResponse
from django.views import View
from django.shortcuts import get_object_or_404, render
from django.views.decorators.csrf import csrf_exempt
from rest_framework import viewsets, permissions, status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.parsers import FileUploadParser
from server.serializers import ProblemSerializer, UploadedFileSerializer
from .Problemformatvalidation import validate_zip_structure
from .models import Problem, UploadedFile
from django.core.files.uploadedfile import InMemoryUploadedFile
import tempfile
import os

class ProblemView(viewsets.ModelViewSet):
    serializer_class = ProblemSerializer
    queryset = Problem.objects.all()
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

class ProblemsAPIView(APIView):
    def get(self, request, *args, **kwargs):
        problems = Problem.objects.select_related('user').all()  # Optimize by fetching related user in the same query
        serializer = ProblemSerializer(problems, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
class MultiFileUploadView(APIView):
    permission_classes = [IsAuthenticated]
    parser_class = (FileUploadParser,)

    def post(self, request, *args, **kwargs):
        main_zip_file = request.data['file']

        # Extract the main ZIP file to a temporary directory
        with tempfile.TemporaryDirectory() as tmpdirname:
            with zipfile.ZipFile(main_zip_file, 'r') as main_zip:
                main_zip.extractall(tmpdirname)
            
            # Loop through the files in the directory and validate each ZIP
            for root, dirs, files in os.walk(tmpdirname):
                for filename in files:
                    if filename.endswith('.zip'):
                        full_path = os.path.join(root, filename)
                        is_valid, message = validate_zip_structure(full_path)
                        if not is_valid:
                            return Response({"error": f"File {filename} failed validation: {message}"}, status=status.HTTP_400_BAD_REQUEST)

                        # If valid, you can further process this file: save it, associate metadata, etc.

        return Response({"message": "All files uploaded and validated successfully!"}, status=status.HTTP_201_CREATED)


class FileUploadView(APIView):
    permission_classes = [IsAuthenticated]
    parser_class = (FileUploadParser,)

    def post(self, request, *args, **kwargs):
        data = {'user': request.user.id, 'file': request.data['file']}
        file_serializer = UploadedFileSerializer(data=data)

        if file_serializer.is_valid():
            uploaded_file = file_serializer.validated_data['file']

            # Handle both InMemoryUploadedFile and TemporaryUploadedFile
            if isinstance(uploaded_file, InMemoryUploadedFile):
                # Write the in-memory file to a temporary file
                temp_file = tempfile.NamedTemporaryFile(delete=False)
                for chunk in uploaded_file.chunks():
                    temp_file.write(chunk)
                temp_file.close()
                uploaded_file_path = temp_file.name
            else:
                # It's already a file on disk
                uploaded_file_path = uploaded_file.temporary_file_path()

            # Validate the ZIP structure of the uploaded problem
            is_valid, message = validate_zip_structure(uploaded_file_path)
            if not is_valid:
                return Response({"error": message}, status=status.HTTP_400_BAD_REQUEST)

            # Save the file if it passed the validation
            file_serializer.save()
            return Response(file_serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(file_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
class DownloadFilesView(View):
    def post(self, request):
        # Get the selected file IDs from the request data
        selected_file_ids = request.data.get('fileIds', [])
        
        # Query the database for the selected files
        selected_files = UploadedFile.objects.filter(id__in=selected_file_ids)
        
        # Create an in-memory ZIP file
        buffer = io.BytesIO()
        with zipfile.ZipFile(buffer, 'w') as zipf:
            for file in selected_files:
                # Add each selected file to the ZIP archive
                file_path = file.file.path
                file_name = file.file.name
                zipf.write(file_path, file_name)
        
        # Rewind the buffer to the beginning
        buffer.seek(0)
        
        # Create an HTTP response with the ZIP file
        response = HttpResponse(buffer.read(), content_type='application/zip')
        response['Content-Disposition'] = 'attachment; filename=downloaded_files.zip'
        return response

# def upload_file(request):
#     if request.method == 'POST':
#         uploaded_file = request.FILES['file']

#         # Validate the ZIP contents before saving
#         if not validate_zip_structure(uploaded_file):  # Assuming validate_zip_contents returns True if valid, False otherwise
#             return JsonResponse({'message': 'Invalid ZIP contents'}, status=400)  # Return a 400 Bad Request status

#         file_instance = UploadedFile(file=uploaded_file)
#         file_instance.save()
#         return JsonResponse({'message': 'File uploaded successfully'})

# def download_file(request, file_id):
#     file_instance = UploadedFile.objects.get(id=file_id)
#     return FileResponse(file_instance.file)