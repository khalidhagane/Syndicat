const asyncHandler = require('express-async-handler');
const ClientSchema = require('../Models/clientModel');

// method : get
// url : /api/formation/getallformation
// access : formation
// get all formation
const GetAllClient = asyncHandler(async (req, res) => {
    try{
       const data = await ClientSchema.find()
       console.log(data)
        res
        .status(200).send(data)
        
    } catch (error) {
        res.status(400)
        throw new Error(error)
    }
})

// method : get
// url : /api/formation/getOneFormation
// access : formation
// get one formation
const GetOneClient = asyncHandler(async (req, res) => {
    const id = req.params.id
    // console.log('GetOneClient',id);
        try{
            
             const data = await ClientSchema.findOne({_id:id})
            res.status(200).send(data)
        } catch (error) {
            res.status(400)
            throw new Error(error)
        }
})

// method : post
// url : /api/formation/addformation
// access : formation
// add formation
 const AddClient = asyncHandler(async (req, res) => {
    const { name, cin, tele, id_appartement } = req.body
    try{
           const data = await ClientSchema.create({
            name,
            cin,
            tele,
            id_appartement,
        })
        res.status(200).send(data)
        // console.log('datatttttt',data)
        
        }catch(error){
            res.status(400)
            console.log(error)
            throw new Error(error)
        }
 })

 // method : update
// url : /api/formation/updateFormation
// access : formation
// update Formation
 const UpdateClient = asyncHandler( async(req,res)=>{
    const id =  req.params.id;
    const { name, cin, tele, id_appartement } = req.body
    

        try{
            const data = await ClientSchema.findOne({_id: id})
            data.name = name
            data.cin = cin
            data.id_appartement = id_appartement
            data.tele = tele
            await data.save()
           res.status(200).send(data)
       }catch (error) {
           res.status(400)
           throw new Error(error)
       }
})

//  // method : delete
// // url : /api/formation/deleteFormation
// // access : formation
// // delete Formation
const DeleteClient = asyncHandler( async(req,res)=>{
    const id =  req.params.id;
    try {
         await ClientSchema.findOneAndRemove({ _id:id})    
        res.status(200).send({message:"delete formation success"})
    } catch (error) {
        console.log(error)
        res.status(400)
        throw new Error(error)
    }
})

module.exports  = {AddClient,GetOneClient,UpdateClient,DeleteClient,GetAllClient}
