const asyncHandler = require('express-async-handler');
const Viewer = require('../models/viewerModel');


// Fetch logged in users viewers    
//@route  GET /api/viewers
const getViewers = asyncHandler(async(req,res)=>{
    const pageSize = 15;
    const page =  Number(req.query.pageNumber) || 1
    const keyword = req.query.keyword ? {
        name:{
            $regex: req.query.keyword,
            $options: 'i'
        }
    } : {}

    const count = await Viewer.countDocuments({ ...keyword });
    const totalViewers = await Viewer.find({user: req.user._id });
    const totalLength = totalViewers.length;


    const viewers = await Viewer.find({user: req.user._id, ...keyword}).limit(pageSize).skip(pageSize * (page - 1));
    res.json({ viewers, totalLength, page, pages: Math.ceil(count / pageSize) });
    // const viewers = await Viewer.find({user: req.user._id});
    // res.json({ viewers });
});



// Create a viewer
//@route  POST api/viewers
//@access Have to be logged in
const createViewer = asyncHandler(async(req,res)=>{
    const viewer = new Viewer({
        user: req.user._id,
        name: 'Uknown',
        rating: 0,
        followingSince: 'Uknown',
        personalityType: 'Uknown',
        location: "Uknown",
        age: "Uknown",
        notes: 'Uknown'
        
    });
    
    const createdViewer = await viewer.save();
    res.status(201).json(createdViewer);
 });


 // Fetch single viewer  
//@route  GET /api/viewers/:id
const getViewerById = asyncHandler(async(req,res)=>{
    const viewer = await Viewer.findById(req.params.id);

    if(viewer){
       res.json(viewer);
    }else{
       res.status(404)
       throw new Error('Viewer not found')
    }
});


 // UPDATE viewer
//@route  PUT api/viewers/edit/:id
//@access Private
const editViewer = asyncHandler(async(req,res)=>{
    const viewer = await Viewer.findById(req.params.id)

    if(viewer){
    viewer.name = req.body.name || viewer.name
    viewer.rating = req.body.rating || viewer.rating
    viewer.followingSince = req.body.followingSince || viewer.followingSince
    viewer.personalityType = req.body.personalityType || viewer.personalityType
    viewer.location= req.body.location || viewer.location
    viewer.age = req.body.age || viewer.agee
    viewer.notes = req.body.notes || viewer.notes

    const updatedViewer = await viewer.save();
    res.json({ updatedViewer });
    
    }else{
        res.status(404)
        throw new Error('Viewer not found')
    }
});


// Delete 
//@route  DELETE api/viewers/remove/:id
//@access Private
const deleteViewer = asyncHandler(async(req,res)=>{
    const viewer = await Viewer.findByIdAndDelete(req.params.id);
 
    if(!viewer){
        res.status(404)
        throw new Error('Viewer not found');
    }else{
        res.status(201).json({ viewer });
    }

 });






 module.exports = { getViewers, createViewer, getViewerById, editViewer, deleteViewer }