import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizLoadPage from '../QuizLoadPage/QuizLoadPage';

const Question = () => {
    const AllQuestions = useLoaderData();
    const {name}=AllQuestions.data;
    
    const Questions=AllQuestions.data.questions;
    return (
        <div>
            <h2 className='font-bold text-3xl text-purple-700 py-8'><small>Quiz Of</small>: {name}</h2>
          {
            Questions.map(query=><QuizLoadPage key={query.id}
                query={query}
            ></QuizLoadPage>)
          }

        </div>
    );
};

export default Question;