'use strict'
const Sequelize     = require('sequelize');
const db = require("../../models");
const APIUNO = db.vsimples;
const moment = require('moment');
const axios = require('axios')

module.exports = {
    async getVisitasData(req, res) {
        try {
            // Realizar una consulta a la tabla 'visitas' para obtener los datos que deseas
            const visitasData = await db.vsimples.findAll({
                attributes: ['visitas'],
            });
  
            res.status(200).json(visitasData);
        } catch (error) {
            console.error("Error al obtener los datos de visitas:", error);
            res.status(500).json({ error: 'Error al obtener los datos de visitas' });
        }
    },

    create (req, res) {
        const { usuario, aeropuerto, visitas } = req.body;
        APIUNO.findOne({
            where: { usuario, aeropuerto}
        }).then(agregarvisitas => {
            if (agregarvisitas) {
                agregarvisitas.update({
                    visitas: agregarvisitas.visitas + 1,
                })
                .then(actualizarvisitas => {
                    res.status(200).json(actualizarvisitas)
                })
                .catch(error => {
                    console.log(error);
                    return res.status(500).json({error: 'No se pudo actualizar la visita'})
                });
            } else {
                APIUNO.create({
                    usuario,
                    aeropuerto,
                    visitas: 1,
                })
                .then(agregarvisita => {
                    res.status(200).json(agregarvisita)
                })
                .catch(error => {
                    console.log(error);
                    return res.status(500).json({error: 'No se pudo crear la visita'})
                });
            }
        })
        .catch(error => {
            console.log(error);
            return res.status(500).json({error: 'No se encontro la visita'})
        });
    }
};