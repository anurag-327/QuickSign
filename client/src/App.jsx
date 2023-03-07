import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Login from './pages/Login'
import Home from "./pages/Home"
import Error from './pages/Error'
import Register from "./pages/Register"
import Index from "./pages/Index"

function App() {
  const [count, setCount] = useState(0)
  const router=createBrowserRouter([
    {
    path:"/",
    element:<Index />
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
    path:"/home",
    element:<Home />
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
