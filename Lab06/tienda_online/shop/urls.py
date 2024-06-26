from django.urls import path, include
from rest_framework import routers
from shop import views

router = routers.DefaultRouter()
router.register(r'user',views.UserListView)
router.register(r'categories',views.CategoryListView)
router.register(r'orders',views.OrderListView)
router.register(r'ordersDetail',views.OrderDetailView)
router.register(r'shoppingCarts',views.ShoppingCartView)
router.register(r'cartsDetail',views.CartDetailView)
router.register(r'address',views.AddressView)
router.register(r'payments',views.PaymentView)

urlpatterns = [
    path('', include(router.urls)),
]




