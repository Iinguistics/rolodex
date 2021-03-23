import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import SearchBox from '../components/SearchBox';
import Paginate from '../components/Paginate';
import { Link } from 'react-router-dom';
import { Form, Button, Row, Col, Card, Image } from 'react-bootstrap';
import Loader from '../components/bootstrapHelpers/Loader';
import Message from '../components/bootstrapHelpers/Message';
import FormContainer from '../components/FormContainer';
import axios from 'axios';
import { VscOpenPreview } from 'react-icons/vsc';
import { AiFillSave } from 'react-icons/ai';
import { FaBook, FaUserAlt } from 'react-icons/fa';
import TMI from '../components/TMI';


const ProfileScreen = ({ userInfo, history, match, userTwitchToken }) => {
    const [createViewerError, setCreateViewerError] = useState("");
    const [createdViewer, setCreatedViewer] = useState({});
    const [createdViewerSuccess, setCreatedViewerSuccess] = useState(false);
    const [listViewersError, setListViewersError] = useState("");
    const [listViewers, setListViewers] = useState([]);
    const [fetchViewersSuccess, setFetchViewerSucces] = useState(false);
    const [pages, setPages] = useState();
    const [page, setPage] = useState();
    const [totalAddedViewers, setTotalAddedViewers] = useState();
    const [userTwitchData, setUserTwitchData] = useState(null);

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
        }catch (error){
          setListViewersError(error.message)
        }
    }


    //fetch user data from twitch API
    const fetchUserTwitchData = async()=>{
        if(userInfo){
            const { data } = await axios.post('/api/test', { token:userTwitchToken, name:userInfo.name });
             setUserTwitchData(data);
        }
    }

     console.log(userTwitchData);

    useEffect(()=>{
       
        if(!userInfo){
            history.push('/login');
        }

        // if(!userTwitchData){
        //     fetchUserTwitchData();
        // }
        fetchUserTwitchData();

        fetchViewers(keyword, pageNumber);

        if(createdViewerSuccess){
            history.push(`/profile/viewer/edit/${createdViewer._id}`)
        }

    }, [userInfo, history, createdViewerSuccess, createdViewer, fetchViewersSuccess, keyword, pageNumber ]);

     



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


    const renderViewers = ()=>{
        if(listViewers){
            return listViewers.map((viewer)=>{
                return(
                        <Col className="mb-5" sm key={viewer._id}>
                         <Link to={`/profile/viewer/detail/${viewer._id}`} className="no-underline">
                            <Card style={{ width: '16rem', height: '12rem'}} className="card-border">
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

    return (
        <div className="my-5 container">
            <div>
                <h1>Dashboard</h1>
                <h2 className="my-4">Welcome {userInfo && userInfo.name}</h2>
                {userTwitchData && (
                    <>
                    
                    <h5>Currently streaming: {userTwitchData.data[0].game_name}</h5>
                    <h5>Title: {userTwitchData.data[0].title}</h5>
                    <h5>Current viewer count: {userTwitchData.data[0].viewer_count}</h5>
                    <TMI channel = {userInfo.name}/>
                    </>
                )}

                
            </div>
            {createViewerError && <Message variant="danger">{createViewerError}</Message> }
            {listViewersError && <Message variant="danger">{listViewersError}</Message> }
            <Row className="mt-5">
                <Col className="mb-5" sm={6}>
                <Card style={{ width: '18rem' }}>
                <Card.Body>
                <Card.Title>Save all current viewer's</Card.Title>
                <Card.Subtitle className="mb-2 text-muted"><AiFillSave /></Card.Subtitle>
                <Card.Text>
                Click save to capture all your current viewer's from your twitch channel.
                You can view all your captures by clicking the view captures.
                </Card.Text>
                <Card.Link type="submit" className="btn-primary btn">Save</Card.Link>
                <Card.Link href="#" type="submit" className="btn-primary btn">View Captures</Card.Link>
             </Card.Body>
            </Card>
          </Col>
   
               <Col sm={6}>
                <Card style={{ width: '18rem' }}>
                <Card.Body>
                <Card.Title>Add Viewer's to your book</Card.Title>
                <Card.Subtitle className="mb-2 text-muted"><VscOpenPreview /></Card.Subtitle>
                <Card.Text>
                Add viewer's to your spybook. You can refer back to your book so you 
                can learn more about your viewer's & grow your channel.
                </Card.Text>
                <Card.Link type="submit" className="btn-primary btn" onClick={createViewerHandler}>+ Viewer</Card.Link>
              </Card.Body>
             </Card>
            </Col>
          </Row>


            <Row className="mt-5">
                <Col className="mb-5" sm={6}>
                { totalAddedViewers > 0 ? ( 
                    <>
                    <Route render={({ history })=> <SearchBox history = {history} />} />
                    <h5 className ="mt-3">{totalAddedViewers} Viewer's currently in your book <FaBook /></h5> 
                    </>
                ) : <h5 className ="mt-3">You have no viewers currently in your book. <FaBook /></h5>
                }
                </Col>
            </Row>
            
            <Row className="mt-5">
              {renderViewers()}
            </Row>
             
             { totalAddedViewers > 15 &&  <Paginate pages={pages} page={page} keyword={keyword ? keyword : ''} /> }
           
        </div>
    )
}

export default ProfileScreen;
