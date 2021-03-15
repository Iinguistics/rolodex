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
        location: {
            state: 'Ca',
            country: 'USA'
        },
        age: 25,
        notes: 'Likes long walks on the beach & reads fiction...'
        
    });
    
    const createdViewer = await viewer.save();
    res.status(201).json(createdViewer);
 });



 module.exports = { createViewer }