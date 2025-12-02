from django.contrib import admin
from .models import EmotionRequest

@admin.register(EmotionRequest)
class EmotionRequestAdmin(admin.ModelAdmin):
    list_display = ('predicted_emotion', 'created_at', 'short_text')
    list_filter = ('predicted_emotion', 'created_at')
    search_fields = ('text',)

    def short_text(self, obj):
        return obj.text[:50]
    short_text.short_description = "Текст"
