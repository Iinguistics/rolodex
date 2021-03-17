import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import SearchBox from '../components/SearchBox';
import Paginate from '../components/Paginate';
import { Form, Button, Row, Col, Card } from 'react-bootstrap';
import Loader from '../components/bootstrapHelpers/Loader';
import Message from '../components/bootstrapHelpers/Message';
import FormContainer from '../components/FormContainer';
import axios from 'axios';
import { VscOpenPreview } from 'react-icons/vsc';
import { AiFillSave } from 'react-icons/ai';
import { FaBook, FaUserAlt } from 'react-icons/fa';

const ProfileScreen = ({ userInfo, history, match }) => {
    const [createViewerError, setCreateViewerError] = useState("");
    //const [user, setUser] = useState(null);
    const [createdViewer, setCreatedViewer] = useState({});
    const [createdViewerSuccess, setCreatedViewerSuccess] = useState(false);
    const [listViewersError, setListViewersError] = useState("");
    const [listViewers, setListViewers] = useState([]);
    const [fetchViewersSuccess, setFetchViewerSucces] = useState(false);
    const [pages, setPages] = useState();
    const [page, setPage] = useState();


    const keyword = match.params.keyword;

    const pageNumber = match.params.pageNumber || 1;
    
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
            setFetchViewerSucces(true);
        }catch (error){
          setListViewersError(error.message)
        }
    }


    useEffect(()=>{
       
        if(!userInfo){
            history.push('/login');
        }

        fetchViewers(keyword, pageNumber);
        console.log(listViewers);

        if(createdViewerSuccess){
            history.push(`/profile/viewer/edit/${createdViewer._id}`)
        }


    }, [userInfo, history, createdViewerSuccess, createdViewer, fetchViewersSuccess, keyword, pageNumber]);


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
                        <Col className="mb-5" sm>
                         <Card style={{ width: '18rem', height: '14rem'}}>
                          <Card.Body>
                           <Card.Title>{viewer.name}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Rating: {viewer.rating}</Card.Subtitle>
                             <Card.Text>
                              Personality: {viewer.personalityType}
                          </Card.Text>
                        <Card.Link type="submit" className="btn-primary btn" onClick={createViewerHandler}>+ Viewer</Card.Link>
                      </Card.Body>
                    </Card>
                  </Col>
                
                )
            })
        }
    }

   

    return (
        <div className="my-5">
            <div>
                <h1>Dashboard</h1>
                <h2 className="my-4">Welcome {userInfo && userInfo.name}</h2>
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
                <Route render={({ history })=> <SearchBox history = {history} />} />
                     <h5 className ="mt-3">Viewer's currently in your book <FaBook /></h5> 
                </Col>
            </Row>
            
            <Row className="mt-5">
              {renderViewers()}
            </Row>

            <Paginate pages={pages} page={page} keyword={keyword ? keyword : ''} />
           
        </div>
    )
}

export default ProfileScreen;
