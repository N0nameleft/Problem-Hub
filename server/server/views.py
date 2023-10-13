import io
import zipfile
import tempfile
import os
import yaml
from django.http import HttpResponse
from django.views import View
from django.shortcuts import get_object_or_404, render
from django.views.decorators.csrf import csrf_exempt
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.parsers import FileUploadParser
from server.serializers import ProblemRetrieveSerializer, ProblemCreateSerializer
from .Problemformatvalidation import validate_zip_structure
from .models import Problem

class ProblemsAPIView(APIView):
    def get(self, request, *args, **kwargs):
        problems = Problem.objects.select_related('user').all()  # Optimize by fetching related user in the same query
        serializer = ProblemRetrieveSerializer(problems, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

class FileUploadView(APIView):
    permission_classes = [IsAuthenticated]
    parser_class = (FileUploadParser,)

    def post(self, request, *args, **kwargs):
        if 'file' not in request.data:
            return Response({"error": "No 'file' field in the request data"}, status=status.HTTP_400_BAD_REQUEST)
        main_zip_file = request.data['file']

        # Extract the main ZIP file to a temporary directory
        with tempfile.TemporaryDirectory() as tmpdirname:
            with zipfile.ZipFile(main_zip_file, 'r') as main_zip:
                main_zip.extractall(tmpdirname)

            # Loop through the files in the directory and validate each ZIP
            for root, _, files in os.walk(tmpdirname):
                for filename in files:
                    full_path = os.path.join(root, filename)
                    is_valid, message = validate_zip_structure(full_path)
                    
                    if not is_valid:
                        return Response({"error": f"Problem File Structure Error: File {filename} failed validation: {message}"}, status=status.HTTP_400_BAD_REQUEST)
                for filename in files:
                    # get the name of the problem from problem.yaml inside of the filename zip file
                    with zipfile.ZipFile(os.path.join(root, filename), 'r') as zip_ref:
                        filenames = zip_ref.namelist()
                        if 'problem.yaml' in filenames:
                            with zip_ref.open('problem.yaml') as problem_yaml:
                                # read the name field in the yaml
                                problem_name = yaml.load(problem_yaml, Loader=yaml.FullLoader)['name']

                                # get problem data string from problem_statement/problem.en.tex file
                                if 'problem_statement/problem.en.tex' in filenames:
                                    with zip_ref.open('problem_statement/problem.en.tex') as problem_tex:
                                        problem_data = problem_tex.read()
                                        
                                        # save the zipfile to file storage
                                        # !NEEDS TO BE FIXED
                                        data = {'problem_name': problem_name, 'problem_data': problem_data, 'user_id': request.user.id, 'file': open(os.path.join(root, filename), 'rb')}
                                        file_serializer = ProblemCreateSerializer(data=data)
                                        if file_serializer.is_valid():
                                            print("YESSS")
                                            file_serializer.save()
                                        else:
                                            print("NOOOO")
                                            return Response(file_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
                        else:
                            return Response({"error": f"Problem File Structure Error: File {filename} failed validation: problem.yaml not found"}, status=status.HTTP_400_BAD_REQUEST)

        return Response({"success": f"File {main_zip_file} uploaded! Problems have been created!"}, status=status.HTTP_200_OK)

        # Unzipping the file and validing the structure of each zip file within the zip file
        # if file.name.endswith('.zip'):
        #     if validate_zip_structure(file):
        #         print("Valid zip file!")
        #         return Response(status=status.HTTP_200_OK)
        #     else:
        #         return Response(status=status.HTTP_400_BAD_REQUEST)

        # data = {'user_id': request.user.id, 'file': request.data['file']} 
        # file_serializer = ProblemCreateSerializer(data=data, many=True)

        # if file_serializer.is_valid():
        #     file_serializer.save()
        #     return Response(file_serializer.data, status=status.HTTP_201_CREATED)
        # else:
        #     return Response(file_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

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
