import React from 'react';

const Blog = () => {
    return (
        <div>
           {/* question-- */}

           
      <div className="grid md:grid-cols-2 my-12 bg-white rounded-lg border shadow-sm md:mx-20 text-left hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-70">

        <div className='content mx-5 md:m-12'>
            <h3 className='mb-3 text-lg font-bold mt-5'>What Is React & How Does It Actually Work?</h3>
           <div className=' m-auto place-items-start'>
            
            <p className='mb-3 font-normal  dark:text-gray-400'><span className='font-semibold text-lg'> Introduction to ReactJS:</span>  ReactJS is one of the most popular JavaScript libraries for mobile and web application development. Created by Facebook, React contains a collection of reusable JavaScript code snippets used for user interface (UI) building called components.It’s important to note that ReactJS is not a JavaScript framework. That’s because it’s only responsible for rendering the components of an application’s view layer. React is an alternative to frameworks like Angular and Vue, which all allow to create complex functions.</p>

            <p className='mb-5 font-normal  dark:text-gray-400'><span className='font-semibold text-lg'>How does it work:</span>  While building client-side apps, a team of Facebook developers realized that the DOM is slow (The Document Object Model (DOM) is an application programming interface (API) for HTML and XML documents. It defines the logical structure of documents and the way a document is accessed and manipulated.). So, to make it faster, React implements a virtual DOM that is basically a DOM tree representation in JavaScript. So when it needs to read or write to the DOM, it will use the virtual representation of it. Then the virtual DOM will try to find the most efficient way to update the browser’s DOM.
            Unlike browser DOM elements, React elements are plain objects and are cheap to create. React DOM takes care of updating the DOM to match the React elements. The reason for this is that JavaScript is very fast and it’s worth keeping a DOM tree in it to speed up its manipulation.
            Although React was conceived to be used in the browser, because of its design it can also be used in the server with Node.js. </p>
           
           </div>
        </div>

        <div className='md:ml-20 text-center mb-5'>
            
            <img src="https://dzone.com/storage/temp/892886-fig1.png" alt="" />
            <h3>React.js Rendering:</h3>
          
            <img src="https://dzone.com/storage/temp/892889-fig2.png" alt="" />
            <h3>The React Virtual DOM</h3>
        </div>

      </div>

        </div>
    );
};

export default Blog;