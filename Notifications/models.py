from uuid import uuid4

from django.db import models

from Notifications.constants import NotificationType
from users.models import User

def default_uuid():
    return str(uuid4())


class Notification(models.Model):
    
    id = models.CharField(primary_key=True, default=default_uuid, max_length=36, editable=False)
    receiver: User = models.ForeignKey(User, on_delete=models.CASCADE, related_name="receiver")
    sender: User = models.ForeignKey(User, on_delete=models.CASCADE, related_name="sender")
    t = models.CharField(max_length=4, choices=NotificationType.choices, default=NotificationType.DEFAULT)
    title = models.CharField(max_length=255, name='context')
    subtitle = models.CharField(max_length=255, name='message_content')
    text = models.TextField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_seen = models.BooleanField(default=False)
    seen_at = models.DateTimeField(null=True)
    is_deleted = models.BooleanField(default=False)
    deleted_at = models.DateTimeField(null=True)
    is_archived = models.BooleanField(default=False)
    archived_at = models.DateTimeField(null=True)
    expire_at = models.DateTimeField(null=True)
    
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.notification = None
    
    def __str__(self):
        return f"{self.id}-{self.title}"

    class Meta:
        ordering = ['-created_at']
        verbose_name = 'Notification'
        verbose_name_plural = 'Notifications'
        db_table = "notifications"
