const express = require('express')
const app = express()
const PORT = 8080
const teamController = require("./src/api/controller/teamController")
const mongo = require("./database/connection")

app.use('/teams', teamController)

mongo.connect()

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))