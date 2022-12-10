# Generated by Django 3.2.5 on 2022-12-10 00:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('MyApp', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='station',
            name='reported',
        ),
        migrations.AddField(
            model_name='station',
            name='address',
            field=models.CharField(default='', max_length=100),
        ),
        migrations.AddField(
            model_name='station',
            name='id',
            field=models.BigAutoField(auto_created=True, default=1, primary_key=True, serialize=False, verbose_name='ID'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='station',
            name='transfer',
            field=models.CharField(default='0', max_length=1),
        ),
        migrations.AlterField(
            model_name='station',
            name='stationNum',
            field=models.CharField(default='000', max_length=3),
        ),
    ]
