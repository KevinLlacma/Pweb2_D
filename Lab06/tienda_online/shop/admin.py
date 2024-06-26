from django.contrib import admin
from .models import User, Category, Product, ProductCategory, Order, OrderDetail, ShoppingCart, CartDetail, Address, Payment

class TimeAdmin(admin.ModelAdmin):
    readonly_fields = ('created', 'modified', 'user_modified')

# Register ypur models here
@admin.register(User)
class UserAdmin(TimeAdmin):
    list_display = ('first_name', 'last_name', 'email', 'created', 'modified', 'user_modified')

@admin.register(Category)
class CategoryAdmin(TimeAdmin):
    list_display = ('name', 'created', 'modified', 'user_modified')

@admin.register(Product)
class ProductAdmin(TimeAdmin):
    list_display = ('name', 'price', 'stock_quantity', 'created', 'modified', 'user_modified')

@admin.register(ProductCategory)
class ProductCategoryAdmin(TimeAdmin):
    list_display = ('product', 'category', 'created', 'modified', 'user_modified')

@admin.register(Order)
class OrderAdmin(TimeAdmin):
    list_display = ('user', 'order_date', 'status', 'created', 'modified', 'user_modified')

@admin.register(OrderDetail)
class OrderDetailAdmin(TimeAdmin):
    list_display = ('order', 'product', 'quantity', 'price', 'created', 'modified', 'user_modified')

@admin.register(ShoppingCart)
class ShoppingCartAdmin(TimeAdmin):
    list_display = ('user', 'created', 'modified', 'user_modified')

@admin.register(CartDetail)
class CartDetailAdmin(TimeAdmin):
    list_display = ('shopping_cart', 'product', 'quantity', 'created', 'modified', 'user_modified')

@admin.register(Address)
class AddressAdmin(TimeAdmin):
    list_display = ('user', 'address_line', 'city', 'state', 'zip_code', 'country', 'created', 'modified', 'user_modified')

@admin.register(Payment)
class PaymentAdmin(TimeAdmin):
    list_display = ('order', 'payment_date', 'amount', 'payment_method', 'created', 'modified', 'user_modified')
