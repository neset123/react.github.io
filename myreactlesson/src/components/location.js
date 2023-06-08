import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Canvas from './canvas';

function Location() {
  const [show, setShow] = useState(true);

  return (
    <div >
      <Alert show={show} className='location'>
        <Alert.Heading></Alert.Heading>
        <br/>
        <p >
        <h4> You may look the my  React projects by clicked below button or scroool down the page </h4>
        </p>
        <hr />
        
        <div className="d-flex justify-content-center ">
        <Canvas/>

          <Button  className='margin-left' onClick={() => setShow(false)} variant="primary">
            Close 
          </Button>
        </div>
      </Alert>

      {!show && <Button onClick={() => setShow(true)}>Show </Button>}
    </div>
  );
}

export default Location;