const express = require('express');
const router = express.Router();
const { getAllTecnicos, getTecnicoById, createTecnico, updateTecnico, deleteTecnico } = require('../controllers/tecnicoControllers');

// Rutas CRUD para técnicos
router.get('/', getAllTecnicos);
router.get('/:id', getTecnicoById);
router.post('/', createTecnico);
router.put('/:id', updateTecnico);
router.delete('/:id', deleteTecnico);

module.exports = router;
