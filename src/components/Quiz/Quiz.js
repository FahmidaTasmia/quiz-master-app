import React from 'react';
import { Link } from 'react-router-dom';

const Quiz = ({quiz}) => {
   
    const{name,logo,total,id}=quiz;
    return (
        <div className="w-60 p-2 bg-purple-200 rounded-xl transform transition-all duration:300 shadow-lg hover:shadow-2xl">
   
   <img src={logo} alt="" />

    <div className="p-2">
  
    <h2 className="font-bold text-lg mb-2 ">{name}</h2>
  
    <p className=" text-gray-600">Total Question:{total}</p>
    </div>
  
    <div classNameName="m-2">
   <button className='text-white bg-purple-600 px-8 py-1 rounded-md hover:bg-purple-700'>
    <Link to={`/question/${id}`}>Start Practice</Link> </button>
    </div>
  </div>
    );
};

export default Quiz;