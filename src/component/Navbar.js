import React from 'react'
import { Button } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import PropTypes from 'prop-types';



// import { Button } from 'react-bootstrap';
export default function NavbarContainer(props) {
  return (
    <div>
      <>
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">{props.title}</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">{props.home}</Nav.Link>
      <Nav.Link href="#features">{props.feature}</Nav.Link>
      <Nav.Link href="#pricing">{props.service}</Nav.Link>
      <Nav.Link href="#pricing">{props.aboute}</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
</>
    </div>
  )
}
// propsTypes 
// propsType is used to set custome setup for our app hre
// we can set which types of props we want to accept or pass
NavbarContainer.propTypes ={
    title: PropTypes.string,
    feature: PropTypes.string,
    service: PropTypes.string,
    aboute: PropTypes.string,
}
// defaultProps
// we can set props as default if we dont want to pass props and if miss to pass it
NavbarContainer.defaultProps ={
    title:"d-title",
    feature:"d-featr",
    service:"d-serv",
    aboute:"d-about"
}