const pool = require('../helpers/mysql_config'); 

// Función para obtener todos los departamentos
const getAllDepartamentos = (req, res) => {
    pool.query('SELECT * FROM departamento', (err, results) =>{
        if (err) {
            return res.status(500).json({ error: 'Error al obtener los departamentos' });
        }
        res.status(200).json(results);
    })
}
  

module.exports = { getAllDepartamentos };
