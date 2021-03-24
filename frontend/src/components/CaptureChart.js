import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Scatter, Bar } from 'react-chartjs-2';
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

    const testObjFunc = ()=>{
        const myObj = {}
        for(let i = 0; i < 3; i++){
           
        return { x: captureData[i].createdAt, y: captureData[i].chatter_count }
        }
    }

    const testArrFunc = ()=>{
        const myArr = [];
        for(let i = 0; i < captureData.length; i++){
            let dateToArr = captureData[i].createdAt.split("");
            dateToArr.splice(10,14);
            const newDate = dateToArr.join("");

        myArr.push({ x: newDate, y: captureData[i].chatter_count })
        }
        return myArr;
    }




    const rand = () => Math.round(Math.random() * 20 - 10)

    const data = {
    datasets: [
        {
        label: 'Captures',
        // data: [
        //     // { x: 'Sep 4 2015', y: 25 },
        //     // { x: captureData[1].createdAt, y: rand() },
        //     { x: rand(), y: rand() },
        //     { x: rand(), y: rand() },
        //     { x: rand(), y: rand() },
        //     { x: rand(), y: rand() },
        //     { x: rand(), y: rand() },
        //     { x: rand(), y: rand() },
        //     { x: rand(), y: rand() },
        //     { x: rand(), y: rand() },
        //     { x: rand(), y: rand() },
        //     { x: rand(), y: rand() },
        //     { x: rand(), y: rand() },
        // ],
        data: testArrFunc(),
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
              labelString: 'Dates',
              
            },
            type: 'time',
            time: {
                displayFormats: {
                    quarter: 'MMM YYYY'
                }
            }
          }],
    },
    }
    


       



    return (
        <div>
            {captureDataError && <Message variant="danger">{captureDataError}</Message> }
         

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
