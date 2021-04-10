import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import SearchBox from '../components/SearchBox';
import Paginate from '../components/Paginate';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Image } from 'react-bootstrap';
import Message from '../components/bootstrapHelpers/Message';
import axios from 'axios';
import { VscOpenPreview } from 'react-icons/vsc';
import { AiFillSave } from 'react-icons/ai';
import { FaBook } from 'react-icons/fa';
import TMI from '../components/TMI';
import { useToasts } from 'react-toast-notifications';
import Loader from '../components/bootstrapHelpers/Loader';
import { FiSettings } from 'react-icons/fi';


const ProfileScreen = ({ userInfo, history, match }) => {
    const [createViewerError, setCreateViewerError] = useState("");
    const [createdViewer, setCreatedViewer] = useState({});
    const [createdViewerSuccess, setCreatedViewerSuccess] = useState(false);
    const [listViewersError, setListViewersError] = useState("");
    const [listViewers, setListViewers] = useState([]);
    const [fetchViewersSuccess, setFetchViewerSucces] = useState(false);
    const [pages, setPages] = useState();
    const [page, setPage] = useState();
    const [totalAddedViewers, setTotalAddedViewers] = useState();
    const [liveTwitchData, setLiveTwitchData] = useState([]);
    const [generalTwitchData, setGeneralTwitchData] = useState([]);
    const [twitchGeneralDataLoading, setTwitchGeneralDataLoading] = useState(true);
    const [generalTwitchDataError, setGeneralTwitchDataError] = useState("");
    const [createSnapshotError, setCreateSnapshotError] = useState("");
    const [loading, setLoading] = useState(true);
    const [sortedViewersName, setSortedViewersName] = useState([]);
    //const [sortedViewersRating, setSortedViewersRating] = useState([]);
    const [captureData, setCaptureData] = useState([]);
    const [captureDataError, setCaptureDataError] = useState("");
    const [removedRan, setRemovedRan] = useState(0);
    const [toggleSort, setToggleSort] = useState(false);
    const [listViewersByName, setListViewersByName] = useState([]);



    const { addToast } = useToasts();

    const keyword = match.params.keyword;

    const pageNumber = match.params.pageNumber || 1;
    
    //fetch viewers from db
    const fetchViewers = async(keyword = '', pageNumber = '')=>{
        
        try{
            const config = {
                headers:{
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${userInfo.token}`
                }
            }
            const { data } = await axios.get(`/api/viewers?keyword=${keyword}&pageNumber=${pageNumber}`, config);
            setListViewers(data.viewers);
            setPages(data.pages);
            setPage(data.page);
            setTotalAddedViewers(data.totalLength);
            setFetchViewerSucces(true);
            setLoading(false);
        }catch (error){
          setListViewersError(error.message);
          setLoading(false);
        }
    }
      

     // toggle
     const sortToggle = ()=>{
        setToggleSort(!toggleSort)
    }
      
      // get all viewers name & sort a - z
      const getAllViewersName = ()=>{
          const names = [];
          if(listViewers){
          for(let name of listViewers){
              names.push(name.name) 
          }
          names.sort();
          setSortedViewersName(names);
        }
      }


      // create list viewers by name & store in state
      const listViewersSortedByName = ()=>{
        getAllViewersName();
        const temp = [];
            if(sortedViewersName){
            for(let i = 0; i < listViewers.length; i++){
                let j = 0;
                while(j < sortedViewersName.length){
                    if(sortedViewersName[i] === listViewers[j].name){
                        temp.push(listViewers[j]);
                        break;
                    }else{
                        j ++;
                    }
                }
            }
            setListViewersByName(temp);
          }
        }
        
    
      useEffect(()=>{
            listViewersSortedByName();
        }, [toggleSort, fetchViewersSuccess])
          
    


    // fetch user live data from twitch API
    const fetchLiveTwitchData = async()=>{
        if(userInfo){
            const { data } = await axios.post('/api/twitchdata/livedata', { name:userInfo.name });
             setLiveTwitchData(data.data[0]);
        }
    }


     //fetch user general data from twitch API
     const fetchGeneralTwitchData = async()=>{
         try{
            if(userInfo){
                const { data } = await axios.post('/api/twitchdata/generaldata', { name:userInfo.name });
                 setGeneralTwitchData(data.data[0]);
                 setTwitchGeneralDataLoading(false);
            }

         }catch (error){
          setGeneralTwitchDataError("To use all of spybooks features please sign in with a valid twitch account");
          setTwitchGeneralDataLoading(false);
        }

    }



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

        // if(!liveTwitchData){
        //     fetchLiveTwitchData();
        // }
        fetchLiveTwitchData();
        fetchGeneralTwitchData();
        fetchViewers(keyword, pageNumber);

        fetchCaptures();


        if(createdViewerSuccess){
            history.push(`/profile/viewer/edit/${createdViewer._id}`)
        }

    }, [userInfo, history, createdViewerSuccess, createdViewer, fetchViewersSuccess, keyword, pageNumber, removedRan ]);


   
    

    const createViewerHandler = async()=>{
        try{
            const config = {
                headers:{
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${userInfo.token}`
                }
            }
            const { data } = await axios.post('/api/viewers', {}, config)
            setCreatedViewer(data);
            setCreatedViewerSuccess(true);

        }catch(error){
            setCreateViewerError(error.message);
        }
    }


    const createViewerSnapshot = async()=>{
        try{
            const config = {
                headers:{
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${userInfo.token}`
                }
            }
             await axios.post('/api/snapshot', {count: liveTwitchData.viewer_count, title: liveTwitchData.title}, config)
            addToast('Viewer count has been captured', {
                appearance: 'success'
            });
            setRemovedRan( removedRan => removedRan + 1)

        }catch(error){
            setCreateSnapshotError(error.message);
        }
    }

   
    // show by date added
    const renderViewers = ()=>{
        if(listViewers){
            return listViewers.map((viewer)=>{
                return(
                        <Col className="mb-5" sm key={viewer._id}>
                         <Link to={`/profile/viewer/detail/${viewer._id}`} className="no-underline">
                            <Card style={{ width: '16rem', height: '12rem'}} className="card-border profile-description-cards">
                            <Card.Body>
                            <Card.Title className="viewer-name">{viewer.name}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Rating: {viewer.rating} </Card.Subtitle>
                                <Card.Text>
                                Personality: {viewer.personalityType}
                            </Card.Text>
                            <Card.Text>
                                Following Since: {viewer.followingSince}
                            </Card.Text>
                         </Card.Body>
                        </Card>
                     </Link>
                  </Col>
                )
            })
        }
    }

        //sorted a - z   come back to this  
        const renderSortedViewers = ()=>{
           // if(toggleSort){
                return listViewersByName.map((viewer)=>{
                    return(
                            <Col className="mb-5" sm key={viewer.createAt}>
                            <Link to={`/profile/viewer/detail/${viewer._id}`} className="no-underline">
                                <Card style={{ width: '16rem', height: '12rem'}} className="card-border profile-description-cards">
                                <Card.Body>
                                <Card.Title className="viewer-name">{viewer.name}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Rating: {viewer.rating} </Card.Subtitle>
                                    <Card.Text>
                                    Personality: {viewer.personalityType}
                                </Card.Text>
                                <Card.Text>
                                    Following Since: {viewer.followingSince}
                                </Card.Text>
                            </Card.Body>
                            </Card>
                        </Link>
                    </Col>
                    )
                })
          //  }
        }

    const renderLiveTwitchData = ()=>{
     
        if(liveTwitchData && userInfo){
           return (
            <>
            <h5>Currently streaming: {liveTwitchData.game_name}</h5>
            <h5>Title: {liveTwitchData.title}</h5>
            <h5>Current viewer count: {liveTwitchData.viewer_count}</h5>
            <TMI channel = {userInfo.name}/>
            </>
        )
        }else{
           return <h5>Not currently streaming</h5>
        }
    }


    const renderGeneralTwitchData = ()=>{
     
        if(generalTwitchData){
           return (
            <>
            <Image src={generalTwitchData.profile_image_url} roundedCircle fluid className="border border-primary shadow-lgg mb-2" />
            <h5 className="cap-type">Twitch {generalTwitchData.broadcaster_type}</h5>
            <h5>Description: {generalTwitchData.description}</h5>
            <h5>Total views: {generalTwitchData.view_count}</h5>
            </>
        )
        }else{
           return <h5>Not currently streaming</h5>
        }
    }



    return (
        <div className="my-5 container">
            <div>
                <h1>Dashboard</h1>
                <div className="mb-4 testing"><Link id="user-settings"><FiSettings /> Settings</Link></div> 
                <h2 className="my-3">Welcome {userInfo && userInfo.name}</h2>
                {twitchGeneralDataLoading && <Loader />}
                {renderGeneralTwitchData()}
                {renderLiveTwitchData()}                 
            </div>
            {createViewerError && <Message variant="danger">{createViewerError}</Message> }
            {listViewersError && <Message variant="danger">{listViewersError}</Message> }
            {createSnapshotError && <Message variant="danger">{createSnapshotError}</Message> }
            {captureDataError && <Message variant="danger">{captureDataError}</Message> }
            {generalTwitchDataError && <Message variant="danger">{generalTwitchDataError}</Message> }


            <div className="divider w-75 my-3"></div>
            
            <Row className="mt-5">
                <Col className="mb-5" sm={6}>
                <Card style={{ width: '18rem', height: '16rem'}} className="profile-description-cards">
                <Card.Body>
                <Card.Title className="text-white">Save current viewer count</Card.Title>
                <Card.Subtitle className="mb-2 text-muted"><AiFillSave /></Card.Subtitle>
                <Card.Text>
                {liveTwitchData ? 
                 <Card.Text>Click save to capture your current viewer count. You can view all your captures charted out by clicking the view captures.</Card.Text>
                 : (
                  <>
                 <Card.Text>You must be live to capture your current viewers</Card.Text>
                 <Card.Link type="submit" className="btn-primary btn my-3 disabled">Save</Card.Link>
                 </>
                 )
                }
                
               
                </Card.Text>
               {liveTwitchData && <Card.Link type="submit" className="btn-primary btn my-3" onClick={createViewerSnapshot}>Save</Card.Link>} 
               {captureData.length !== 0 &&  <Link to="/profile/viewer/captures" className={liveTwitchData ? `btn-primary btn ml-3` : `btn-primary btn d-inline`}>View Captures</Link> }
             </Card.Body>
            </Card>
          </Col>
   
               <Col sm={6}>
                <Card style={{ width: '18rem', height: '16rem' }} className="profile-description-cards">
                <Card.Body>
                <Card.Title className="text-white">Add Viewer's to your book</Card.Title>
                <Card.Subtitle className="mb-2 text-muted"><VscOpenPreview /></Card.Subtitle>
                <Card.Text>
                 You can reference back to your book. This tool allows you to learn more about your viewer's and grow your channel.
                </Card.Text>
                <Card.Link type="submit" className="btn-primary btn my-3" onClick={createViewerHandler}>+ Viewer</Card.Link>
              </Card.Body>
             </Card>
            </Col>
          </Row>


            <Row className="mt-5">
                <Col className="mb-4" sm={6}>
                { totalAddedViewers > 0 ? ( 
                    <>
                    <Route render={({ history })=> <SearchBox history = {history} />} /> 
                   {totalAddedViewers > 1 && <input type="submit" className="btn-info btn my-3" value={toggleSort ? "Unsort viewers" : "Sort Viewers by name (a-z)"} onClick={()=> sortToggle()}/> } 
                    <h5 className ="mt-4">{totalAddedViewers} Viewer's currently in your book <FaBook /></h5> 
                    </>
                ) : <h5 className ="mt-4">You have no viewers currently in your book. <FaBook /></h5>
                }
                </Col>
            </Row>
            {loading && <Loader />} 
            <Row className="mt-4">
                { toggleSort ? renderSortedViewers() : renderViewers() }
            </Row>
             
             { totalAddedViewers > 15 &&  <Paginate pages={pages} page={page} keyword={keyword ? keyword : ''} /> }
           
        </div>
    )
}

export default ProfileScreen;
