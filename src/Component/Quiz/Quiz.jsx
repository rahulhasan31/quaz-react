import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './quiz.css'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight  } from '@fortawesome/free-solid-svg-icons'


const Quiz = ({quiz}) => {
    const {name, logo, id, total}=quiz
    
    const navigate= useNavigate()
    const handleNavigate=()=>{
      navigate(`/quiz/${id}`)
      
    }
    return (
        <div className='text-center shadow-lg p-3 mb-5 bg-body rounded border  d-flex justify-content-center'>
                       
          <Row xs={1} md={2} className="g-4 m-5 text-center">
            
      {Array.from({ length: 1 }).map((_, idx) => (
        <Col className=''>
          <Card>
            <Card.Img className='bg-success' variant="top" src={logo} />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Title> <p><small>Quiz:{total}</small></p></Card.Title>
              <Card.Text>
              
              <Button onClick={handleNavigate} 
              variant="primary">Start Practice <FontAwesomeIcon icon={faArrowCircleRight}></FontAwesomeIcon> </Button>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
        </div>
    );
};

export default Quiz;