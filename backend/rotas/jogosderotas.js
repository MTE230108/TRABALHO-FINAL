const express = require('express');
const router = express.Router();
const JogoController = require('../controlador/controladorjogos');

// Rota para criar um novo Jogo
router.post('/Jogos', JogoController.createJogo);

// Rota para obter todos os Jogos
router.get('/Jogos', JogoController.getAllJogos);

// Rota para obter um Jogo pelo ID
router.get('/Jogos/:id', JogoController.getJogoById);

// Rota para atualizar um Jogo
router.put('/Jogos/:id', JogoController.updateJogo);

// Rota para deletar um Jogo
router.delete('/Jogos/:id', JogoController.deleteJogo);

module.exports = router;