import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const HomeScreen = ({ userInfo }) => {

  
   
        


    return (
        <div className="my-5">
            {userInfo ? <> <h3>Currently logged in under {userInfo.name}</h3> <Link to='/profile' className="btn-primary btn my-2">My Profile </Link> </>
            
            : ""}
            
            <h1>Home screen</h1>
       
        </div>
    )
}

export default HomeScreen
