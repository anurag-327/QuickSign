import React,{useState,useContext} from 'react'
// import { UserContext } from '../Context/ContextApi.jsx'
import { removeToken } from '../helper/tokenHandler'
import { useNavigate, Link } from 'react-router-dom' 
import avatar from "../assets/profile.png"
import toast from "react-hot-toast"
import { Toaster } from 'react-hot-toast'
import {X,List} from "phosphor-react"
import { UserContext } from '../Context/ContextAPI';
function Navbar()
{
    const {user}=useContext(UserContext)
    const navigate=useNavigate();
    const [openDrawer,setOpenDrawer]=useState(false)
    return(
    <>
     <Toaster position='top-center' reverseOrder />
    <nav className="mx-auto  justify-between fixed top-0 font-poppins  w-full max-w-screen-xl  border border-white/80 bg-gray-800 py-2 px-6 text-black shadow-md  lg:px-8 lg:py-4">
        <div className='flex justify-between'>
            <div className='  flex justify-center w-full items- gap-2'>
                <div>
                    <img className='w-[40px] h-[40px] border-2 rounded-full object-cover' src={user.profile ||avatar} alt="profile"/>
                </div>
                <div className='flex flex-col text-center justify-center items-center'>
                   <span className='font-semibold text-white text-lg'>{user.name}</span>
                   {/* <span className='text-sm  font-light overflow-hidden'>Email</span> */}
                </div>
            </div>
            <button className='bg-gray-800 cursor-pointer outline-none border-none'>
            {
                openDrawer==true?(
                <X onClick={()=> setOpenDrawer(!openDrawer)} size={32} color="#ffffff" weight="light" />)
            :( 
                <List onClick={()=> setOpenDrawer(!openDrawer)} size={32} color="#ffffff" weight="light" />
            )
            }
            </button>
           
           

        </div>        
   </nav>

   {
         openDrawer&&
        <ul className='flex fixed right-0  font-semibold w-[300px]  sm:h-screen h-screen z-10 font-sans top-[4.5rem] bg-white border-2 shadow-md border-gray-300  sm:left-0  p-5 rounded-md  gap-4  flex-col '>  
                <a href="/documentation" className=' p-2 no-underline rounded-md bg-blue-600 text-lg text-white text-center'>Documentation</a>
                <a  href="/contact" className=' p-2 no-underline rounded-md bg-blue-600 text-lg text-white text-center '>Contact Us</a>
                {/* <Link  to="/contact" className=' p-2 rounded-md bg-blue-600 text-white '>Contact Us</Link> */}
                {/* <Link  to="/contact" className=' p-2 rounded-md bg-blue-600 text-white '>Contact Us</Link> */}
                <button onClick={() => {removeToken(); navigate("/")}} className=' p-1  text-lg rounded-md outline-none border-2 border-green-600 '>LogOut</button>
        </ul>
        }
    </>
    )
}
export default Navbar