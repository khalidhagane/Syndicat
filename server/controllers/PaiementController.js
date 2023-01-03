const asyncHandler = require('express-async-handler');
const PaiementSchema = require('../Models/paiementModel');

// method : get
// url : /api/formation/getallformation
// access : formation
// get all formation
const GetAllPaiement = asyncHandler(async (req, res) => {
    try{
       const data = await PaiementSchema.find()
        res
        .status(200).send(data)
        // .console.log('dataaaa',data)
    } catch (error) {
        res.status(400)
        throw new Error(error)
    }
})

// method : get
// url : /api/formation/getOneFormation
// access : formation
// get one formation
const GetOnePaiement = asyncHandler(async (req, res) => {
    const id = req.params.id
console.log('GetOnePaiement',id);
    // try{
        
    //      const data = await FormationSchema.findOne({_id:id})
    //      console.log('dataaaaaaaaaa',data);
    //     // res.status(200).send(data)
       
    // } catch (error) {
    //     res.status(400)
    //     throw new Error(error)
    // }
})

// method : post
// url : /api/formation/addformation
// access : formation
// add formation
 const AddPaiement = asyncHandler(async (req, res) => {
    const { client, appartement, prix, date } = req.body
    try{
           const data = await PaiementSchema.create({
            client,
            appartement,
            prix,
            date,
        })
        res.status(200).json(
            console.log('datatttttt',data)
        )
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
 const UpdatePaiement = asyncHandler( async(req,res)=>{
    const id =  req.params.id;
    console.log('UpdatePaiement',id);
    // const { title, date1, date2, campo } = req.body
    // if(FormationSchema){
    //     try {
    //         await FormationSchema.updateOne({
    //         title:title,
    //         date1:date1,
    //         date2:date2,
    //         campo:campo,
    //         },{where:{id}})
    //         res.status(200).send({message:"update formation success"})
    //     } catch (error) {
    //         res.status(400)
    //         throw new Error(error)
    //     }
    // }else{
    //     res.status(400)
    //     throw new Error("Please add a text field")
    // }
})

//  // method : delete
// // url : /api/formation/deleteFormation
// // access : formation
// // delete Formation
const DeletePaiement = asyncHandler( async(req,res)=>{
    const id =  req.params.id;
    console.log('DeletePaiement',id);
    // try {
    //      await FormationSchema.destroy({where:{id}})
    //     res.status(200).send({message:"delete formation success"})
    // } catch (error) {
    //     console.log(error)
    //     res.status(400)
    //     throw new Error(error)
    // }
})

module.exports  = {AddPaiement,GetOnePaiement,UpdatePaiement,DeletePaiement,GetAllPaiement}
