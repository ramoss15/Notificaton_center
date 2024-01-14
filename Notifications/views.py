from django.shortcuts import get_object_or_404
from django.utils import timezone
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import generics
from rest_framework.pagination import LimitOffsetPagination

from .serializers import MessageSerializer
from .models import Notification


class MessageLimitOffsetPagination(LimitOffsetPagination):
	default_limit = 10
	max_limit = 10

	def __init__(self) -> None:
		self.count = 10
		super().__init__()


class MessageView(generics.ListCreateAPIView, MessageLimitOffsetPagination):
	queryset = Notification.objects.all()
	serializer_class = MessageSerializer
	pagination_class = MessageLimitOffsetPagination
	authentication_classes = (TokenAuthentication,)
	permission_classes = (IsAuthenticated,)
	
	
	def get_queryset(self):
		is_archived = self.request.query_params.get('archived', False)
		return self.queryset.filter(
			receiver=self.request.user, is_deleted=False, is_archived=is_archived
		)
	
	def post(self, request, *args, **kwargs):
		"""
		Handle HTTP POST requests.

		:param request: The HTTP request object.
		:param args: Positional arguments.
		:param kwargs: Keyword arguments.
		:return: The HTTP response object.
		"""
		
		serializer = self.serializer_class(
			data=request.data, context={'request': request}
		)
		
		if serializer.is_valid(raise_exception=True):
			serializer.save()
			return Response(data=serializer.data, status=200)
		
		return Response(data=serializer.errors, status=400)

	def put(self, request, *args, **kwargs):
		"""
		Updates the notification with the provided data.

		Parameters:
			- request: The HTTP request object.
			- args: Additional positional arguments.
			- kwargs: Additional keyword arguments.

		Returns:
			- If the serializer is valid and the notification is successfully updated:
				- If `archived` is True: A Response object with a success message and status code 200.
				- Otherwise: A Response object with the serialized data and status code 200.
			- If the serializer is invalid:
				- A Response object with the serializer errors and status code 400.
		"""
		
		self.lookup_field = 'id'
		
		archived = self.request.data.get('archived', False)
		seen = self.request.data.get('seen', False)
		
		notif = Notification.objects.filter(
			receiver=self.request.user, id=request.data.get('id'), is_deleted=False, is_archived=False
		)
		get_object_or_404(notif)
		
		request.data.update(
			receiver=self.request.user.pk, context=notif.get().context,
			message_content=notif.get().message_content, text=notif.get().text
		)
		if seen:
			request.data.update(is_seen=True, seen_at=timezone.now())
		
		if archived:
			request.data.update(is_archived=True, archived_at=timezone.now())

		serializer = self.serializer_class(
			data=request.data, context={'request': request}
		)
		
		if serializer.is_valid(raise_exception=True):
			request.data.update(receiver=self.request.user)
			serializer.update(notif.first(), request.data)
			if archived:
				return Response(data=dict(message="archived successfully"), status=200)
			return Response(data=serializer.data, status=200)
		
		return Response(data=serializer.errors, status=400)
	
	def delete(self, request, *args, **kwargs):
		"""
		Delete a notification.

		:param request: The HTTP request object.
		:return: The HTTP response object.
		:rtype: Response
		"""
		
		self.lookup_field = 'id'
		notif = Notification.objects.filter(
			receiver=self.request.user, id=request.data.get('id'), is_deleted=False, is_archived=False
		)
		get_object_or_404(notif)
		
		request.data.update(
			receiver=self.request.user.pk, context=notif.get().context, text=notif.get().text,
			message_content=notif.get().message_content, is_deleted=True, deleted_at=timezone.now()
		)
		
		serializer = self.serializer_class(
			data=request.data, context={'request': request}
		)
		
		if serializer.is_valid(raise_exception=True):
			request.data.update(receiver=self.request.user)
			serializer.update(notif.first(), request.data)
			return Response(data=dict(message="deleted successfully"), status=200)
		
		return Response(data=serializer.errors, status=400)
		
