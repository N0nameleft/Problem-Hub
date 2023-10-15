from django.contrib import admin
from .models import Problem

class ProblemAdmin(admin.ModelAdmin):
    list_display = ('problem_id', 'problem_name', 'problem_data', 'date_added', 'user_id', 'file')  # Customize the fields to display in the admin list

admin.site.register(Problem, ProblemAdmin)
