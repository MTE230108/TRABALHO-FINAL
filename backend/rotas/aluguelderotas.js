const express = require('express');
const router = express.Router();
const aluguelController = require('../controlador/controladordealguel');

// Rota para criar um novo aluguel
router.post('/aluguel', aluguelController.createAluguel);

// Rota para obter todos os aluguels
router.get('/aluguel', aluguelController.getAllAlugueis);

// Rota para obter um aluguel pelo ID
router.get('/aluguel/:id', aluguelController.getAluguelById);

// Rota para atualizar um aluguel
router.put('/aluguel/:id', aluguelController.updateAluguel);

// Rota para deletar um aluguel
router.delete('/aluguel/:id', aluguelController.deleteAluguel);

module.exports = router;