const Comidas = require('../modelo/comidas');

const comidasController = {
    createcomidas: async (req, res) => {
        try {
            const novocomidas = await Comidas.create(req.body);
            res.json(novocomidas);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    getAllcomidas: async (req, res) => {
        try {
            const comidas = await Comidas.findAll();
            res.json(comidas);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    getcomidasById: async (req, res) => {
        try {
            const comidas = await Comidas.findByPk(req.params.id);
            if (!comidas) {
                return res.status(404).send('comidas não encontrado');
            }
            res.json(comidas);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    updatecomidas: async (req, res) => {
        try {
            const comidas = await Comidas.findOne({
                where: {
                    nome: req.params.nome
                }    
            });
            if (!comidas) {
                return res.status(404).send('comidas não encontrado');
            }
            await comidas.update(req.body);
            res.send('comidas atualizado com sucesso');
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    deletecomidas: async (req, res) => {
        try {
            const comidas = await Comidas.findOne({
                where: {
                    nome: req.params.nome
                }    
            });
            if (!comidas) {
                return res.status(404).send('comidas não encontrado');
            }
            await comidas.destroy();
            res.send('comidas deletado com sucesso');
        } catch (error) {
            res.status(500).send(error.message);
        }
    }

    // Implementação das funções de controle de estoque
    // registrarEntrada e registrarSaida
    // ... (a ser implementado)
};

module.exports = comidasController;