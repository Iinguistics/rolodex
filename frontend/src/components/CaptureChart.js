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
    const [averageViewers, setAverageViewers] = useState(0);





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
        const newDate =  dateSplicer(captureData[i].createdAt);
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

    useEffect(()=>{
        fetchAverageViewers();
        }, [captureData]);

   

    const dateSplicer = (date)=>{
        let dateToArr = date.split("");
        dateToArr.splice(10,14);
        const newDate = dateToArr.join("");
        return newDate;
    }
   
    const testArrFunc = ()=>{
        const myArr = [];
        for(let i = 0; i < captureData.length; i++){
        const newDate =  dateSplicer(captureData[i].createdAt);
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

            type: 'time',
            time: {
                displayFormats: {
                    quarter: 'MMM YYYY'
                }
            },
            
            ticks: {
                callback: function(label, index, labels) {
                     for(let i = 0;  i<dateArr.length; i++){
                         if(dateArr[i] !== dateArr[i + 1]){
                            return
                         }
                        
                     }
                    }
                }   
          }],
    },
    }
    
 console.log(captureData);

   const toggleRaw = ()=>{
       setViewRaw(!viewRaw)
   }

   const fetchAverageViewers = ()=>{
       let runningValue = 0;
       for(let item of captureData){
           console.log(item.chatter_count)
           runningValue += item.chatter_count
       }
       setAverageViewers(Math.floor(runningValue / captureData.length))


    // if(captureData.length !== 0){
    //     captureData.chatter_count.reduce((a,b)=>{
    //         console.log(a + b)
    //     })

    // }
   
   }

    
    console.log(averageViewers)

   
   

       

    return (
        <div className="my-5">
            {captureDataError && <Message variant="danger">{captureDataError}</Message> }
         

            <Scatter
                data={data}
                width={100}
                height={50}
                options={options}
            />

            <ListGroup horizontal>
            <ListGroup.Item>Total Captures: {captureData.length}</ListGroup.Item>
            <ListGroup.Item>ListGroup</ListGroup.Item>
            </ListGroup>

          <input type="submit" className="btn-primary btn my-5" value={viewRaw ? "hide raw" : "view raw"} onClick={()=> toggleRaw()}/>
         
          <ListGroup>
          {viewRaw && captureData.map((item)=>{
              return  <ListGroup.Item key={item._id}>Viewer count captured: {item.chatter_count} viewers on {dateSplicer(item.createdAt)}</ListGroup.Item>
          })}
          </ListGroup>
        </div>
    )
}

export default CaptureChart
