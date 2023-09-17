from rest_framework import serializers
from .models import User
from .models import Fact

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('user_id', 'name', 'username', 'email', 'password')

class FactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Fact
        fields = ('problem_id', 'problem_name', 'problem_data', 'date_added', 'link_to_file', 'user_id')