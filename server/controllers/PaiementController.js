const asyncHandler = require('express-async-handler');
const PaiementSchema = require('../Models/paiementModel');

// method : get
// url : /api/paiement/getallpaiement
// access : paiement
// get all paiement
const GetAllPaiement = asyncHandler(async (req, res) => {
    try{
       const data = await PaiementSchema.find({}).populate("id_appartement").populate("id_client")
        res.status(200).send(data)
        // .console.log('dataaaa',data)
    } catch (error) {
        res.status(400)
        throw new Error(error)
    }
})

// method : get
// url : /api/paiement/getonepaiement
// access : paiement
// get one paiement
const GetOnePaiement = asyncHandler(async (req, res) => {
    const id = req.params.id
    // console.log('GetOnePaiement',id);
        try{
            
             const data = await PaiementSchema.findOne({_id:id})
            res.status(200).send(data)
        } catch (error) {
            res.status(400)
            throw new Error(error)
        }
})

// method : post
// url : /api/paiement/addpaiement
// access : paiement
// add paiement
 const AddPaiement = asyncHandler(async (req, res) => {
    console.log('req',req.body);
    const { prix, date, id_appartement, id_client } = req.body
    if(!prix || !date || !id_appartement || !id_client){
        res.status(400)
        return next({message:"Please add all fields"})
    }
    try{
           const data = await PaiementSchema.create({
            prix,
            date,
            id_appartement,
            id_client
        })
        
        res.status(200).send(data)
        }catch(error){
            res.status(400)
            // console.log(error)
            throw new Error(error)
        }
 })

 // method : update
// url : /api/paiement/updatepaiement
// access : paiement
// update paiement
 const UpdatePaiement = asyncHandler( async(req,res)=>{
    const id =  req.params.id;
    const { prix, date, id_appartement, id_client } = req.body
    if(!prix || !date || !id_appartement || !id_client){
        res.status(400)
        return next({message:"Please add all fields"})
    }
        try{
            const data = await PaiementSchema.findOne({_id: id})
            data.prix = prix
            data.date = date
            data.id_appartement = id_appartement
            data.id_client = id_client

            await data.save()
           res.status(200).send(data)
       }catch (error) {
           res.status(400)
           throw new Error(error)
       }
})

//  // method : delete
// // url : /api/paiement/deletepaiement
// // access : paiement
// // delete paiement
const DeletePaiement = asyncHandler( async(req,res)=>{
    const id =  req.params.id;
    try {
         await PaiementSchema.findOneAndRemove({ _id:id})    
        res.status(200).send({message:"delete formation success"})
    } catch (error) {
        // console.log(error)
        res.status(400)
        throw new Error(error)
    }
})

module.exports  = {AddPaiement,GetOnePaiement,UpdatePaiement,DeletePaiement,GetAllPaiement}
