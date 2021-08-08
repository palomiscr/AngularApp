// Incluir el fichero con la definición de la BD
var db = require('../db');
//CREAMOS ESTA CLASE PARA EXTRAER LA LOGICA DE CONTROL DEL SISTEMA DE RUTAS

// Display all users
/*module.exports.users_list = function (req, res) {
    throw new Error('Fallo');
};*/
var ObjectId = require('mongodb').ObjectId;
var {validationResult} = require('express-validator');


// Conectar con la BD
db.connect('mongodb://localhost:27017', function (err) {
    if (err) {
        throw ('Fallo en la conexión con la BD');
    }
});


// Display all users
module.exports.users_list = function (req, res, next) {
    if (db.get() === null) {
        next(new Error('La conexión no está establecida'));// manejo de fallos con express
        return;
    }

    db.get().db('apidb').collection('users').find().toArray(
        function(err, result) {
            if (err) {
                next(new Error('Fallo en la conexión con la BD')); // manejo de fallos con express
                return;
                // throw ('Fallo en la conexión con la BD');
            } else {
                res.send(result);
            }
        });
};


// Create one user
module.exports.users_create = function (req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {//hay errores
        return res.status(422).json({ errors: errors.array() });
    };
    if (db.get() === null) {
        next(new Error('La conexión no está establecida')); // manejo de fallos con express
        return;
    }
    const user = {};
    user.name = req.body.name;
    user.surname = req.body.surname;
    user.phone = req.body.phone;
    user.age = req.body.age;
    user.dni = req.body.dni;
    user.bday = req.body.bday;
    user.favcolor = req.body.favcolor;
    user.gender = req.body.gender;

    db.get().db('apidb').collection('users').insertOne(user,
        function(err, result) {
            if (err) {
                next(new Error('Fallo en la conexión con la BD')); // manejo de fallos con express
                return;
                // throw ('Fallo en la conexión con la BD');
            } else {
                res.send(result);
            }
        });
};

// Update users
module.exports.users_update_one = function (req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {//hay errores
        return res.status(422).json({ errors: errors.array() });
    };
    if (db.get() === null) {
        next(new Error('La conexión no está establecida'));
        return;
    }
    var id = new ObjectId(req.params.id);
    const filter = { _id: id };
    const update = {
        $set: {
            name: req.body.name,
            surname: req.body.surname,
            phone: req.body.phone,
            age: req.body.age,
            dni: req.body.dni,
            bday: req.body.bday,
            favcolor: req.body.favcolor,
            gender: req.body.gender

        }
    };
    console.log(filter);
    
    // Insertar un documento
    db.get().db('apidb').collection('users').updateOne(filter, update,
        function (err, result) {
            // Si se produjo un error, enviar el error a la siguiente función
            if (err) {
                next(new Error('Fallo en la conexión con la BD'));
                return;
            } else {
                // Si todo fue bien, devolver el resultado al cliente
                res.send(result);
            }
        });
};

// Delete users
module.exports.users_delete_one = function (req, res, next) {
    if (db.get() === null) {
        next(new Error('La conexión no está establecida'));
        return;
    }
    var id = new ObjectId(req.params.id);
    const filter = { _id: id };
    // Eliminar un documento
    db.get().db('apidb').collection('users').deleteOne(filter,
        function(err, result) {
        // Si se produjo un error, enviar el error a la siguiente función
        if (err) {
            next(new Error('Fallo en la conexión con la BD'));
            return;
        } else {
            // Si todo fue bien, devolver el resultado al cliente
            res.send(result);
        }
    });
};




