import React, { useEffect, useState } from 'react';
import { Form, Button, Row, Col, Card } from 'react-bootstrap';
import Loader from '../components/bootstrapHelpers/Loader';
import Message from '../components/bootstrapHelpers/Message';
import FormContainer from '../components/FormContainer';
import axios from 'axios';
import { VscOpenPreview } from 'react-icons/vsc';
import { AiFillSave } from 'react-icons/ai';

const ProfileScreen = ({ userInfo, history }) => {
    const [error, setError] = useState("");
    //const [user, setUser] = useState(null);
    const [createdViewer, setCreatedViewer] = useState({});
    const [createdViewerSuccess, setCreatedViewerSuccess] = useState(false);


    useEffect(()=>{
       
        if(!userInfo){
            history.push('/login');
        }

        if(createdViewerSuccess){
            history.push(`/profile/viewer/edit/${createdViewer._id}`)
        }

    }, [userInfo, history, createdViewerSuccess, createdViewer]);


    const createViewerHandler = async()=>{
        //console.log(userInfo.token)
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
            setError(error.message);
        }
    }

   




    return (
        <div className="my-5">
            <div>
                <h1>Dashboard</h1>
                <h2 className="my-4">Welcome {userInfo && userInfo.name}</h2>
            </div>
            
            {error && <Message variant="danger">{error}</Message> }
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

            
           
        </div>
    )
}

export default ProfileScreen;
