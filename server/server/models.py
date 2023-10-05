from django.db import models
from django.conf import settings

class Problem(models.Model):
    problem_id = models.AutoField(primary_key=True)
    problem_name = models.CharField(max_length=200)
    problem_data = models.CharField(max_length=10000)
    date_added = models.DateField()
    path_to_file = models.CharField(max_length=200)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)

    def __str__(self):
        return self.problem_name

class User(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=40)
    username = models.CharField(max_length=40, unique=True)
    email = models.EmailField(max_length=40, unique=True)
    password = models.CharField(max_length=128)

    def __str__(self):
        return self.username

class UploadedFile(models.Model):
    file = models.FileField(upload_to='uploaded_files/')
    uploaded_at = models.DateTimeField(auto_now_add=True)
    
    
    