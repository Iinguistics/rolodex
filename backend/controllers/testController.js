const asyncHandler = require('express-async-handler');
const axios = require('axios');





// Create new snapshot 
//@route  POST api/viewers/snapshot
//@access Have to be logged in
const test = asyncHandler(async(req,res)=>{

    

        //get token
       //const { data } = await axios.post('https://id.twitch.tv/oauth2/token?client_id=kthwwyu7sve3fmnmgzimpsrfkibix4&client_secret=zebn8qsvhxeuwezkyrqbzvwe3q49k3&grant_type=client_credentials');
       const tokenData = await axios.post(`https://id.twitch.tv/oauth2/token?client_id=${process.env.TWITCH_CLIENT_ID}&client_secret=${process.env.TWITCH_CLIENT_SECRET}&grant_type=client_credentials`);
       //tokenData.data.access_token

        try{

        const config = {
            headers:{
                 // 'Content-Type': 'application/json',
                  Authorization : `Bearer ${tokenData.data.access_token}`,
                 'Client-ID': `${process.env.TWITCH_CLIENT_ID}`
            }
        }

        
        // get specified users info, including their user_id & viewer_count
        const { data } = await axios.get('https://api.twitch.tv/helix/streams?user_login=contv', config);



        res.status(200).json(data);
        
         }catch(error){
            
            res.status(404).json(error.message);
            
        }
     


});







module.exports =  { test } 