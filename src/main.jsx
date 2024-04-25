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
import AuthProvider from './AuthProvider/AuthProvider';
import AddCraft from './Components/Pages/AddCraft/AddCraft';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path:'/addcraft',
        element:<AddCraft></AddCraft>
      }
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
