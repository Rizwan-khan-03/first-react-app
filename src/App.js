import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// @import "~bootstrap/scss/bootstrap";
import NavbarContainer from './component/Navbar';
import FormConytainer from './component/Form';
import Aboute from './component/Aboute';
import { useState } from 'react';

function App() {
  const [mode,setMode]=useState("dark")
  const toggleMode  = () =>{
   if(mode==="light"){
    setMode("dark");
    document.body.style.backgroundColor='white';
    console.log('cliked')
   }
   else{
    setMode("light");
    document.body.style.backgroundColor='#212529';

   }
 
  }
  return (
    <div className="App">
    <NavbarContainer 
    title="Textutils"
    home="Home"
    feature="Feature"
    service="Service"
    aboute="About us"
    mode={mode}
    toggle={toggleMode}
    />
    {/* <NavbarContainer /> */}
    <FormConytainer />
    <Aboute />
    </div>
  );
}

export default App;
