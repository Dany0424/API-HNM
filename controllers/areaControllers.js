const pool = require("../helpers/mysql_config")

const getAllAreas = (req, res) =>{
    pool.query("SELECT * FROM area", (err, results) =>{
        if (err) {
            return res.status(500).json({error: err.message})
        }
        res.status(200).json(results)
    })
}

module.exports = { getAllAreas }