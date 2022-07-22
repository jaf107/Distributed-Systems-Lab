const Status = require('../model/statusModel');
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");

exports.addStatus = catchAsyncErrors(async (req,res,next) =>{
    const status = await Status.create(req.body);
    console.log(req.body);    
    res.status(201).json({
        success:true,
        status,
    });

})

exports.getStatus = catchAsyncErrors(async (req,res,next) =>{
    let status = await Status.find();
    res.status(200).json({
        success:true,
        status
    })
})

