# Generated by Django 3.2.16 on 2023-04-20 19:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('renoadmin_apis', '0009_auto_20230420_2304'),
    ]

    operations = [
        migrations.AlterField(
            model_name='projectmanagementmodel',
            name='review',
            field=models.IntegerField(blank=True, default=0),
        ),
    ]
