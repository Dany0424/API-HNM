const mysql = require("mysql2");
require("dotenv").config();

let pool = mysql.createPool({
    connectionLimit : 10,
    host: process.env.DBHOST,
    user: process.env.DBUSER,
    password:process.env.DBPASSWORD,
    database: process.env.DBNAME,
    port: process.env.DBPORT,
    dateStrings: true
})

pool.getConnection((err, connection) =>{
    if(err)
        throw err;
    console.log("Conexion con la base de datos establecida")
    connection.release
})

module.exports = pool;