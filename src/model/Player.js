const mongoose = require("mongoose")

const PlayerSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true
    }, 

    team: {
        type: Schema.Types.ObjectId,
        ref: 'teams',
        required: false
    },

    birth: {
        type: Date, 
        required: true
    },

    picture: {
        type: String,
        required: false
    },

    date: {
        type: Date, 
        default: Date.now()
    }
})

const PlayerModel = mongoose.model("players", PlayerSchema)
module.exports = PlayerModel