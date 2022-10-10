import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const QuizDetails = () => {
    const quizDetails=useLoaderData()
    console.log(quizDetails.data.questions);
    const {id}=quizDetails.data.questions
    return (
        <div>
            <h1>detail quiz{id} </h1>
            {
                quizDetails.data.questions.map(question=><Question
                key={question.id}
                question={question}
                ></Question>)
            }
        </div>
    );
};

export default QuizDetails;