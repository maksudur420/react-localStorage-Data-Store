
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Main from './Components/Main'
import Loadmeals from './Components/Loadmeals'
import About from './Components/About'
import ErrorPage from './Components/ErrorPage'
import Service from './Components/Service'


function App() {
 const router = createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>,
    children:[
      {
        path:'/',
        loader: async ()=>{
          return fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        },
        element:<Loadmeals></Loadmeals>,
      },
     
    ]
  }, 
  {
    path:'/about',
    element: <About></About>
  },
  {
    path:'/service',
    element:<Service></Service>
  },
  {
    path:'*',
    element: <ErrorPage></ErrorPage>
  }
 ])

  return (
    <>
      <div>
        <RouterProvider
        router={router}
        ></RouterProvider>
      </div>
    </>
  )
}

export default App
