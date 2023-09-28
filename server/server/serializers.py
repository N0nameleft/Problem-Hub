from rest_framework import serializers
from .models import User
from .models import Problem

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'name', 'username', 'email', 'password')

class ProblemSerializer(serializers.ModelSerializer):
    user_name = serializers.CharField(source='user.username', read_only=True)  # Get username from the related User model
    problem_desc = serializers.CharField(source='problem_name', read_only=True)  # Rename problem_name to problem_desc
    creation_date = serializers.DateField(source='date_added', read_only=True)  # Rename date_added to creation_date
    class Meta:
        model = Problem
        # fields = ('problem_id', 'problem_name', 'problem_data', 'date_added', 'link_to_file', 'user_id')
        fields = '__all__'

