import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Hero from '../Hero/Hero';

const DashBoard = () => {

    const statisticData =useLoaderData();
    return (
        <div >
            <h1>this is Dashboard</h1> 
        </div>
    );
};

export default DashBoard;