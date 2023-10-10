# Generated by Django 4.2.4 on 2023-10-05 11:00

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import server.models


class Migration(migrations.Migration):
    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ("server", "0004_rename_uploaded_at_uploadedfile_created_at_and_more"),
    ]

    operations = [
        migrations.AlterField(
            model_name="problem",
            name="user",
            field=models.ForeignKey(
                blank=True,
                default=server.models.get_default_user,
                null=True,
                on_delete=django.db.models.deletion.CASCADE,
                to=settings.AUTH_USER_MODEL,
            ),
        ),
        migrations.AlterField(
            model_name="uploadedfile",
            name="file",
            field=models.FileField(upload_to="."),
        ),
        migrations.AlterField(
            model_name="uploadedfile",
            name="user",
            field=models.ForeignKey(
                blank=True,
                default=server.models.get_default_user,
                null=True,
                on_delete=django.db.models.deletion.CASCADE,
                to=settings.AUTH_USER_MODEL,
            ),
        ),
        migrations.DeleteModel(
            name="User",
        ),
    ]
