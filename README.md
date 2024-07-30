<div align="center">
<table>
    <theader>
        <tr>
            <td style="width:25%;"><img src="https://github.com/rescobedoq/pw2/blob/main/epis.png?raw=true" alt="EPIS" style="width:80%; height:auto"/></td>
            <td>
                <span style="font-weight:bold;">UNIVERSIDAD NACIONAL DE SAN AGUSTIN</span><br />
                <span style="font-weight:bold;">FACULTAD DE INGENIERÍA DE PRODUCCIÓN Y SERVICIOS</span><br />
                <span style="font-weight:bold;">DEPARTAMENTO ACADÉMICO DE INGENIERÍA DE SISTEMAS E INFORMÁTICA</span><br />
                <span style="font-weight:bold;">ESCUELA PROFESIONAL DE INGENIERÍA DE SISTEMAS</span>
            </td>            
        </tr>
    </theader>
    <tbody>
        <tr>
        <td colspan="2"><span style="font-weight:bold;">Proyecto web</span>: Desarrollo de una aplicación web Tienda Online</td>
        </tr>
        <tr>
        <td colspan="2"><span style="font-weight:bold;">Fecha</span>:  2024/07/28</td>
        </tr>
    </tbody>
</table>
</div>

<div align="center">
<span style="font-weight:bold;">PROYECTO WEB</span><br />
</div>


<table>
<theader>
<tr><th>INFORMACIÓN BÁSICA</th></tr>
</theader>
<tbody>
    <tr>
        <td>ASIGNATURA:</td><td>Programación Web 2</td>
    </tr>
    <tr>
        <td>SEMESTRE:</td><td>III</td>
    </tr>
    <tr>
        <td>FECHA INICIO:</td><td>16-Jul-2024</td><td>FECHA FIN:</td>
        <td>28-Jul-2024</td><td>DURACIÓN:</td><td>04 horas</td>
    </tr>
    <tr>
        <td colspan="3">DOCENTES:
        <ul>
        <li>Richart Smith Escobedo Quispe - rescobedoq@unsa.edu.pe</li>
        </ul>
        </td>
    </<tr>
</tdbody>
</table>

#   WebApp con Django

[![License][license]][license-file]
[![Downloads][downloads]][releases]
[![Last Commit][last-commit]][releases]

[![Debian][Debian]][debian-site]
[![Git][Git]][git-site]
[![GitHub][GitHub]][github-site]
[![Vim][Vim]][vim-site]
[![Java][Java]][java-site]

##  Tipo de Sistema
    El sistema desarrollado es una aplicación web para la gestión y visualización de productos, integrada mediante un backend en Django y un frontend en React. 

##  Requisitos del sistema
    El sistema debe satisfacer los siguientes requisitos funcionales y no funcionales:

    - RQ01 : El sistema debe estar disponible en Internet a traves de una URL.
    
    - RQ02 : El sistema debe permitir ver los datos de la base de datos
    

##  Modelo de datos
    El modelo de datos esta conformado por las siguientes entidades.

    -   User : En esta entidad se almacena la información de los usuarios: Ejemplo: Juan, juan@gmail.com, 1234
    Omar, omar@gmail.com, tre4

    -   Category : En esta entidad se almacena la información de las categorias de los productos: Ejemplo: snack, bebida, etc
    
    -   Product : Almacena los datos de los productos name description price stock
    ej: gaseosa inka cola, bebida gasificada, 2, 20

    -   ProductCategory: combina los datos de producto y category
    contiene datos de nombre y category
    gaseosa inka cola, gaseosa

    -   Order : Contiene User, Ordendate y status
    el usuario que hace la orden su fecha y si ya cancelo
    
    -   OrderDetail : Contiene order, product, quantity y price. Da mayor informacion con respecto a la orden del usuario 

    -   ShoppingCart: Tiene un usuario que lo usa y una fecha de creacion

    -   CartDetail: Mayor informacion del carrito como el carro el producto que hay y la cantidad que hay

    -   Address : Direccion del usuario como ciudad pais estado code

    -   Payment : Indica el pago deldel producto la orden del producto, su fecha amount(cantidad) y paymentmethod  



##  Diccionario de datos

    En la construcción de software y en el diccionario de datos sobre todo se recomienda y se utilizará el idioma inglés para especificar objetos, atributos, etc.

| User | | | | | |
| -- | -- | -- | -- | -- | -- |
| Atributo  | Tipo  | Nulo | Clave | Predeterminado | Descripción |
| username  | Numerico| No | Si | Ninguno | usuario |
| email  | Cadena| No | No | Ninguno | email |
| password  | Cadena| No | No | Ninguno | password |


| Category | | | | | |
| -- | -- | -- | -- | -- | -- |
| Atributo  | Tipo  | Nulo | Clave | Predeterminado | Descripción |
| name | Cadena| No | No | Ninguno | Nombres |
| description | Cadena| No | No | Ninguno | Descripcion |


| Product | | | | | |
| -- | -- | -- | -- | -- | -- |
| Atributo  | Tipo  | Nulo | Clave | Predeterminado | Descripción |
| name  | Cadena| No | Si | Ninguno | nombre |
| description  | Cadena| No | No | Ninguno | descripcion |
| price  | Numerico| No | No | Ninguno | precio |
| stock_quantity  | Cadena| No | No | Ninguno | cantidad de stock |


| Order | | | | | |
| -- | -- | -- | -- | -- | -- |
| Atributo  | Tipo  | Nulo | Clave | Predeterminado | Descripción |
| user | Cadena| No | No | Ninguno | usuario |
| order_date | date| No | No | Ninguno | fecha |
| status | Cadena| No | No | Ninguno | estado |


| ProductCategory | | | | | |
| -- | -- | -- | -- | -- | -- |
| Atributo  | Tipo  | Nulo | Clave | Predeterminado | Descripción |
| product | Cadena| No | No | Ninguno | Nombre |
| category | Cadena| No | No | Ninguno | cateogry |


| OrderDetail | | | | | |
| -- | -- | -- | -- | -- | -- |
| Atributo  | Tipo  | Nulo | Clave | Predeterminado | Descripción |
| order | Cadena| No | No | Ninguno | orden |
| product | Cadena| No | No | Ninguno | producto |
| quantity | Numerico| No | No | Ninguno | cantidad |
| price | Numerico| No | No | Ninguno | precio |


 ShoppingCart | | | | | |
| -- | -- | -- | -- | -- | -- |
| Atributo  | Tipo  | Nulo | Clave | Predeterminado | Descripción |
| user | Cadena| No | No | Ninguno | Nombre |
| created_at | auto| No | No | Auto | fecha de creacion |


 CartDetail | | | | | |
| -- | -- | -- | -- | -- | -- |
| Atributo  | Tipo  | Nulo | Clave | Predeterminado | Descripción |
| shopping_cart | Cadena| No | No | Ninguno | carrito |
| product | Cadena| No | No | Ninguno | nombreproducto |
| quantity | Numerico| No | No | Ninguno | cantidad |


| Address | | | | | |
| -- | -- | -- | -- | -- | -- |
| Atributo  | Tipo  | Nulo | Clave | Predeterminado | Descripción |
| user | Cadena| No | No | Ninguno | Nombre |
| address_line | Cadena| No | No | Ninguno | Direccion |
| city | Cadena| No | No | Ninguno | ciudad |
| state | Cadena| No | No | Ninguno | estado |
| zip_code | Cadena| No | No | Ninguno | Codigo postal |
| country | Cadena| No | No | Ninguno | pais |


 Payment | | | | | |
| -- | -- | -- | -- | -- | -- |
| Atributo  | Tipo  | Nulo | Clave | Predeterminado | Descripción |
| order | Cadena| No | No | Ninguno | Nombre |
| payment_date | Date| No | No | Ninguno | fecha |
| amount | Numerico| No | No | Ninguno | cantidad |
| payment_method | Cadena| No | No | Ninguno | metodo |


##  Diagrama Entidad-Relación
    Esta subido en la carpeta proyecto final

##  Administración con Django
    Se muestran los pasos realizados para crear el Proyecto, la aplicación, creacion de modelos, migraciones y habilitación del panel de administración en Django.
    
    En Admin se decalaran los modelos :
    from django.contrib import admin
    from .models import User, Category, Product, ProductCategory, Order, OrderDetail, ShoppingCart, CartDetail, Address, Payment

    class TimeAdmin(admin.ModelAdmin):
        readonly_fields = ('created', 'modified', 'user_modified')

    @admin.register(User)
    class UserAdmin(TimeAdmin):
        list_display = ('username', 'email', 'created', 'modified', 'user_modified')

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

    
    


##  
    
    URL: https://tiendaonline-9c83954f4ca8.herokuapp.com/admin/

    


##  Servicios mediante una API RESTful
    Se ha creado una aplicación que pondra a disposición cierta información para ser consumida por otros clientes HTTP.
    1. GET : Con el método get se devolverá la lista de cursos, grupos y horarios establecidos para que el alumno sobre todo vea esta información en cualquier otro medio. En formato JSON. 
    2. POST : Con este método se enviara el código del alumno y se devolvera sus inscripciones. En formato JSON.
    
    @api_view(['POST'])
    def login(request):
        user = get_object_or_404(User, username=request.data['username'])
        if not user.check_password(request.data['password']):
            return Response({"error": "Invalid password"}, status=status.HTTP_400_BAD_REQUEST)
    
        token,created =Token.objects.get_or_create(user=user)
        serializer = UserSerializer(instance=user)
    
        return Response({"token": token.key, "user": serializer.data},status=status.HTTP_200_OK)

    @api_view(['POST'])
    def register(request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            user = User.objects.get(username=serializer.data['username'])
            user.set_password(serializer.data['password'])
            user.save()
            
            token = Token.objects.create(user=user)
            return Response({"token": token.key, "user": serializer.data},status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @api_view(['POST'])
    @authentication_classes([TokenAuthentication])
    @permission_classes([IsAuthenticated])
    def profile(request):
        serializer = UserSerializer(instance=request.user)
        return Response(serializer.data, status=status.HTTP_200_OK)





Github del proyecto:https://github.com/KevinLlacma/Pweb2_D.git

URL en Heroku:https://tiendaonline-9c83954f4ca8.herokuapp.com/admin/


Video 01 - https://drive.google.com/drive/folders/1T8nM5Nt3Vkk6XewD-Efq7Ox9W4a4FArZ?usp=sharing

Video 02 - https://drive.google.com/drive/folders/1cQBiX3VSxtvxCGZZBZ9AmNM-UXsLbXyZ?usp=sharing

video 03 - https://drive.google.com/drive/folders/1JLmIR2-l0WxNT_8RNGhw74M4fjxRvS9T?usp=sharing

video 04 - https://drive.google.com/drive/folders/1uss2bQSaq_aRTR2Ao_o-etDGT3mGx87s?usp=sharing

video 05 - https://drive.google.com/drive/folders/1xKXl07v1K6RzZLr3dxiAifhXlVGePoDO?usp=sharing

video diapositiva - https://drive.google.com/drive/folders/1xKXl07v1K6RzZLr3dxiAifhXlVGePoDO?usp=sharing


## REFERENCIAS
    [1]Tarantino, Q., Foxx, J., Waltz, C., & DiCaprio, L. (2013). Django unchained. Sony Pictures Home Entertainment.
    [2] Gackenheimer, C. (2015). Introduction to React. Apress.
    [3] Arsaute, A., Zorz´an, F. A., Daniele, M., Gonz´alez, A., & Frutos, M.(2018). Generaci´on autom´atica de API REST a partir de API Java basada en transformaci´on de Modelos (MDD). In XX Workshop de Investigadores en Ciencias de la Computaci´on (WICC 2018, Universidad Nacional del Nordeste).
    [4] Owens, M., & Allen, G. (2010). SQLite. New York: Apress LP.
    [5] Lee, B. H., Dewi, E. K., & Wajdi, M. F. (2018, April). Data security in cloud computing using  AES under HEROKU cloud. In 2018 27th wireless and optical communication conference (WOCC) (pp. 1-5). IEEE. 

#

[license]: https://img.shields.io/github/license/rescobedoq/pw2?label=rescobedoq
[license-file]: https://github.com/rescobedoq/pw2/blob/main/LICENSE

[downloads]: https://img.shields.io/github/downloads/rescobedoq/pw2/total?label=Downloads
[releases]: https://github.com/rescobedoq/pw2/releases/

[last-commit]: https://img.shields.io/github/last-commit/rescobedoq/pw2?label=Last%20Commit

[Debian]: https://img.shields.io/badge/Debian-D70A53?style=for-the-badge&logo=debian&logoColor=white
[debian-site]: https://www.debian.org/index.es.html

[Git]: https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white
[git-site]: https://git-scm.com/

[GitHub]: https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white
[github-site]: https://github.com/

[Vim]: https://img.shields.io/badge/VIM-%2311AB00.svg?style=for-the-badge&logo=vim&logoColor=white
[vim-site]: https://www.vim.org/

[Java]: https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=java&logoColor=white
[java-site]: https://docs.oracle.com/javase/tutorial/


[![Debian][Debian]][debian-site]
[![Git][Git]][git-site]
[![GitHub][GitHub]][github-site]
[![Vim][Vim]][vim-site]
[![Java][Java]][java-site]


[![License][license]][license-file]
[![Downloads][downloads]][releases]
[![Last Commit][last-commit]][releases]