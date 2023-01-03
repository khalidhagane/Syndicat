const asyncHandler = require('express-async-handler');
const AppartementSchema = require('../Models/appartementModel');

// method : get
// url : /api/formation/getallformation
// access : formation
// get all formation
const GetAllAppartement = asyncHandler(async (req, res) => {
    try{
       const data = await AppartementSchema.find()
        res
        .status(200).send(data)
        .console.log(data)
    } catch (error) {
        res.status(400)
        throw new Error(error)
    }
})

// method : get
// url : /api/formation/getOneFormation
// access : formation
// get one formation
const GetOneAppartement = asyncHandler(async (req, res) => {
    const id = req.params.id
console.log('GetOneAppartement',id);
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
 const AddAppartement = asyncHandler(async (req, res) => {
    const { imeuble, etage, appartement } = req.body
    try{
           const data = await AppartementSchema.create({
            imeuble,
            etage,
            appartement,
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
 const UpdateAppartement = asyncHandler( async(req,res)=>{
    const id =  req.params.id;
    console.log('UpdateAppartement',id);
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
const DeleteAppartement = asyncHandler( async(req,res)=>{
    const id =  req.params.id;
    console.log('DeleteAppartement',id);
    // try {
    //      await FormationSchema.destroy({where:{id}})
    //     res.status(200).send({message:"delete formation success"})
    // } catch (error) {
    //     console.log(error)
    //     res.status(400)
    //     throw new Error(error)
    // }
})

module.exports  = {AddAppartement,GetOneAppartement,UpdateAppartement,DeleteAppartement,GetAllAppartement}
