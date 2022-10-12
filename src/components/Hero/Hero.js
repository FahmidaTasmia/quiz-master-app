import React, { useEffect, useRef } from 'react';

import Lottie from 'lottie-web';

const Hero = () => {
    const container =useRef(null)
    useEffect(()=>{
        const instance = Lottie.loadAnimation({
            container:container.current,
            renderer:'svg',
          
            autoplay:true,
            animationData:require('./hero.json')
        })
        return () => instance.destroy();
     
    },[])
    return (
        <div className='grid md:grid-cols-2 my-12 bg-white rounded-lg border shadow-sm md:mx-20  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-70'>
            <div className='m-auto align-middle '><h3 className='text-3xl font-bold my-5 text-purple-600'>Evaluate Your Front-End Knowledge !</h3> 
            <div className=' text-center md:mx-14'>
            

            <p className='mb-3 font-normal  dark:text-gray-400'>A front-end developer is someone who uses coding languages like HTML, CSS, and JavaScript to construct web designs. Front-end developers are frequently referred to as “client-side developers” to separate themselves from back-end developers, who program what happens behind the scenes (like databases).</p>
            </div>
            
            </div>
            <div className='container w-75 h-75' ref={container}></div>
        </div>
    );
};

export default Hero;