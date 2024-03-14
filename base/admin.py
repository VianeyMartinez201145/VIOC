from django.contrib import admin
from .models import *
from import_export import resources
from import_export.admin import ImportExportModelAdmin

admin.site.register(Product)
admin.site.register(Review)
admin.site.register(Order)
admin.site.register(OrderItem)
admin.site.register(ShippingAddress)

class UserAdmin(ImportExportModelAdmin):
    list_display = ('id', 'password', 'last_login', 'is_superuser', 'username', 'last_name', 'email', 'is_staff', 'is_active', 'date_joined', 'first_name')

admin.site.unregister(User)  # Desregistra el modelo User de auth.UserAdmin
admin.site.register(User, UserAdmin)  # Registra el modelo User con tu propia configuración en el admin

class ProductAdmin(ImportExportModelAdmin):
    list_display = ('name',	'brand', 'category', 'description',	'rating', 'numReviews', 'price', 'createdAt',	'_id', 'user_id', 'image', 'image_url',	'countInStock')

admin.site.unregister(Product)
admin.site.register(Product, ProductAdmin) 

class ReviewAdmin(ImportExportModelAdmin):
    list_display = ('name',	'rating', 'comment', '_id', 'product_id', 'user_id', 'createdAt')

admin.site.unregister(Review)
admin.site.register(Review, ReviewAdmin) 

