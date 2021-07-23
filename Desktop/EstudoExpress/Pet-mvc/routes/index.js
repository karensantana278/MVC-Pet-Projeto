var express = require('express');
var router = express.Router();
const servicosController = require('../controllers/servicosController')
const petsController = require('../controllers/petsController')
/* GET home page. */

router.get('/',servicosController.index)
router.get('/servicos/:id',servicosController.show)
router.get('/pets',petsController.index)
router.get('/pets/:id',petsController.show)
router.get('/cadastro',servicosController.cadastro)
router.get('/contato',servicosController.contato)
router.get('/login',servicosController.login)
router.get('/servicos',servicosController.servicos)
router.get('/sobre',servicosController.sobre)
module.exports = router;

