'use strict'

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('projects/list_projects');
})


module.exports = router;