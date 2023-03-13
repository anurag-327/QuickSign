import React,{useState,useContext} from 'react'
import { AdminContext } from '../../Context/AdminContext'
import {X} from "phosphor-react"
import { Link } from 'react-router-dom'
const AdminNavbar = () => {
  const {user,currentPage,setCurrentPage}=useContext(AdminContext);
  const [openDrawer,setOpenDrawer]=useState(true)
  return (
    <>
    <nav className="mx-auto  justify-between fixed top-0 h-12  w-full max-w-screen-xl border-b-2 bg-blue-600  py-2 px-6 text-black shadow-md backdrop-blur-2xl backdrop-saturate-200 lg:px-8 lg:py-4">
    <div className='flex justify-between'>
        <div className='  flex justify-start items- gap-2'>
            {/* <img className='w-10 aspect-square rounded-full' src= alt="profile"/> */}
           
            {/* <div>
                <img className='w-[50px] h-[50px] border-2 rounded-full object-cover' src="" alt="profile"/>
            </div> */}
            {/* <div className='flex flex-col text-center justify-center items-center'>
               <span className='font-semibold text-lg'>Name</span>
            </div> */}
        </div>
        {
            openDrawer==true?(<X
                className="cursor-pointer "
                size={30}
                onClick={() => setOpenDrawer(!openDrawer)}
                color="#ffffff"
              />):( <button onClick={() => setOpenDrawer(!openDrawer)}>
           <svg  xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-justify text-white" viewBox="0 0 16 16"> <path fillRule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" fill="white"></path> </svg>
        </button>)
        }
    </div>
    <div>
    </div>  
</nav>
       {
         openDrawer&&
        <ul className='flex fixed left-0 font-semibold w-[300px]  sm:h-screen h-screen z-10 top-[3rem]  border-none border-2 shadow-md border-gray-300 bg-blue-600  sm:left-0  p-5   gap-4  flex-col '>  
                <button onClick={() => {setCurrentPage("pending")}} className='p-2 rounded-md bg-white '>Pending</button>
                <button onClick={() => {setCurrentPage("organizations")}} className='p-2 rounded-md bg-white '>Organizations</button>
                <Link  to="/contact" className=' p-2 rounded-md bg-white text-center '>Contact Us</Link>
                {/* <button onClick={() => {setCurrentPage("")}} className='p-2 rounded-md bg-white '>LogOut</button> */}
        </ul>
        }
</>
  )
}

export default AdminNavbar