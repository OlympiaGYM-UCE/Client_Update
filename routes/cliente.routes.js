const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/cliente.controller');


router.put('/:id', clienteController.update);


module.exports = router;
