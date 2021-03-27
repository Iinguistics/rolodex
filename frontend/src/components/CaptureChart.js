import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line} from 'react-chartjs-2';
import Message from './bootstrapHelpers/Message';
import { ListGroup } from 'react-bootstrap';


const CaptureChart = ({ userInfo }) => {
    const [captureData, setCaptureData] = useState([]);
    const [captureDataError, setCaptureDataError] = useState("");
    const [dateArr, setDateArr] = useState([]);
    const [viewRaw, setViewRaw] = useState(false);
    const [averageViewers, setAverageViewers] = useState(0);
    const [getAllCaptures, setGetAllCaptures] = useState(false);
    const [heighestCount, setHeighestCount] = useState(Number);
    const [heighestCountTitle, setHeighestCountTitle] = useState("");
    const [lowestCount, setLowestCount] = useState(Number);
    const [lowestCountTitle, setLowestCountTitle] = useState("");



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
            setGetAllCaptures(true);


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


    const setHighest = ()=>{
        if(captureData){
            let highNum = 0;
            let highTitle = "";
            for(let i = 0; i < captureData.length; i++){
                if(captureData[i].chatter_count > highNum){
                    highNum = captureData[i].chatter_count;
                    highTitle = captureData[i].stream_title;
                }
            }
            setHeighestCount(highNum);
            setHeighestCountTitle(highTitle);
        }
    }

    const setLowest = ()=>{
        if(captureData){
            let lowNum = Infinity;
            let lowTitle = "";
            for(let i = 0; i < captureData.length; i++){
                if(captureData[i].chatter_count < lowNum){
                    lowNum = captureData[i].chatter_count;
                    lowTitle = captureData[i].stream_title;
                }
            }
            setLowestCount(lowNum);
            setLowestCountTitle(lowTitle);
        }
    }


    const toggleRaw = ()=>{
        setViewRaw(!viewRaw)
    }
 
    const fetchAverageViewers = ()=>{
        if(captureData.length === 0){
            return
        }
        let runningValue = 0;
        for(let item of captureData){
            runningValue += item.chatter_count
        }
        setAverageViewers(Math.floor(runningValue / captureData.length))
    }



   if(userInfo) console.log(captureData)

    useEffect(()=>{
        if(userInfo){
            fetchCaptures();
            outputDates();    
        }
    }, [userInfo, getAllCaptures]);

    useEffect(()=>{
        if(userInfo){
        fetchAverageViewers();
        setHighest();
        setLowest();
        }
        }, [captureData]);

        // useEffect(()=>{
        //     if(captureData){
        //     setHighest();
        //     }
        //     }, []);

    


    const data = {
        labels: dateArr && dateArr,
        datasets: [
          {
            label: '# of Viewers',
            data: captureData && outputCount(),
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
         {captureDataError && <Message variant="danger">{captureDataError}</Message> }
           {captureData && <Line data={data} options={options} />} 

           <ListGroup horizontal className="mt-5 mb-3">
            <ListGroup.Item className="text-white">Total Captures: {captureData.length}</ListGroup.Item>
            <ListGroup.Item className="text-white">Average Viewers: {averageViewers}</ListGroup.Item>
            </ListGroup>

            <ListGroup horizontal className="mb-3">
            <ListGroup.Item className="text-white">Heighest Viewers: {heighestCount}, Stream Title: {heighestCountTitle}</ListGroup.Item>
            </ListGroup>

            <ListGroup horizontal className="mb-3">
            <ListGroup.Item className="text-white">Lowest Viewers: {lowestCount}, Stream Title: {lowestCountTitle}</ListGroup.Item>
            </ListGroup>

          <input type="submit" className="btn-primary btn my-5" value={viewRaw ? "hide raw data" : "view raw data"} onClick={()=> toggleRaw()}/>
         
          <ListGroup>
          {viewRaw &&  captureData.map((item)=>{
              return (
                  <>
                   <ListGroup.Item key={item._id}>Viewer count captured: {item.chatter_count} viewers on {dateSplicer(item.createdAt)}</ListGroup.Item>
                   </>
              )
          })}
          </ListGroup>
        </div>
    )
}

export default CaptureChart
