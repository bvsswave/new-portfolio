import React from "react";
import "../index";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, Container } from 'react-bootstrap';

const MyNavbar = () => {
    return( <>
    {/* <header>
        <nav style={{background:"linear-gradient(#9a8f97 50%,black 100%)", display:'inline-flex', justifyContent:'space-evenly', color:'white', fontSize:'35px', width:'100%'}}>
            <ul style={{display:'inline'}}>
                <li><Link style={{color:'white'}} to={"/"}>Home</Link></li>
                <li><Link style={{color:'white'}} to="/Portfolio">Portfolio</Link> </li>
                <li><Link style={{color:'white'}} to="/Contact">Contact Me</Link> </li>
                <li><Link style={{color:'white'}} to="/About">About Me</Link> </li>
            </ul>
        </nav>
    </header> */}
<>
  <Navbar style={{background:"linear-gradient(#9a8f97 50%,black 100%)"}}>
    <Container>
    <Navbar.Brand href="#/">Home</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#Contact">Contact</Nav.Link>
      <Nav.Link href="#Portfolio">Portfolio</Nav.Link>
      <Nav.Link href="#About">About</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
</>
    </>
    )
}

export default MyNavbar;