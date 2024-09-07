const express = require("express")
const router = express.Router()
const {createTicket, getAllTickets} = require("../controllers/ticketControllers")

router.post("/", createTicket)
router.get("/", getAllTickets)

module.exports = router