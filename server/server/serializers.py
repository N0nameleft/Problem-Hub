from rest_framework import serializers
from .models import Problem

class ProblemRetrieveSerializer(serializers.ModelSerializer):
    # get username from user_id
    uploaded_by = serializers.ReadOnlyField(source='user_id.username')
    class Meta:
        model = Problem
        fields = ("problem_id", "uploaded_by", "problem_name", "problem_data", "date_added")

class ProblemCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Problem
        fields = ("problem_name", "problem_data", "user_id", "file")