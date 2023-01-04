
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
        type:mongoose.Schema.Types.ObjectId,
        ref:'appartements',
        required: true
    },
    id_client: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'clients',
        required: true,
    },
},
    {
        timestamps:true
    }
)
module.exports = mongoose.model('Paiement',paiementSchema)

