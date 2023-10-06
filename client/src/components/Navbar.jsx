import React,{useState,useContext} from 'react'

import { useNavigate, Link } from 'react-router-dom' 
import avatar from "../assets/profile.png"
import toast from "react-hot-toast"
import { Toaster } from 'react-hot-toast'
import {X,List} from "phosphor-react"
import { UserContext } from '../Context/ContextAPI';
import { removeToken } from '../helper/tokenHandler'
function Navbar()
{
    const {user}=useContext(UserContext)
    const navigate=useNavigate();
    const [openDrawer,setOpenDrawer]=useState(false)
    return(
    <>
     <Toaster position='top-center' reverseOrder />
    <nav className=" fixed top-0 bg-gradient-to-l from-[#111010] to-[#000000] via-[#181818] font-poppins  w-full max-w-screen py-3 px-6 text-white  ">
        <div className='flex float-right sm:float-right mr-3 sm:mr-1  gap-8  sm:gap-3 text-lg'>
            <a className='hover:underline hover:text-blue-200' href="/">Home</a>
            <a className='hover:underline hover:text-blue-200' href="/contact">Contact Us</a>
            <a className='hover:underline hover:text-blue-200' href="https://quicksign-doc.vercel.app/">Docs</a>
            <button onClick={() => {removeToken(); navigate("/")}} className='hover:underline hover:text-blue-200'>LogOut</button>
        </div>
   </nav>
    </>
    )
}
export default Navbar