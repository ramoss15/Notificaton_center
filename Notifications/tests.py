from django.test import TestCase
from .models import Notification
from users.models import User
import uuid

class NotificationTestCases(TestCase):
	"""
	Test the creation of a notification.
	"""
	def test_notification_creation(self):
		uid = uuid.uuid4().hex
		user = User.objects.create_user(username=uid, email='ram@{uid}.com'.format(uid=uid), password='ram@123')
		notification = Notification.objects.create(receiver=user, t='Def', context='hi', message_content='hi', text='',sender=user)
		self.assertEqual(notification.receiver, user)
		self.assertEqual(notification.t, 'Def')
		self.assertEqual(notification.context, 'hi')
		self.assertEqual(notification.message_content, 'hi')
		self.assertEqual(notification.text, '')
		notification.delete(), user.delete()
	
	def test_notification_archive(self):
		uid = uuid.uuid4().hex
		user = User.objects.create_user(username=uid, email='ram@{uid}.com'.format(uid=uid), password='ram@123')
		notification = Notification.objects.create(receiver=user, t='Def', context='hi', message_content='hi', text='',sender=user)
		notification.is_archived = True
		notification.save()
		nid = notification.id
		notification = Notification.objects.get(id=nid)
		self.assertEqual(notification.is_archived, True)
		user.delete(), notification.delete()

	def test_notification_unarchive(self):
		uid = uuid.uuid4().hex
		user = User.objects.create_user(username=uid, email='ram@{uid}.com'.format(uid=uid), password='ram@123')
		notification = Notification.objects.create(receiver=user, t='Def', context='hi', message_content='hi', text='',sender=user)
		notification.is_archived = False
		notification.save()
		nid = notification.id
		notification = Notification.objects.get(id=nid)
		self.assertEqual(notification.is_archived, False)
		user.delete(), notification.delete()

	def test_notification_delete(self):
		uid = uuid.uuid4().hex
		user = User.objects.create_user(username=uid, email='ram@{uid}.com'.format(uid=uid), password='ram@123')
		notification = Notification.objects.create(receiver=user, t='Def', context='hi', message_content='hi', text='',sender=user)
		notification.is_deleted = True
		notification.save()
		nid = notification.id
		self.assertEqual(Notification.objects.filter(id=nid, is_deleted=False).count(), 0)
		user.delete(), notification.delete()

	def test_notification_seen(self):
		uid = uuid.uuid4().hex
		user = User.objects.create_user(username=uid, email='ram@{uid}.com'.format(uid=uid), password='ram@123')
		notification = Notification.objects.create(receiver=user, t='Def', context='hi', message_content='hi', text='',sender=user)
		notification.is_seen = True
		notification.save()
		nid = notification.id
		notification = Notification.objects.get(id=nid)
		self.assertEqual(notification.is_seen, True)
		user.delete(), notification.delete()

	def test_notification_unseen(self):
		uid = uuid.uuid4().hex
		user = User.objects.create_user(username=uid, email='ram@{uid}.com'.format(uid=uid), password='ram@123')
		notification = Notification.objects.create(receiver=user, t='Def', context='hi', message_content='hi', text='',sender=user)
		notification.is_seen = False
		notification.save()
		nid = notification.id
		notification = Notification.objects.get(id=nid)
		self.assertEqual(notification.is_seen, False)
		user.delete(), notification.delete()

	def test_notification_count(self):
		uid = uuid.uuid4().hex
		user = User.objects.create_user(username=uid, email='ram@{uid}.com'.format(uid=uid), password='ram@123')
		notification = Notification.objects.create(receiver=user, t='Def', context='hi', message_content='hi',
		                                           text='', sender=user)
		self.assertEqual(Notification.objects.filter(id=notification.id, is_deleted=False).count(), 1)
		user.delete(), notification.delete()

	def test_notification_count_unseen(self):
		uid = uuid.uuid4().hex
		user = User.objects.create_user(username=uid, email='ram@{uid}.com'.format(uid=uid), password='ram@123')
		notification = Notification.objects.create(receiver=user, t='Def', context='hi', message_content='hi', text='',sender=user)
		notification.is_seen = False
		notification.save()
		nid = notification.id
		self.assertEqual(Notification.objects.filter(id=nid, is_seen=False).count(), 1)
		user.delete(), notification.delete()

	def test_notification_count_seen(self):
		uid = uuid.uuid4().hex
		user = User.objects.create_user(username=uid, email='ram@{uid}.com'.format(uid=uid), password='ram@123')
		notification = Notification.objects.create(receiver=user, t='Def', context='hi', message_content='hi', text='',sender=user)
		notification.is_seen = True
		notification.save()
		nid = notification.id
		self.assertEqual(Notification.objects.filter(id=nid, is_seen=True).count(), 1)
		user.delete(), notification.delete()
