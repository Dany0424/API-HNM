const express = require('express');
const router = express.Router();
const { getAllDepartamentos } = require('../controllers/departamentoControllers');

router.get('/', getAllDepartamentos);

module.exports = router;
