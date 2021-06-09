import subprocess
import os

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


UPLOAD_DIRECTORY = "dip"


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
    with open(f"{UPLOAD_DIRECTORY}/workspace/{name}", "wb+") as destination:
        for chunk in file.chunks():
            destination.write(chunk)


@api_view(['POST'])
def source_file_upload(request):
    if not "file" in request.data:
        return Response({"error": "file not found"})

    file = request.data["file"]
    write_file(file, f"data_dst.{file.name.split('.')[1]}")
    return Response("File uploaded.")


@api_view(['POST'])
def target_file_upload(request):
    if not "file" in request.data:
        return Response({"error": "file not found"})

    file = request.data["file"]
    write_file(file, f"data_src.{file.name.split('.')[1]}")
    return Response("File uploaded.")


@api_view(['POST'])
def perform_steps(request, step):
    if step == 3:
        name = r'2) extract images from video data_src.bat'
    elif step == 4:
        name = r'3.2) extract images from video data_dst FULL FPS.bat'
    elif step == 5:
        name = r'4) data_src extract faces MANUAL.bat'
    elif step == 6:
        name = r'5) data_dst extract faces MANUAL.bat'
    elif step == 7:
        name = r'6) train Quick96.bat'
    elif step == 8:
        name = r'7) convert Quick96.bat'
    else:
        name = r'8) converted to mp4.bat'

    path_to_file = os.path.join(os.getcwd(), UPLOAD_DIRECTORY, name)
    print(path_to_file)
    subprocess.call([path_to_file])
    return Response("Step Executed.")


@api_view(['GET'])
def get_download_link(request):
    file_path = os.path.join(os.getcwd(), "dip", "workspace", "Result.mp4")
    if os.path.exists(file_path):
        with open(file_path, 'rb') as fh:
            response = HttpResponse(fh.read(), content_type="video/mp4")
            response['Content-Disposition'] = 'inline; filename=' + os.path.basename(file_path)
    else:
        response = Response({"error": "Results.mp4 don't exists."}, status=status.HTTP_400_BAD_REQUEST)

    return response
# result.mp4

print(os.getcwd())
