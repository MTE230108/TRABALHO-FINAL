const {Model, DataTypes} = require('sequelize');
const sequelize = require("../config/database");

    class comidas extends Model {}
     comidas.init({
        id:{
            type: DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement: true
            
        }, 
        nome: {
            type: DataTypes.STRING
        },
        preco:{
            type: DataTypes.TEXT
        }, 
        validade:{
            type: DataTypes.INTEGER
        },
        editora:{
            type: DataTypes.STRING
        },
        quantidade:{
            type: DataTypes.TINYINT
        }
        
    } , {
        sequelize,
        modelname: 'comidas',
        timestamps: false

     })

module.exports = comidas  