"""backend_apis URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter

from users.views import (
    ContactMessageListCreateView, source_file_upload,
    target_file_upload, perform_steps, get_download_link)


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/auth/', include("users.urls")),
    path('api/message', ContactMessageListCreateView.as_view()),
    path('api/source/upload', source_file_upload),
    path('api/target/upload', target_file_upload),
    path('api/target/upload', target_file_upload),
    path('api/make-step/<int:step>', perform_steps),
    path('download', get_download_link)
]
