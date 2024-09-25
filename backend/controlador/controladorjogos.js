const Jogos = require('../modelo/jogos');

const jogosController = {
    createJogo: async (req, res) => {
        try {
            const novojogos = await Jogos.create(req.body);
            res.json(novojogos);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    getAllJogos: async (req, res) => {
        try {
            const jogos = await Jogos.findAll();
            res.json(jogos);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    getJogoById: async (req, res) => {
        try {
            const jogos = await Jogos.findByPk(req.params.id);
            if (!jogos) {
                return res.status(404).send('jogos não encontrado');
            }
            res.json(jogos);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    updateJogo: async (req, res) => {
        try {
            const jogos = await Jogos.findOne({
                where: {
                    titulo: req.params.titulo
                }
            })
            if (!jogos) {
                return res.status(404).send('jogos não encontrado');
            }
            await jogos.update(req.body);
            res.send('jogos atualizado com sucesso');
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    deleteJogo: async (req, res) => {
        try {
            const jogos = await Jogos.findOne({
                where: {
                    titulo: req.params.titulo
                }
            });
            if (!jogos) {
                return res.status(404).send('jogos não encontrado');
            }
            await jogos.destroy();
            res.send('jogos deletado com sucesso');
        } catch (error) {
            res.status(500).send(error.message);
        }
    }

    // Implementação das funções de controle de estoque
    // registrarEntrada e registrarSaida
    // ... (a ser implementado)
};

module.exports = jogosController;