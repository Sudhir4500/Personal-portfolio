# Generated by Django 5.1.3 on 2024-12-13 08:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0007_skill'),
    ]

    operations = [
        migrations.AddField(
            model_name='skill',
            name='logo',
            field=models.ImageField(blank=True, upload_to='images/'),
        ),
    ]
