import React from 'react';
import QuizOption from '../QuizOption/QuizOption';

const QuizLoadPage = ({query}) => {
    const{question,options,correctAnswer}=query;
    return (
        <div>
            <h3>{question}</h3>
           <div>
            
            {
               query.options.map((option,_id)=> <QuizOption
               key ={_id}
               option={option}
               >
            
               </QuizOption> )
            }
           </div>
        </div>
    );
};

export default QuizLoadPage;