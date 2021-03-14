const mongoose = require('mongoose')

exports.connect = async () => {
    mongoose.connect(
        "mongodb+srv://brunoo1103:30455249@cluster0.ixfue.mongodb.net/<dbname>?retryWrites=true&w=majority", 
        {
            useNewUrlParser:true, 
            useUnifiedTopology:true, 
            useFindAndModify:true
        }
    )
}