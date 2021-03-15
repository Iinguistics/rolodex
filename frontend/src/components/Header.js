import React, { Fragment, useEffect, useState } from 'react';
import { Navbar, Nav, Container, NavDropdown, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { FaUserAlt } from 'react-icons/fa';

const Header = ({ history }) => {
    const [userInfo, setUserInfo] = useState(null);

    useEffect(()=>{
       setUserInfo(
        localStorage.getItem('userInfo') ? JSON.parse
        (localStorage.getItem('userInfo')) : null
       );
    },[])
    
     
    const logoutHandler = ()=>{
        localStorage.removeItem('userInfo');
        history.push('/');
        window.location.reload();
     }

     
   
    const adminView = ()=>{
        if(userInfo.isAdmin){
          return(
            <Fragment>
          <LinkContainer to="/admin/userlist">
          <NavDropdown.Item>View Users</NavDropdown.Item>
          </LinkContainer>
            </Fragment>
          )
        }
      }
  
     
  
      const renderUserInfo = ()=>{
        if(userInfo){
          return(
           <>
           {adminView()}
           <LinkContainer to="/profile"><NavDropdown.Item className="text-white">Profile</NavDropdown.Item></LinkContainer>
           <NavDropdown.Item className="text-white" onClick={()=> logoutHandler()}>Logout</NavDropdown.Item>
           </>
          )
        }else{
          return(
            <LinkContainer to="/login">
           <Nav.Link>
            <FaUserAlt /> Sign In</Nav.Link>
          </LinkContainer>

          )
        }
      }




    return (
        <header>

         <Navbar expand="lg" collapseOnSelect fixed="top" className="bg-dark navbar-dark">
             <Container>
             <LinkContainer to="/">
                 <Navbar.Brand>Spybook</Navbar.Brand>
                 </LinkContainer>
               <Navbar.Toggle aria-controls="basic-navbar-nav" />
               <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                      
                    {renderUserInfo()}
                    </Nav>
               </Navbar.Collapse>    
             </Container>
        </Navbar>
      </header>
    )
}

export default Header
