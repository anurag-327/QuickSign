import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Login from './pages/Login'
import Home from "./pages/Home"
import Error from './pages/Error'
import Register from "./pages/Register"
import Index from "./pages/Index"
import Contact from "./pages/Contact"
import Admin from './Admin/Admin'
import RecoverAccount from "./pages/RecoverAccount"
import ContextAPI from './Context/ContextAPI'
import AdminContextAPI from './Context/AdminContext'
function App() {
  const router=createBrowserRouter([
    {
    path:"/",
    element:<Index />
  },
    {
    path:"/contact",
    element:<Contact />
  },
    {
    path:"/auth/login",
    element:<Login />
  },
    {
    path:"/auth/register",
    element:<Register />
  },
    {
    path:"/auth/recover",
    element:<RecoverAccount/>
  },
    {
    path:"/home",
    element:<ContextAPI><Home /></ContextAPI>
  },
    {
    path:"/admin",
    element:<AdminContextAPI><Admin /></AdminContextAPI>
  },
  {
    path:"*",
    element:<Error />
 }
])
  return (
    <RouterProvider router={router}/>
  )
}

export default App
