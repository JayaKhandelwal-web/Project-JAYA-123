const StudentModel= require('../models/stuModel')
const stuSave= async(req,res)=>{
    console.log(req.body)
}

const student=await StudentModel.create({
    
})