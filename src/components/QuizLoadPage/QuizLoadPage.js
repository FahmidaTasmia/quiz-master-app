import React from 'react';
import QuizOption from '../QuizOption/QuizOption';

const QuizLoadPage = ({query}) => {
    const{question,options,correctAnswer}=query;
    return (
        <div>
            <h3>{question}</h3>
           <div>
            
           <p>{options}</p>
           </div>
        </div>
    );
};

export default QuizLoadPage;