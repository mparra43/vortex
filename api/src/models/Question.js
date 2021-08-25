const {DataTypes} = require('sequelize');
const {sequelize} = require('../db');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

// defino el modelo
const Question = sequelize.define('question', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    uid: {
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    question: {
        type: DataTypes.STRING,
    },
    qualification: {
        type: DataTypes.INTEGER,
    },
    category: {
        type: DataTypes.STRING,
    }
});

module.exports = Question;
