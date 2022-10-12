import React, { useState } from 'react';
import { Bars3Icon,XMarkIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const Navbar = () => {
    
    return (
        <nav className='header h-auto text-white w-full flex justify-between bg-purple-700 py-5 '>
           <div className='logo mx-12'>
            <h3>QuizApp</h3>
           </div>
           <div className='nav-item mr-12 '>
            
            <Link className='mr-12' to='/'>Home</Link>
            
            <Link className='mr-12' to='/dashboard'>DashBoard</Link>
            <Link to='/blog'>Blog</Link>
           <Link to='/question'></Link>

            
            
           </div>
        </nav>
    );
};

export default Navbar;