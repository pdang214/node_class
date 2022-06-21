const mongoose = require("mongoose");
const schema = mongoose.Schema;
const imageschema = new schema(
    {
        name: { type: String},
    })

module.exports = mongoose.model('image', imageschema)