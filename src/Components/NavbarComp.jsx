import React from 'react';
import { Nav, Navbar, Container} from 'react-bootstrap';
import {Link, NavLink} from 'react-router-dom'
import '../App.css'

function NavbarComp(props) {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto list">
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to="/employee">Features</NavLink>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavbarComp;