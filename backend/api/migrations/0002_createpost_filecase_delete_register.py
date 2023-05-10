# Generated by Django 4.1 on 2023-04-30 05:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='CreatePost',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=50)),
                ('description', models.TextField()),
                ('image', models.ImageField(upload_to='post_images')),
                ('created', models.DateTimeField(auto_now_add=True)),
            ],
            options={
                'ordering': ['-created'],
            },
        ),
        migrations.CreateModel(
            name='FileCase',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('accuser', models.CharField(max_length=30)),
                ('email', models.EmailField(max_length=30)),
                ('typeofcrime', models.CharField(max_length=100)),
                ('crimelocation', models.CharField(max_length=20)),
                ('timehappened', models.CharField(max_length=10)),
                ('datehappened', models.CharField(max_length=50)),
                ('victim', models.CharField(max_length=200)),
                ('suspect', models.CharField(max_length=20)),
                ('crimestory', models.TextField()),
                ('created', models.DateTimeField(auto_now_add=True)),
            ],
            options={
                'ordering': ['-created'],
            },
        ),
        migrations.DeleteModel(
            name='Register',
        ),
    ]
