const asyncHandler = require('express-async-handler');
const { where } = require('../Models/appartementModel');
const AppartementSchema = require('../Models/appartementModel');

// method : get
// url : /api/appartement/getallappartement
// access : appartement
// get all appartement
const GetAllAppartement = asyncHandler(async (req, res) => {
    try{
       const data = await AppartementSchema.find()
        res
        .status(200).send(data)
        // .console.log("GetAllAppartement",data)
    } catch (error) {
        res.status(400)
        throw new Error(error)
    }
})

// method : get
// url : /api/appartement/getoneappartement
// access : appartement
// get one appartement
const GetOneAppartement = asyncHandler(async (req, res) => {
    const id = req.params.id
console.log('GetOneAppartement',id);
    try{
        
         const data = await AppartementSchema.findOne({_id:id})
        res.status(200).send(data)
    } catch (error) {
        res.status(400)
        throw new Error(error)
    }
})

// method : post
// url : /api/appartement/addappartement
// access : formation
// add formation
 const AddAppartement = asyncHandler(async (req, res) => {
    const { imeuble, etage, appartement } = req.body
    if(!imeuble || !etage || !appartement){
        res.status(400)
        return next({message:"Please add all fields"})
    }
    try{
           const data = await AppartementSchema.create({
            imeuble,
            etage,
            appartement,
        })
        res.status(200).send(data)
        }catch(error){
            res.status(400)
            // console.log(error)
            throw new Error(error)
        }
 })

 // method : update
// url : /api/appartement/updateappartement
// access : appartement
// update appartement
 const UpdateAppartement = asyncHandler( async(req,res)=>{
    const id =  req.params.id;
    const { imeuble, etage, appartement } = req.body
        if(!imeuble || !etage || !appartement){
            res.status(400)
            return next({message:"Please add all fields"})
        }
        try{
            const data = await AppartementSchema.findOne({_id: id})
            data.imeuble = imeuble
            data.etage = etage
            data.appartement = appartement
            await data.save()
            res.status(200).send(data)
       } catch (error) {
           res.status(400)
           throw new Error(error)
       }
})

//  // method : delete
// // url : /api/appartement/deleteappartement
// // access : appartement
// // delete appartement
const DeleteAppartement = asyncHandler( async(req,res)=>{
    const id =  req.params.id;
    try {
         await AppartementSchema.findOneAndRemove({ _id:id})    
        res.status(200).send({message:"delete formation success"})
    } catch (error) {
        console.log(error)
        res.status(400)
        throw new Error(error)
    }
})

module.exports  = {AddAppartement,GetOneAppartement,UpdateAppartement,DeleteAppartement,GetAllAppartement}
