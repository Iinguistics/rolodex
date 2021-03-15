const asyncHandler = require('express-async-handler');
const Viewer = require('../models/viewerModel');



// Create a viewer
//@route  POST api/viewers
//@access Have to be logged in
const createViewer = asyncHandler(async(req,res)=>{
    const viewer = new Viewer({
        user: req.user._id,
        name: 'New viewer',
        rating: 0,
        followingSince: Date.now(),
        personalityType: 'INFJ-A',
        location: "London, UK",
        age: "Uknown",
        notes: 'Likes long walks on the beach & reads fiction...'
        
    });
    
    const createdViewer = await viewer.save();
    res.status(201).json(createdViewer);
 });


 // Fetch single viewer  
//@route  GET /api/viewer/:id
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
//@route  PUT api/viewer/edit/:id
//@access Private
const editViewer = asyncHandler(async(req,res)=>{
    const viewer = await Viewer.findById(req.params.id)

    if(viewer){
    viewer.name = req.body.name || viewer.name
    viewer.rating = req.body.rating || viewer.rating
    viewer.followingSince = req.body.followingSince || viewer.followingSince
    viewer.personalityTypery = req.body.personalityTypery || viewer.personalityTypery
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






 module.exports = { createViewer, getViewerById, editViewer }