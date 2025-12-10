from django.contrib import admin
from .models import EmotionRequest

@admin.register(EmotionRequest)
class EmotionRequestAdmin(admin.ModelAdmin):
    list_display = ('user', 'short_text', 'predicted_emotion', 'algorithm', 'created_at')
    list_filter = ('algorithm', 'created_at')
    search_fields = ('text', 'predicted_emotion')

    def short_text(self, obj):
        return obj.text[:50]
    short_text.short_description = "Текст"
