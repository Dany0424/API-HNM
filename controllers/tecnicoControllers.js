const pool = require('../helpers/mysql_config');

// Obtener todos los técnicos
const getAllTecnicos = (req, res) => {
    pool.query('SELECT * FROM tecnico', (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json(results);
    });
};

// Obtener un técnico por ID
const getTecnicoById = (req, res) => {
    const { id } = req.params;
    pool.query('SELECT * FROM tecnico WHERE idTecnico = ?', [id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (results.length === 0) {
            return res.status(404).json({ message: 'Técnico no encontrado' });
        }
        res.status(200).json(results[0]);
    });
};

// Crear un nuevo técnico
const createTecnico = (req, res) => {
    const { name, email, password } = req.body;
    pool.query('INSERT INTO tecnico (name, email, password) VALUES (?, ?, ?)', 
        [name, email, password], 
        (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ message: 'Técnico creado con éxito', id: results.insertId });
    });
};

// Actualizar un técnico
const updateTecnico = (req, res) => {
    const { id } = req.params;
    const { name, email, password } = req.body;
    pool.query('UPDATE tecnico SET name = ?, email = ?, password = ? WHERE idTecnico = ?', 
        [name, email, password, id], 
        (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json({ message: 'Técnico actualizado con éxito' });
    });
};

// Eliminar un técnico
const deleteTecnico = (req, res) => {
    const { id } = req.params;
    pool.query('DELETE FROM tecnico WHERE idTecnico = ?', [id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json({ message: 'Técnico eliminado con éxito' });
    });
};

module.exports = { getAllTecnicos, getTecnicoById, createTecnico, updateTecnico, deleteTecnico };
