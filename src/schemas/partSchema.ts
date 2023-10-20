const mongoose = require("mongoose")
const Schema = mongoose.Schema

const partSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    code:{
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required:false,
    },
    place: {
        type: String,
        required:false,
    }
})

const Part = mongoose.model ("User", partSchema)
module.exports   = Part