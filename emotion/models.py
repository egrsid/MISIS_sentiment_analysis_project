from django.db import models

class EmotionRequest(models.Model):
    text = models.TextField(verbose_name="Текст сообщения")
    
    predicted_emotion = models.CharField(max_length=50, verbose_name="Эмоция")
    
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="Время запроса")

    def __str__(self):
        return f"{self.predicted_emotion}: {self.text[:30]}..."

    class Meta:
        verbose_name = "Запрос эмоции"
        verbose_name_plural = "Запросы эмоций"
