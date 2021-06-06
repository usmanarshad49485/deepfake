from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView

from users.views import CustomTokenObtainPairView, SignupView, ListUsers, change_password


urlpatterns = [
    path('', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh', TokenRefreshView.as_view(), name='token_refresh'),
    path('signup', SignupView.as_view()),
    path('change-password', change_password),
    path('users', ListUsers.as_view()),
]
