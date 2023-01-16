const express = require("express");
const dotenv = require('dotenv').config()
const connectDB = require('./config/configdb')
const app = express();
const cookie = require('cookie-parser')
const cors = require('cors')
const mongoose = require('mongoose');
const {Register}= require('./Controllers/AuthController')


app.use(cors({origin:true, credentials:true}))
app.use(cookie())
app.use(express.json())
app.use(express.urlencoded({extended:true }))
connectDB();

const router = require('./routers/authRoute')
const routerAppartement =  require('./routers/appartementRoute')
const routerPaiement =  require('./routers/paiementRoute')
const routerClient =  require('./routers/clientRoute')

const {errorHandler} = require('./middlewares/errorMiddleware')

app.use('/api/auth',router)
app.use('/api/appartement',routerAppartement)
app.use('/api/paiement',routerPaiement)
app.use('/api/client',routerClient)

app.use(errorHandler)
Register()

const port = process.env.PORT || 8080
 app.listen(port,(err)=>{
    if(!err){
    console.log(`server running on port ${port}`)
}else {
    console.log(err)
}
})


module.exports= app