import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line} from 'react-chartjs-2';
import Message from './bootstrapHelpers/Message';
import { ListGroup, Jumbotron, Button } from 'react-bootstrap';
import { Link, Element } from 'react-scroll';
import { AiOutlineDelete } from 'react-icons/ai';
import Loader from '../components/bootstrapHelpers/Loader';
import { useToasts } from 'react-toast-notifications';
import { CgArrowUpR } from 'react-icons/cg';


const CaptureChart = ({ userInfo, history }) => {
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
    const [removedCaptureError, setRemovedCaptureError] = useState("");
    const [loading, setLoading] = useState(false);
    const [removedRan, setRemovedRan] = useState(0);


    const { addToast } = useToasts();


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

    

     // delete capture
    const removeHandler = async(id)=>{
        try{
            const config = {
                headers:{
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${userInfo.token}`
                }
            }
            await axios.delete(`/api/snapshot/remove/${id}`, config);
           
        }catch(error){
            setRemovedCaptureError(error.message);
        }
    }


    const removeSubmitHandler = (e, id)=>{
        e.preventDefault();
        setLoading(true)
          removeHandler(id);
            setTimeout(()=>{
                if(!removedCaptureError){
                    setLoading(false);
                    addToast('capture has been removed', {
                        appearance: 'success'
                    });
                    setRemovedRan( removedRan => removedRan + 1)
                    }
            }, 2000)
    }



    useEffect(()=>{
            fetchCaptures();
            outputDates(); 
            
    }, [getAllCaptures, removedRan]);

    useEffect(()=>{
        fetchAverageViewers();
        setHighest();
        setLowest();
        
        }, [captureData]);

        useEffect(()=>{
            if(removedRan !== 0 && captureData.length === 0){
                history.push('/profile');
              }
            
    }, [fetchCaptures]);

        


    const data = {
        labels: dateArr && dateArr,
        datasets: [
          {
            label: '# of Viewers',
            data: captureData && outputCount(),
            fill: false,
            backgroundColor: '#FFFFFF',
            borderColor: '#add8e6',
            //borderColor: '#8B9DC3',
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
         {removedCaptureError && <Message variant="danger">{removedCaptureError}</Message> }
           {captureData && <Line data={data} options={options} /> } 
           <Jumbotron className="my-5 main-jumbo-bg shadow">
           <ListGroup horizontal className="mt-5 mb-3">
            <ListGroup.Item className="text-white profile-description-cards">Total Captures: {captureData.length}</ListGroup.Item>
            <ListGroup.Item className="text-white profile-description-cards">Average Viewers: {averageViewers}</ListGroup.Item>
            </ListGroup>

            <ListGroup horizontal className="mb-3">
            <ListGroup.Item className="text-white profile-description-cards"><span className="green">Heighest Viewers:</span> {heighestCount}, Stream Title: {heighestCountTitle}</ListGroup.Item>
            </ListGroup>

            <ListGroup horizontal className="mb-3">
            <ListGroup.Item className="text-white profile-description-cards"><span className="red">Lowest Viewers:</span>  {lowestCount}, Stream Title: {lowestCountTitle}</ListGroup.Item>
            </ListGroup>
            </Jumbotron>
           
            <Element name="raw-data">
            <input type="submit" className="btn-primary btn my-5" value={viewRaw ? "hide raw data" : "view raw data"} onClick={()=> toggleRaw()} />
           </Element>


          
          
          

           <ListGroup>
            { loading && <Loader /> }
            {viewRaw &&  captureData.map((item)=>{
              return (
                  <>
                  <div className="divider"></div>
                   <ListGroup.Item className="text-white profile-description-cards d-flex justify-content-between" key={item._id}>Viewer count captured: {item.chatter_count} viewers on {dateSplicer(item.createdAt)}
                   <Button className="btn-danger btn-sm " onClick={(e)=> removeSubmitHandler(e,item._id)}>
                    Delete Capture <AiOutlineDelete />
                    </Button>
                   </ListGroup.Item>
                   </>
               )
            })}

          </ListGroup>
          {viewRaw && <Link 
                     activeClass="active" to="raw-data" spy={true} smooth={true} 
                     duration={500} delay={200} 
                    isDynamic={true} 
                    >
                    <CgArrowUpR className="h1 up-arrow mt-4"/> 
             </Link>}
          
        </div>
    )
}


export default CaptureChart
