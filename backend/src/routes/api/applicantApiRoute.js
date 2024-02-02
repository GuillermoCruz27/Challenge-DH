const express = require('express');
const applicantApiController = require('../../controllers/api/applicantApiController');
const applicantApiRoute = express.Router();

applicantApiRoute.get('/',applicantApiController.list);

applicantApiRoute.get('/:id',applicantApiController.show);

module.exports = applicantApiRoute;