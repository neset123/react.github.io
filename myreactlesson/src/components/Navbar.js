import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import { Image } from 'react-bootstrap';
import ToggleMode from '../Lifecycle';
import Canvas from './canvas';

function MainNavbar() {
    const AdminName = ()  => <h3>Neşet YILDIRIR</h3> ;// Nest Components lesson:1
const Header = (headProps) =>  <h5>{headProps.text}</h5>//props lesson:2
  return (
    <Navbar collapseOnSelect expand="lg" className='location' variant="light" >
      <br/>
      <Container>
      <br/>
        <Navbar.Brand href="#home"><Header text = "React Devoloper:"> </Header>
        <AdminName/>
        <br/>
        
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features"><Image src="pictures/neset.jpg" roundedCircle  width={'60px'}  height={'60px'}/></Nav.Link>
            <Nav.Link href="https://neset123.github.io/NesetCv.github.io/second.html"  ><div   className="btn btn-primary "       role="button">CV</div></Nav.Link>
            

<Nav.Link ><Dropdown>
      <Dropdown.Toggle variant="primary" id="dropdown-basic">
        Details
      </Dropdown.Toggle>

      <Dropdown.Menu>
    <Dropdown.Item onClick={() => window.location.href = "https://github.com/neset123"}>
      Github &nbsp;<i className="uil uil-github"></i>
    </Dropdown.Item>
    <Dropdown.Item onClick={() => window.location.href = "https://www.linkedin.com/in/neshet-yildirir-b4b153126/"}>
      Linkedin &nbsp;<i className="uil uil-linkedin"></i>
    </Dropdown.Item>
    <Dropdown.Item onClick={() => window.location.href = "https://drive.google.com/drive/folders/1q6bJhkfCDdY_xqALrpOQ2dyV70uio0lH?usp=sharing"}>
      Certificates &nbsp;<span className="material-icons">workspace_premium</span>
    </Dropdown.Item>
  </Dropdown.Menu>
    </Dropdown>
    
    </Nav.Link>      
          </Nav>
          <Nav>
            <Nav.Link ><div className="btn btn-primary btn-lg" ><Canvas/></div></Nav.Link>
            <Nav.Link  ><div className="btn btn-primary btn-sm " >
            <ToggleMode  variant="primary" ></ToggleMode></div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavbar;