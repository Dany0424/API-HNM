const pool = require("../helpers/mysql_config")

// Obtener todos los dispositivos
const getAllDispositivos = (req, res) => {
    pool.query("SELECT * FROM dispositivo", (err, results) => {
        if (err) { 
            return res.status(500).json({error: err.message})
        }
        res.status(200).json(results)
    })
}

module.exports = { getAllDispositivos }