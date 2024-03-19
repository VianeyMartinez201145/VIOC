from django.urls import path
from base.views import product_views as views
from base.views.product_views import getDataAPI
from base.views.order_views import getDataOAPI

urlpatterns = [

    path('', views.getMineral, name='get_category_mineral'),
    
    path('create/', views.createProduct, name="product-create"),
    path('upload/', views.uploadImage, name="image-upload"),

    path('<str:pk>/reviews/', views.createProductReview, name="create-review"),
    path('top/', views.getTopProducts, name='top-products'),
    path('<str:pk>/', views.getProduct, name="product"),

    path('update/<str:pk>/', views.updateProduct, name="product-update"),
    path('delete/<str:pk>/', views.deleteProduct, name="product-delete"),
    path('getDataAPI/', getDataAPI, name='get-data'),
    path('getDataOAPI/', getDataOAPI, name='obtener_datosO'),
]
