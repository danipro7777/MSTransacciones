'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class sdetallados extends Model {
    static associate(models) {
      //Aqui van llaves foraneas
    }
  };
  sdetallados.init({
    usuario: {
      type: DataTypes.STRING,
      allowNull: false
    },
    servicio: {
      type: DataTypes.STRING,
      allowNull: false
    },
    costo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fechaservicio: {
      type: DataTypes.STRING,
      allowNull: false
    },
    horaservicio: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'sdetallados',
  });
  return sdetallados;
};