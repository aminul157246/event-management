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
import Details from './Components/Pages/Details/Details';
import AuthProvider from './AuthProvider/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import FamilyReunions from './Components/Pages/FamilyReunions/FamilyReunions';
import HolidayParties from './Components/Pages/Holiday Parties/HolidayParties';
import ErrorPage from './Error/ErrorPage';



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
      {
        path : '/service/:id',
        element : <PrivateRoute>
          <Details></Details>
        </PrivateRoute>,
        loader : () => fetch('/service.json') 
      },
      {
        path : '/login',
        element : <Login></Login>
      },
      {
        path : '/familyReunions',
        element : <PrivateRoute><FamilyReunions></FamilyReunions></PrivateRoute>
      },
      {
        path : '/register',
        element : <Register></Register>
      },
      {
        path : '/holidayParty',
        element : <PrivateRoute><HolidayParties></HolidayParties></PrivateRoute>
      },
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
