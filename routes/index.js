const { Router } = require('express');
const router = Router();

// facturas
const vsimplesController = require('../controllers/cuenta/vsimplesController');
const sdetalladosController = require('../controllers/cuenta/sdetalladosController');

//RUTAS

module.exports = (app) => {

    //sdetallados
    router.get('/sdetallados/get', sdetalladosController.find);
    router.post('/sdetallados/create', sdetalladosController.create);

    //vsimples
    router.post('/vsimples/create', vsimplesController.create);
    router.get('/vsimples/getVisitasData', vsimplesController.getVisitasData);
    
    //facturas

    app.use('/', router);

};