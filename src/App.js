import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Register from './components/Register';
import Navbar from './components/Navbar';

const Layout = () => {
  return(
    <>
      <Navbar/>
      <Outlet/>
    </>
  )
}

// mmebuat route menggunakan createBrowserRouter
const route = createBrowserRouter([
  {
    path:"/",
    element: <Login/>
  },
  {
    path: "/register",
    element: <Register/>
  },
  {
    path: "/dashboard",
    element: <Layout/>,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard/>
      }
    ]
  }
])

// 

function App() {
  return (
    <div className="App">
      <RouterProvider router={route}/>
    </div>
  );
}

export default App;
