import React,{useState,useContext} from 'react'
import { AdminContext } from '../../Context/AdminContext'
import {X} from "phosphor-react"
import { Link } from 'react-router-dom'
const AdminNavbar = () => {
  const {user,currentPage,setCurrentPage}=useContext(AdminContext);
  const [openDrawer,setOpenDrawer]=useState(true)
  return (
    <>
    <nav className=" fixed top-0 z-50 font-poppins bg-gradient-to-l from-[#111010] to-[#000000] via-[#181818] w-full max-w-screen py-3 px-6 text-white  ">
      <div className='flex float-right sm:float-right mr-3 sm:mr-1  gap-8 sm:gap-3 text-lg'>
        <a className='hover:underline hover:text-blue-200' href="/">Home</a>
        <a className='hover:underline hover:text-blue-200' href="/docs">Docs</a>
        <button onClick={() => {setCurrentPage("pending")}} className='hover:underline hover:text-blue-200' >Pending</button>
        <button onClick={() => {setCurrentPage("organizations")}} className='hover:underline hover:text-blue-200' >All Organizations</button>
           
      </div>

    </nav>
</>
  )
}

export default AdminNavbar