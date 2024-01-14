from django.apps import AppConfig


class NotificationConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'Notifications'
    
    def ready(self) -> None:
        from . import signals
        return super().ready()
