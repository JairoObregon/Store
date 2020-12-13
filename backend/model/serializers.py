from rest_framework import serializers
from .models import categoria,cartera,producto,ejemplar 
from django.contrib.auth.models import User

class CategoriaSerializer(serializers.ModelSerializer):
        class Meta:
            model = categoria
            fields=('id','nombreCategoria')

class ProductoSerializer(serializers.ModelSerializer):
        #si en caso es una relacion de muchos, es decir exietn varias categorias entonces se prodra utilizar el codigo
        #de abajo, ya que me mostrar todo los objetos
        #categoriaDeProducto = CategoriaSerializer(many=True, read_only=True)

        class Meta:
            model = producto
            fields=( 'id','nombreProducto','descripcion', 'precio','categoriaDeProducto','imagen')

class EjemplarSerializer(serializers.ModelSerializer):
        class Meta:
            model = ejemplar
            fields=('codigoEjemplar', 'categoriaDeProducto')

class CarteraSerializer(serializers.ModelSerializer):
        class Meta:
            model = cartera
            fields=('id','usuario', 'usuario')
            
            
class UserSerializer(serializers.ModelSerializer):
        class Meta:
            model = User
            fields=('id','username','password','email', 'is_staff')
                

        def create(self,validated_data):
            user=User.objects.create_user(**validated_data)
            return user
                   