from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class categoria (models.Model):
    nombreCategoria = models.CharField(max_length=100,verbose_name='nombreCategoria')
    created = models.DateTimeField(auto_now_add=True, verbose_name="Fecha de creación")
    updated = models.DateTimeField(auto_now=True, verbose_name="Fecha de edición")

    class Meta:
            verbose_name = "categoria"
            verbose_name_plural = "categorias"
            ordering = ['-created',]

    def __str__(self):
        return self.nombreCategoria

class producto (models.Model):
    nombreProducto = models.CharField(max_length=100,verbose_name='nombreProducto')
    descripcion = models.CharField(max_length=100,verbose_name='descripcion')
    precio = models.FloatField()
    imagen=models.ImageField (upload_to="imagenes")
    categoriaDeProducto = models.ForeignKey(categoria, on_delete=models.CASCADE)
    created = models.DateTimeField(auto_now_add=True, verbose_name="Fecha de creación")
    updated = models.DateTimeField(auto_now=True, verbose_name="Fecha de edición")
    
    class Meta:
            verbose_name = "producto"
            verbose_name_plural = "productos"
            ordering = ['-created',]

    def __str__(self):
        return self.nombreProducto

class ejemplar (models.Model):
    codigoEjemplar = models.CharField(max_length=100,verbose_name='codigoEjemplar')
    categoriaDeProducto = models.ForeignKey(producto, on_delete=models.CASCADE)
    created = models.DateTimeField(auto_now_add=True, verbose_name="Fecha de creación")
    updated = models.DateTimeField(auto_now=True, verbose_name="Fecha de edición")
    
    class Meta:
            verbose_name = "ejemplar"
            verbose_name_plural = "ejemplares"
            ordering = ['-created',]

    def __str__(self):
        return self.codigoEjemplar

class cartera (models.Model):
    usuario = models.ForeignKey(User,verbose_name='usuario',on_delete=models.CASCADE)
    ejemplar = models.ForeignKey(ejemplar,verbose_name='ejemplar', on_delete=models.CASCADE)
    created = models.DateTimeField(auto_now_add=True, verbose_name="Fecha de creación")
    updated = models.DateTimeField(auto_now=True, verbose_name="Fecha de edición")
    
    class Meta:
            verbose_name = "cartera"
            verbose_name_plural = "carteras"
            ordering = ['-created',]

    def __str__(self):
        return self.usuario
