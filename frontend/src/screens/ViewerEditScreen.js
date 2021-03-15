import React, { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import Loader from '../components/bootstrapHelpers/Loader';
import Message from '../components/bootstrapHelpers/Message';
import FormContainer from '../components/FormContainer';
import { useToasts } from 'react-toast-notifications';
import axios from 'axios';



const ViewerEditScreen = ({ userInfo, history }) => {
    const [name, setName] = useState("");
    const [rating, setRating] = useState(Number);
    const [followingSince, setFollowingSince] = useState("");
    const [personalityType, setPersonalityType] = useState("");
    const [location, setLocation] = useState("");
    const [age, setAge] = useState("");
    const [notes, setNotes] = useState("");
    const [editUserError, setEditUserError] = useState("");


    useEffect(()=>{
        if(!userInfo){
         history.push('/login');
        }




    },[]);


    const submitHandler = (e)=>{
        e.preventDefault();
        


    }






    return (
        <Fragment>
        <Link to='/admin/productlist' className="btn btn-light my-5">
            Go Back
        </Link>
        {editUserError && <Message variant="danger">{editUserError}</Message> }
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
             onChange={(e)=> setLocation(e.target.value)} />
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
