// Crear el cliente de mongo
var MongoClient = require('mongodb').MongoClient;
// Variable para almacenar la conexi�n
var db = null; 
// Funci�n para conectar con la base de datos
module.exports.connect = function (url, callback) {
    // Si ya est� conectado, no se vuelve a conectar
    if (db) {
        return callback();
    }
    // Crear una instancia del cliente de MongoDB
    const client = new MongoClient(url, { useNewUrlParser: true });
    // Conectar el cliente al servidor
    client.connect(function (err, result) {
        if (err) {
            return callback(err);
        }
        console.log("Conectado a BD");
        db = result;
        callback();
    });
}
// Funci�n para cerrar la conexi�n con la base de datos
module.exports.close = function (callback) {
    if (db) {
        db.close(function (err, result) {
            console.log("Desconectado de BD");
            db = null;
            callback(err);
        });
    }
};
// Funci�n para obtener el cliente de MongoDB conectado a la DB
module.exports.get = function () {
    return db;
}