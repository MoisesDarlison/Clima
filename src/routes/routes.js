const express = require('express');
const route = express();
const buscaControllers = require('../controllers/buscaControllers')


route.get('/',buscaControllers.busca)

module.exports = route

