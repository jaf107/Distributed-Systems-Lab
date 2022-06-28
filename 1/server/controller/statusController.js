const Status = require('../model/statusModel');

exports.addStatus = catchAsyncErrors(async (req,res,next) =>{
    const status = await Status.create(req.body);    
    res.status(201).json({
        success:true,
        status,
    });
})

exports.getUserStatus = catchAsyncErrors(async (req,res,next) =>{
    let status = await Status.find({
        user:req.user.id
    })
    res.status(200).json({
        success:true,
        status
    })
})


exports.getStatus = catchAsyncErrors(async (req,res,next) =>{
    let status = await Status.find()
    res.status(200).json({
        success:true,
        status
    })
})

exports.deleteStatus = catchAsyncErrors(async (req,res,next) =>{
    const status = Status.find(req.params.id);
    status.remove();
    res.status(200).json({
        success:true,
        message: "Status deleted successfully"
    })
})