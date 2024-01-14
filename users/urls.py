from django.urls import path
from . import views as user_views
from rest_framework.authtoken import views

app_name = 'users'

urlpatterns = [
    path("login/", views.ObtainAuthToken.as_view(), name="login"),
    path("register/", user_views.UserCreateAPIView.as_view(), name="register"),
]

