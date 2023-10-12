# Generated by Django 4.2.4 on 2023-10-05 10:29

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):
    dependencies = [
        ("server", "0003_uploadedfile"),
    ]

    operations = [
        migrations.RenameField(
            model_name="uploadedfile",
            old_name="uploaded_at",
            new_name="created_at",
        ),
        migrations.AlterField(
            model_name="uploadedfile",
            name="file",
            field=models.FileField(upload_to="uploads/"),
        ),
        migrations.AlterField(
            model_name="uploadedfile",
            name="user",
            field=models.ForeignKey(
                blank=True,
                null=True,
                on_delete=django.db.models.deletion.CASCADE,
                to="server.user",
            ),
        ),
    ]