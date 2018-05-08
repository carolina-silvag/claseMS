Const express = require('express');
var bodyParser = require('body-parser');
var ex = express();

ex.use(bodyParser.urlencoded({ extended: false}))

ex.use(bodyParser.json())

ex.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods','POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Request-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', false);
    next();
});

var puerto2 = 3020;

require('./app/routes/routes')(ex);
console.log("Iniciando Billetera BD");
ex.listen(puerto2);
console.log("INICIADO");
