import * as React from 'react';
import './navbar.css';
import { Nav, Navbar as Navbr, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import {isLoggedIn, deleteTokens} from '../../util/auth';
import {Link} from 'react-router-dom';

const Log = () =>{
    if(isLoggedIn()){
        return(
            <Button
          onClick={() => {
            deleteTokens();
            window.location.replace("/")
          }}
        >
          Sign out
        </Button>
        )
    }else{
        return(
            <Link to="/login">Login</Link>
        )
    }
}

function Navbar() {
    return (
            <Navbr bg="light" expand="lg">
                <Navbr.Brand href="">React-Bootstrap</Navbr.Brand>
                <Navbr.Toggle aria-controls="basic-navbar-nav" />
                <Navbr.Collapse id="basic-navbar-nav">
                     <Nav className="mr-auto">
                          <Nav.Link href="/">Home</Nav.Link>
                          <Nav.Link href="link">Link</Nav.Link>
                          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                              <NavDropdown.Divider />
                              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                          </NavDropdown>
                    </Nav>
                </Navbr.Collapse>
                <Nav className="pull-right">
                    <Nav.Item><Log/></Nav.Item>
                </Nav>
            </Navbr>
    );
}

export default Navbar;
