const express = require("express")
const router = express.Router()

const teamService = require("../service/teamService")

router.post("/new", teamService.createData)
router.get("/", teamService.readData)
router.put("/update/:id", teamService.updateData)
router.delete("/delete/:id", teamService.deleteData)
router.get("/find/:name", teamService.findByName)

module.exports = router