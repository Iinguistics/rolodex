import React, {  useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import Message from '../components/bootstrapHelpers/Message';
import FormContainer from '../components/FormContainer';
import axios from 'axios';
import Loader from '../components/bootstrapHelpers/Loader';
import GoBack from '../components/GoBack';
import { AiOutlineDelete } from 'react-icons/ai';
import { useToasts } from 'react-toast-notifications';


const ProfileSettingScreen = ({ userInfo, history }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [verifyPassword, setVerifyPassword] = useState("");
    const [passwordError, setPasswordError] = useState(false);
    const [error, setError] = useState("");
    const [userUpdateSuccess, setUserUpdateSuccess] = useState(false);
    const [userRemoveError, setUserRemoveError] = useState(false);
    const [loading, setLoading] = useState(false);

    const { addToast } = useToasts();




   useEffect(()=>{

    if(!userInfo){
        history.push('/login');
    }

    if(userUpdateSuccess){
        window.location.reload();
    }
   }, [userInfo, history, userUpdateSuccess]);


   const renderPasswordError = ()=>{
    if(passwordError){
        return <Message variant="danger">Passwords do not match</Message>
    }
}

const updateHandler = async(e)=>{
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

            const { data } = await axios.put('/api/users/register', {name, email, password}, config)

            setUserUpdateSuccess(true);
           
        }catch(error){
         setError(error.message);
        }
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
      removeHandler();
      setLoading(true);
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
         <GoBack /><br />

            <Button className="btn-danger btn my-3" onClick={ (e)=> removeSubmitHandler(e) }>
                    Delete Account <AiOutlineDelete />
                </Button>
        </div>
    )
}

export default ProfileSettingScreen
