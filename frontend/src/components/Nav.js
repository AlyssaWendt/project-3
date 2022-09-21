import React from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navigation() {
  return (
    <>
      <Navbar className="Nav" sticky="top">
        <Container className='container'>
          <Navbar.Brand className='link'href="/">Quick Tarot</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link className='link-2' href="/tarot">Tarot</Nav.Link>
            <Nav.Link className="link-2" href="/learn-more">Learn More</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;