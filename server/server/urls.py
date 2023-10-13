from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
# from problems import views as problem_views
from .views import FileUploadView, DownloadFilesView, ProblemsAPIView
from rest_framework_simplejwt import views as jwt_views

router = routers.DefaultRouter()

urlpatterns = [
    path('admin/', admin.site.urls),  # Adding the admin site URLs
    path('', include(router.urls)),
    path('api/', include(router.urls)),
    path('api/token/', jwt_views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
    path('api/problems/', ProblemsAPIView.as_view(), name='problems-list'),
    path('upload/', FileUploadView.as_view(), name='file-upload'),
    path('download/', DownloadFilesView.as_view(), name='download_files'),
]
