const mongoose = require ('mongoose')

const itemSchema = new mongoose.Schema(
    {
name: {
    type: String,
    required:true,
}, 
    description: {
        type: String,
        required:true,
    },
    photo: {
        type:String,
        required:true
    }


    }

)

const Item = mongoose.model("Item",itemSchema)

module.exports = Item;
//DSH krijoni scheme per contact us:Emer Mbiemer ,Email ,Komenti