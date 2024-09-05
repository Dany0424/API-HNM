const express = require("express")
const app = express()
const cors = require("cors")
const tecnico = require("./routes/tecnico")
const port = process.env.PORT || 3000;

app.use(cors())

app.use(express.json())

app.use("/tecnicos", tecnico)

app.get("/", (req, res) =>{
    res.send("Hola mundo")
})

app.listen(port, () =>{
    console.log(`Servidor en el puerto ${port}`)
})