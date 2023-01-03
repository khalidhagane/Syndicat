
const mongoose = require('mongoose')
// const Role = require('../models/roleModel')
// // create Schema
const appartementSchema = mongoose.Schema({
    imeuble: {
        type: String,
        required: true,
    },
    etage: {
        type: String,
        required: true
    },
    appartement: {
        type: String,
        required: true,
        },
        id_client: {
            type: Number,
            required: true,
            },
},
    {
        timestamps:true
    }
)
module.exports = mongoose.model('Appartement',appartementSchema)

