import React, { useContext } from 'react'
import { UserContext } from '../Context/ContextAPI'
import { removeToken } from '../helper/tokenHandler';
import { useNavigate } from 'react-router-dom';
const Dashboard = () => {
    const navigate=useNavigate();
    const { user }=useContext(UserContext);
  return (
    <div className='text-white w-full font-poppins flex flex-col items-center mx-2'>
        <div className='flex gap-4 items-center'>
            <h2 className='text-3xl font-semibold'>{user.name}</h2>
            <button onClick={() => {removeToken(); navigate("/")}} className=' border font-semibold rounded-md px-2 py-2 float-right '>LogOut</button>
        </div>
        <div className='sm:w-[60%] min-w-[600px] mx-auto'>
            <div className="px-8 py-6 mt-10 w-full bg-[#181818] overflow-auto  whitespace-pre-wrap  border border-gray-600 rounded-lg">
                 <div className="flex justify-between mb-2 w-full">
                    <h3 className="text-2xl text-gray-300 mb-2">Name</h3>
                 </div>
                 <input  className="w-full overflow-visible bg-[#333] outline-none py-3 px-3 rounded-md font-semibold text-lg  " value={user.name}/>
            </div>
        </div>
    </div>
  )
}

export default Dashboard