import React, { useReducer, useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap';
// import { FormGroup } from 'react-bootstrap';
// import { FormLabel } from 'react-bootstrap';
// import { FormControl } from 'react-bootstrap';
function FormConytainer() {
    const [text,setText]=useState("enter text")
    const toUpperCaseClick = (event) =>{
     console.log("click")
     let upperText=text.toUpperCase()
     setText(upperText)
    }
    const toLowerCaseClick = ()=>{
        let lowerText = text.toLowerCase()
        setText(lowerText)
    }
    const changHandler =(event)=>{
        // setText("text change")
        console.log('text change')
        setText(event.target.value)
    }
    const removeSpaces =()=>{
        let removeSpace = text.replace(/\s+/g,' ').trim();
        setText(removeSpace)
    }
    const copyTextHandler = () =>{
        var copyText = document.getElementById("textaria");
         /* Select the text field */
        copyText.select();
        copyText.setSelectionRange(0, 99999); /* For mobile devices */
        navigator.clipboard.writeText(copyText.value);
    
    }
  return (
    <div>
        <Container >
        <Container className="mt-3 " style={{}}>
            <h4 style={{color:'gray',textAlign:'start'}}>Enter The Text Below</h4>
            <Form>
                {/* <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                 </Form.Group> */}
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    {/* <Form.Label >Example textarea</Form.Label> */}
                    <Form.Control id="textaria" as="textarea" value={text} onChange={changHandler} rows={10} column={5}/>
                </Form.Group>
            </Form>   
        </Container>
        <Container  style={{textAlign:'start'}} >
        <Button variant="dark" size="sm" className="m-2 " onClick={toUpperCaseClick}>To UpperCase</Button>
        <Button variant="dark" size="sm" className="m-2" onClick={toLowerCaseClick}>To LowerCase</Button>
        <Button variant="dark" size="sm" className="m-2" onClick={removeSpaces}>Remove Spaces</Button>
        <Button variant="dark" size="sm" className="m-2" onClick={copyTextHandler}>Copy Text</Button>
        </Container>
        <Container className='my-4'>
            <p style={{backgroundColor:'#212529', color:'#fff ', width:'230px', textAlign:'start' ,padding:'5px'}}>{text.split(" ").length} word and {text.length} Character</p>
            <p style={{backgroundColor:'#212529', color:'#fff ', width:'230px', textAlign:'start' ,padding:'5px'}}>{0.008 * text.split(" ").length} Minut to Read</p>
            <h3 style={{textAlign:'start'}}>Previeve</h3>
            <p style={{backgroundColor:'#fff', color:'#000 ', textAlign:'start' ,padding:'5px'}}>{text}</p>
        </Container>
        </Container>
        
        {/* style={{width:"600px",color:'gray',textAlign:'start'}} */}
        {/* style={{width:"600px"}} */}
    </div>
  )
}

export default FormConytainer
