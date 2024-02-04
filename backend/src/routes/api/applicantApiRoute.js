const express = require('express');
const applicantApiController = require('../../controllers/api/applicantApiController');
const applicantApiRoute = express.Router();

applicantApiRoute.get('/',applicantApiController.list);

applicantApiRoute.get('/:id',applicantApiController.show);

applicantApiRoute.post('/',applicantApiController.store);

applicantApiRoute.put('/:id',applicantApiController.update);

applicantApiRoute.delete('/:id',applicantApiController.destroy);

module.exports = applicantApiRoute;