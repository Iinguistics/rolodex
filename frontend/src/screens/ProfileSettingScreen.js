import React, {  useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Row, Col, Card, Modal } from 'react-bootstrap';
import Message from '../components/bootstrapHelpers/Message';
import FormContainer from '../components/FormContainer';
import axios from 'axios';
import Loader from '../components/bootstrapHelpers/Loader';
import GoBack from '../components/GoBack';
import { AiOutlineDelete } from 'react-icons/ai';
import { useToasts } from 'react-toast-notifications';
import { RiLockPasswordFill } from 'react-icons/ri';
import DeleteModal from '../components/bootstrapHelpers/DeleteModal';


const ProfileSettingScreen = ({ userInfo, history }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);

    const [password, setPassword] = useState("");
    const [verifyPassword, setVerifyPassword] = useState("");
    const [passwordError, setPasswordError] = useState(false);
    const [updatePassword, setUpdatePassword] = useState(false);

    const [userUpdateError, setUserUpdateError] = useState(false);
    const [userRemoveError, setUserRemoveError] = useState(false);
    const [fetchUserError, setFetchUserError] = useState(false);
    const [userUpdateSuccess, setUserUpdateSuccess] = useState(false);
    
    // Delete account modal
    // const [modalShow, setModalShow] = useState(false);
    // const handleClose = () => setModalShow(false);
    // const handleShow = () => setModalShow(true);


    const { addToast } = useToasts();


    const fetchUser = async()=>{
        try{
            const config = {
                headers:{
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${userInfo.token}`
                }
            }
          const { data } = await axios.get('/api/users/profile', config);
          setName(data.name);
          setEmail(data.email);
        
        }catch(error){
            setFetchUserError(error.message);
        }
    }




   useEffect(()=>{

    if(!userInfo){
        history.push('/login');
    }

    fetchUser();

    if(userUpdateSuccess){
        window.location.reload();
    }
   }, [userInfo, history, userUpdateSuccess]);



  const updateUserHandler = async(e)=>{
    e.preventDefault();
    setName(name.toLowerCase());
    if(password !== verifyPassword){
     setPasswordError(true);
     return;
    }
    if(name === ""){
     setUserUpdateError("Please enter a valid username");
     return;
    }
        setLoading(true);
        try{
            const config = {
                headers:{
                    'Content-Type': 'application/json',
                     Authorization: `Bearer ${userInfo.token}`
                }
            }

            await axios.put('/api/users/profile', { name, email, password }, config);

            if(!userUpdateError){
                setLoading(false);
                addToast('Account has been updated', {
                    appearance: 'success'
                });
                }
        
            setTimeout(()=>{
             setUserUpdateSuccess(true);
            }, 1500)
           
        }catch(error){
         setLoading(false);
         setUserUpdateError(error.message);
        }
    
}


const removeHandler = async()=>{
    try{
        const config = {
            headers:{
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        await axios.delete(`/api/users/remove/${userInfo._id}`, config);
    
    }catch(error){
        setUserRemoveError(error.message);
    }
}


const removeSubmitHandler = (e)=>{
    e.preventDefault();
      setLoading(true);
      removeHandler();
        setTimeout(()=>{
            if(!userRemoveError){
                setLoading(false);
                addToast('Account has been removed', {
                    appearance: 'success'
                });
                }
        }, 2000);

        setTimeout(()=>{
            if(!userRemoveError){
                localStorage.removeItem('userInfo');
                history.push('/');
                window.location.reload();
                }
        }, 3500);
}






    return (
        <div className="my-5">
         { loading && <Loader /> }

        <GoBack />

        {userUpdateError && <Message variant="danger">{userUpdateError}</Message> }
        {fetchUserError && <Message variant="danger">{fetchUserError}</Message> }
        {passwordError && <Message variant="danger">{passwordError}</Message> }
        <FormContainer>
        <h1 className="mb-4">Update Account Info</h1>

        <Form onSubmit={updateUserHandler}>

        <Form.Group controlId="name">
            <Form.Label>Update Twitch Username</Form.Label>
            <Form.Control type="text" placeholder="Enter username"
            value={name} 
            onChange={(e)=> setName(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="email">
            <Form.Label>Update Email Address</Form.Label>
            <Form.Control type="email" placeholder="Enter email"
            value={email} 
            onChange={(e)=> setEmail(e.target.value)} />
        </Form.Group>
         
        <Button variant="info" className="mb-5" onClick={ ()=> setUpdatePassword(true) }>
            Update Password <RiLockPasswordFill />
        </Button> <br />


         {updatePassword && (
             <>
             <Form.Group controlId="password">
             <Form.Label>Set New Password</Form.Label>
             <Form.Control type="password" placeholder="Enter new password"
             value={password} 
             onChange={(e)=> setPassword(e.target.value)}
             minLength="6" />
         </Form.Group>
 
         <Form.Group controlId="verifyPassword">
             <Form.Label>Confirm New Password</Form.Label>
             <Form.Control type="password" placeholder="Enter new password"
             value={verifyPassword} 
             onChange={(e)=> setVerifyPassword(e.target.value)}
             minLength="6" />
         </Form.Group>
         </>
          )
         }
        

        <Button variant="primary" type="submit">
            Save Changes
        </Button>
        </Form>
      </FormContainer>
      
       <FormContainer>
       <h1 className="my-5">Danger Zone</h1>
       <Card className="border border-danger ">
         <Card.Body className="bg-dark">
          <Row>
            <Col className="text-light m-auto">
             Delete my account
            </Col>

            <Col className="m-auto"> 
            <DeleteModal submitDelete = {(e)=> removeSubmitHandler(e)} 
            buttonText={'Delete Account '} 
            title={'Delete Account'} 
            body={'This is irreversible, are you sure you want to delete your account?'}
            />  
         </Col>
        </Row>
       </Card.Body>
      </Card>
    </FormContainer>

        </div>
    )
}

export default ProfileSettingScreen
