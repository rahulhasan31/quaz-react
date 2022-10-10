import React from 'react';

import { Link, useLoaderData } from 'react-router-dom';
import Quiz from './Quiz/Quiz';

const Home = () => {
    const quizs=useLoaderData()
    console.log(quizs);
   
    return (
        <div  className='container jus'>
              
         {
            quizs.data.map(quiz=><Quiz
            key={quiz.id}
            quiz={quiz}
            ></Quiz>)
         }


        </div>
    );
};

export default Home;