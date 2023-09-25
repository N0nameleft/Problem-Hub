from django.db import models
from django.conf import settings

class Problem(models.Model):
    problem_id = models.AutoField(primary_key=True)
    problem_name = models.CharField(max_length=200)
    problem_data = models.CharField(max_length=10000)
    date_added = models.DateField()
    link_to_file = models.CharField(max_length=200)
    user_id = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)

    def __str__(self):
        return self.problem_name

class User(models.Model):
    user_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=40)
    username = models.CharField(max_length=40, unique=True)
    email = models.CharField(max_length=40, unique=True)
    password = models.CharField(max_length=40)

    def __str__(self):
        return self.username