from django.contrib import admin
from .models import Fact
from .models import User

class ServerAdmin(admin.ModelAdmin):
    list_display = ('problem_id', 'problem_name')

# Register your models here.

admin.site.register(Fact, ServerAdmin)

class ServerAdmin(admin.ModelAdmin):
    list_display = ('user_id', 'name')

# Register your models here.

admin.site.register(User, ServerAdmin)