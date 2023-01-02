const jwt = require('jsonwebtoken')
const bcryptjs= require('bcryptjs');
const asyncHandler = require('express-async-handler');
const User = require('../models/authModel')
const nodemailer = require('nodemailer');
const crypto = require('crypto');
const { json } = require('express');
const sendemail = require('../utils/sendemail')
const sendEmailPassword = require('../utils/sendEmailPassword')
// const Role = require('../models/roleModel');
const { send } = require('process');
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
        const findUser = await User.findOne({ email : email }).populate("role")
        // console.log(findUser.role)

        if(findUser){ 

                const match = await bcryptjs.compare(password, findUser.password)
                if(match) {
                    if(findUser.status==false){
                        res.status(400)
                        next(new Error('verify email pour validation'))
                    }else{
                        
                        const token = createToken(findUser.id)
                        return res
                        // .cookie('myrole', findUser.role)
                        .cookie('access-token',token)
                        .status(201).json({
                            id : findUser.id,
                            name: findUser.name,
                            email : findUser.email,
                            role: findUser.role,
                            message : 'login successfuly'
                        })
                        
                    }
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
const Regester = asyncHandler(async (req,res) => {
    const hashedPassword = await bcryptjs.hash(process.env.PASSWORD_ME,10)
    const admin = await User.findOne({email:process.env.EMAIL_ME})
    console.log('admin',admin)
    // create user
    if(!admin){
        let user = await User.create({
            email:process.env.EMAIL_ME,
            password: hashedPassword,
            // status:false,
            token: crypto.randomBytes(64).toString('hex'),
        })
    // console.log('user',user);
    }
    // else{
    //     console.log("user deja creat")
    // }
})

//method post 
// url : /api/auth/Forgetpassword
// acess : public
const Forgetpassword = async (req,res,next) => {
    // const {email }= req.body
    try {

    const {email}= req.body
    if(!email){
        res.status(400)
        return next({message:"Please add email"})
    }
    
    const user = await User.findOne({email})
    if(!user){
         res.status(400)
        // .json({err: 'email non exit'})
        return next({message:"email non exit"})
    }
    else{
        const token = createToken(user.id)
        console.log("token forget password=> "+token)
        sendEmailPassword(user.email, token)
        
         res.status(400) 
            return next({message:"check email pour valid password"})
        
    }
    
}
     catch(err) {
        console.log(err)
    }
}

//method post 
// url : /api/auth/resetpassword
// acess : public
const Resetpassword =  asyncHandler ( async (req,res) => {
    
    const {password,confpassword} = req.body
    
    if(!password || !confpassword){
        res.status(400)
        throw new Error('Please add password ')
    }else if(password != confpassword){
        res.status(400)
        throw new Error('password not match ')
    }
    
    const token =  req.params.token
        console.log(token)
    const userid = await jwt.verify(token,process.env.JWT_SECRET)

    const salt = await bcryptjs.genSalt(10)
    const hashPassword = await bcryptjs.hash(password, salt)
    
    await User.findOneAndUpdate(
        {_id : userid.id},
        {password : hashPassword}
        
    )
    
    res.status(200)
    .json({mess : 'password has update successfuly'})
    

})

module.exports = {Login,Regester,Forgetpassword,Resetpassword};

