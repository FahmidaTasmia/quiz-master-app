import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { EyeIcon } from '@heroicons/react/24/solid'
import 'react-toastify/dist/ReactToastify.css';
import QuizOption from '../QuizOption/QuizOption';

const QuizLoadPage = ({query}) => {
    const{question,correctAnswer}=query;

    const handleClick = (answer)=>{
        if(answer===correctAnswer){
            toast('Nice Job !')
        }
        else{
            toast('OPPS!Try again')
        }
    }

    const handleEye =()=>{
        toast(correctAnswer);
    }
    return (
        <div className='my-10 md:w-7/12 mx-auto  bg-gradient-to-r from-purple-300 rounded-lg border shadow-sm    hover:bg-gray-100 dark:border-purple-700 dark:bg-purple-800 dark:hover:bg-purple-70 py-10 '>

            <div className=' grid grid-cols-2 mb-5'>
            <div>
            <h3 className='text-purple-800 font-semibold'>{question}</h3>
            </div>
            <div  className='grid justify-items-end mx-10'>
                <EyeIcon  onClick={handleEye} className="h-6 w-6 inline-block align-middle text-purple-500"/>
                
                <ToastContainer />
            </div>
            
            </div>

            

           <div className='grid grid-cols-2 gap-5 md:mx-10'>
            
            {
               query.options.map((option,_id)=> <QuizOption
               key ={_id}
               option={option}
               handleClick={handleClick}
               >
            
               </QuizOption> )
            }
           </div>
       
        </div>
    );
};

export default QuizLoadPage;