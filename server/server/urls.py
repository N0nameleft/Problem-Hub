from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
# from problems import views as problem_views
from .views import UserView, ProblemView
from rest_framework_simplejwt import views as jwt_views
from .views import ProblemsAPIView, ProblemsByIdsAPIView

router = routers.DefaultRouter()
# router.register(r'users', problem_views.UserViewSet)
# router.register(r'groups', problem_views.GroupViewSet)
router.register(r'User', UserView, basename = 'User')
router.register(r'Problem', ProblemView, basename = 'Problem')

urlpatterns = [
    path('admin/', admin.site.urls),  # Adding the admin site URLs
    path('', include(router.urls)),
    # path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('api/token/', jwt_views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
    path('api/', include(router.urls)),
    # path('signin/', include(router.urls)),
    # path('upload/', include(router.urls)),
    path('api/problems/', ProblemsAPIView.as_view(), name='problems-list'),
    path('api/problems/<ids>/', ProblemsByIdsAPIView.as_view(), name='problems-list-by-ids'),
]




