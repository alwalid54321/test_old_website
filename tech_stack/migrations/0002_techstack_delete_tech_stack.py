# Generated by Django 4.2.5 on 2023-09-09 21:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tech_stack', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='TechStack',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, max_length=200, null=True, unique=True)),
                ('description', models.TextField(blank=True, null=True)),
                ('image', models.ImageField(blank=True, null=True, upload_to='tech_stack_images/')),
                ('link', models.URLField(blank=True, null=True)),
            ],
        ),
        migrations.DeleteModel(
            name='tech_stack',
        ),
    ]
