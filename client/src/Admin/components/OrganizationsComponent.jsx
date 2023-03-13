import React, { useContext } from 'react'
import { AdminContext } from '../../Context/AdminContext'
import Card from './Card'

const OrganizationsComponent = () => {
    const {admin,organizations}=useContext(AdminContext)
    useContext(()=>
    {

    },[organizations])
  return (
    // <div className='text-black h-screen w-full mt-10 overflow-visible  bg-blue-300'>
        <div className='flex flex-col mt-10 sm:mt-20 gap-10 justify-center items-center'>
            {
                organizations.length>=1?( organizations.map(item => <Card key={item._id} item={item} />)):(<h1 className="font-bold">No organizations Registered</h1>)
            }
        </div>
       
    // </div>
  )
}

export default OrganizationsComponent