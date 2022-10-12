
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './components/Home/Home';
import DashBoard from './components/DashBoard/DashBoard';
import Blog from './components/Blog/Blog';
import Question from './components/Question/Question';

function App() {
  const router = createBrowserRouter([
  {
    path:'/', 
    element:<Main></Main>,
    children:[
      {
        path:'/', 
        loader:()=>fetch('https://openapi.programming-hero.com/api/quiz'),
        element:<Home></Home>
      },

      {
       path:'/question/:questionId',
       loader:async({params})=>{
        return fetch(`https://openapi.programming-hero.com/api/quiz/${params.questionId}`)
       },
       
        element:<Question></Question>
      },

      {
        path:'/dashboard',
        element:<DashBoard></DashBoard>
      },

      {
        path:'/blog',
        element:<Blog></Blog>
      },

      {
        path:'*', element:<div className='m-auto items-center'>
          <h1 >404</h1>
          <h1>This Page Not Found</h1>
        </div>
      }

    ]

  }
  ])
  return (
    <div className="App">
  <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
