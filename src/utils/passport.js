'use strict'

const passport = require('passport');
const localStrategy = require('passport-local').Strategy;

const pool = require('../database');
const helpers = require('./helpers');

// metodo signIn
passport.use('local.signin', new localStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, email, password, done) => {
    const rows = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
    if (rows.length > 0) {
        const user = rows[0];
        const validatePassword = await helpers.desEncryptPassword(password, user.password);
        validatePassword ? done(null, user, req.flash('success', 'Bienvenido de vuelta ' + user.email)) :
            done(null, false, req.flash('message', 'La contraseña es incorrecta'));
    } else {
        return done(null, false, req.flash('message', 'El usuario no existe en la base de datos'));
    }
}));

// metodo signUp
passport.use('local.signup', new localStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, email, password, done) => {
    const { nombre, apellido } = req.body;
    const newUser = {
        email,
        password,
        nombre,
        apellido
    };
    // Encriptar la contraseña
    newUser.password = await helpers.encryptPassword(password);
    const result = await pool.query('INSERT INTO users SET ?', [newUser ]);
    newUser.id = result.insertId;
    return done(null, newUser);
}));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    const rows = await pool.query('SELECT * FROM users WHERE id = ?', [id]);
    done(null, rows[0]);
})