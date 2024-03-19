from django.contrib import admin
from django.urls import path, include

from django.conf import settings
from django.conf.urls.static import static
from django.views.generic import TemplateView
from base.views.product_views import getDataAPI
from base.views.order_views import getDataOAPI

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', TemplateView.as_view(template_name='index.html')),
    path('api/products/', include('base.urls.product_urls')),
    path('api/users/', include('base.urls.user_urls')),
    path('api/orders/', include('base.urls.order_urls')),
    path('getDataAPI/', getDataAPI, name='obtener_datos'),
    path('getDataOAPI/', getDataOAPI, name='obtener_datosO'),

    #Category:
    path('api/category/otros/', include('base.urls.otros')),
    path('api/category/lipstick/', include('base.urls.lipstick')),
    path('api/category/liquid/', include('base.urls.categoryp')),
    path('api/category/pencil/', include('base.urls.pencil')),
    path('api/category/powder/', include('base.urls.powder')),
    path('api/category/palette/', include('base.urls.palette')),
    path('api/category/cream/', include('base.urls.cream')),
    path('api/category/mineral/', include('base.urls.mineral')),
    path('api/category/lipStain/', include('base.urls.lipStain')),
    path('api/category/bbcc/', include('base.urls.bbcc')),
    path('api/category/lipGloss/', include('base.urls.lipGloss')),
    path('api/category/concealer/', include('base.urls.concealer')),
    path('api/category/highlighter/', include('base.urls.highlighter')),
    path('api/category/contour/', include('base.urls.contour')),
    path('api/category/gel/', include('base.urls.gel')),

    #Marcas:

]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
