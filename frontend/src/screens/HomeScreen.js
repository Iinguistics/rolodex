import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ListGroup, Jumbotron } from 'react-bootstrap';


const HomeScreen = ({ userInfo }) => {


    

  
   
        


    return (
        <div className="my-5">
           
            <section>
             <Jumbotron className="my-5 main-jumbo-bg shadow">
               <h1 className="font-weight-bold home-title my-4">Get to know your viewers & grow your channel</h1>
               <h3 id="test" className="d-inline font-weight-bold">Data tool</h3><br /> <h3>for streamers who <br />are dedicated to their craft</h3>
            </Jumbotron>
            </section>
           
            
        </div>
    )
}

export default HomeScreen
