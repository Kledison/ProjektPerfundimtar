const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({

    Emer: {
        type: String,
        require: true,
    },
    Mbiemer: {
        type: String,  
         require: true,
    },
     Email : {
        type:String,
        require:true,
     },
     Komenti : {
        type: String,
        require: true,
     },
});

const Contakti = mongoose.model("Contakti", contactSchema);

module.exports = Contakti;