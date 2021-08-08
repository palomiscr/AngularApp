
var express = require('express');
var router = express.Router();
var users_controller = require('../controllers/userscontrollers');
// importo el archivo entero, desde aquí accedo a sus funciones "por separado"
const { check } = require('express-validator/check');

/*
 Esta clase se llama cuando se usa /users.
 Por tanto definimos los distintos metodos, y en funcion de cada uno llamamos
 a un metodo del controlador, que es el que tiene la logica. 
 De esta manera evitamos meter funciones anonimas grandes que dificultarian la mantenibilidad

    router.get('/', function (req, res, next) {
        res.send('respond with a resource');
    });

 */

/* Validation rules */
const valid_user = [
    check('name', "El nombre tiene que tener como minimo 3 caracteres")
        .isLength({ min: 3 })
        .isAlpha(),
    check('surname')
        .isLength({ min: 3 })
        .isAlpha(),
    check('phone', "el telefono tiene que tener como minimo 7 caracteres")
        .isLength({ min: 7, max: 10 })
        .isMobilePhone(),
    check('age')
        .isInt({ min: 0, max: 125 }),
    check('dni')
        .isAlphanumeric()
        .isLength({ min: 9 }),
    check('bday')
        .isISO8601(),
    check('favcolor')
        .isAlpha()
        .isLength({ min: 3 }),
    check('gender')
        .isIn(["Hombre", "Mujer", "Otro", "No especificado"])
        
];
//accedo al controlador poniendo su nombre. nombre de la funcion que he exportado
// controlador de users y sus funciones
/* GET users listing. */
router.get('/', users_controller.users_list);
/* POST create user. */
router.post('/',valid_user, users_controller.users_create);
/* PUT update user. */
router.put('/:id', valid_user, users_controller.users_update_one);
/* DELTE delete user. */
router.delete('/:id', users_controller.users_delete_one);

module.exports = router;