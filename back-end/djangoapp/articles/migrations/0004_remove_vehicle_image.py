# Generated by Django 4.0.1 on 2022-01-11 17:19

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('articles', '0003_alter_vehicle_image'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='vehicle',
            name='image',
        ),
    ]