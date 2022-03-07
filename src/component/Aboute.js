import React, { useState } from 'react';
import { Accordion, Button, Container } from 'react-bootstrap';
import AccordionHeader from 'react-bootstrap/esm/AccordionHeader';
import AccordionItem from 'react-bootstrap/esm/AccordionItem';
import AccordionBody from 'react-bootstrap/esm/AccordionBody';
function Aboute() {
    const [mystyle,setMystle] =useState({
        color:'#000',
        backgroundColor:"#fff"
    })
    const enebleDarkMode=()=>{
        if(mystyle.color=="#000" && mystyle.backgroundColor=="#fff"){
            setMystle({
                color:'#fff',
                backgroundColor:"#000"
            })
        }
    }
    const enebleLightMode =()=>{
        if(mystyle.color=="#fff" && mystyle.backgroundColor=="#000"){
            setMystle({
                color:'#000',
                backgroundColor:"#fff"
            })
        }
    }
  return (
    <div>
        <Container className='mt-4' style={mystyle}>
            <h2 style={{textAlign:"start"}}>Aboute us</h2>
        <Accordion style={mystyle}>
         <AccordionItem eventKey="0" style={mystyle}>  
            <AccordionHeader >Missoin</AccordionHeader>
                <AccordionBody>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                est laborum.
                </AccordionBody>
            </AccordionItem>
         <AccordionItem eventKey="1" style={mystyle}>
            <AccordionHeader>Vission</AccordionHeader>
              <AccordionBody>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                est laborum.
             </AccordionBody>
        </AccordionItem>
      </Accordion>
    </Container>
    <Container>
        <Button className='mt-4 m-4' variant="dark" onClick={enebleDarkMode} >Eneble DarkMode</Button>
        <Button className='mt-4  m-4' variant="dark" onClick={enebleLightMode} >Eneble lightMode</Button>
    </Container>
    </div>
  )
}

export default Aboute
