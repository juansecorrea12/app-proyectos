'use strict'

const express = require('express');
const config = require('./config');
const app = express();
const morgan = require('morgan');
const router = require('./routes');
const exphbs = require('express-handlebars');
const path = require('path');
// const util = require('./utils');

// middlewares
app.use(morgan('dev'));


// Settings views
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
}));
app.set('view engine', '.hbs');

// Routes
app.use(router);
app.use('/projects', require('./routes/projects'));
app.use(require('./routes/authentication'));

app.listen(config.PORT, () => {
    console.log(`Puerto corriendo el localhost:${config.PORT}`);
})

