
const mongoose = require('mongoose')
// const Role = require('../models/roleModel')
// // create Schema
const paiementSchema = mongoose.Schema({
    prix: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    id_appartement: {
        type: Number,
        required: true
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
module.exports = mongoose.model('Paiement',paiementSchema)

