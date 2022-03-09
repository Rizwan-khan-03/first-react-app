
import React, { useState } from 'react';
import {  Form,FormCheck } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import PropTypes from 'prop-types';
import "bootstrap/dist/css/bootstrap.css";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";



// import { Button } from 'react-bootstrap';
export default function NavbarContainer(props) {
  const renderTooltip = props => (
    <Tooltip {...props}>change mode</Tooltip>
  );
  // {`${props.mode==='light'?'dark':'light'}`} variant={`${props.mode==='light'?'dark':'light'}`}
  return (
    <div>
      <>
  <Navbar bg={`${props.mode==='light'?'dark':'light'}`} variant={`${props.mode==='light'?'dark':'light'}`}>
    <Container>
    <Navbar.Brand href="#home">{props.title}</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">{props.home}</Nav.Link>
      <Nav.Link href="#features">{props.feature}</Nav.Link>
      <Nav.Link href="#pricing">{props.service}</Nav.Link>
      <Nav.Link href="#pricing">{props.aboute}</Nav.Link>
    </Nav>
    <Form>  
    <OverlayTrigger placement="bottom" overlay={renderTooltip}>
    <FormCheck 
    type="switch"
    id="custom-switch"
    onChange={props.toggle}
    tooltip='change mode'
  />
      </OverlayTrigger>
   
  </Form>
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