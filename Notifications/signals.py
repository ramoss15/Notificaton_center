import json
import logging
from uuid import uuid4

from .models import Notification
from django.db.models.signals import post_save
from django.dispatch.dispatcher import receiver
# from core.pubnub.pubnub_service import PubNubService

logger = logging.getLogger(__name__)

@receiver(post_save, sender=Notification)
def create_notification(instance: Notification, created, **kwargs):
    sender = instance.sender
    r = instance.receiver
    if created and sender != r:
        message = {
            "message": Notification.context,
            "peek": f'{instance.text[0:10]}...',
            "id": str(uuid4())[0:8],
            "pid": str(Notification.id),
        },
        # PubNubService.send_notification_to_user(user=r, message=message)
        # logger.info(json.dumps(model_to_dict(message)))
        logger.warn("Notification sent to user: %s", r.username)
