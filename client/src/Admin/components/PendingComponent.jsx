import React, { useContext } from 'react'
import { AdminContext } from '../../Context/AdminContext';
import Card from './Card';

const pendingComponent = () => {
    const {admin,pendingOrganizations}=useContext(AdminContext)
  return (
    <div className='text-black mt-10 sm:mt-20 w-full flex flex-col gap-5 items-center js'>
      {
        pendingOrganizations.length>=1?(pendingOrganizations.map(item => <Card key={item._id} item={item} />)):(<h1 className="font-bold">No pending organization</h1>)
      }
      
    </div>
  )
}

export default pendingComponent