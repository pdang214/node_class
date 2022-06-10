const mongoose = require("mongoose");
const schema = mongoose.Schema;
const alienSchema = new schema(
    {
    name:{
        type:String,
        required:true
    },
    tech:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('Alien',alienSchema)