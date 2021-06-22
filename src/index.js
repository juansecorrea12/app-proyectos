'use strict'

const express = require('express');
const config = require('./config');
const app = express();
const morgan = require('morgan');
const router = require('./routes');
const exphbs = require('express-handlebars');
const path = require('path');
const util = require('./utils/handlebars');
const flash = require('connect-flash');
const session = require('express-session');
const MySQLStore = require('express-mysql-session');
const passport = require('passport');


// Inicializadores
require('./utils/passport');

// Settings views
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
    helpers: util,
}));
app.set('view engine', '.hbs');

// middlewares
app.use(session({
    secret: 'fastmysqlnodesession',
    resave: false,
    saveUninitialized: false,
    store: new MySQLStore(config.database),
}))
app.use(flash());
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());

// Variables globales
app.use((req, res, next) => {
    app.locals.success = req.flash('success');
    app.locals.message = req.flash('message');
    next();
})

// Routes
app.use(router);
app.use('/projects', require('./routes/projects'));
app.use(require('./routes/authentication'));

// Public
app.use(express.static(path.join(__dirname, 'public')));

app.listen(config.PORT, () => {
    console.log(`Puerto corriendo el localhost:${config.PORT}`);
})

