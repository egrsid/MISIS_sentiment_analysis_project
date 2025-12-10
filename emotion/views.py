from django.shortcuts import render, redirect
from django.contrib.auth import login, authenticate, logout
from django.contrib.auth.models import User
from django.contrib import messages

from .ml import predict_emotion
from .models import EmotionRequest 

# 1. ГЛАВНАЯ СТРАНИЦА
def index(request):
    result = None
    selected_model = "CatBoostClassifier"
    
    if request.method == "POST":
        user_text = request.POST.get("text", "")
        selected_model = request.POST.get("selected_model", "CatBoostClassifier")
        
        if user_text:
            # Получаем предсказание
            predicted_result = predict_emotion(user_text, model_name=selected_model)
            
            # Создаем запись (добавляем algorithm)
            emotion_entry = EmotionRequest(
                text=user_text, 
                predicted_emotion=predicted_result,
                algorithm=selected_model
            )

            # Привязываем к пользователю, если вошел
            if request.user.is_authenticated:
                emotion_entry.user = request.user
            
            emotion_entry.save()

            result = predicted_result
            
    return render(request, "emotion/main_page.html", {"result": result, "selected_model": selected_model})


# 2. РЕГИСТРАЦИЯ
def register_view(request):
    if request.method == "POST":
        username = request.POST.get('username')
        password = request.POST.get('password')
        confirm_password = request.POST.get('confirm_password')

        if password == confirm_password:
            if User.objects.filter(username=username).exists():
                messages.error(request, 'Пользователь с таким именем уже существует')
            else:
                user = User.objects.create_user(username=username, password=password)
                login(request, user)
                return redirect('emotion:main_page')
        else:
            messages.error(request, 'Пароли не совпадают')

    return render(request, "emotion/reg.html")


# 3. ВХОД
def login_view(request):
    if request.method == "POST":
        username = request.POST.get('username')
        password = request.POST.get('password')
        
        user = authenticate(request, username=username, password=password)
        
        if user is not None:
            login(request, user)
            return redirect('emotion:main_page')
        else:
            messages.error(request, 'Неверный логин или пароль')
    
    return render(request, "emotion/vhod.html")


# 4. ВЫХОД
def logout_view(request):
    logout(request)
    return redirect('emotion:main_page')


def about_view(request):
    return render(request, "emotion/us.html")

