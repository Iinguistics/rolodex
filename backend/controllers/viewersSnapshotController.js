const asyncHandler = require('express-async-handler');
const ViewerSnapshot = require('../models/viewersSnapshotModel');
const axios = require('axios');



// Fetch logged in users snapshots/viewer count captures    
//@route  GET /api/sanpshot
const getSnapshots = asyncHandler(async(req,res)=>{

    const snapshots = await ViewerSnapshot.find({ user: req.user._id });
    res.json({ snapshots });

});



// Create new snapshot 
//@route  POST api/snapshot
//@access Have to be logged in
const createSnapshot = asyncHandler(async(req,res)=>{
   const { count, title } = req.body;

        try{
            if(count === 0){
                    res.status(400)
                    throw new Error('No viewers')
                    return
                }else{
                    const snapshot = new ViewerSnapshot({
                        user: req.user._id,
                        chatter_count: count,
                        stream_title: title
                    });
                    const createdSnapshot = await snapshot.save();
                    res.status(201).json(createdSnapshot);
                }
        
         }catch(error){
            res.status(404).json(error.message);
        }
});



// Delete 
//@route  DELETE api/snapshot
//@access Private
const deleteSnapshot = asyncHandler(async(req,res)=>{
    { snapshotId } req.body;
    const viewerSnapshot = await Viewer.findByIdAndDelete(snapshotId);
 
    if(!viewerSnapshot){
        res.status(404)
        throw new Error('Snapshot not found');
    }
 });







module.exports = { createSnapshot, getSnapshots, deleteSnapshot }