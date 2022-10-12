import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const DashBoard = () => {

    const data =useLoaderData();
    // console.log(data);
    return (
        <div>
            <h3 className=' text-lg md:text-3xl font-bold  text-purple-600 mt-10 mb-5 ' >Here You Can See Your Quiz Statistic</h3>
            <div className='md:my-28 flex justify-center bg-white rounded-lg border shadow-sm md:mx-20 text-left hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-70 p-40'>
            <div >
                <ResponsiveContainer width= {500}
                    height={300}>
                <LineChart
               
            data={data.data}>
            
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
     
                     <Line type="monotone" dataKey="total" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart> 
                </ResponsiveContainer>
           
        </div>
        </div>
        </div>
    );
};

export default DashBoard;