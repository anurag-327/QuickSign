import React,{useState,useContext} from 'react'
// import { UserContext } from '../Context/ContextApi.jsx'
import { removeToken } from '../helper/tokenHandler'
import { useNavigate, Link } from 'react-router-dom' 
import avatar from "../assets/profile.png"
import toast from "react-hot-toast"
import { Toaster } from 'react-hot-toast'
import {X} from "phosphor-react"
import { UserContext } from '../Context/ContextAPI';
function Navbar()
{
    const {user}=useContext(UserContext)
    const navigate=useNavigate();
    const [openDrawer,setOpenDrawer]=useState(false)
    return(
    <>
     <Toaster position='top-center' reverseOrder />
    <nav className="mx-auto  justify-between fixed top-0   w-full max-w-screen-xl  border border-white/80 bg-white bg-opacity-80 py-2 px-6 text-black shadow-md backdrop-blur-2xl backdrop-saturate-200 lg:px-8 lg:py-4">
        <div className='flex justify-between'>
            <div className='  flex justify-start items- gap-2'>
                {/* <img className='w-10 aspect-square rounded-full' src= alt="profile"/> */}
               
                <div>
                    <img className='w-[50px] h-[50px] border-2 rounded-full object-cover' src={user.profile ||avatar} alt="profile"/>
                </div>
                <div className='flex flex-col text-center justify-center items-center'>
                   <span className='font-semibold text-lg'>{user.name}</span>
                   {/* <span className='text-sm  font-light overflow-hidden'>Email</span> */}
                </div>
            </div>
            {
                openDrawer==true?(<X
                    className="cursor-pointer mt-1 "
                    size={30}
                    onClick={() => setOpenDrawer(!openDrawer)}
                    color="#000000"
                  />):( <button onClick={() => setOpenDrawer(!openDrawer)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                </svg>
            </button>)
            }
           

        </div>

       
        <div>

        </div>
        
   </nav>

   {
         openDrawer&&
        <ul className='flex fixed right-0 font-semibold w-[300px]  sm:h-screen h-screen z-10 top-[4.5rem] bg-white border-2 shadow-md border-gray-300  sm:left-0  p-5 rounded-md  gap-4  flex-col '>  
                <Link  to="/documentation" className=' p-2 rounded-md bg-blue-600 text-white '>Documentation</Link>
                <Link  to="/contact" className=' p-2 rounded-md bg-blue-600 text-white '>Contact Us</Link>
                {/* <Link  to="/contact" className=' p-2 rounded-md bg-blue-600 text-white '>Contact Us</Link> */}
                {/* <Link  to="/contact" className=' p-2 rounded-md bg-blue-600 text-white '>Contact Us</Link> */}
                <button onClick={() => {removeToken(); navigate("/")}} className=' p-1 text-blue-600 underline '>LogOut</button>
        </ul>
        }
    </>
    )
}
export default Navbar