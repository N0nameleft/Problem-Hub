# Generated by Django 4.2.4 on 2023-10-14 02:19

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("server", "0008_delete_uploadedfile"),
    ]

    operations = [
        migrations.AlterField(
            model_name="problem",
            name="date_added",
            field=models.DateTimeField(auto_now_add=True),
        ),
    ]