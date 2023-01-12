const express = require('express');
const router = express.Router() 
const {Login,Register} = require('../controllers/AuthController') 

router.post('/login',Login);
router.post('/regester',Register);

module.exports = router;