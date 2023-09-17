# Generated by Django 4.2.4 on 2023-09-09 13:21

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('user_id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=40)),
                ('username', models.CharField(max_length=40, unique=True)),
                ('email', models.CharField(max_length=40, unique=True)),
                ('password', models.CharField(max_length=40)),
            ],
        ),
        migrations.CreateModel(
            name='Fact',
            fields=[
                ('problem_id', models.AutoField(primary_key=True, serialize=False)),
                ('problem_name', models.CharField(max_length=200)),
                ('problem_data', models.CharField(max_length=10000)),
                ('date_added', models.DateField()),
                ('link_to_file', models.CharField(max_length=200)),
                ('user_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]