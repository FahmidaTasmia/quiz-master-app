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

        <div className='md:ml-20 text-center mb-5 md:m-12 '>
            
            <img  src="https://dzone.com/storage/temp/892886-fig1.png" alt="" />
            <h3>React.js Rendering:</h3>
          
            <img src="https://dzone.com/storage/temp/892889-fig2.png" alt="" />
            <h3>The React Virtual DOM</h3>
        </div>

      </div>

      {/* question:2 */}

      <div className="grid md:grid-cols-2 my-12 bg-white rounded-lg border shadow-sm md:mx-20 text-left hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-70">

    <div className='content mx-5 md:m-12'>
    <h3 className='mb-3 text-lg font-bold mt-5'>What is the difference between state and props?</h3>
   <div className=' m-auto place-items-start'>
    <p className='mb-3 font-normal  dark:text-gray-400'>props (short for “properties”) and state are both plain JavaScript objects. While both hold information that influences the output of render, they are different in one important way:</p>

    <p className='mb-5 font-normal  dark:text-gray-400'><span className='font-semibold text-lg'>State:</span>  The state is an updatable structure that is used to contain data or information about the component and can change over time. The change in state can happen as a response to user action or system event. It is the heart of the react component which determines the behavior of the component and how it will render. A state must be kept as simple as possible. It represents the component's local state or information. It can only be accessed or modified inside the component or by the component directly.</p>

    <p className='mb-5 font-normal  dark:text-gray-400'><span className='font-semibold text-lg'>Props:</span>  Props are read-only components. It is an object which stores the value of attributes of a tag and work similar to the HTML attributes. It allows passing data from one component to other components. It is similar to function arguments and can be passed to the component the same way as arguments passed in a function. Props are immutable so we cannot modify the props from inside the component.</p>
   
   </div>
</div>

<div className='md:ml-20 text-center mb-5 md:mt-20 '>
    
    <img  src="https://csharpcorner-mindcrackerinc.netdna-ssl.com/article/react-states-day-six/Images/image001.png" alt="" />
  
</div>

</div>

{/* question-3 */}

<div className="grid md:grid-cols-2 my-12 bg-white rounded-lg border shadow-sm md:mx-20 text-left hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-70">

<div className='content mx-5 md:m-12'>
<h3 className='mb-3 text-lg font-bold mt-5'>How does Context API work?</h3>
<div className=' m-auto place-items-start'>
<p className='mb-3 font-normal  dark:text-gray-400'>Context API works by declaring a global state that can be pulled into any component. Lets see it in action.</p>
<p className='mb-5'><small >Create a context using React.createContext().</small></p>

<p className='mb-5 font-normal  dark:text-gray-400'> TNext Step is to create a provider class that will pass your value or state. Notice we’re using our ThemeContext.Provider tag to show this is the component that provides context. Now that context can be used by the consumer class.</p>

<p className='mb-5 font-normal  dark:text-gray-400'>Now were are going to import the context in the Content class and use it to do something. Notice we are using ThemeContext.Consumer to import the context into the class.</p>

<p className='mb-5 font-normal  dark:text-gray-400'><span className='font-semibold text-lg'>Conclusion:</span>  Props are read-only components. It is an object which stores the value of attributes of a tag and work similar to the HTML attributes. It allows passing data from one component to other components. It is similar to function arguments and can be passed to the component the same way as arguments passed in a function. Props are immutable so we cannot modify the props from inside the component.</p>

</div>
</div>

<div className='md:ml-20 md:mr-20 text-center mb-5 md:mt-24 '>

<img  src="https://miro.medium.com/max/828/1*YHoRhY7rQGbW1hzOJHgFFg.png" alt="" />

</div>

</div>

      {/* question-4  */}

<div className="grid md:grid-cols-2 my-12 bg-white rounded-lg border shadow-sm md:mx-20 text-left hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-70">

<div className='content mx-5 md:m-12'>
<h3 className='mb-3 text-lg font-bold mt-5'>How does useRef work in React?</h3>
<div className=' m-auto place-items-start'>
<p className='mb-3 font-normal  dark:text-gray-400'>The useRef hook is the new addition in React 16.8. Before proceeding to this article there is a prerequisite to know about the ref in react.The useRef is a hook that allows to directly create a reference to the DOM element in the functional component. </p>
<h3 className='my-3  text-lg font-bold'>Syntax:</h3>
<small   >const refContainer = useRef(initialValue);</small>

<p className='mb-5 mt-5 font-normal  dark:text-gray-400'>The useRef returns a mutable ref object. This object has a property called .current. The value is persisted in the refContainer.current property. These values are accessed from the current property of the returned object. The .current property could be initialised to the passed argument initialValue e.g. useRef(initialValue). The object can persist a value for a full lifetime of the component. </p>

</div>
</div>

<div className='md:ml-20 md:mr-20 text-center mb-5 md:mt-24 '>

<img  src="https://miro.medium.com/max/917/0*GxY7_gKf_0wyfwUQ.png" alt="" />

</div>

</div>    
       
        </div>
    );
};

export default Blog;