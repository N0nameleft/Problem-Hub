from django.contrib import admin
from .models import Problem
from .models import User

class ServerAdmin(admin.ModelAdmin):
    list_display = ('problem_id', 'problem_name')

admin.site.register(Problem, ServerAdmin)

class ServerAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')

admin.site.register(User, ServerAdmin)