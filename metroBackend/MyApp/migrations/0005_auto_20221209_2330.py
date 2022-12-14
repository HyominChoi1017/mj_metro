# Generated by Django 3.2.5 on 2022-12-09 23:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('MyApp', '0004_auto_20221122_0809'),
    ]

    operations = [
        migrations.CreateModel(
            name='Report',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('station', models.CharField(max_length=10)),
                ('content', models.CharField(max_length=300)),
            ],
        ),
        migrations.AlterField(
            model_name='station',
            name='timeTable',
            field=models.JSONField(default={'back': [], 'front': []}),
        ),
    ]
