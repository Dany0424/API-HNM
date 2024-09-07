const express = require("express")
const router = express.Router()
const { getAllDispositivos } = require("../controllers/dispositivoControllers")

router.get("/", getAllDispositivos)

module.exports = router