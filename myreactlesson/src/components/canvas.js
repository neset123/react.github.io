import React, { useState} from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link as ScrollLink } from 'react-scroll';
import logo from '../logo.svg';

function Canvas() {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };

  const handleShow = () => {
    setShow(true);
  };

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Projects
      </Button>

      <Offcanvas className='canvasback' show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title> </Offcanvas.Title>
        </Offcanvas.Header>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h1 className='text-primary'>Projects</h1>
        <Offcanvas.Body>
          <ul className="list-group">
            <li className="list-group-item" >
              <ScrollLink to="home" smooth={false} >
                Home
              </ScrollLink>
            </li>
            <li className="list-group-item">
              <ScrollLink to="List" smooth={false} duration={100}>
                List Studies
              </ScrollLink>
            </li>
            <li className="list-group-item">
              <ScrollLink to="calculator" smooth={false} duration={100}>
                Calculator
              </ScrollLink>
            </li>
            <li className="list-group-item">
              <ScrollLink to="mapTurkey" smooth={false} duration={100}>
                Map Turkey
              </ScrollLink>
            </li>
            <li className="list-group-item">
              <ScrollLink to="Slidepage" smooth={false} duration={100}>
                Slide Page
              </ScrollLink>
            </li>
            <li className="list-group-item">
              <ScrollLink to="Formpage" smooth={false} duration={100}>
                FormPage
              </ScrollLink>
            </li>
          </ul>

          
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default Canvas;
