# Generated by Django 5.1.3 on 2025-01-12 16:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0013_alter_introduction_image'),
    ]

    operations = [
        migrations.AddField(
            model_name='introduction',
            name='blob_url',
            field=models.URLField(blank=True, null=True),
        ),
    ]
