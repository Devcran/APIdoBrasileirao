const express = require("express")
const router = express.Router()

const teamService = require("../service/teamService")

router.post("/create", teamService.createData)
router.get("/read", teamService.readData)

module.exports = router