from rest_framework import viewsets

from .models import User, Category, Product, Order, OrderDetail, ShoppingCart, CartDetail, Address, Payment
from .serializers import UserSerializer, CategorySerializer, ProductSerializer, OrderSerializer, OrderDetailSerializer, ShoppingCartSerializer, CartDetailSerializer, AddressSerializer, PaymentSerializer
# Create your views here.

class UserListView(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    
class CategoryListView(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    
class ProductListView(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializaer_class = ProductSerializer

class OrderListView(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    serializaer_class = OrderSerializer

class OrderDetailView(viewsets.ModelViewSet):
    queryset = OrderDetail.objects.all()
    serializaer_class = OrderDetailSerializer

class ShoppingCartView(viewsets.ModelViewSet):
    queryset = ShoppingCart.objects.all()
    serializaer_class = ShoppingCartSerializer

class CartDetailView(viewsets.ModelViewSet):
    queryset = CartDetail.objects.all()
    serializaer_class = CartDetailSerializer

class AddressView(viewsets.ModelViewSet):
    queryset = Address.objects.all()
    serializaer_class = AddressSerializer
class PaymentView(viewsets.ModelViewSet):
    queryset = Payment.objects.all()
    serializaer_class = PaymentSerializer