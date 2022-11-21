# Generated by Django 3.2.5 on 2022-11-18 15:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('MyApp', '0002_delete_report'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='station',
            name='reported',
        ),
        migrations.AddField(
            model_name='station',
            name='id',
            field=models.BigAutoField(auto_created=True, default=1, primary_key=True, serialize=False, verbose_name='ID'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='station',
            name='stationNum',
            field=models.CharField(default='000', max_length=3),
        ),
    ]
