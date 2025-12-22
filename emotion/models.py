from django.db import models
from django.contrib.auth.models import User

class EmotionRequest(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True, verbose_name="Пользователь")
    
    text = models.TextField(verbose_name="Текст сообщения")
    predicted_emotion = models.CharField(max_length=50, verbose_name="Эмоция")
    algorithm = models.CharField(max_length=100, default='CatBoostClassifier', verbose_name='Модель')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="Время запроса")

    def __str__(self):
        return f"{self.predicted_emotion}: {self.text[:30]}..."

    class Meta:
        verbose_name = "Запрос эмоции"
        verbose_name_plural = "Запросы эмоций"
