const {Model, DataTypes} = require('sequelize');
const sequelize = require("../config/database");

    class jogos extends Model {}
     jogos.init({
        id_jogos:{
            type: DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement: true
            
        }, 
        titulo: {
            type: DataTypes.STRING
        },
        preço:{
            type: DataTypes.TEXT
        }, 
        ano_publicaçao:{
            type: DataTypes.INTEGER
        },
        editora:{
            type: DataTypes.STRING
        },
        alugados:{
            type: DataTypes.TINYINT
        }
        
    } , {
        sequelize,
        modelname: 'jogos',
        timestamps: false

     })

module.exports = jogos  