import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ListGroup, Jumbotron } from 'react-bootstrap';


const HomeScreen = ({ userInfo }) => {


    

  
   
        


    return (
        <div className="my-5">
            {userInfo ? <> <h3>Currently logged in under {userInfo.name}</h3> <Link to='/profile' className="btn-primary btn my-2">My Profile </Link> </>
            
            : ""}
            <section>
             <Jumbotron className="my-5 main-jumbo-bg shadow">
               <h1>Get to know your viewers & grow your channel</h1>
            </Jumbotron>
            </section>
           
            
        </div>
    )
}

export default HomeScreen
