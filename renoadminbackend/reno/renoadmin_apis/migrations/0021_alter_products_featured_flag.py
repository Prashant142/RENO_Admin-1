# Generated by Django 3.2.16 on 2023-04-29 08:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('renoadmin_apis', '0020_alter_products_featured_flag'),
    ]

    operations = [
        migrations.AlterField(
            model_name='products',
            name='featured_flag',
            field=models.IntegerField(blank=True, default=0, null=True),
        ),
    ]