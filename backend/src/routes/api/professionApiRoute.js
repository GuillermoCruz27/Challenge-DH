const express = require('express');
const professionApiController = require('../../controllers/api/professionApiController');
const professionApiRoute = express.Router();

professionApiRoute.get('/', professionApiController.list);

module.exports = professionApiRoute;
