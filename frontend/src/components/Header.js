import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, NavDropdown, Button } from 'react-bootstrap';


const Header = () => {








    return (
        <header>

         <Navbar expand="lg" collapseOnSelect fixed="top" className="bg">
             <Container>
               <Link to="/">
                 <Navbar.Brand>Spybook</Navbar.Brand>
                 </Link>
               <Navbar.Toggle aria-controls="basic-navbar-nav" />
               <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                      <Link to="/cart">
                      <Nav.Link><i className="fas fa-shopping-bag"></i>Bag</Nav.Link>
                      </Link>

                    </Nav>
               </Navbar.Collapse>    
             </Container>
        </Navbar>
      </header>
    )
}

export default Header
