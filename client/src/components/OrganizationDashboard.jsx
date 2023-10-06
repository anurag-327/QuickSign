import { User } from 'phosphor-react'
import React,{useContext} from 'react'
import { UserContext } from '../Context/ContextAPI'
import avatar from "../assets/Logo.png"
import {CopyToClipboard} from 'react-copy-to-clipboard';
import toast from 'react-hot-toast';
const OrganizationDashboard = () => {
  const {user}=useContext(UserContext)

  function copykey()
  {

  }
  return (
   
<div className="px-8 py-4 mt-20 outline rounded-md outline-gray-600 flex justify-center items-center flex-col">
    <img src={user.profile || avatar}  alt="logi"></img>
    <div className='w-full justify-center items-center flex flex-col gap-1'>
        <h1 className='font-poppins'>{user.name}</h1>
        <span className='font-poppins -mt-4'>{user.type}</span>
        <CopyToClipboard text={user.API_KEY}>
         
          <span onClick={() => toast.success("Copied to clipboard")} className='px-8 py-2 bg-blue-500 font-poppins mt-4 text-white rounded-md cursor-pointer'>Copy API KEY</span>
        </CopyToClipboard>
    </div>
</div>

  )
}

export default OrganizationDashboard