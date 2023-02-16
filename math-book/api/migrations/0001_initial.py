# Generated by Django 4.1.7 on 2023-02-16 16:33

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Question",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("marker", models.CharField(max_length=55)),
                ("answer", models.CharField(max_length=33)),
                ("date", models.DateField()),
            ],
        ),
    ]
