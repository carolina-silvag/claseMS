var nombreController = require('../controller/nombreController');
var postController = require('../controller/postController');
var deleteController = require('../controller/deleteController');

module.exports = function(app) {
    app.get('/servicios/microservicios/test/V1.0/nombre', nombreController.test);
    app.post('/servicios/microservicios/test/V1.0/post', postController.test);
    app.delete('/servicios/microservicios/test/V1.0/delete', deleteController.test);
    app.post('/servicios/microservicios/test/V1.0/post2', post2Controller.test);
    app.post('/servicios/microservicios/test/V1.0/post3', post3Controller.test);
}

