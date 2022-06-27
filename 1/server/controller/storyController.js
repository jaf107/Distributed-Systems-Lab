const Story = require('../model/storyModel');

exports.addStory = catchAsyncErrors(async (req,res,next) =>{
    const story = await Story.create(req.body);    
    res.status(201).json({
        success:true,
        story,
    });
})

exports.getStory = catchAsyncErrors(async (req,res,next) =>{
    let stories = await Story.find()
    res.status(200).json({
        success:true,
        stories
    })
})

exports.deleteStory = catchAsyncErrors(async (req,res,next) =>{
    const story = Story.find(req.params.id);
    story.remove();
    res.status(200).json({
        success:true,
        message: "Story deleted successfully"
    })
})