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
    <div className='w-[calc(100%-300px)] bg-blue-100 sm:w-full md:w-full p-10 sm:p-3 h-screen'>
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