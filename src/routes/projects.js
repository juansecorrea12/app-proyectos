'use strict'

const express = require('express');
const pool = require('../database');
const { isLogIn } = require('../utils/auth');
const router = express.Router();
const projectController = require('../controllers/project');

// Ruta lista de proyectos existentes metodo GET 
router.get('/', isLogIn, projectController.allProjects);

// Ruta agregar un nuevo proyecto metodo POST
router.post('/add', isLogIn, projectController.addProject);

// Ruta para agregar un nuevo proyecto metodo GET
router.get('/add', isLogIn, projectController.addProjectView);

// Ruta para mostrar edición del proyecto
router.get('/edit/:id', isLogIn, projectController.editProjectView);

// Ruta para actualizar el proyecto
router.post('/edit/:id', isLogIn, projectController.editProject);

// Ruta para eliminar un proyecto
router.get('/delete/:id', isLogIn, projectController.deleteProject);

module.exports = router;