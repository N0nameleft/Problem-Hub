from rest_framework import serializers
from .models import User
from .models import Problem

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('user_id', 'name', 'username', 'email', 'password')

class ProblemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Problem
        fields = ('problem_id', 'problem_name', 'problem_data', 'date_added', 'link_to_file', 'user_id')