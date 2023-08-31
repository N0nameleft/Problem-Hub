from django.db import models
from django.conf import settings

class Fact(models.Model):
    problem_name = models.CharField(max_length=200)
    problem_data = models.CharField(max_length=10000)
    problem_id = models.AutoField(primary_key=True)
    date_added = models.DateField()
    link_to_file = models.CharField(max_length=200)
    user_id = UID

