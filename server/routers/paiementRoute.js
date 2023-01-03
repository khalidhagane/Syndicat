const express = require('express');
const router = express.Router() 
const {AddPaiement,GetAllPaiement,GetOnePaiement,DeletePaiement,UpdatePaiement} = require('../controllers/PaiementController') 

router.post('/addpaiement',AddPaiement);
router.get('/getallpaiement',GetAllPaiement);
router.get('/getonepaiement/:id',GetOnePaiement);
router.delete('/deletepaiement/:id',DeletePaiement);
router.put('/updatepaiement/:id',UpdatePaiement);


module.exports = router;