# Generated by Django 5.1.3 on 2024-12-08 15:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_logo'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='logo',
            name='image',
        ),
        migrations.AddField(
            model_name='logo',
            name='logo',
            field=models.ImageField(blank=True, upload_to='logos/'),
        ),
        migrations.AddField(
            model_name='logo',
            name='name',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
    ]
