import React,{useContext, useEffect, useState} from 'react'
import { AdminContext } from '../../Context/AdminContext'
import PendingComponent from "../components/PendingComponent"
import OrganizationsComponent from './OrganizationsComponent'
const AdminDashboard = () => {
    const {admin,currentPage,setCurrentPage}=useContext(AdminContext);
    useEffect(()=>
    {

    },[currentPage])
  return (
    <div className='w-[100%] bg-gradient-to-l from-[#111010] to-[#000000] via-[#181818] sm:w-full md:w-full p-10 sm:p-3 min-h-[75vh]'>
        {
            currentPage==="pending"&&<PendingComponent/>
        }
        {
        currentPage==="organizations"&&<OrganizationsComponent/>
        }
    </div>
  )
}

export default AdminDashboard