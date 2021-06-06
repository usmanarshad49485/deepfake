from django.contrib.auth.models import User
from django.http import JsonResponse, HttpResponse
from django.conf import settings
from django.core.mail import send_mail
from rest_framework import generics, status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework_simplejwt.views import TokenObtainPairView

from users.models import ContactMessage
from users.serializers import (CustomTokenObtainPairSerializer, SignupSerializer, UserSerializer,
                               ContactMessageSerializer)


class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer


class SignupView(generics.GenericAPIView):
    serializer_class = SignupSerializer
    queryset = User.objects.all()

    def post(self, request, *args, **kwargs):
        serializer = SignupSerializer(data=request.data)
        if not serializer.is_valid():
            return JsonResponse({'errors': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
        else:
            user = serializer.save()
            user.set_password(user.password)
            user.is_active = False
            user.save()
            return HttpResponse(status=status.HTTP_201_CREATED)


class ListUsers(generics.ListAPIView):
    serializer_class = UserSerializer

    def get_queryset(self):
        if 'username' in self.request.GET:
            return User.objects.filter(username=self.request.GET['username'])
        else:
            return User.objects.all()


@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def change_password(request):
    password = request.data["password"]
    user = request.user

    user.set_password(password)
    user.save()

    return HttpResponse(status=status.HTTP_200_OK)


def email_now(email, token):
    message = f"""Click on the link below to reset your password. 
{settings.FRONT_END_APP}/change-password?token={token}"""

    send_mail("Reset Password for Smart Scaling App", message, settings.EMAIL_HOST_USER, [email], fail_silently=False)


class ContactMessageListCreateView(generics.ListCreateAPIView):
    queryset = ContactMessage.objects.all()
    serializer_class = ContactMessageSerializer


def write_file(file, name):
    with open(f"uploads/{name}", "wb+") as destination:
        for chunk in file.chunks():
            destination.write(chunk)


@api_view(['POST'])
def source_file_upload(request):
    if not "file" in request.data:
        return Response({"error": "file not found"})

    file = request.data["file"]
    write_file(file, f"source_file.{file.name.split('.')[1]}")
    return Response("File uploaded.")


@api_view(['POST'])
def target_file_upload(request):
    if not "file" in request.data:
        return Response({"error": "file not found"})

    file = request.data["file"]
    write_file(file, f"target_file.{file.name.split('.')[1]}")
    return Response("File uploaded.")
