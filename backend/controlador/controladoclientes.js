const Cliente = require('../modelo/clientes');

const ClienteController = {
    createCliente: async (req, res) => {
        try {
            const novoCliente = await Cliente.create(req.body);
            res.json(novoCliente);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    getAllClientes: async (req, res) => {
        try {
            const clientes = await Cliente.findAll();
            res.json(clientes);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    getClienteById: async (req, res) => {
        try {
            const cliente = await Cliente.findByPk(req.params.id);
            if (!cliente) {
                return res.status(404).send('Cliente não encontrado');
            }
            res.json(cliente);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    updateCliente: async (req, res) => {
        try {
            const cliente = await Cliente.findByPk(req.params.id);
            if (!cliente) {
                return res.status(404).send('Cliente não encontrado');
            }
            await cliente.update(req.body);
            res.send('Cliente atualizado com sucesso');
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    deleteCliente: async (req, res) => {
        try {
            const cliente = await Cliente.findByPk(req.params.id);
            if (!cliente) {
                return res.status(404).send('Cliente não encontrado');
            }
            await cliente.destroy();
            res.send('Cliente deletado com sucesso');
        } catch (error) {
            res.status(500).send(error.message);
        }
    }, login:async(req, res) => {
        try{
            const clientes = await clientes.findByPk(req.params.id);
            if(aluno.email == req.body.email && aluno.senha == req.body.senha){
                return restore.status(200).send('cliente logado com sucesso');
            }else{
                res.send('E-mail ou senha incorreto');
            }
        } catch(error){
            res.status(500).send(error.message);
        }
    }

    // Implementação das funções de controle de estoque
    // registrarEntrada e registrarSaida
    // ... (a ser implementado)
};

module.exports = ClienteController;