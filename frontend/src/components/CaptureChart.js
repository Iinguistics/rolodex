import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Scatter, Bar } from 'react-chartjs-2';
import Message from './bootstrapHelpers/Message';
import { ListGroup } from 'react-bootstrap';

const CaptureChart = ({ userInfo, history }) => {
    const [captureData, setCaptureData] = useState([]);
    const [captureDataError, setCaptureDataError] = useState("");
    const [dateArr, setDateArr] = useState([]);
    const [viewRaw, setViewRaw] = useState(false);




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


    const fetchDates = ()=>{
        const myArr = [];
        for(let i = 0; i < captureData.length; i++){
            let dateToArr = captureData[i].createdAt.split("");
            dateToArr.splice(10,14);
            const newDate = dateToArr.join("");
        myArr.push(newDate);
        setDateArr(myArr);
        }
        return myArr;
    }


    useEffect(()=>{
        if(!userInfo){
         history.push('/login');
        }

        fetchCaptures();
        
        fetchDates();


    }, []);

   

    
    console.log(captureData)
   
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


    
    

    const data = {
    datasets: [
        {
        label: 'Captures',
        data: testArrFunc(),
        backgroundColor: 'rgba(255, 99, 132, 1)',
        },
    ],
    }

    const options = {
        // chart: {
        //     type: 'scatter',
        //     zoom: {
        //       enabled: true,
        //       type: 'xy'
        //     }
        // },

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
              labelString: 'All Captures',
              
            },
            // xaxis: {
            //     type: 'datetime',
            //     tickAmount: 10,
            //   },
            //   tooltip: {
            //     x: {
            //       format: 'dd MMM yyyy'
            //     },
            // },

            type: 'time',
            time: {
                displayFormats: {
                    quarter: 'MMM YYYY'
                }
            },
            
            // fill: {
            //     type: 'gradient',
            //     gradient: {
            //       shadeIntensity: 1,
            //       opacityFrom: 0.7,
            //       opacityTo: 0.9,
            //       stops: [0, 100]
            //     }
            // },

            ticks: {
                callback: function(label, index, labels) {
                     for(let i = 0;  i<dateArr.length; i++){
                         if(dateArr[i] !== dateArr[i + 1]){
                            console.log(dateArr[i])
                            return
                         }
                        
                     }
                    }
                }
                   
           
          }],
    },
    }
    
 console.log(dateArr);

   const toggleRaw = ()=>{
       setViewRaw(!viewRaw)
   }
   

   const dateSplicer = (date)=>{
    let dateToArr = date.split("");
    dateToArr.splice(10,14);
    const newDate = dateToArr.join("");
    return newDate;
}

       

    return (
        <div className="my-5">
            {captureDataError && <Message variant="danger">{captureDataError}</Message> }
         

            <Scatter
                data={data}
                width={100}
                height={50}
                options={options}
            />

          <input type="submit" className="btn-primary btn my-5" value={viewRaw ? "hide raw" : "view raw"} onClick={()=> toggleRaw()}/>
         
          <ListGroup>
          {viewRaw && captureData.map((item)=>{
              return  <ListGroup.Item className="text-success">Viewer count captured: {item.chatter_count} viewers on {dateSplicer(item.createdAt)}</ListGroup.Item>
               
          })}
          </ListGroup>
        </div>
    )
}

export default CaptureChart
