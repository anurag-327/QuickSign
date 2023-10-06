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
    const [drawer,setDrawer]=useState(false);
  function toggleDrawer()
  {
     document.querySelector("#Drawer").classList.toggle("sm:hidden")
     document.querySelector("#list").classList.toggle("sm:hidden")
     document.querySelector("#X").classList.toggle("sm:hidden")
  }
  return (
    <nav className=" fixed top-0 z-50 font-poppins bg-gradient-to-l from-[#111010] to-[#000000] via-[#181818] w-full max-w-screen py-3 px-6 text-white  ">
      <div className='flex float-right'>
         <List id="list" className='hidden sm:block' onClick={toggleDrawer} size={32} weight="light" color="#ffffff" />
         <X id="X" onClick={toggleDrawer} className="md:hidden lg:hidden xl:hidden 2xl:hidden sm:hidden" size={32} weight="light" color="#ffffff"/>
      </div>
      <div id="Drawer" className='flex sm:text-center float-right sm:float-none mr-3 gap-8 sm:gap-5  sm:px-10 text-lg sm:w-[300px] sm:absolute top-0 sm:left-0 sm:h-[100vh] sm:border-r sm:bg-[#181818] sm:hidden sm:flex-col  '>
        <a className='hover:underline hover:text-blue-200 sm:mt-60' href="/">Home</a>
        <a className='hover:underline hover:text-blue-200' href="/contact">Contact Us</a>
        <a className='hover:underline hover:text-blue-200' href="https://quicksign-doc.vercel.app/">Docs</a>
        <button onClick={() => {removeToken(); navigate("/")}} className='hover:underline hover:text-blue-200'>LogOut</button>
        <a className='hover:underline hover:text-blue-200  px-2 py-1 border rounded-md ' href="https://my-vault-pm.vercel.app/">Try Now ↗</a>
      </div>
    </nav>
  )
}
export default Navbar