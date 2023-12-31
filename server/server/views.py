import zipfile
import tempfile
import os
import shutil
import yaml
from io import BytesIO
from django.views import View
from django.core.files import File
from django.http import HttpResponse
from django.core.paginator import Paginator
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.parsers import FileUploadParser
from colorama import Fore, Style
from server.serializers import ProblemRetrieveSerializer, ProblemCreateSerializer
from .Problemformatvalidation import validate_zip_structure
from .models import Problem
from .problems_utils import *

class ProblemsAPIView(APIView):
    def get(self, request, *args, **kwargs):
        page_number = request.GET.get('page')
        items_per_page = 20
        problems = Problem.objects.select_related('user_id').all()
        
        # Use Django's paginator
        paginator = Paginator(problems, items_per_page)
        page = paginator.get_page(page_number)

        # Pass the current page's objects to the serializer
        serializer = ProblemRetrieveSerializer(page.object_list, many=True)
        
        # adding pagination metadata to the response

        return Response({
            'count': paginator.count,
            'next': page.next_page_number() if page.has_next() else None,
            'previous': page.previous_page_number() if page.has_previous() else None,
            'results': serializer.data
        }, status=status.HTTP_200_OK)
        # return Response(serializer.data, status=status.HTTP_200_OK)

class SearchProblemsView(APIView):
    serializer_class = ProblemRetrieveSerializer

    def get(self, request):
        search_query = request.query_params.get("query", "")
        # Stip " from the beginning and end  of the search query
        search_query = search_query.strip('"')
        queryset = Problem.objects.filter(problem_name__icontains=search_query)
        serialized_data = self.serializer_class(queryset, many=True).data
        return Response(serialized_data)
    
class FileUploadView(APIView):
    permission_classes = [IsAuthenticated]
    parser_class = (FileUploadParser,)

    def post(self, request, *args, **kwargs):
        if 'file' not in request.data:
            return Response({"error": "No 'file' field in the request data"}, status=status.HTTP_400_BAD_REQUEST)
        main_zip_file = request.data['file']
        uploaded_problems = []

        # Extract the main ZIP file to a temporary directory
        with tempfile.TemporaryDirectory() as tmpdirname:
            with zipfile.ZipFile(main_zip_file, 'r') as main_zip:
                main_zip.extractall(tmpdirname)

            # Loop through the sub-zipfiles in the directory and validate each sub-zipfile
            for root, _, files in os.walk(tmpdirname):
                for filename in files:
                    full_path = os.path.join(root, filename)
                    is_valid, message = validate_zip_structure(full_path)

                    if not is_valid:
                        main_zip.close()
                        return Response({"error": f"Problem File Structure Error: File {filename} failed validation: {message}"}, status=status.HTTP_400_BAD_REQUEST)
                for filename in files:
                    # retrieve name of the problem this problem zip file
                    with zipfile.ZipFile(os.path.join(root, filename), 'a') as zip_ref:
                        filenames = zip_ref.namelist()
                        if 'problem.yaml' in filenames:
                            with zip_ref.open('problem.yaml') as problem_yaml:
                                problem_name = yaml.load(
                                    problem_yaml, Loader=yaml.FullLoader)['name']
                                if 'problem_statement/problem.en.tex' in filenames:
                                    with zip_ref.open('problem_statement/problem.en.tex') as problem_tex:
                                        problem_data = problem_tex.read().decode('utf-8')

                                        # adding ini file to problem zip
                                        # Create BytesIO object for iniContent
                                        iniContent = create_domjudge_ini(problem_name)
                                        ini_file_name = f"{problem_name}.ini"
                                        ini_bytesio = BytesIO()
                                        ini_bytesio.write(iniContent.encode('utf-8'))
                                        zip_ref.writestr(ini_file_name, ini_bytesio.getvalue())

                                        zip_ref_using_open = open(os.path.join(root, filename), 'rb')
                                        data = {'problem_name': problem_name, 
                                                'problem_data': problem_data, 
                                                'user_id': request.user.id, 
                                                'file': File(zip_ref_using_open, name=filename)}
                                        file_serializer = ProblemCreateSerializer(
                                            data=data)
                                        
                                        if file_serializer.is_valid():
                                            zip_ref.close()
                                            file_serializer.save()
                                            uploaded_problems.append(problem_name)

                                        else:
                                            main_zip.close()
                                            zip_ref.close()
                                            for(key, value) in file_serializer.errors.items():
                                                print(Fore.RED + f"\'{key}\': " + str(value[0]) + Style.RESET_ALL)
                                            return Response(file_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
                                else:
                                    main_zip.close()
                                    zip_ref.close()
                                    return Response({"error": f"Problem File Structure Error: File {filename} failed validation: problem_statement/problem.en.tex not found"}, status=status.HTTP_400_BAD_REQUEST)
                        else:
                            main_zip.close()
                            zip_ref.close()
                            return Response({"error": f"Problem File Structure Error: File {filename} failed validation: problem.yaml not found"}, status=status.HTTP_400_BAD_REQUEST)
            main_zip.close()
        return Response({"success": f"Uploaded {len(uploaded_problems)} problems to ProblemHub!"}, status=status.HTTP_200_OK)


class DownloadFilesView(View):
    def get(self, request, *args, **kwargs):
        problem_ids = request.GET.get('problem_ids', '').split(',')
        problem_ids = [int(pid) for pid in problem_ids if pid.isdigit()]

        # Create a temporary directory for storing the zip file
        temp_directory = tempfile.mkdtemp()

        try:
            # Create a zip file with the selected problems
            zip_file_path = os.path.join(temp_directory, 'selected_problems.zip')
            with zipfile.ZipFile(zip_file_path, 'w', zipfile.ZIP_DEFLATED) as zipf:
                for problem_id in problem_ids:
                    # Get the problem instance based on the problem_id
                    problem = Problem.objects.get(pk=problem_id)

                    # Access the path of the file and add it to the zip
                    problem_file_path = problem.file.path
                    zipf.write(problem_file_path, os.path.basename(problem_file_path))

            # Create a response with the zip file
            with open(zip_file_path, 'rb') as zip_file:
                response = HttpResponse(zip_file.read(), content_type='application/zip')
                response['Content-Disposition'] = f'attachment; filename=selected_problems.zip'
                return response
        finally:
            # Clean up the temporary directory
            shutil.rmtree(temp_directory)