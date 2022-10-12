import React from 'react';
import { ToastContainer } from 'react-toastify';

const QuizOption = ({option,handleClick,id}) => {
    return (
        <div >
          <div className='flex '>
           
           <div className='border border-purple-600 rounded-md py-3 text-sm md:font-semibold text-purple-700 shadow-lg  md:px-10 w-full flex md:space-x-8'>
           <div>
           <input className='m-3' onClick={()=> handleClick(option)} type="checkbox" name={id} value="id" />
          
           </div>
           <div>
           {option}
           </div>

           
           </div>
            <ToastContainer position='top-center'/>
       
          </div>
        </div>
    );
};

export default QuizOption;