from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from problems import views as problem_views
from .views import UserView, FactView

router = routers.DefaultRouter()
router.register(r'users', problem_views.UserViewSet)
router.register(r'groups', problem_views.GroupViewSet)
router.register(r'User', UserView, basename = 'User')
router.register(r'Fact', FactView, basename = 'Fact')

urlpatterns = [
    path('admin/', admin.site.urls),  # Adding the admin site URLs
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('api/', include(router.urls)),
]
