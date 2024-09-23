const express = require('express');
const router = express.Router();
const comidasController = require('../controlador/controladorcomida');

// Rota para criar um novo comidas
router.post('/comidas', comidasController.createcomidas);

// Rota para obter todos os comidass
router.get('/comidas', comidasController.getAllcomidas);

// Rota para obter um comidas pelo ID
router.get('/comidas/:id', comidasController.getcomidasById);

// Rota para atualizar um comidas
router.put('/comidas/:id', comidasController.updatecomidas);

// Rota para deletar um comidas
router.delete('/comidas/:id', comidasController.deletecomidas);

module.exports = router;