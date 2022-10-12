
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './components/Home/Home';
import DashBoard from './components/DashBoard/DashBoard';
import Blog from './components/Blog/Blog';
import Question from './components/Question/Question';
import ErrorPage from './components/ErrorPage/ErrorPage';

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
        loader:()=>fetch('https://openapi.programming-hero.com/api/quiz'),
        element:<DashBoard></DashBoard>
      },

      {
        path:'/blog',
        element:<Blog></Blog>
      },

      {
        path:'*', element:<ErrorPage></ErrorPage>
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
