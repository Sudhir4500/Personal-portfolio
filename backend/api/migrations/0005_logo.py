# Generated by Django 5.1.3 on 2024-12-06 15:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_introduction_greet_alter_introduction_title'),
    ]

    operations = [
        migrations.CreateModel(
            name='Logo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(blank=True, upload_to='images/')),
            ],
        ),
    ]
