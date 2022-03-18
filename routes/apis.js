const express = require('express')
const router = express.Router()

const apiController = require('../controllers/apiController')

//Mostrar todos los alumnos (GET)
router.get('/', apiController.mostrar)
//Crear alumno (POST)
router.post('/crear', apiController.crear)
//Editar alumno (POST)
router.post('/editar', apiController.editar)
//Borrar alumno (GET)
router.get('/modificar/:id', apiController.borrar)
module.exports = router