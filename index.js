const express = require("express")
const app = express()
const cors = require("cors")
const tecnico = require("./routes/tecnico")
const departamento = require("./routes/departamento")
const dispositivo = require("./routes/dispositivo")
const area = require("./routes/area")
const ticket = require("./routes/ticket")
const port = process.env.PORT || 3000;

app.use(cors())

app.use(express.json())

app.use("/tecnicos", tecnico)
app.use("/departamentos", departamento)
app.use("/tickets", ticket)
app.use("/dispositivos", dispositivo)
app.use("/area", area)

app.get("/", (req, res) =>{
    res.send("Hola mundo")
})

app.listen(port, () =>{
    console.log(`Servidor en el puerto ${port}`)
})