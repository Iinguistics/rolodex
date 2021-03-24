import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Message from './bootstrapHelpers/Message';


const CaptureChart = ({ userInfo, history }) => {
    const [captureData, setCaptureData] = useState([]);
    const [captureDataError, setCaptureDataError] = useState("");



    //fetch captures from db
    const fetchCaptures = async()=>{
        
        try{
            const config = {
                headers:{
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${userInfo.token}`
                }
            }
            const { data } = await axios.get('/api/snapshot', config);
            setCaptureData(data);
           
        }catch (error){
          setCaptureDataError(error.message)
        }
    }


    useEffect(()=>{
        if(!userInfo){
         history.push('/login');
        }

        fetchCaptures();

    }, [])


   console.log(captureData)

    return (
        <div>
            {captureDataError && <Message variant="danger">{captureDataError}</Message> }
            testing
        </div>
    )
}

export default CaptureChart
