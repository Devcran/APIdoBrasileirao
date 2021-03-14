const express = require('express')
const app = express()
const mongoose = require('mongoose')
const port = 3000


mongoose.connect("mongodb+srv://brunoo1103:30455249@cluster0.ixfue.mongodb.net/<dbname>?retryWrites=true&w=majority", {useNewUrlParser:true, useUnifiedTopology:true, useFindAndModify:true})

app.get('/', (req, res) => res.send('Hello World!'))





app.listen(port, () => console.log(`Example app listening on port port!`))