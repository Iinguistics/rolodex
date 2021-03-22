import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import Loader from '../components/bootstrapHelpers/Loader';
import Message from '../components/bootstrapHelpers/Message';
import FormContainer from '../components/FormContainer';
import axios from 'axios';


const RegisterScreen = ({ location, history, userInfo }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [verifyPassword, setVerifyPassword] = useState("");
    const [passwordError, setPasswordError] = useState(false);
    const [error, setError] = useState("");
    const [registerSuccess, setRegisterSuccess] = useState(false);


    
 

     useEffect(()=>{
        if(userInfo){
            history.push('/profile');
        }

        if(registerSuccess){
            window.location.reload();
        }
    }, [userInfo, history, registerSuccess])


    const renderPasswordError = ()=>{
        if(passwordError){
            return <Message variant="danger">Passwords do not match</Message>
        }
    }
   
    const submitHandler = async(e)=>{
        e.preventDefault();
        setName(name.toLowerCase());
        if(password !== verifyPassword){
            setPasswordError(true);
        }else{
            try{
                const config = {
                    headers:{
                        'Content-Type': 'application/json'
                    }
                }
    
                const { data } = await axios.post('/api/users/register', {name, email, password}, config)
    
                localStorage.setItem('userInfo', JSON.stringify(data));
                setRegisterSuccess(true);
               
            }catch(error){
             setError(error.message);
            }
        }
    }

    


    return (
        <FormContainer>
            <h1 className="my-5">Register</h1>
            {error && <Message variant="danger">{error}</Message>}
            {renderPasswordError()}
            <Form onSubmit={submitHandler}>

                <Form.Group controlId="name">
                    <Form.Label>Twitch Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter username"
                     value={name} 
                     onChange={(e)=> setName(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="email">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email"
                     value={email} 
                     onChange={(e)=> setEmail(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter password"
                     value={password} 
                     onChange={(e)=> setPassword(e.target.value)}
                     minLength="6" />
                </Form.Group>

                <Form.Group controlId="verifyPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter password"
                     value={verifyPassword} 
                     onChange={(e)=> setVerifyPassword(e.target.value)}
                     minLength="6" />
                </Form.Group>

                 <Button variant="primary" type="submit">
                    Register
                </Button>
            </Form>

            <Row className="py-3">
                <Col>
                Already have an account? {''}
                 <Link to='/login'>
                    Login
                </Link>
                </Col>
            </Row>
        </FormContainer>
    )
}

export default RegisterScreen