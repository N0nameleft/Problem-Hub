# Generated by Django 4.2.4 on 2023-10-13 15:30

from django.db import migrations


class Migration(migrations.Migration):
    dependencies = [
        ("server", "0007_rename_user_problem_user_id_and_more"),
    ]

    operations = [
        migrations.DeleteModel(
            name="UploadedFile",
        ),
    ]
