var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors= require('cors')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//MIDDLEWARE PARA PETICIONES. 
//SE VINCULAN A LA INSTANCIA DE APP

//el primer parametro es la ruta, el segundo el fichero que se ejecutará
//dentro de cada uno podemos seguir definiendo rutas
app.use('/', indexRouter);
app.use('/users', usersRouter);//enrutador de users

module.exports = app;
