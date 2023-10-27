'use strict'
const Sequelize     = require('sequelize');
const db = require("../../models");
const PROVEEDORES = db.proveedores;
const moment = require('moment');
const axios = require('axios');
const { Op } = require("sequelize");

module.exports = {
    async find (req, res) {
        let id = req.body.id
        const options = {
            'method': 'GET',
            'url': 'http://localhost:3000/proveedores/find',
            'headers': {
              'Content-Type': 'application/json'
            },
            data: {
                id: id
            }
        };
        
        try {
            const result = await axios(options);
            if (result.data.id !== undefined) {
                const resultado = result.data
                const mensaje = "El proveedor posee el id: " + resultado.id 
                res.status(200).send(mensaje)
            }
            res.status(404).send("El proveedor no existe")
        } catch (e) {
            console.log(e);
        }
     
    },

    async findById(req, res) {
        const id = req.body.id; // O también puedes obtener el id de req.params o req.query según cómo esté configurada tu ruta
        const options = {
          method: 'GET',
          url: 'http://localhost:3000/proveedores/find/id', // URL para el método find
          params: {
            id: id, // Añade el id como parámetro en la solicitud GET
          },
        };
      
        try {
          const result = await axios(options);
          if (result.status === 200) {
            // Si la solicitud fue exitosa, envía el resultado de vuelta al cliente
            res.status(200).send(result.data);
          } else {
            // Si la solicitud devuelve otro código de estado, puedes manejarlo según tus necesidades
            res.status(result.status).send(result.data);
          }
        } catch (error) {
          console.error(error);
          res.status(500).send('Error interno del servidor');
        }
      },            

    //create
    async create (req, res) {
        let id = req.body.id
        const options = {
            'method': 'POST',
            'url': 'http://localhost:3000/proveedores/create',
            'headers': {
              'Content-Type': 'application/json'
            },
            data: {
                nombre: datos.nombre,
                direccion: datos.direccion,
                telefono: datos.telefono,
            }
        };
        
        try {
            const result = await axios(options);
            if (result.data.id !== undefined) {
                const resultado = result.data
                const mensaje = "Proveedor creado" + resultado.id
                res.status(200).send(mensaje)
            }
            res.status(404).send("El proveedor no existe")
        } catch (e) {
            console.log(e);
        }
     
    },

    //update
    async update (req, res) {
        let id = req.body.id
        const options = {
            'method': 'PUT',
            'url': 'http://localhost:3000/proveedores/update',
            'headers': {
              'Content-Type': 'application/json'
            },
            data: {
                nombre: datos.nombre,
                direccion: datos.direccion,
                telefono: datos.telefono,
            }
        };
        
        try {
            const result = await axios(options);
            if (result.data.id !== undefined) {
                const resultado = result.data
                const mensaje = "Proveedor modificado" + resultado.id
                res.status(200).send(mensaje)
            }
            res.status(404).send("El proveedor no existe")
        } catch (e) {
            console.log(e);
        }
     
    },

    //delete
    async delete (req, res) {
        let id = req.body.id
        const options = {
            'method': 'DELETE',
            'url': 'http://localhost:3000/proveedores/delete/:id',
            'headers': {
              'Content-Type': 'application/json'
            }
        };
        
        try {
            const result = await axios(options);
            if (result.data.id !== undefined) {
                const resultado = result.data
                const mensaje = "Proveedor eliminado"
                res.status(200).send(mensaje)
            }
            res.status(404).send("Error al eliminar el proveedor")
        } catch (e) {
            console.log(e);
        }
     
    }
};

