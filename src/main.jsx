import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './layout/Root/Root';
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Pages/Home/Home';
import Register from './Components/Pages/Register/Register';
import Login from './Components/Pages/Login/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/login',
        element:<Login></Login>
      }
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
