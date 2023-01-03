const express = require('express');
const router = express.Router() 
const {AddClient,GetAllClient,GetOneClient,DeleteClient,UpdateClient} = require('../controllers/ClientController') 

router.post('/addclient',AddClient);
router.get('/getallclient',GetAllClient);
router.get('/getoneclient/:id',GetOneClient);
router.delete('/deleteclient/:id',DeleteClient);
router.put('/updateclient/:id',UpdateClient);


module.exports = router;