from django.db import models
from django.contrib.auth.models import User 
from django.conf import settings

def get_default_user():
    try:
        return User.objects.get(username='ph-admin')  # Replace with the actual superuser username
    except User.DoesNotExist:
        return None  # Return None if superuser is not found

class Problem(models.Model):
    problem_id = models.AutoField(primary_key=True)
    problem_name = models.CharField(max_length=200)
    problem_data = models.CharField(max_length=10000)
    date_added = models.DateField()
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, null=True, blank=True, default=get_default_user)
    uploaded_file = models.ForeignKey('UploadedFile', on_delete=models.SET_NULL, null=True, blank=True, related_name='problems')

    def __str__(self):
        return self.problem_name

class UploadedFile(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, null=True, blank=True, default=get_default_user)
    file = models.FileField(upload_to='.')  # Adjust 'upload_to' as needed
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.file.name
    