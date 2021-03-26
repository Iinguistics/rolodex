import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line} from 'react-chartjs-2';
import Message from './bootstrapHelpers/Message';
import { ListGroup } from 'react-bootstrap';


const Test = ({ userInfo }) => {
    const [captureData, setCaptureData] = useState([]);
    const [captureDataError, setCaptureDataError] = useState("");
    const [dateArr, setDateArr] = useState([]);



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


    const outputDates = ()=>{
        const myArr = [];
        for(let i = 0; i < captureData.length; i++){
        const newDate =  dateSplicer(captureData[i].createdAt);
        myArr.push(newDate);
        setDateArr(myArr);
        }
        return myArr;
    }

    const dateSplicer = (date)=>{
        let dateToArr = date.split("");
        dateToArr.splice(10,14);
        const newDate = dateToArr.join("");
        return newDate;
    }


    const outputCount = ()=>{
        const myArr = [];
        for(let i = 0; i < captureData.length; i++){
        myArr.push( captureData[i].chatter_count )
        }
        return myArr;
    }





    useEffect(()=>{
        fetchCaptures();
        outputDates();
    }, []);

    console.log(dateArr);
    if(dateArr){
        console.log(dateArr);
    }
    console.log(captureData);
    if(captureData){
        console.log(captureData);
    }
    


    const data = {
        labels: dateArr && dateArr,
        datasets: [
          {
            label: '# of Viewers',
            data: outputCount(),
            fill: false,
            backgroundColor: '#000',
            //borderColor: '#add8e6',
            borderColor: '#8B9DC3',
          },
        ],
      }
      
      const options = {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      }



    return (
        <div className="my-5">
            

            <div className='header'>
            <h1 className='title'>Line Chart</h1>
            <div className='links'>
                <a
                className='btn btn-gh'
                href='https://github.com/reactchartjs/react-chartjs-2/blob/react16/example/src/charts/Line.js'
                >
                Github Source
                </a>
            </div>
            </div>
            <Line data={data} options={options} />

        </div>
    )
}

export default Test
