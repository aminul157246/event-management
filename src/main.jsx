import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {

  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'


const queryClient = new QueryClient()




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
import Events from './Components/Pages/Events/Events';
import Venues from './Components/Pages/Events/Venues/Venues';
import Dress from './Components/Pages/Events/Dress/Dress';
import Photographer from './Components/Pages/Events/Photographer/Photographer'
import Catering from './Components/Pages/Events/Catering/Catering'
import Entertainment from './Components/Pages/Events/Entertainment/Entertainment'




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
      },
      {
        path : '/event', 
        element : <Events/>
      },
      {
        path : '/venues', 
        element : <Venues/>
      },
      {
        path : '/dress', 
        element : <Dress/>
      },
      {
        path : '/photographer', 
        element : <Photographer/>
      },
      {
        path : '/catering', 
        element : <Catering/>
      },
      {
        path : '/entertainment', 
        element : <Entertainment/>
      },

    ]
  },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
)
