import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

export const NavBar = () => (
    <Navbar bg="light" expand="lg" sticky="top">
        <Navbar.Brand href="#home">Jeremy Fu</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
            <Nav>
                <Nav.Link href="#projects">Projects</Nav.Link>
                <Nav.Link href="#languages">Languages</Nav.Link>
                {/* <Nav.Link href="#about">About</Nav.Link> */}
                {/* <Nav.Link href="#contact">Contact</Nav.Link> */}
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)
