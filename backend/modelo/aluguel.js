const {Model, DataTypes} = require('sequelize');
const sequelize = require("../config/database");

    class aluguel extends Model {}
    aluguel.init({
        id_aluguel:{
            type: DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement: true
            
        }, 
        hora_de_devoluçâo: {
            type: DataTypes.STRING
        },
        descriçao:{
            type: DataTypes.DATE
        }, 
        DEVOLVIDO:{
            type: DataTypes.TINYINT
        }
        
    } , {
        sequelize,
        modelname: 'aluguel',
        timestamps: false

     })

module.exports = aluguel