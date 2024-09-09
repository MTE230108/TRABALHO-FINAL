const {Model, DataTypes} = require('sequelize');
const sequelize = require("../config/database");

    class aluguel extends Model {}
    aluguel.init({
        id:{
            type: DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement: true
            
        }, 
        hora_de_devolucao: {
            type: DataTypes.STRING
        },
        preco:{
            type: DataTypes.STRING
        }, 
        devolvido:{
            type: DataTypes.TINYINT
        }
        
    } , {
        sequelize,
        modelname: 'aluguels',
        timestamps: false

     })

module.exports = aluguel