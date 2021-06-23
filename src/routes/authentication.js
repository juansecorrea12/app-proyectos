'use strict'

const express = require('express');
const router = express.Router();
const pool = require('../database');
const passport = require('passport');
const {isLogIn, isNotLogIn} = require('../utils/auth');

// Ruta para traer el registro del usuario
router.get('/signup', isNotLogIn, (req, res) => {
    res.render('auth/signup');
});

// Ruta para registrar un usuario 
router.post('/signup', isNotLogIn, passport.authenticate('local.signup', {
    successRedirect: '/profile',
    failureRedirect: '/signup',
    failureFlash: true
}));

// Ruta para iniciar sesión GET 
router.get('/signin', isNotLogIn, (req, res) => {
    res.render('auth/signin');
});

// Ruta para inicio de sesión POST
router.post('/signin', isNotLogIn, (req, res, next) => {
    passport.authenticate('local.signin', {
        successRedirect: '/profile',
        failureRedirect: '/signin',
        failureFlash: true
    })(req, res, next);
});

// Ruta del perfil del usuario
router.get('/profile', isLogIn, (req, res) => {
    res.render('profile');
});

// Ruta para cerrar sesión 
router.get('/logout', isLogIn, (req, res) => {
    req.logOut();
    res.redirect('/signin');
});

module.exports = router;