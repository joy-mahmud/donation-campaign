import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/home/Home.jsx';
import Root from './components/root/Root.jsx';
import ErrorPage from './components/Errorpage/ErrorPage.jsx';
import Donation from './components/donation/Donation';
import Statistics from './components/statistics/Statistics';

const router = createBrowserRouter([
  {
    path: "/",
    errorElement:<ErrorPage></ErrorPage>,
    element:<Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader:() =>fetch('../data.json')
      },
      {
        path:'/donation',
        element:<Donation></Donation>
      },
      {
        path:'/statistics',
        element:<Statistics></Statistics>
      }
    ]

  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
