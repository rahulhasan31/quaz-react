import { click } from '@testing-library/user-event/dist/click';
import React, { useState } from 'react';
import './Question.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'

const Question = ({ questions }) => {
    // console.log(questions);
    const { question, options,
        correctAnswer } = questions

    const [q1, q2, q3, q4, ]=options
    const [eye, setEye]=useState()
   
    const handleIcon=(correctAnswer)=>{
     
       
    }
    
const handleAns= (options)=>{
   if(correctAnswer===options){
     toast("Correct Answer");
   }
   else{
    toast("wrong Answer ");
   }

}
    
    return (
        <div className='question border container p-1 shadow-lg p-3 mb-5 bg-body rounded '>
            <div className='d-flex'>
                <h5 className='mb-5'>{question}</h5>
                <button onClick={()=>handleIcon(correctAnswer)}><FontAwesomeIcon icon={faEye} /></button>

            </div>
           
            <div className='d-flex gap-1 justify-content-center '>
                <button className='btn btn-primary' onClick={ ()=>handleAns(q1)} >{q1}</button>
                <ToastContainer/>
                <button className='btn btn-primary' onClick={ ()=>handleAns(q2)}>{q2}</button>
                <button className='btn btn-primary' onClick={ ()=>handleAns(q3)}>{q3}</button>
                <button className='btn btn-primary' onClick={ ()=>handleAns(q4)}>{q4?q4:'No Question'}</button>
               
               
            </div>


 
        </div>
    );
};

export default Question;