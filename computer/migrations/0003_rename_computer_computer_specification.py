# Generated by Django 4.2.3 on 2023-07-19 01:15

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('computer', '0002_alter_computerspecification_price_max_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='computer',
            old_name='computer',
            new_name='specification',
        ),
    ]