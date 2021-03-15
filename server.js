const express = require('express')
const app = express()
require("dotenv").config()

const PORT = process.env.PORT || 8080
const teamController = require("./src/api/controller/teamController")
const mongo = require("./database/connection")

app.use('/teams', teamController)

mongo.connect()

app.listen(PORT, () => console.log(`APIdoBrasileirao listening on port ${PORT}!`))