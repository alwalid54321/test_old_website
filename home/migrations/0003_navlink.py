# Generated by Django 4.2.4 on 2023-09-07 17:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0002_alter_ido_description'),
    ]

    operations = [
        migrations.CreateModel(
            name='NavLink',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('url', models.URLField()),
            ],
        ),
    ]
