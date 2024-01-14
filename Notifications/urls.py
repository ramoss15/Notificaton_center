from django.urls import path
from . import views

app_name = 'Notifications'

urlpatterns = [
	# Notifications
	path("message/", views.MessageView.as_view(), name="Notification "),
	# path("update_message/", views.MessageUpdateView.as_view(), name="Notification "),
	
	# # posts
	# path("<int:id>", views.PostRetrieve.as_view(), name="posts-detail"),
	# path("<int:id>/", views.PostUpdateDestroyView.as_view(), name="posts-delete-update"),
	#
	# path("", views.PostListCreateView.as_view(), name="posts-list-create"),
]
