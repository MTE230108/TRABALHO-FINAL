const { Model, DataTypes } = require('sequelize');
const sequelize = require("../config/database");

class Cliente extends Model { }
Cliente.init({
    id_cliente: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true

    },
    nome: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    idade: {
        type : DataTypes.INTEGER
    },
    telefone: {
        type: DataTypes.STRING
    },
    jogo: {
        type: DataTypes.INTEGER
    },
    cpf: {
        type: DataTypes.STRING
    },
   hora_de_devolucao: {
        type: DataTypes.INTEGER
    }
}, {
    sequelize,
    modelName: 'clientes',
    timestamps: false 
})

module.exports = Cliente 