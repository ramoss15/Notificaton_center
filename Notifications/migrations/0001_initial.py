# Generated by Django 4.2.9 on 2024-01-14 10:34

import Notifications.models
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Notification',
            fields=[
                ('id', models.CharField(default=Notifications.models.default_uuid, editable=False, max_length=36, primary_key=True, serialize=False)),
                ('t', models.CharField(choices=[('Def', 'Default'), ('PC', 'PAYMENT_COMPLETE'), ('DT', 'DELIVERY_TIME'), ('PIP', 'PAYMENT_IN_PROGRESS'), ('PF', 'PAYMENT_FAILURE'), ('NF', 'NEW_FOLLOWERS'), ('IE', 'ITEM_EXPIRY'), ('RB', 'REFERRAL_BONUS'), ('SB', 'SIGNUP_BONUS')], default='Def', max_length=4)),
                ('Context', models.CharField(max_length=255)),
                ('Message content', models.CharField(max_length=255)),
                ('text', models.TextField(blank=True, null=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('is_seen', models.BooleanField(default=False)),
                ('seen_at', models.DateTimeField(null=True)),
                ('is_deleted', models.BooleanField(default=False)),
                ('deleted_at', models.DateTimeField(null=True)),
                ('is_archived', models.BooleanField(default=False)),
                ('archived_at', models.DateTimeField(null=True)),
                ('expire_at', models.DateTimeField(null=True)),
            ],
            options={
                'verbose_name': 'Notification',
                'verbose_name_plural': 'Notifications',
                'db_table': 'notifications',
                'ordering': ['-created_at'],
            },
        ),
    ]
