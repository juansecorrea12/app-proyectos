'use strict'

const express = require('express');
const pool = require('../database');
const router = express.Router();


// Ruta lista de proyectos existentes metodo GET 
router.get('/', async (req, res) => {
    const projects = await pool.query('SELECT * FROM projects');
    res.render('projects/list_projects', { projects });
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
    req.flash('success', 'Se ha creado un nuevo proyecto');
    res.redirect('/projects');
});

// Ruta para agregar un nuevo proyecto metodo GET
router.get('/add', (req, res) => {
    res.status(200).render('projects/add');
});

// Ruta para mostrar edición del proyecto
router.get('/edit/:id', async (req, res) => {
    const { id } = req.params;
    const projects = await pool.query('SELECT * FROM projects WHERE id = ?', [id]);
    res.render('projects/edit', { project: projects[0] });
});

// Ruta para actualizar el proyecto
router.post('/edit/:id', async (req, res) => {
    const { id } = req.params;
    const { nombre, descripcion, tiempo_ejecucion, operador } = req.body;
    const newProject = {
        nombre,
        descripcion,
        tiempo_ejecucion,
        operador
    };
    await pool.query('UPDATE projects set ? WHERE id = ?', [newProject, id]);
    req.flash('success', 'Se ha editado el proyecto');
    res.redirect('/projects');
});

// Ruta para eliminar un proyecto
router.get('/delete/:id', async(req, res) => {
    const {id} = req.params;
    await pool.query('DELETE FROM projects WHERE id = ?', [id]);
    req.flash('success', 'Se ha eliminado el proyecto');
    res.redirect('/projects');
});


module.exports = router;