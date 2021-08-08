# AngularApp

---------------instrucciones------------------
en la carpeta API se encuentra el servidor. Se iniciarÃ¡ en el puerto 3000 con "npm start"
en la carpeta practica-final se encuentra la aplicación de Angular. Iniciar cn "ng serve -o"

------------descripción general-----------------
He decidido crear un servicio que se va a encargar de hacer las http request al servidor de express.
Al iniciarse la página y después de cada inserción, actualización y borrado, el controlador hace un get al servidor
(mediante los métodos del servicio) para mantener actualizada la página. 

Este método get en el controlador lo que va a hacer es un get al servidor mediante el servicio de angular,
y esa colección de usuarios la almacena en un array de usuarios, que será recorrida mediante un for en el frontend.

El frontend modifica un objeto de tipo Usuario mediante el binding. Al pulsar los botones se activan los diferentes métodos
del controlador que harán sus respectivas llamadas a los métodos del servicio para realizar inserciones, actualizaciones y borrados
usando el objeto Usuario que tienen almacenado. 
