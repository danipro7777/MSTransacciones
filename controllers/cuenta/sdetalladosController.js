'use strict'
const Sequelize     = require('sequelize');
const db = require("../../models");
const APIUNO = db.sdetallados;
const moment = require('moment');
const { Op } = require("sequelize");
const axios = require('axios')

module.exports = {
    find (req, res) {
        return APIUNO.findAll()
        .then(cuenta => res.status(200).send(cuenta))
        .catch(error => res.status(400).send(error))
    },


    create(req, res) {
        const { usuario, servicio, costo, fechaservicio, horaservicio } = req.body;
  
        APIUNO.create({
          usuario,
          servicio,
          costo,
          fechaservicio,
          horaservicio,
        })
          .then(newServicio => {
            axios.post('http://localhost:3000/ssimples/create', {
              usuario,
              servicio,
            })
            .then(response => {
              res.status(201).json(newServicio);
            })
            .catch(error => {
              console.log(error);
              return res.status(500).json({ error: 'Error al crear servicio :ccc' });
            });
          })
          .catch(error => {
            console.log(error);
            return res.status(500).json({ error: 'Error al crear servicio :c' });
          });
      }
}