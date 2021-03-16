const mongoose = require("mongoose")

const TeamSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true
    }, 

    wins: {
        type: Number,
        default: 0
    },

    draws: {
        type: Number,
        default: 0
    },

    loses: {
        type: Number,
        default: 0
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