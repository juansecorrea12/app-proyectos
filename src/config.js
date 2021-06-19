'use strict'

require('dotenv').config();

module.exports = {
    PORT : process.env.PORT || 4000,
    database: {
        host: process.env.HOST || '127.0.0.1',
        user: process.env.USERDB,
        password: process.env.PASSWORD,
        database: process.env.DATABASE
    }
}