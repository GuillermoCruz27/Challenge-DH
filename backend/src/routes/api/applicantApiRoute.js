const express = require('express');
const applicantApiController = require('../../controllers/api/applicantApiController');
const applicantApiRoute = express.Router();

// configuracion de multer
const uploadFile = require("../../middlewares/multerMiddleware");

applicantApiRoute.get('/',applicantApiController.list);

applicantApiRoute.get('/:id',applicantApiController.show);

applicantApiRoute.post('/',uploadFile.single("image"), applicantApiController.store);

applicantApiRoute.put('/:id',applicantApiController.update);

applicantApiRoute.delete('/:id',applicantApiController.destroy);

//Obtener todos los aplicantes de una determinada profesion(id).
applicantApiRoute.get('/search/:id',applicantApiController.searchByProfession);

module.exports = applicantApiRoute;