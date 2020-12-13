from django.shortcuts import render
from .models import cartera,categoria,ejemplar,producto
from .serializers import CategoriaSerializer,ProductoSerializer,EjemplarSerializer,CarteraSerializer,UserSerializer
from rest_framework import viewsets
from django.contrib.auth.models import User


from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from rest_framework.response import Response

# Create your views here.

class CategoriaViewSet(viewsets.ModelViewSet):
    queryset = categoria.objects.all()
    serializer_class = CategoriaSerializer

class CarteraViewSet(viewsets.ModelViewSet):
    queryset = cartera.objects.all()
    serializer_class = CarteraSerializer

class EjemplarViewSet(viewsets.ModelViewSet):
    queryset = ejemplar.objects.all()
    serializer_class = EjemplarSerializer

class ProductoViewSet(viewsets.ModelViewSet):
    queryset = producto.objects.all()
    serializer_class = ProductoSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    #authentication_classes = (TokenAuthentication,)
    #permission_classes = (IsAuthenticated,) 



class CustomAuthToken(ObtainAuthToken):

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data,
                                           context={'request': request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)
        return Response({
            'token': token.key,
            'user_id': user.id,
            'user_username': user.username,
            'is_staff': user.is_staff


        })