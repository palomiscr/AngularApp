# AngularApp

---------------descripción---------------------

Aplicación básica MEAN(MongoDB, Express.js, AngularJS, Node.js) con funcionalidades CRUD para una lista de contactos donde cada contacto tiene
nombre, apellidos, teléfono, edad, DNI, color favorito, género y fecha de cumpleaños. 

---------------instrucciones para ejecutar el código------------------

Recomiendo abrir dos ventanas de visual studio y usar la consola que tienen incorporada.
En cada ventana ejecutamos "npm i" para instalar las dependencias de node.
En la carpeta API se encuentra el servidor. Se inicia en el puerto 3000 con "npm start"
En la carpeta practica-final se encuentra la aplicación de Angular. Iniciar cn "ng serve -o"


------------funcionamiento-----------------

He decidido crear un servicio que se va a encargar de hacer las http request al servidor de express.
Al iniciarse la página y después de cada inserción, actualización y borrado, el controlador hace un get al servidor
(mediante los métodos del servicio) para mantener actualizada la página. 

Este método get en el controlador lo que va a hacer es un get al servidor mediante el servicio de angular,
y esa colección de usuarios la almacena en un array de usuarios, que será recorrida mediante un for en el frontend.

El frontend modifica un objeto de tipo Usuario mediante el binding. Al pulsar los botones se activan los diferentes métodos
del controlador que harán sus respectivas llamadas a los métodos del servicio para realizar inserciones, actualizaciones y borrados
usando el objeto Usuario que tienen almacenado. 
