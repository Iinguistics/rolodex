import React, {  useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import Message from '../components/bootstrapHelpers/Message';
import FormContainer from '../components/FormContainer';
import axios from 'axios';


const ProfileSettingScreen = ({ userInfo, history }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [verifyPassword, setVerifyPassword] = useState("");
    const [passwordError, setPasswordError] = useState(false);
    const [error, setError] = useState("");
    const [userUpdateSuccess, setUserUpdateSuccess] = useState(false);




   useEffect(()=>{

    if(!userInfo){
        history.push('/login');
    }

    if(userUpdateSuccess){
        window.location.reload();
    }
      console.log(userInfo._id + 'token: ' + userInfo.token)
   }, [userInfo, history, userUpdateSuccess]);


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

            setUserUpdateSuccess(true);
           
        }catch(error){
         setError(error.message);
        }
    }
}


    return (
        <div className="my-5">
            settings screen
        </div>
    )
}

export default ProfileSettingScreen
