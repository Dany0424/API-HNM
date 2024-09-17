const pool = require('../helpers/mysql_config'); 

// Crear un nuevo ticket
const createTicket = (req, res) => {
    const { extension, idDepartamento, idDispositivo, idArea, descripcion, imagen } = req.body;

    // Validación 
    if (!extension || !idDepartamento || !idDispositivo || !idArea || !descripcion) {
        return res.status(400).json({ message: 'Todos los campos son requeridos' });
    }

    const date = new Date().toISOString();

    const query = `INSERT INTO tickets (extension, idDepartamento, idDispositivo, idArea, descripcion, imagen, date) 
                   VALUES (?, ?, ?, ?, ?, ?, ?)`;

    pool.query(query, [extension, idDepartamento, idDispositivo, idArea, descripcion, imagen, date], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ message: 'Ticket creado exitosamente', idTicket: results.insertId });
    });
};

// Obtener todos los tickets
const getAllTickets = (req, res) => {
    pool.query('SELECT * FROM tickets', (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json(results);
    });
};

module.exports = {createTicket, getAllTickets}