from django.contrib import admin

# Register your models here.

from .models import User, Category, Product, ProductCategory, Order, OrderDetail, ShoppingCart, CartDetail, Address, Payment

admin.site.register(User)
admin.site.register(Category)
admin.site.register(Product)
admin.site.register(ProductCategory)
admin.site.register(Order)
admin.site.register(OrderDetail)
admin.site.register(ShoppingCart)
admin.site.register(CartDetail)
admin.site.register(Address)
admin.site.register(Payment)