const express = require('express');
const routes = express.Router();
const TemperaturaController = require('../Controllers/TemperaturaController');

routes.get('/temperatura', TemperaturaController.index);

module.exports = routes;