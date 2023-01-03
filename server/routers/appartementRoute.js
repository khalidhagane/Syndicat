const express = require('express');
const router = express.Router() 
const {AddAppartement,GetAllAppartement,GetOneAppartement,DeleteAppartement,UpdateAppartement} = require('../controllers/AppartementController') 

router.post('/addappartement',AddAppartement);
router.get('/getallappartement',GetAllAppartement);
router.get('/getoneappartement/:id',GetOneAppartement);
router.delete('/deleteappartement/:id',DeleteAppartement);
router.put('/updateappartement/:id',UpdateAppartement);


module.exports = router;