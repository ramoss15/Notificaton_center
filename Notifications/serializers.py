from django.http import HttpRequest
from rest_framework import serializers
from .models import Notification

class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Notification
        fields = ('id', 'receiver', 't', 'context', 'message_content', 'text', 'expire_at')
    
    def create(self, validated_data):
        request: HttpRequest = self.context.get('request', None)
        validated_data.update(sender=request.user)
        return super().create(validated_data)

    def update(self, instance: Notification, validated_data):
        request: HttpRequest = self.context.get('request', None)
        return super().update(instance, validated_data)
