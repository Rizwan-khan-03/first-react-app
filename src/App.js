import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// @import "~bootstrap/scss/bootstrap";
import NavbarContainer from './component/Navbar';
import FormConytainer from './component/Form';
import Aboute from './component/Aboute';

function App() {
  return (
    <div className="App">
    <NavbarContainer 
    title="Textutils"
    home="Home"
    feature="Feature"
    service="Service"
    aboute="About us"
    />
    {/* <NavbarContainer /> */}
    <FormConytainer />
    <Aboute />
    </div>
  );
}

export default App;
