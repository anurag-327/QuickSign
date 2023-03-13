import React, { useContext, useEffect, useState } from 'react'
import { CaretDown } from 'phosphor-react'
import avatar from "../../assets/logo.png"
import { AdminContext } from '../../Context/AdminContext'
import {Check,X} from "phosphor-react"
const Card = ({item}) => {
  const {admin,currentPage,setAdmin,pendingOrganizations,setPendingOrganizations,setOrganizations,organizations}=useContext(AdminContext)
  const [drawer,setDrawer]=useState(false)
  async function deleteOrganization(_id)
  {
    let options={
      method:"DELETE",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ _id: _id }),
    }
    const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/admin/deleteorganization`, options);
    const data = await response.json();
    if(response.status===200 )
    {
      setPendingOrganizations(pendingOrganizations.filter(item => item._id !=_id))
    }
  }
  async function verifyOrganization(_id)
  {
    let options={
      method:"PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ _id: _id }),
    }
    const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/admin/verifyorganization`, options);
    const data = await response.json();
    if(response.status===200 && data)
    {
      setOrganizations([...organizations,data])
      setPendingOrganizations(pendingOrganizations.filter(item => item._id !=_id))
    }
  }
  return (
    <div className='w-[90%] border-2 border-gray-500 bg-gray-50  sm:w-full md:w-full p-2 rounded-md'>
      <div className='flex justify-between items-center group'>
        <div className='flex gap-2 justify-center items-center'>
            <img className='w-[50px] h=[50px] rounded-full' src={item.profile || avatar} alt="logo" />
            <h2 className='text-2xl font-bold'>{item.name}</h2>
        </div>
        <CaretDown onClick={()=> setDrawer(!drawer)} size={34} color="#000000" className='cursor-pointer' weight="bold" />
      </div>
      {
        drawer&&(<div className='flex mt-5 flex-col gap-2'>
        <span><span className='font-bold text-lg'>Email:</span> {item.email}</span>
        <span><span className='font-bold text-lg'>Contact:</span> {item.contact}</span>
        <span><span className='font-bold text-lg'>Address:</span> {item.address}</span>
        <span><span className='font-bold text-lg'>Type:</span> {item.type}</span>
        <span><span className='font-bold text-lg'>Status:</span> {item.status}</span>
        {
          currentPage==="pending"&&(<div className='flex gap-10 w-full justify-around'><X onClick={()=> deleteOrganization(item._id)} className='cursor-pointer' size={30} color="#000000" weight="bold" /><Check onClick={()=> verifyOrganization(item._id)} className='cursor-pointer' size={30} color="#000000" weight="bold" /></div>)
        }
      </div>
      )
      }
      
      
    </div>
  )
}

export default Card