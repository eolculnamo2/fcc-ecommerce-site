# Generated by Django 4.0.1 on 2022-01-11 17:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('articles', '0002_vehicle_description_alter_vehicle_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='vehicle',
            name='image',
            field=models.ImageField(blank=True, default='default.png', upload_to=''),
        ),
    ]