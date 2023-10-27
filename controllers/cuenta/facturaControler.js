'use strict'
const Sequelize     = require('sequelize');
const db = require("../../models");
const Contabilidad = db.contabilidad;
const Fidelidad = db.fidelidad;
const moment = require('moment');
const axios = require('axios')

module.exports = {
    async find (req, res) {
        let ivaEnviar
        const options = {
            'method': 'GET',
            'url': 'http://localhost:3000/factura/find',
            'headers': {
              'Content-Type': 'application/json'
            },
            data: {
                iva: ivaEnviar
            }
          };
        
          try {
            const result = await axios(options);
            console.log(result.data);
            res.send(result.data + 'Utilizando la API de clientes')
          } catch (e) {
               console.log(e);
          }     
    }    
};

