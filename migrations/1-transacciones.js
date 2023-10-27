'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('transacciones', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            ID_Estacion: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            ID_Usuario: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            Cantidad: {
                type: Sequelize.DECIMAL,
                allowNull: false
            },
            PrecioGalon: {
                type: Sequelize.DECIMAL,
                allowNull: false
            },
            TipoPago: {
                type: Sequelize.STRING,
                allowNull: false
            },
            DescuentoAplicado: {
                type: Sequelize.DECIMAL,
                allowNull: false
            },
            Empleado: {
                type: Sequelize.STRING,
                allowNull: false
            },

            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
        });
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('transacciones');
    }
}