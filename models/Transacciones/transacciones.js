'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class transacciones extends Model {
    };
    transacciones.init({
        ID_Estacion: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        ID_Usuario: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        Cantidad: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        PrecioGalon: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        TipoPago: {
            type: DataTypes.STRING,
            allowNull: false
        },
        DescuentoAplicado: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        Empleado: {
            type: DataTypes.STRING,
            allowNull: false
        },
    }, {
        sequelize,
        modelName: 'transacciones',
    });
    return transacciones;
};