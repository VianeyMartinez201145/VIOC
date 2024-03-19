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
    path('api/category/otros/', include('base.urls.categorias.otros')),
    path('api/category/lipstick/', include('base.urls.categorias.lipstick')),
    path('api/category/liquid/', include('base.urls.categorias.categoryp')),
    path('api/category/pencil/', include('base.urls.categorias.pencil')),
    path('api/category/powder/', include('base.urls.categorias.powder')),
    path('api/category/palette/', include('base.urls.categorias.palette')),
    path('api/category/cream/', include('base.urls.categorias.cream')),
    path('api/category/mineral/', include('base.urls.categorias.mineral')),
    path('api/category/lipStain/', include('base.urls.categorias.lipStain')),
    path('api/category/bbcc/', include('base.urls.categorias.bbcc')),
    path('api/category/lipGloss/', include('base.urls.categorias.lipGloss')),
    path('api/category/concealer/', include('base.urls.categorias.concealer')),
    path('api/category/highlighter/', include('base.urls.categorias.highlighter')),
    path('api/category/contour/', include('base.urls.categorias.contour')),
    path('api/category/gel/', include('base.urls.categorias.gel')),

    #Marcas:
    path('api/marcas/nyx', include('base.urls.marcas.nyx')),
    path('api/marcas/revlon', include('base.urls.marcas.revlon')),
    path('api/marcas/benefit', include('base.urls.marcas.benefit')),
    path('api/marcas/clinique', include('base.urls.marcas.clinique')),
    path('api/marcas/fenty', include('base.urls.marcas.fenty')),
    path('api/marcas/dior', include('base.urls.marcas.dior')),
    path('api/marcas/maybelline', include('base.urls.marcas.maybelline')),
    path('api/marcas/elf', include('base.urls.marcas.elf')),
    path('api/marcas/loreal', include('base.urls.marcas.loreal')),
    

]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
