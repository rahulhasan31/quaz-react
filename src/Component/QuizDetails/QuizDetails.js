import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const QuizDetails = () => {
    const quizDetails=useLoaderData()
    // console.log(quizDetails.data.questions);
    const {id}=quizDetails.data.questions

    
    return (
        <div className='border bg-success p-2 text-dark bg-opacity-10'>
            <h1>Detail Quiz{id} </h1>
            {
                quizDetails.data.questions.map(questions=><Question
                key={questions.id}
                questions={questions}
                ></Question>)
            }
        </div>
    );
};

export default QuizDetails;