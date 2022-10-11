import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, useLoaderData } from 'react-router-dom';
import Quiz from './Quiz/Quiz';
import UncontrolledExample from './UncontrolledExample';

const Home = () => {
    const quizs=useLoaderData()
 
   
    return (
        <div  className='container '>
            <h1>Welcome To Quiz Game</h1>
            <div className='w-100px'>
           
           <UncontrolledExample></UncontrolledExample>
        
            </div>


          
              
        <div className='container row row-cols-lg-1 row-cols-md-2 row-cols-sm-1'>
        {
            quizs.data.map(quiz=><Quiz
            key={quiz.id}
            quiz={quiz}
            ></Quiz>)
           
          },
        </div>
         

        </div>
    );
};

export default Home;