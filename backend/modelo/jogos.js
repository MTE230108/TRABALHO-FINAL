const {Model, DataTypes} = require('sequelize');
const sequelize = require("../config/database");

    class Jogo extends Model {}
     Jogo.init({
        id:{
            type: DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement: true
            
        }, 
        titulo: {
            type: DataTypes.STRING
        },
        preco:{
            type: DataTypes.DECIMAL
        }, 
        ano_publicacao:{
            type: DataTypes.INTEGER
        },
        editora:{
            type: DataTypes.STRING
        },
        alugados:{
            type: DataTypes.STRING
        }
        
        
    } , {
        sequelize,
        modelname: 'jogos',
        timestamps: false

     })

module.exports = Jogo  