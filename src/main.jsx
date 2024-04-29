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
import All_Art from './Components/Pages/All_Art_and_Craft/All_Art';
import MyCraft from './Components/Pages/MyCraft/MyCraft';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Error from './Components/Pages/Error/Error';
import ViewDetails from './Components/Pages/Viewdetails/ViewDetails';
import UpdateCraft from './Components/Pages/Update/UpdateCraft';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('https://assignment-10-server-side-ashen.vercel.app/addcraft')
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
        path: '/addcraft',
        element: <AddCraft></AddCraft>
      },
      {
        path: '/allart',
        element: <PrivateRoute><All_Art></All_Art></PrivateRoute>,
        loader: () => fetch('https://assignment-10-server-side-ashen.vercel.app/addcraft')
      },
      {
        path: '/myart',
        element: <PrivateRoute><MyCraft></MyCraft></PrivateRoute>,
        loader: () => fetch('https://assignment-10-server-side-ashen.vercel.app/addcraft')
      },
      {
        path: '/viewdetails/:id',
        element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`https://assignment-10-server-side-ashen.vercel.app/addcraft/${params.id}`)
      },
      {
        path: '/updatecraft/:id',
        element: <UpdateCraft></UpdateCraft>,
        loader: ({ params }) => fetch(`https://assignment-10-server-side-ashen.vercel.app/addcraft/${params.id}`)
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
