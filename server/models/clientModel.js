
const mongoose = require('mongoose')
// const Role = require('../models/roleModel')
// // create Schema
const clientSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    cin: {
        type: String,
        required: true
    },
    tele: {
        type: String,
        required: true,
        },
    id_appartement: {
        type:[mongoose.Schema.Types.ObjectId],
        ref:'appartements',
        required: true,
        },
},
    {
        timestamps:true
    }
)
module.exports = mongoose.model('Client',clientSchema)

