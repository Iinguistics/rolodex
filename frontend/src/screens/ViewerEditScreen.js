import React, { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import Loader from '../components/bootstrapHelpers/Loader';
import Message from '../components/bootstrapHelpers/Message';
import FormContainer from '../components/FormContainer';
import { useToasts } from 'react-toast-notifications';
import axios from 'axios';



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
        // if(!userInfo){
        //  history.push('/login');
        // }
        console.log(match.params.id)
        
        
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
                    addToast(`${viewer.name} has been updated`, {
                        appearance: 'success'
                    });
                    history.push('/profile');
                    }
            }, 2000)
        }
    }






    return (
        <Fragment>
        <Link to='/profile' className="btn-primary btn my-5">
            Go Back
        </Link>
        {fetchEditViewerError && <Message variant="danger">{fetchEditViewerError}</Message> }
        {fetchViewerError && <Message variant="danger">{fetchViewerError}</Message> }
        <FormContainer>
        <h1>Edit Viewer</h1>

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
             onChange={(e)=> setRating(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="followingSince">
            <Form.Label>Following Since</Form.Label>
            <Form.Control type="date" placeholder="Enter follow date"
             value={followingSince} 
             onChange={(e)=> setFollowingSince(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="personalityType">
            <Form.Label>Personality Type</Form.Label>
            <Form.Control type="number" placeholder="Choose a type"
             value={personalityType} 
             onChange={(e)=> setPersonalityType(e.target.value)} />
        </Form.Group>


        <Form.Group controlId="location">
            <Form.Label>Location</Form.Label>
            <Form.Control type="text" placeholder="Location"
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
