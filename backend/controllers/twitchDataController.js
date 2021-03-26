const asyncHandler = require('express-async-handler');
const axios = require('axios');



// fetch twitch profile data / for profile img
//@route  POST api/generaldata
//@access Have to be logged in
const fetchGeneralData = asyncHandler(async(req,res)=>{
    const { token, name } = req.body;

    //const testChannel = 'contv'
    
        try{

        const config = {
            headers:{
                 // 'Content-Type': 'application/json',
                  Authorization : `Bearer ${token}`,
                 'Client-ID': `${process.env.TWITCH_CLIENT_ID}`
            }
        }

        // get specified users info
        const { data } = await axios.get(`https://api.twitch.tv/helix/users?login=${name}&login=${name}`, config);

        res.status(200).json(data);
        
         }catch(error){
            res.status(404).json(error.message);
        }
});



// fetch twitch user data
//@route  POST api/test
//@access Have to be logged in
const fetchLiveData = asyncHandler(async(req,res)=>{
    const { token, name } = req.body;

    //const testChannel = 'contv'
    
        try{

        const config = {
            headers:{
                 // 'Content-Type': 'application/json',
                  Authorization : `Bearer ${token}`,
                 'Client-ID': `${process.env.TWITCH_CLIENT_ID}`
            }
        }

        // get specified users info, including their user_id & viewer_count
        const { data } = await axios.get(`https://api.twitch.tv/helix/streams?user_login=${name}`, config);

        res.status(200).json(data);
        console.log(data);
        
         }catch(error){
            res.status(404).json(error.message);
        }
});


// Gen new token
//@route  GET api/test/token
//@access Have to be logged in
const fetchToken = asyncHandler(async(req,res)=>{
      
         try{

         //get token
        const tokenData = await axios.post(`https://id.twitch.tv/oauth2/token?client_id=${process.env.TWITCH_CLIENT_ID}&client_secret=${process.env.TWITCH_CLIENT_SECRET}&grant_type=client_credentials`);
        tokenData.data.access_token
 
        const twitchToken = tokenData.data.access_token;
 
         res.status(200).json(twitchToken);
         
          }catch(error){
             res.status(404).json(error.message);
         }
 });








module.exports =  { fetchLiveData, fetchToken, fetchGeneralData} 