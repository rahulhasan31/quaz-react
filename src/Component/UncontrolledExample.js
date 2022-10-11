import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {
    
  return (
    <Carousel className='container w-50 p-10'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src='https://www.patterns.dev/img/reactjs/react-logo@3x.svg'
          alt="First slide"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src="https://www.patterns.dev/img/reactjs/react-logo@3x.svg"
        />

        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src='https://www.patterns.dev/img/reactjs/react-logo@3x.svg'
          alt="Third slide"
        />

        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;