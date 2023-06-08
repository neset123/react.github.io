import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <> <style> {
      `.carousel-control-prev-icon,
      .carousel-control-next-icon{
        filter: invert(1)
      }
        }`
    }</style>
    <Carousel activeIndex={index} onSelect={handleSelect} >
      <Carousel.Item>
        <img
          height="800px"
          className="d-block w-100"
          src="pictures/html.png"
          alt="first slide"
        />
        <Carousel.Caption>
          <h2 style={{ color: 'blue' }} >Html</h2>
          <p ><a href='https://neset123.github.io/NesetCv.github.io/index.html' className='link-success link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"'>You may look example website here</a></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          height="800px"
          className="d-block w-100"
          style={{ color: 'blue' }}
          src="./pictures/css.png"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 style={{ color: 'blue' }}>CSS</h3>
          <p ><a href='https://neset123.github.io/NesetCv.github.io/index.html' className='link-success link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"'>You may look example website here</a></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          height="800px"
          className="d-block w-100"
          src="pictures/js.png"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 style={{ color: 'blue' }}>JS</h3>
          <p ><a href='https://neset123.github.io/NesetCv.github.io/index.html' className='link-success link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"'>You may look example website here</a></p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel></>
  );
}

export default ControlledCarousel;
