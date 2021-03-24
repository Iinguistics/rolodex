import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Scatter, Bar } from 'react-chartjs-2';
import Message from './bootstrapHelpers/Message';
import { setRandomFallback } from 'bcryptjs';


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
            setCaptureData(data.snapshots);

             
           
        }catch (error){
          setCaptureDataError(error.message)
        }
    }


    useEffect(()=>{
        if(!userInfo){
         history.push('/login');
        }

        fetchCaptures();


    }, []);

   

    
    console.log(captureData)

    const rand = () => Math.round(Math.random() * 20 - 10)

    const data = {
    datasets: [
        {
        label: 'Viewers',
        data: [
            { x: rand(), y: rand() },
            { x: rand(), y: rand() },
            { x: rand(), y: rand() },
            { x: rand(), y: rand() },
            { x: rand(), y: rand() },
            { x: rand(), y: rand() },
            { x: rand(), y: rand() },
            { x: rand(), y: rand() },
            { x: rand(), y: rand() },
            { x: rand(), y: rand() },
            { x: rand(), y: rand() },
            { x: rand(), y: rand() },
            { x: rand(), y: rand() },
            { x: rand(), y: rand() },
        ],
        backgroundColor: 'rgba(255, 99, 132, 1)',
        },
    ],
    }

    const options = {
    scales: {
        yAxes: [{
            ticks: {
            beginAtZero: true,
            },
            scaleLabel: {
                display: true,
                labelString: 'Viewer Count'
              }
        }],
        xAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Dates'
            }
          }],
    },
    }
    


       



    return (
        <div>
            {captureDataError && <Message variant="danger">{captureDataError}</Message> }
            testing

            <Scatter
                data={data}
                width={100}
                height={50}
                options={options}
            />
        </div>
    )
}

export default CaptureChart
