# Generated by Django 4.1 on 2023-05-02 01:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('PeopleUsers', '0002_alter_peopleuser_options_remove_peopleuser_is_active_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='peopleuser',
            name='email',
            field=models.EmailField(max_length=40),
        ),
    ]