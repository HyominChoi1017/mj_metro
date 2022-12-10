# Generated by Django 3.2.5 on 2022-12-10 00:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('MyApp', '0002_auto_20221210_0042'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='schedule',
            name='count',
        ),
        migrations.RemoveField(
            model_name='schedule',
            name='routeContent',
        ),
        migrations.RemoveField(
            model_name='schedule',
            name='week',
        ),
        migrations.AddField(
            model_name='schedule',
            name='nearStation',
            field=models.CharField(default='서울역', max_length=30),
        ),
    ]