const express = require('express');
const routes = express.Router();
const TemperatureController = require('../controllers/TemperatureController');

routes.get('/temperature', TemperatureController.index);

module.exports = routes;