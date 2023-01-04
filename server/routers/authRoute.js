const express = require('express');
const router = express.Router() 
const {Login,Register,Forgetpassword,Resetpassword} = require('../controllers/AuthController') 

router.post('/login',Login);
router.post('/regester',Register);
router.post('/forgetpassword',Forgetpassword);
router.post('/resetpassword/:token',Resetpassword);

module.exports = router;