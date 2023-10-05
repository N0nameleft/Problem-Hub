from django.contrib import admin
from .models import Problem
from .models import UploadedFile  

class ProblemAdmin(admin.ModelAdmin):
    list_display = ('problem_id', 'problem_name', 'problem_data', 'date_added', 'user', 'uploaded_file')  # Customize the fields to display in the admin list

class UploadedFileAdmin(admin.ModelAdmin):
    list_display = ('id', 'user', 'file', 'created_at')  # Customize the fields to display in the admin list


admin.site.register(Problem, ProblemAdmin)
admin.site.register(UploadedFile, UploadedFileAdmin)
