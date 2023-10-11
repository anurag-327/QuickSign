import React from 'react'
import { Files, Key, PlusCircle, SignOut, SquaresFour, UserSquare } from 'phosphor-react'
import { removeToken } from '../helper/tokenHandler'
import { useNavigate } from 'react-router-dom'
const Slider = ({tab}) => {
    const navigate=useNavigate()
  return (
    <div className='w-full md:w-[350px] flex flex-col gap-4 text-white  items-center py-4 px-3 bg-#181818] '>
        <div>
           <h2  className='font-bold'>DASHBOARD</h2>
        </div>
        <div className='flex flex-col font-semibold  border-gray-500 py-4 gap-2 text-start w-full px-2'>
           <a className={`hover:bg-[#333] ${tab=="oauth"&&"bg-[#333]"} flex gap-2 rounded-md px-2 items-center py-2`} href="/dashboard?tab=applications"><SquaresFour size={25} color="#ffffff" weight="light" />OAuth Apps</a>
           <a className={`hover:bg-[#333] ${tab=="authorizedapps"&&"bg-[#333]"} flex gap-2 rounded-md px-2 items-center py-2`} href="/dashboard?tab=authorizedapps"><Key size={25} color="#ffffff" weight="light" />Authorized Apps</a>
           <a className={`hover:bg-[#333] ${tab=="addoauth"&&"bg-[#333]"} flex gap-2 rounded-md px-2 items-center py-2`} href="/dashboard?tab=addoauth"><PlusCircle size={25} color="#ffffff" weight="light" />Add New OAuth App</a>
           <a className={`hover:bg-[#333] ${tab=="profile"&&"bg-[#333]"} flex gap-2 rounded-md px-2 items-center py-2`} href="/dashboard?tab=profile"><UserSquare size={25} color="#ffffff" weight="light" />Profile</a>
           <a className={`hover:bg-[#333]  flex gap-2 rounded-md px-2 items-center py-2`} href="https://quicksign-doc.vercel.app/"><Files size={25} color="#ffffff" weight="light" />Developer Docs</a>
           <button onClick={() => {removeToken(); navigate("/")}} className=' hover:bg-[#333] outline-none flex gap-2 rounded-md px-2 items-center py-2 '><SignOut size={25} color="#ffffff" weight="light" />LogOut</button>
        </div>
    </div>
  )
}

export default Slider