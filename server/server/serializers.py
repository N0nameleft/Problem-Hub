from rest_framework import serializers
from .models import Problem
from .models import UploadedFile

class ProblemSerializer(serializers.ModelSerializer):
    user_name = serializers.CharField(source='user.username', read_only=True)  # Get username from the related User model
    #problem_name = serializers.CharField(source='problem_name', read_only=True)  # Rename problem_name to problem_desc
    #creation_date = serializers.DateField(source='date_added', read_only=True)  # Rename date_added to creation_date
    # problem_data = serializers.models.CharField(source="problem_data", read_only = True)

    class Meta:
        model = Problem
        fields = ("user_name", 'problem_name',"problem_data","date_added")


class UploadedFileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UploadedFile
        fields = ['id', 'user', 'file', 'created_at']