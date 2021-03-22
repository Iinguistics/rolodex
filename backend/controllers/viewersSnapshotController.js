const asyncHandler = require('express-async-handler');
//const ViewerSnapshot = require('../models/viewersSnapshotModel');
const axios = require('axios');

// Create new snapshot 
//@route  POST api/viewers/snapshot
//@access Have to be logged in
const createSnapshot = asyncHandler(async(req,res)=>{
   // const { chatter_count, vips, moderators, staff, admins, global_mods, viewers } = req.body;

        try{

        // const config = {
        //     headers:{
        //          //'Content-Type': 'application/json',
        //           Authorization: `Bearer ${process.env.TWITCH_CLIENT_SECRET}`,
        //          'client-id': `${process.env.TWITCH_CLIENT_ID}`
        //     }
        // }
        axios.defaults.headers.common['Client-ID'] = process.env.TWITCH_CLIENT_ID;

        const { data } = await axios.get(`https://api.twitch.tv/helix/streams?first=10`);
        res.status(201).json(data);
        
         }catch(error){
            res.status(404).json(error.message);
            
        }
 
    // if(chatter_count && chatter_count.length === 0){
    //     res.status(400)
    //     throw new Error('No viewers')
    //     return
    // }else{
    //     const snapshot = new ViewerSnapshot({
    //         user: req.user._id,
    //         chatter_count,
    //         vips,
    //         moderators,
    //         staff,
    //         admins,
    //         global_mods,
    //         viewers
    //     });
    //     const createdSnapshot = await snapshot.save();
    //     res.status(201).json(createdSnapshot);
    // }
});







module.exports = { createSnapshot }