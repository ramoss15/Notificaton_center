from enum import Enum

from django.db import models
from django.utils.translation import gettext_lazy as _


class NotificationType(models.TextChoices):
	DEFAULT = "Def", _("Default")
	PAYMENT_COMPLETE = "PC", _('PAYMENT_COMPLETE'),
	DELIVERY_TIME = "DT", _('DELIVERY_TIME')
	PAYMENT_IN_PROGRESS = "PIP", _('PAYMENT_IN_PROGRESS')
	PAYMENT_FAILURE = "PF", _('PAYMENT_FAILURE')
	NEW_FOLLOWERS = "NF", _('NEW_FOLLOWERS')
	ITEM_EXPIRY = "IE", _('ITEM_EXPIRY')
	REFERRAL_BONUS = "RB", _('REFERRAL_BONUS')
	SIGNUP_BONUS = "SB", _('SIGNUP_BONUS')
