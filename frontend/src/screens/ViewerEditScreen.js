import React, { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import Loader from '../components/bootstrapHelpers/Loader';
import Message from '../components/bootstrapHelpers/Message';
import FormContainer from '../components/FormContainer';
import { useToasts } from 'react-toast-notifications';
import axios from 'axios';
import GoBackButton from '../components/GoBackButton';


const ViewerEditScreen = ({ history, match, userInfo }) => {
    const [name, setName] = useState("");
    const [rating, setRating] = useState(Number);
    const [followingSince, setFollowingSince] = useState("");
    const [personalityType, setPersonalityType] = useState("");
    const [location, setLocation] = useState("");
    const [age, setAge] = useState("");
    const [notes, setNotes] = useState("");
    const [viewer, setViewer] = useState({});
    const [fetchViewerError, setFetchViewerError] = useState("");
    const [fetchEditViewerError, setFetchEditViewerError] = useState("");

    const { addToast } = useToasts();


    


    const fetchViewer = async()=>{
        
        if(!viewer.name || viewer._id !== match.params.id){
            try{
                const config = {
                    headers:{
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${userInfo.token}`
                    }
                }
                const { data } = await axios.get(`/api/viewers/${match.params.id}`, config)

                setViewer(data);


            }catch(error){
                setFetchViewerError(error.message);
            }
        

        }else{
            setName(viewer.name);
            setRating(viewer.rating);
            setFollowingSince(viewer.followingSince);
            setPersonalityType(viewer.personalityType);
            setLocation(viewer.location);
            setAge(viewer.age);
            setNotes(viewer.notes);
        }

    }

    useEffect(()=>{
        if(!userInfo){
         history.push('/login');
        }
            
         fetchViewer();
            


    },[viewer, history, match.params.id])


    const fetchEditViewer = async()=>{
        try{
            const config = {
                headers:{
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${userInfo.token}`
                }
            }
            const { data } = await axios.put(`/api/viewers/edit/${viewer._id}`, { name, rating, followingSince, personalityType, location, age, notes }, config)
            setViewer(data);

        }catch(error){
            setFetchEditViewerError(error.message);
        }
    }


    const submitHandler = (e)=>{
        e.preventDefault();
        if(viewer){
          fetchEditViewer();
          setTimeout(()=>{
            fetchViewer();
         }, 1000)
            setTimeout(()=>{
                if(!fetchEditViewerError){
                    addToast(`${name} has been updated`, {
                        appearance: 'success'
                    });
                    history.push('/profile');
                    }
            }, 2000)
        }
    }





    return (
        <Fragment>
        <GoBackButton />
        {fetchEditViewerError && <Message variant="danger">{fetchEditViewerError}edit view error</Message> }
        {fetchViewerError && <Message variant="danger">{fetchViewerError}viewererror</Message> }
        <FormContainer>
        <h1>Update Viewer</h1>

        <Form onSubmit={submitHandler}>

        <Form.Group controlId="name">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Name e.g. Pokimane"
             value={name} 
             onChange={(e)=> setName(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="rating">
            <Form.Label>Rating</Form.Label>
            <Form.Control type="number" placeholder="Rating"
             value={rating} 
             max="5"
             min="0"
             onChange={(e)=> setRating(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="followingSince">
            <Form.Label>Following Since</Form.Label>
            <Form.Control type="date" placeholder="Enter follow date"
             value={followingSince} 
             onChange={(e)=> setFollowingSince(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="personalityType">
            <Form.Label>Personality Type</Form.Label> <Link >View descriptions</Link>
            <Form.Control as="select" placeholder="Choose a type"
             value={personalityType} 
             onChange={(e)=> setPersonalityType(e.target.value)} >
             <option>Uknown</option>
             <option>Architect - INTJ</option>
             <option>Logician - INTP</option>
             <option>Commander - ENTJ</option>
             <option>Debater - ENTP</option>
             <option>Advocate - INFJ</option>
             <option>Mediator - INFP</option>
             <option>Protagonist - ENFJ</option>
             <option>Campaigner - ENFP</option>
             <option>Logistician - ISTJ</option>
             <option>Defender - ISFJ</option>
             <option>Executive - ESTJ</option>
             <option>Consul - ESFJ</option>
             <option>Virtuoso - ISTP</option>
             <option>Adventurer - ISFP</option>
             <option>Entrepreneur - ESTP</option>
             <option>Entertainer - ESFP</option>
            </Form.Control>
        </Form.Group>


        <Form.Group controlId="location">
            <Form.Label>Location</Form.Label>
            <Form.Control type="text" placeholder="Location e.g. London, UK"
             value={location} 
             onChange={(e)=> setLocation(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="age">
            <Form.Label>Age</Form.Label>
            <Form.Control type="text" placeholder="Age"
             value={age} 
             onChange={(e)=> setAge(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="notes">
            <Form.Label>Notes</Form.Label>
            <Form.Control type="text" as="textarea" rows={4} placeholder="Notes"
             value={notes} 
             onChange={(e)=> setNotes(e.target.value)} />
        </Form.Group>

       

         <Button variant="primary" type="submit" id="user-update">
            Update
        </Button>
        </Form>
        
    </FormContainer>
    </Fragment>

    )
}

export default ViewerEditScreen
