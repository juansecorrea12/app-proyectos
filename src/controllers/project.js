'use strict'

const pool = require('../database');

const allProjects = async (req, res) => {
    const projects = await pool.query('SELECT * FROM projects WHERE user_id = ?', [req.user.id]);
    res.render('projects/list_projects', { projects });
};

const addProject = async (req, res) => {
    const { nombre, descripcion, tiempo_ejecucion, operador } = req.body;
    const newProject = {
        nombre,
        descripcion,
        tiempo_ejecucion,
        operador,
        user_id: req.user.id
    };
    console.log(req.body);
    await pool.query('INSERT INTO projects SET ?', [newProject]);
    req.flash('success', 'Se ha creado un nuevo proyecto');
    res.redirect('/projects');
};

const addProjectView = (req, res) => {
    res.status(200).render('projects/add');
};

const editProjectView = async (req, res) => {
    const { id } = req.params;
    const projects = await pool.query('SELECT * FROM projects WHERE id = ?', [id]);
    res.render('projects/edit', { project: projects[0] });
};

const editProject = async(req, res) => {
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
};

const deleteProject = async(req, res) => {
    const {id} = req.params;
    await pool.query('DELETE FROM projects WHERE id = ?', [id]);
    req.flash('success', 'Se ha eliminado el proyecto');
    res.redirect('/projects');
}

module.exports = {
    allProjects,
    addProject,
    addProjectView,
    editProjectView,
    editProject,
    deleteProject
}