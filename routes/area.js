const express = require("express")
const router = express.Router()
const { getAllAreas } = require("../controllers/areaControllers")

router.get("/", getAllAreas)

module.exports = router