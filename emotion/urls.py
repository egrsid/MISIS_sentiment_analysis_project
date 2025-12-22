from django.urls import path
from . import views

app_name = "emotion"

urlpatterns = [
    path("", views.index, name="main_page"),
    
    path("register/", views.register_view, name="register"),
    path("login/", views.login_view, name="login"),
    path("logout/", views.logout_view, name="logout"),
    path('about/', views.about_view, name='about'),
]
