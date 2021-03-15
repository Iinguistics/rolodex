import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import Loader from '../components/bootstrapHelpers/Loader';
import Message from '../components/bootstrapHelpers/Message';
import FormContainer from '../components/FormContainer';
import axios from 'axios';

const LoginScreen = ({ location, history, userInfo}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    //const redirect = location.search ? location.search.split('=')[1]: '/'

    useEffect(()=>{

        if(userInfo){
            history.push('/')
        }
    }, [userInfo, history])

   
    const submitHandler = async(e)=>{
        e.preventDefault();
        setLoading(true);
        try{
            const config = {
                headers:{
                    'Content-Type': 'application/json'
                }
            }

            const { data } = await axios.post('/api/users/login', {email, password}, config);

            localStorage.setItem('userInfo', JSON.stringify(data));

            setLoading(false);
             console.log(data);

          
            
            history.push('/profile');
            window.location.reload();
          
            
        }catch(error){
         setLoading(false);
         setError(error.message);
        }

    }

    



    return (
        <FormContainer>
            {error && <Message variant="danger">{error}</Message>}
            {loading && <Loader />}
            <h1 className="my-5">Sign In</h1>
            <Form onSubmit={submitHandler}>
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
                     onChange={(e)=> setPassword(e.target.value)} />
                </Form.Group>
                 <Button variant="primary" type="submit">
                    Sign In
                </Button>
            </Form>

            <Row className="py-3">
                <Col>
                New Spy? {''}
                 <Link to= '/register'>
                    Register
                </Link>
                </Col>
            </Row>
        </FormContainer>
    )
}

export default LoginScreen