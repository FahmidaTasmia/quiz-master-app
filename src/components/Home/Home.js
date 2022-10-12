import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Home = () => {
    const allQuiz = useLoaderData();
    // console.log(allQuiz);
    return (
       <div>
        


         <div className='grid md:grid-cols-4 gap-5 md:my-60 ml-12 items-center '>
          
          {
             allQuiz.data.map(quiz=> <Quiz key={quiz.id}
                 quiz={quiz}
             >
 
             </Quiz>)
          }
         </div>
       </div>
    );
};

export default Home;