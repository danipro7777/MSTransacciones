'use strict'
const Sequelize     = require('sequelize');
const db = require("../../models");
const TRANSACCIONES = db.transacciones;
const moment = require('moment');
const { Op } = require("sequelize");
const axios = require('axios')


module.exports = {
    //MOSTRAR DATOS
    async find(req, res) {
        const options = {
            method: 'GET',
            url: 'http://localhost:8080/apitanques/get',
            headers: {
                'Content-Type': 'application/json'
            },
        };
    
        try {
            const result = await axios(options);
            
            if (result && result.data) {
                // Si la respuesta contiene datos, envía esos datos en la respuesta de tu API
                res.status(200).json(result.data);
            } else {
                res.status(404).send("No se encontraron datos de tanques");
            }
        } catch (error) {
            console.error(error);
            res.status(500).send("Error al obtener los datos de los tanques de gasolina");
        }
    },

    async create(req, res) {
        try {
            const datos = req.body; // Serializar los datos

           // const transacciones = await TRANSACCION.create(datos_ingreso);

            const nivelActualResponse = await axios.get(`http://localhost:8080/apitanques/nivel/${datos.ID_Estacion}`);
            const nivelActual = nivelActualResponse.data;

            const nuevoNivel = nivelActual - datos.Cantidad;

            const options = {

                method: 'PUT',
                url: 'http://localhost:8080/apitanques/nivelput',
                headers: {
                'Content-Type': 'application/json'
                },

                data: {
                    
                    request:{
                        nuevo_nivel: nuevoNivel,
                        tanques:{
                            id: datos.ID_Estacion,
                            capacidad: datos.capacidad,
                            nivelactual: nuevoNivel,
                            tipogasolina: datos.tipogasolina,
                            ubicacion: datos.ubicacion,
                            preciogalon: datos.preciogalon,
                            cliente: datos.cliente,
                            tipopago: datos.tipopago
                        }
                    }
                
                }
            }

            try {
                const result = await axios(options);
                
                if (result && result.data) {
                    // Si la respuesta contiene datos, envía esos datos en la respuesta de tu API
                    res.status(200).json(result.data);
                } else {
                    res.status(404).send("No se encontraron datos de tanques");
                }
            } catch (error) {
                console.error(error);
                res.status(500).send("Error al obtener los datos de los tanques de gasolina");
            }
        } catch (error) {
            console.error('Error:', error);
            res.status(500).json({ error: 'Error al insertar o actualizar el nivel del tanque' });
        }
    }
};