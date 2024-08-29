const { Model, DataTypes } = require('sequelize');
const sequelize = require("../config/database");

class Clientes extends Model { }
Clientes.init({
    id_clientes: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true

    },
    nome_clientes: {
        type: DataTypes.INTEGER
    },
    telefone: {
        type: DataTypes.STRING
    },
    endereço: {
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
    modelname: 'clientes',
    timestamps: false 
})

module.exports = Clientes 