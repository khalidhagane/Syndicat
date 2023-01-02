
const mongoose = require('mongoose')
// const Role = require('../models/roleModel')
// // create Schema
const authSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
      },
      token: {
          type: String,
          
        },
},
    {
        timestamps:true
    }
)
module.exports = mongoose.model('User',authSchema)

