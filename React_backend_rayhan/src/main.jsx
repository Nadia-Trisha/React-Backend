import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';  
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home.jsx';
import Charts from './Pages/Charts.jsx';
import Table from './Pages/Table.jsx';
import AllProducts from './Pages/All_products.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: '',
        element: <Home></Home>
      },
      {
        path: 'charts',
        element: <Charts></Charts>
      },
      {
        path: 'tables',
        element: <Table></Table>
      },
      {
        path: 'allproducts',
        element: <AllProducts></AllProducts>
      },
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
