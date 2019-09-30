const express = require('express');
const router = express.Router();

const usuario = require('../controllers/usuario.controller');

//ruta para el API para enviar y recibir datos en formato json
router.get('/', usuario.getUsuarios);
router.post('/', usuario.createUsuario);
router.get('/:id', usuario.getUsuario);
router.put('/:id', usuario.editUsuario);
router.delete('/:id', usuario.deleteUsuario);


module.exports = router;






