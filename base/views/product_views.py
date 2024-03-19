from django.shortcuts import render
import requests
import random
from rest_framework import serializers, viewsets

from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger

from base.models import Product, Review
from base.serializers import ProductSerializer

from rest_framework import status, viewsets, generics
from django_filters.rest_framework import DjangoFilterBackend
from ..filters import ProductFilter  # Importa tu filtro personalizado


@api_view(['GET'])
def getProducts(request):
    query = request.query_params.get('keyword', '')

    products = Product.objects.filter(name__icontains=query).order_by('-createdAt')

    # Mezclar los productos
    shuffled_products = list(products)
    random.shuffle(shuffled_products)

    page = request.query_params.get('page')
    paginator = Paginator(shuffled_products, 8)

    try:
        products = paginator.page(page)
    except PageNotAnInteger:
        products = paginator.page(1)
    except EmptyPage:
        products = paginator.page(paginator.num_pages)

    if page is None:
        page = 1

    page = int(page)
    serializer = ProductSerializer(products, many=True)
    return Response({'products': serializer.data, 'page': page, 'pages': paginator.num_pages})


@api_view(['GET'])
def getTopProducts(request):
    products = Product.objects.filter(rating__gte=4).order_by('-rating')[0:5]
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getProduct(request, pk):
    product = Product.objects.get(_id=pk)
    serializer = ProductSerializer(product, many=False)
    return Response(serializer.data)

@api_view(['GET'])
def getOtros(request):
    category = request.query_params.get('category', 'otros', )  # Obtener el parámetro 'category' de la consulta
    products = Product.objects.filter(category=category)  # Filtrar los productos por la categoría proporcionada

    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getLipstick(request):
    category = request.query_params.get('category', 'lipstick', )
    products = Product.objects.filter(category=category)

    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getCategory(request):
    category = request.query_params.get('category', 'liquid', )
    products = Product.objects.filter(category=category)

    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getPencil(request):
    category = request.query_params.get('category', 'pencil', )
    products = Product.objects.filter(category=category)

    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getPowder(request):
    category = request.query_params.get('category', 'powder', )
    products = Product.objects.filter(category=category)

    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getPalette(request):
    category = request.query_params.get('category', 'palette', )
    products = Product.objects.filter(category=category)

    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getCream(request):
    category = request.query_params.get('category', 'cream', )
    products = Product.objects.filter(category=category)

    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getMineral(request):
    category = request.query_params.get('category', 'mineral', ) 
    products = Product.objects.filter(category=category) 

    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getLipStain(request):
    category = request.query_params.get('category', 'lip_stain', )
    products = Product.objects.filter(category=category)

    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getBBCC(request):
    category = request.query_params.get('category', 'bb_cc', ) 
    products = Product.objects.filter(category=category)

    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getLipGloss(request):
    category = request.query_params.get('category', 'lip_gloss', )
    products = Product.objects.filter(category=category)

    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getConcealer(request):
    category = request.query_params.get('category', 'concealer', )
    products = Product.objects.filter(category=category)

    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getHighlighter(request):
    category = request.query_params.get('category', 'highlighter', ) 
    products = Product.objects.filter(category=category) 

    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getContour(request):
    category = request.query_params.get('category', 'contour', )  
    products = Product.objects.filter(category=category)  

    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getGel(request):
    category = request.query_params.get('category', 'gel', )  
    products = Product.objects.filter(category=category) 

    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getNYX(request):
    brand = request.query_params.get('brand', 'nyx', )  
    products = Product.objects.filter(brand=brand) 

    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)

@api_view(['POST'])
@permission_classes([IsAdminUser])  
def createProduct(request):
    user = request.user

    product = Product.objects.create(
        user=user,
        name='Sample Name',
        price=0,
        brand='Sample Brand',
        countInStock=10,
        category='Sample Category',
        description=''
    )

    serializer = ProductSerializer(product, many=False)
    return Response(serializer.data)


@api_view(['PUT'])
@permission_classes([IsAdminUser])
def updateProduct(request, pk):
    data = request.data
    product = Product.objects.get(_id=pk)

    product.name = data['name']
    product.price = data['price']
    product.brand = data['brand']
    product.countInStock = data['countInStock']
    product.category = data['category']
    product.description = data['description']

    product.save()

    serializer = ProductSerializer(product, many=False)
    return Response(serializer.data)


@api_view(['DELETE'])
@permission_classes([IsAdminUser])
def deleteProduct(request, pk):
    product = Product.objects.get(_id=pk)
    product.delete()
    return Response('Producted Deleted')


@api_view(['POST'])
def uploadImage(request):
    data = request.data

    product_id = data['product_id']
    product = Product.objects.get(_id=product_id)

    product.image = request.FILES.get('image')
    product.save()

    return Response('Image was uploaded')


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def createProductReview(request, pk):
    user = request.user
    product = Product.objects.get(id=pk)
    data = request.data

    alreadyExists = product.review_set.filter(user=user).exists()
    if alreadyExists:
        content = {'detail': 'El producto ya ha sido calificado'}
        return Response(content, status=status.HTTP_400_BAD_REQUEST)

    elif data['rating'] == 0:
        content = {'detail': 'Por favor selecciona una calificación'}
        return Response(content, status=status.HTTP_400_BAD_REQUEST)

    else:
        review = Review.objects.create(
            user=user,
            product=product,
            name=user.first_name,
            rating=data['rating'],
            comment=data['comment'],
        )

        reviews = product.review_set.all()
        product.numReviews = len(reviews)

        total = 0
        for i in reviews:
            total += i.rating

        product.rating = total / len(reviews)
        product.save()

        return Response('Reseña añadida')
def getDataAPI(request):
    response = requests.get('https://makeup-api.herokuapp.com/api/v1/products.json')
    data = response.json()
    # Procesar los datos recibidos y guardarlos en la base de datos
    for item in data:
        newdata = Product(
            _id=item['id'],
            name=item['name'],
            brand=item['brand'],
            category=item['category'],
            description=item['description'],
            rating=item['rating'],
            price=item['price'],
            createdAt =item['created_at'],
            image_url=item['api_featured_image'],
        )
        newdata.save()

    return render(request, 'exito.html')


   
Product.objects.all().update(countInStock=30)
Product.actualizar_categorias()