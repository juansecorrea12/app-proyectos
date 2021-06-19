'use strict'

const express = require('express');
const pool = require('../database');
const router = express.Router();


// Ruta lista de proyectos existentes metodo GET 
router.get('/', (req, res) => {

    res.render('projects/list_projects');
});

// Ruta agregar un nuevo proyecto metodo POST
router.post('/add', async (req, res) => {
    const { nombre, descripcion, tiempo_ejecucion, operador } = req.body;
    const newProject = {
        nombre,
        descripcion,
        tiempo_ejecucion,
        operador
    };
    console.log(req.body);
    await pool.query('INSERT INTO projects SET ?', [newProject]);
    res.redirect('/projects');
});

// Ruta para agregar un nuevo proyecto metodo GET
router.get('/add', (req, res) => {
    res.status(200).render('projects/add');
})


module.exports = router;