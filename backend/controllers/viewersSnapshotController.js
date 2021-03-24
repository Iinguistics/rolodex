const asyncHandler = require('express-async-handler');
const ViewerSnapshot = require('../models/viewersSnapshotModel');
const axios = require('axios');



// Fetch logged in users viewers    
//@route  GET /api/viewers/sanpshot
const getSnapshots = asyncHandler(async(req,res)=>{

    const snapshots = await ViewerSnapshot.find({ user: req.user._id });
    res.json({ snapshots });

});



// Create new snapshot 
//@route  POST api/viewers/snapshot
//@access Have to be logged in
const createSnapshot = asyncHandler(async(req,res)=>{
   const { count } = req.body;

        try{
            if(count === 0){
                    res.status(400)
                    throw new Error('No viewers')
                    return
                }else{
                    const snapshot = new ViewerSnapshot({
                        user: req.user._id,
                        chatter_count: count
                    });
                    const createdSnapshot = await snapshot.save();
                    res.status(201).json(createdSnapshot);
                }
        
         }catch(error){
            res.status(404).json(error.message);
        }
});







module.exports = { createSnapshot, getSnapshots }