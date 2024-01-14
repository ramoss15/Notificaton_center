from django.contrib.auth.models import AnonymousUser
from django.test import TestCase
from django.utils import timezone

from .models import User


class UserTestCases(TestCase):
    def test_user_creation(self):
        user = User.objects.create_user(username='testuser', password='testpass')
        self.assertEqual(user.username, 'testuser')
        self.assertTrue(user.is_active)
        self.assertFalse(user.is_staff)
        self.assertFalse(user.is_superuser)
    
    def test_user_login(self):
        user = User.objects.create_user(username='testuser', password='testpass')
        self.assertTrue(user.check_password('testpass'))
    
    def test_user_logout(self):
        user = User.objects.create_user(username='testuser', password='testpass')
        user = AnonymousUser()
        self.assertFalse(user.is_authenticated)
    
    def test_user_delete(self):
        user = User.objects.create_user(username='testuser', password='testpass')
        user.delete()
        self.assertEqual(User.objects.count(), 0)
    
    def test_user_change_password(self):
        user = User.objects.create_user(username='testuser', password='testpass')
        user.set_password('newpassword')
        user.save()
        self.assertTrue(user.check_password('newpassword'))
    
    def test_user_change_email(self):
        user = User.objects.create_user(username='testuser', password='testpass')
        user.email = 'newemail'
        user.save()
        self.assertEqual(user.email, 'newemail')
    
    def test_user_change_username(self):
        user = User.objects.create_user(username='testuser', password='testpass')
        user.username = 'newusername'
        user.save()
        self.assertEqual(user.username, 'newusername')
    
    def test_user_change_permissions(self):
        user = User.objects.create_user(username='testuser', password='testpass')
        user.user_permissions.add(19)
        user.save()
        self.assertEqual(user.user_permissions.count(), 1)
    
    def test_user_change_avatar(self):
        user = User.objects.create_user(username='testuser', password='testpass')
        user.avatar = 'newavatar'
        user.save()
        self.assertEqual(user.avatar, 'newavatar')
    
    def test_user_change_last_login(self):
        user = User.objects.create_user(username='testuser', password='testpass')
        newlastlogin =timezone.now()
        user.last_login = newlastlogin
        user.save()
        self.assertEqual(user.last_login, newlastlogin)
    
    def test_user_change_date_joined(self):
        user = User.objects.create_user(username='testuser', password='testpass')
        newdatejoined = timezone.now()
        user.date_joined =newdatejoined
        user.save()
        self.assertEqual(user.date_joined, newdatejoined)
    
    def test_user_change_is_active(self):
        user = User.objects.create_user(username='testuser', password='testpass')
        user.is_active = False
        user.save()
        self.assertFalse(user.is_active)
    
    def test_user_change_is_staff(self):
        user = User.objects.create_user(username='testuser', password='testpass')
        user.is_staff = True
        user.save()
        self.assertTrue(user.is_staff)
    
    def test_user_change_is_superuser(self):
        user = User.objects.create_user(username='testuser', password='testpass')
        user.is_superuser = True
        user.save()
        self.assertTrue(user.is_superuser)
    
    def test_user_change_full_name(self):
        user = User.objects.create_user(username='testuser', password='testpass')
        user.full_name = 'newfullname'
        user.save()
        self.assertEqual(user.full_name, 'newfullname')
    
    def test_user_change_phone_number(self):
        user = User.objects.create_user(username='testuser', password='testpass')
        user.phone_number = 'newphonenumber'
        user.save()
        self.assertEqual(user.phone_number, 'newphonenumber')
    
    def test_user_change_address(self):
        user = User.objects.create_user(username='testuser', password='testpass')
        user.address = 'newaddress'
        user.save()
        self.assertEqual(user.address, 'newaddress')
    
    def test_user_change_city(self):
        user = User.objects.create_user(username='testuser', password='testpass')
        user.city = 'newcity'
        user.save()
        self.assertEqual(user.city, 'newcity')
    
    def test_user_change_country(self):
        user = User.objects.create_user(username='testuser', password='testpass')
        user.country = 'newcountry'
        user.save()
        self.assertEqual(user.country, 'newcountry')
    
    def test_user_change_zip_code(self):
        user = User.objects.create_user(username='testuser', password='testpass')
        user.zip_code = 'newzipcode'
        user.save()
        self.assertEqual(user.zip_code, 'newzipcode')
    
    
    
