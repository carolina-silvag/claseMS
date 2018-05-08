var nombreController = require ('../controller/nombreController');

module.exports = funcrion (app) {
    app.get('/servicios/microservicios/test/V1.0/nombre', nombreController.test);
}
