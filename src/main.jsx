import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Pages/Home/Home';
import Login from './Components/Pages/Login/Login';
import Register from './Components/Pages/Register/Register';
import Root from './Root/Root';
import AuthProvider from './AuthProvider/AuthProvider';
import ErrorPage from './Error/ErrorPage';
import Service from './Components/Pages/Service/Service';
import About from './Components/Pages/About/About';
import Contact from './Components/Pages/Contact/Contact';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement : <ErrorPage></ErrorPage>,
    children: [
      {
        path : '/',
        element : <Home></Home>,
        loader : () => fetch('/service.json') 
      },
      // {
      //   path : '/service/:id',
      //   element : <PrivateRoute>
      //     <Details></Details>
      //   </PrivateRoute>,
      //   loader : () => fetch('/service.json') 
      // },
      {
        path : '/login',
        element : <Login></Login>
      },
      {
        path : '/service',
        element :  <Service/>
      },
      {
        path : '/register',
        element : <Register></Register>
      },
      {
        path : '/contact',
        element : <Contact/>
      },
      {
        path : '/about', 
        element : <About/>
      }
    ]
  },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
)
