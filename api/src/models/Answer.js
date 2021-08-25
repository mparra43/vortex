const { DataTypes } = require('sequelize');
const  { sequelize } = require('../db');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

// defino el modelo
const Answer = sequelize.define('answer', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    uid: {
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    name: {
        type: DataTypes.STRING
    },
    qualification: {
        type: DataTypes.INTEGER,
    },
    answer: {
        type: DataTypes.STRING
    }
});

module.exports = {
    Answer
};