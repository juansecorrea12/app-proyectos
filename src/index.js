'use strict'

const express = require('express');
const config = require('./config');
const app = express();
const morgan = require('morgan');
const router = require('./routes');

// middlewares
app.use(morgan('dev'));
app.use(router);


app.listen(config.PORT, () => {
    console.log(`Puerto corriendo el localhost:${config.PORT}`);
})

