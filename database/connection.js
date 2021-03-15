require("dotenv").config()

const mongoose = require('mongoose')
const USERNAME = process.env.USERNAME_MONGO_ATLAS
const PASSWORD = process.env.PASSWORD_MONGO_ATLAS

exports.connect = async () => {
    try {
        mongoose.connect(
            `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.ixfue.mongodb.net/<dbname>?retryWrites=true&w=majority`, 
            {
                useNewUrlParser:true, 
                useUnifiedTopology:true, 
                useFindAndModify:true
            }
        )
    } catch (exception) {
        console.log(`Caralho não ta funcionando o Mongo kkkkkkkkkkk\nErro: ${exception}`);
    }
}