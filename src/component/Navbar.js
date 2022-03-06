import React from 'react'
import { Button } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
// import { Button } from 'react-bootstrap';
export default function NavbarContainer() {
  return (
    <div>
      <>
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Textutil</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
</>
    </div>
  )
}
