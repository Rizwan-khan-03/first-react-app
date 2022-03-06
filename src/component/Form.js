import React, { useReducer, useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap';
// import { FormGroup } from 'react-bootstrap';
// import { FormLabel } from 'react-bootstrap';
// import { FormControl } from 'react-bootstrap';
function FormConytainer() {
    const [text,setTex]=useState("enter text")
    const toUpperCaseClick = (event) =>{
     console.log("click")
     let upperText=text.toUpperCase()
     setTex(upperText)
    }
    const toLowerCaseClick = ()=>{
        let lowerText = text.toLowerCase()
        setTex(lowerText)
    }
    const changHandler =(event)=>{
        // setTex("text change")
        console.log('text change')
        setTex(event.target.value)
    }
  return (
    <div>
        <Container style={{width:"600px",color:'gray',textAlign:'start'}}>
        <Container className="mt-3 " style={{}}>
            <h4 style={{color:'gray',textAlign:'start'}}>Enter The Text Below</h4>
            <Form>
                {/* <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                 </Form.Group> */}
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    {/* <Form.Label >Example textarea</Form.Label> */}
                    <Form.Control as="textarea" value={text} onChange={changHandler} rows={10} column={5}/>
                </Form.Group>
            </Form>   
        </Container>
        <Container style={{width:"600px"}}>
        <Button variant="dark"  className="m-2 " onClick={toUpperCaseClick}>To UpperCase</Button>
        <Button variant="dark"  className="m-2" onClick={toLowerCaseClick}>To LowerCase</Button>
        <Button variant="dark"  className="m-2">To UpperCase</Button>
        </Container>
        <Container >
            <p>{text.split(" ").length} word and {text.length} Character</p>
        </Container>
        </Container>
        
    
    </div>
  )
}

export default FormConytainer
