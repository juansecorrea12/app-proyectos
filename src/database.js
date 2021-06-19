'use strict'

const mysql = require('mysql');
const { promisify } = require('util');
const { database } = require('./config');

const pool = mysql.createPool(database);

pool.getConnection((err, connection) => {
    err ? console.log('Error conectando a la base de datos' + err) :
        console.log('Conexión Establecida con la base de datos');
});

pool.query = promisify(pool.query);

module.exports = pool;