# Generated by Django 3.0.4 on 2020-03-30 01:27

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='categoria',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombreCategoria', models.CharField(max_length=100, verbose_name='nombreCategoria')),
                ('created', models.DateTimeField(auto_now_add=True, verbose_name='Fecha de creación')),
                ('updated', models.DateTimeField(auto_now=True, verbose_name='Fecha de edición')),
            ],
            options={
                'verbose_name': 'categoria',
                'verbose_name_plural': 'categorias',
                'ordering': ['-created'],
            },
        ),
        migrations.CreateModel(
            name='producto',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombreProducto', models.CharField(max_length=100, verbose_name='nombreProducto')),
                ('descripcion', models.CharField(max_length=100, verbose_name='descripcion')),
                ('precio', models.FloatField()),
                ('imagen', models.ImageField(upload_to='imagenes')),
                ('created', models.DateTimeField(auto_now_add=True, verbose_name='Fecha de creación')),
                ('updated', models.DateTimeField(auto_now=True, verbose_name='Fecha de edición')),
                ('categoriaDeProducto', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='model.categoria')),
            ],
            options={
                'verbose_name': 'producto',
                'verbose_name_plural': 'productos',
                'ordering': ['-created'],
            },
        ),
        migrations.CreateModel(
            name='ejemplar',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('codigoEjemplar', models.CharField(max_length=100, verbose_name='codigoEjemplar')),
                ('created', models.DateTimeField(auto_now_add=True, verbose_name='Fecha de creación')),
                ('updated', models.DateTimeField(auto_now=True, verbose_name='Fecha de edición')),
                ('categoriaDeProducto', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='model.producto')),
            ],
            options={
                'verbose_name': 'ejemplar',
                'verbose_name_plural': 'ejemplares',
                'ordering': ['-created'],
            },
        ),
        migrations.CreateModel(
            name='cartera',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', models.DateTimeField(auto_now_add=True, verbose_name='Fecha de creación')),
                ('updated', models.DateTimeField(auto_now=True, verbose_name='Fecha de edición')),
                ('ejemplar', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='model.ejemplar', verbose_name='ejemplar')),
                ('usuario', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL, verbose_name='usuario')),
            ],
            options={
                'verbose_name': 'cartera',
                'verbose_name_plural': 'carteras',
                'ordering': ['-created'],
            },
        ),
    ]
