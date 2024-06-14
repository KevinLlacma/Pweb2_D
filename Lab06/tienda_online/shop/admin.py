from django.contrib import admin
from .models import User, Category, Product, ProductCategory, Order, OrderDetail, ShoppingCart, CartDetail, Address, Payment

class TimestampedAdmin(admin.ModelAdmin):
    readonly_fields = ('created', 'modified', 'user_modified')

# Register ypur models here
@admin.register(User)
class UserAdmin(TimestampedAdmin):
    list_display = ('first_name', 'last_name', 'email', 'created', 'modified', 'user_modified')

@admin.register(Category)
class CategoryAdmin(TimestampedAdmin):
    list_display = ('name', 'created', 'modified', 'user_modified')

@admin.register(Product)
class ProductAdmin(TimestampedAdmin):
    list_display = ('name', 'price', 'stock_quantity', 'created', 'modified', 'user_modified')

@admin.register(ProductCategory)
class ProductCategoryAdmin(TimestampedAdmin):
    list_display = ('product', 'category', 'created', 'modified', 'user_modified')

@admin.register(Order)
class OrderAdmin(TimestampedAdmin):
    list_display = ('user', 'order_date', 'status', 'created', 'modified', 'user_modified')

@admin.register(OrderDetail)
class OrderDetailAdmin(TimestampedAdmin):
    list_display = ('order', 'product', 'quantity', 'price', 'created', 'modified', 'user_modified')

@admin.register(ShoppingCart)
class ShoppingCartAdmin(TimestampedAdmin):
    list_display = ('user', 'created', 'modified', 'user_modified')

@admin.register(CartDetail)
class CartDetailAdmin(TimestampedAdmin):
    list_display = ('shopping_cart', 'product', 'quantity', 'created', 'modified', 'user_modified')

@admin.register(Address)
class AddressAdmin(TimestampedAdmin):
    list_display = ('user', 'address_line', 'city', 'state', 'zip_code', 'country', 'created', 'modified', 'user_modified')

@admin.register(Payment)
class PaymentAdmin(TimestampedAdmin):
    list_display = ('order', 'payment_date', 'amount', 'payment_method', 'created', 'modified', 'user_modified')
