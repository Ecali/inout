import React from 'react'

import { Navbar, Nav } from "react-bootstrap";
import {
    BrowserRouter as Router, Link } from "react-router-dom";

function Navigation() {
    return (
        <div>
                <Navbar bg="dark" variant='dark' expand="lg">
                    <Navbar.Brand href="#home">In - Out</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        <Link className='nav-link' to={'/home'}>Home</Link>
                        <Link className='nav-link' to={'/add'}>Aggiungi Spesa</Link>
                        <Link className='nav-link' to={'/all'}>Tutte le spese</Link>
                        <Link className='nav-link' to={'/login'}>Login</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>            
        </div>
    )
}

export default Navigation
