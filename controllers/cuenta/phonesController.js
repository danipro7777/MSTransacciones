'use strict'
const Sequelize     = require('sequelize');
const db = require("../../models");
const moment = require('moment');
const axios = require('axios')

module.exports = {
    async find (req, res) {
        let id = req.body.id
        const options = {
            'method': 'GET',
            'url': 'http://localhost:8081/api/phones',
            'headers': {
              'Content-Type': 'application/json'
            }
        };
        
        try {
            const result = await axios(options);
            console.log(result)
            if (result.data) {
                const resultado = result.data
                const mensaje = "Los objetos encontrados son " + JSON.stringify(resultado)
                res.status(200).send(mensaje)
            }
            res.status(404).send("No se encontraron registros")
        } catch (e) {
            console.log(e);
        }
     
    },

    async findById (req, res) {
        let id = req.body.id
        const options = {
            'method': 'GET',
            'url': 'http://localhost:8081/api/phones/' + id,
            'headers': {
              'Content-Type': 'application/json'
            }
        };
        
        try {
            const result = await axios(options);
            console.log(result)
            if (result.data) {
                const resultado = result.data
                const mensaje = "Los objetos encontrados son " + JSON.stringify(resultado)
                res.status(200).send(mensaje)
            }
            res.status(404).send("No se encontraron registros")
        } catch (e) {
            console.log(e);
        }
    },


    //create
    async create (req, res) {
        let id = req.body.id
        const options = {
            'method': 'POST',
            'url': 'http://localhost:8081/api/phones',
            'headers': {
              'Content-Type': 'application/json'
            },
            data: {
                name: datos.name,
                model: datos.model,
                purchase: datos.purchase,
                sale: datos.sale,
                status: datos.status,
            }
        };
        
        try {
            const result = await axios(options);
            if (result.data.id !== undefined) {
                const resultado = result.data
                const mensaje = "Registro creado" + resultado.id
                res.status(200).send(mensaje)
            }
            res.status(404).send("El registro no existe")
        } catch (e) {
            console.log(e);
        }
     
    },
};

