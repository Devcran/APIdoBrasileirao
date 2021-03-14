const mongoose = require("mongoose")

const TeamSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true
    }, 

    foundation: {
        type: Number, 
        required: true
    },

    logo: {
        type: String,
        required: false
    },

    date: {
        type: Date, 
        default: Date.now()
    }
})

const TeamModel = mongoose.model("teams", TeamSchema)
module.exports = TeamModel