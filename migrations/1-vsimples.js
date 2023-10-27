'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('vsimples', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            usuario: {
                type: Sequelize.STRING,
                allowNull: false
            },
            aeropuerto: {
                type: Sequelize.STRING,
                allowNull: false
            },
            visitas: {
                type: Sequelize.INTEGER,
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
        return queryInterface.dropTable('vsimples');
    }
};