# Generated by Django 3.2.12 on 2022-04-11 03:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0004_post_date'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='post',
            options={'ordering': ['-date']},
        ),
        migrations.AlterField(
            model_name='post',
            name='body',
            field=models.TextField(max_length=1000),
        ),
    ]