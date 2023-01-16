const jwt = require('jsonwebtoken')
const bcryptjs= require('bcryptjs');
const asyncHandler = require('express-async-handler');
const User = require('../models/authModel')
const crypto = require('crypto');
const { json } = require('express');
// const { send } = require('process');
require("dotenv").config()


// create Token
const createToken = (id) =>{
    return jwt.sign({id}, process.env.JWT_SECRET,{
        expiresIn : '1d'
    })
}

//method post 
// url : /api/auth/login
// acess : public
const Login = asyncHandler(async (req,res, next) => {
    try {
        const{ email,password}= req.body
        if(!email || !password){
            res.status(400)
            return next({message:"Please add all fields"})
        }
        const findUser = await User.findOne({ email : email })
        // console.log(findUser.role)

        if(findUser){ 

            const match = await bcryptjs.compare(password, findUser.password)
            if(match) {
                const token = createToken(findUser.id)
                return res
                // .cookie('myrole', findUser.role)
                .cookie('access-token',token)
                .status(201).json({
                id : findUser.id,
                name: findUser.name,
                email : findUser.email,
                token: crypto.randomBytes(64).toString('hex'),
                // message : 'login successfuly'
                })
            }
            res.status(400)
            return next({ message: "password not correct"})
        } else{
            // console.log('user not regestered')
            res.status(400) 
            return next({message:"email not right"})
        }
    } catch (err) {
        console.log(err)
    }
})

//method post 
// url : /api/auth/regester
// acess : public
const Register = asyncHandler(async (req,res) => {
    const hashedPassword = await bcryptjs.hash(process.env.PASSWORD_ME,10)
    const admin = await User.findOne({email:process.env.EMAIL_ME})
    if(!admin){
        let user = await User.create({
            name:process.env.NAME_ME,
            email:process.env.EMAIL_ME,
            password: hashedPassword,
        })
    }
})

module.exports = {Login,Register};

