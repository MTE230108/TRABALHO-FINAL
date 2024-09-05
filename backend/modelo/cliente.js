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
        type: DataTypes.INTEGER
    },
    email: {
        type: DataTypes.STRING
    },
    telefone: {
        type: DataTypes.STRING
    },
    endereco: {
        type: DataTypes.STRING
    },
    cpf: {
        type: DataTypes.STRING
    },
   hora_de_jogo: {
        type: DataTypes.DECIMAL
    }
}, {
    sequelize,
    modelName: 'clientes',
    timestamps: false 
})

module.exports = Cliente 