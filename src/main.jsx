import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import AuthProvider from './Providers/AuthProvider';
import Order from './Components/Order/Order';
import PrivateRoute from './routes/PrivateRoute';
import Profile from './Components/Profile/Profile';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: 'login',
        element: <Login></Login>,
      },
      {
        path: 'register',
        element: <Register></Register>,
      },
      {
        path: 'order',
        element: <PrivateRoute><Order></Order></PrivateRoute>,
      },
      {
        path: 'profile',
        element: <PrivateRoute><Profile></Profile></PrivateRoute>
      },
    ]
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
        <AuthProvider>
           <RouterProvider router={router} />
        </AuthProvider>
  </StrictMode>,
)
