const aluguel = require('../modelo/aluguel');

const aluguelController = {
    createAluguel: async (req, res) => {
        try {
            const novoaluguel = await aluguel.create(req.body);
            res.json(novoaluguel);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    getAllAlugueis: async (req, res) => {
        try {
            const aluguels = await aluguel.findAll();
            res.json(aluguels);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    getAluguelById: async (req, res) => {
        try {
            const aluguel = await aluguel.findByPk(req.params.id);
            if (!aluguel) {
                return res.status(404).send('aluguel não encontrado');
            }
            res.json(aluguel);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    updateAluguel: async (req, res) => {
        try {
            const aluguel = await aluguel.findByPk(req.params.id);
            if (!aluguel) {
                return res.status(404).send('aluguel não encontrado');
            }
            await aluguel.update(req.body);
            res.send('aluguel atualizado com sucesso');
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    deleteAluguel: async (req, res) => {
        try {
            const aluguel = await aluguel.findByPk(req.params.id);
            if (!aluguel) {
                return res.status(404).send('aluguel não encontrado');
            }
            await aluguel.destroy();
            res.send('aluguel deletado com sucesso');
        } catch (error) {
            res.status(500).send(error.message);
        }
    }, login:async(req, res) => {
        try{
            const aluguel = await aluguel.findOne({where: {email: req.body.email}});
            if(!aluguel){
                res.status(404).send('Não achei o aluguel');
            }
            console.log(aluguel)

            if(aluguel.email == req.body.email && aluguel.senha == req.body.senha){
                return restore.status(200).send('aluguel logado com sucesso');
            }else{
                res.status(400).send('E-mail ou senha incorreto');
            }
        } catch(error){
            res.status(500).send(error.message);
        }
    }

    // Implementação das funções de controle de estoque
    // registrarEntrada e registrarSaida
    // ... (a ser implementado)
};

module.exports = aluguelController;