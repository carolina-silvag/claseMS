var nombreController = require('../controller/nombreController');
var postController = require('../controller/postController');

module.exports = function(app) {
    app.get('/servicios/microservicios/test/V1.0/nombre', nombreController.test);
    app.post('/servicios/microservicios/test/V1.0/post', postController.test);
    app.post('/servicios/microservicios/validateRUT/V1.0/post', postController.validateRut);
}

