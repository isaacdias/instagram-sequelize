var express = require('express');
var router = express.Router();
const usuariosController = require('../controllers/usuariosController')
const validarCadastro = require('../middlewares/ValidarCadastro');

// GET users
router.get('/', usuariosController.index);

router.get('/login', usuariosController.login);

router.get('/registro', usuariosController.registro);

// POST users
router.post('/', validarCadastro, usuariosController.create);
// UPDATE users
router.put('/:id', usuariosController.update);
// DELETE users
router.delete('/:id', usuariosController.delete);

module.exports = router;