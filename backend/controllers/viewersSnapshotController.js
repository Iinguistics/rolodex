const asyncHandler = require('express-async-handler');
const ViewerSnapshot = require('../models/viewersSnapshotModel');


// Create new snapshot 
//@route  POST api/viewers/snapshot
//@access Have to be logged in
const createSnapshot = asyncHandler(async(req,res)=>{
    const { chatter_count, vips, moderators, staff, admins, global_mods, viewers } = req.body;
    if(chatter_count && chatter_count.length === 0){
        res.status(400)
        throw new Error('No viewers')
        return
    }else{
        const snapshot = new ViewerSnapshot({
            user: req.user._id,
            chatter_count,
            vips,
            moderators,
            staff,
            admins,
            global_mods,
            viewers
        });
        const createdSnapshot = await snapshot.save();
        res.status(201).json(createdSnapshot);
    }
});







module.exports = { createSnapshot }