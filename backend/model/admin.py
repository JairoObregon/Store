from django.contrib import admin
from .models import categoria,cartera,producto,ejemplar

# Register your models here.
class CategoriaAdmin(admin.ModelAdmin):
    list_display = ('nombreCategoria',)

class ProductoAdmin(admin.ModelAdmin):
    list_display = ('nombreProducto',)

class CarteraAdmin(admin.ModelAdmin):
    list_display = ('usuario',)

class EjemplarAdmin(admin.ModelAdmin):
    list_display = ('codigoEjemplar',)


admin.site.register(categoria, CategoriaAdmin)

admin.site.register(producto, ProductoAdmin)

admin.site.register(ejemplar, EjemplarAdmin)
admin.site.register(cartera, CarteraAdmin)