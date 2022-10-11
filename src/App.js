
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './Component/Layout/Main.jsx'
import Home from './Component/Home'
import QuizDetails from './Component/QuizDetails/QuizDetails'
import ErrorPage from './Component/ErrorPage';
import Blog from './Component/Blog/Blog';
import Statistics from './Component/Statistics/Statistics';



function App() {
  const router= createBrowserRouter([
  {
    path: '/', 
    errorElement: <ErrorPage></ErrorPage>,
    element:<Main></Main>,
    loader: async()=>{ return fetch('https://openapi.programming-hero.com/api/quiz')},
    children:[
    
     
      {
        path:'/',
        loader: async()=>{ return fetch('https://openapi.programming-hero.com/api/quiz')},
        element:<Home></Home>
      
      },
      {
      path : '/quiz/:quizId',
      loader: async ({params})=>{
        return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
      },
      element: <QuizDetails></QuizDetails>
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      },
      {
        path: "/Statistics",
        loader :async()=>{ return fetch('https://openapi.programming-hero.com/api/quiz')},
        element: <Statistics></Statistics>
      }
  
    
      
      
    ]
  }
  ])
  return (
    <div className="App">
     <RouterProvider router={router}>

     </RouterProvider>
    </div>
  );
}

export default App;
