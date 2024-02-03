const express = require('express');
const professionApiController = require('../../controllers/api/professionApiController');
const professionApiRoute = express.Router();

professionApiRoute.get('/', professionApiController.list);
professionApiRoute.get('/:id', professionApiController.search);

module.exports = professionApiRoute;
