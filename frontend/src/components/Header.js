import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, NavDropdown, Button } from 'react-bootstrap';
import { FaUserAlt } from 'react-icons/fa';

const Header = ({ userInfo, history }) => {
    
     
    const logoutHandler = ()=>{
        localStorage.removeItem('userInfo');
        history.push('/');
        window.location.reload();
     }
   
    const adminView = ()=>{
        if(userInfo.isAdmin){
          return(
            <Fragment>
             <Link to="/admin/userlist">
            <NavDropdown.Item>View Users</NavDropdown.Item>
            </Link>

            </Fragment>
          )
        }
      }
  
     
  
      const renderUserInfo = ()=>{
        if(userInfo){
          return(
          <NavDropdown  title={ userInfo.name } id="username">
           <Link to="/profile">
             <NavDropdown.Item>Profile</NavDropdown.Item>
           </Link>
           {adminView()}
           <NavDropdown.Item onClick={()=> logoutHandler()}>Logout</NavDropdown.Item>
          </NavDropdown>
          )
        }else{
          return(
            <Link to="/login" className="nav-link">
              <FaUserAlt /> Sign In
            </Link>

          )
        }
      }




    return (
        <header>

         <Navbar expand="lg" collapseOnSelect fixed="top" className="bg-dark navbar-dark">
             <Container>
               <Link to="/">
                 <Navbar.Brand>Spybook</Navbar.Brand>
                 </Link>
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
