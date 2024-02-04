const express = require('express');
const applicantApiController = require('../../controllers/api/applicantApiController');
const applicantApiRoute = express.Router();

applicantApiRoute.get('/',applicantApiController.list);

applicantApiRoute.get('/:id',applicantApiController.show);

applicantApiRoute.post('/',applicantApiController.store);

applicantApiRoute.put('/:id',applicantApiController.update);

applicantApiRoute.delete('/:id',applicantApiController.destroy);

//Obtener todos los aplicantes de una determinada profesion.
applicantApiRoute.get('/search/:name',applicantApiController.searchByProfession);

module.exports = applicantApiRoute;