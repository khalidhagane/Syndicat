
const mongoose = require('mongoose')
// const Role = require('../models/roleModel')
// // create Schema
const paiementSchema = mongoose.Schema({
    // client: {
    //     type: String,
    //     required: true,
    // },
    id_appartement: {
        type: Number,
        required: true
    },
    prix: {
        type: String,
        required: true,
        },
        date: {
            type: Date,
            required: true,
            },
},
    {
        timestamps:true
    }
)
module.exports = mongoose.model('Paiement',paiementSchema)

