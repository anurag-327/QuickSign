import React, { useContext, useEffect, useState } from 'react'
import { CaretDown } from 'phosphor-react'
import avatar from "../../assets/Logo.png"
import { AdminContext } from '../../Context/AdminContext'
import {Check,X} from "phosphor-react"
import { BASE_URL } from '../../base'
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
    const response = await fetch(`${BASE_URL}/api/admin/deleteorganization`, options);
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
    const response = await fetch(`${BASE_URL}/api/admin/verifyorganization`, options);
    const data = await response.json();
    if(response.status===200 && data)
    {
      setOrganizations([...organizations,data])
      setPendingOrganizations(pendingOrganizations.filter(item => item._id !=_id))
    }
  }
  return (
    <div className='w-[50%] border-2 border-gray-500 bg-black text-white sm:w-full md:w-full p-2 rounded-md'>

      <div className='flex justify-between items-center group'>
        <div className='flex gap-2 justify-center items-center'>
            <img className='w-[30px] h-[30px] rounded-full' src={item.profile || avatar} alt="logo" />
            <h2 className='text-2xl font-bold'>{item.name}</h2>
        </div>
        <CaretDown onClick={()=> setDrawer(!drawer)} size={34} color="#ffffff" className='cursor-pointer' weight="bold" />
      </div>
      {
        drawer&&(<div className='flex mt-5 flex-col gap-2'>
        <span><span className='font-bold text-lg'>Email:</span> {item.email}</span>
        <span><span className='font-bold text-lg'>Contact:</span> {item.contact}</span>
        <span><span className='font-bold text-lg'>Address:</span> {item.address}</span>
        <span><span className='font-bold text-lg'>Type:</span> {item.type}</span>
        <span><span className='font-bold text-lg'>Status:</span> {item.status}</span>
        <span className='text-white '><span className='font-bold text-lg  '>Link:</span> {item.link}</span>
        {
          currentPage==="pending"&&(<div className='flex gap-10 w-full justify-around'><X onClick={()=> deleteOrganization(item._id)} className='cursor-pointer' size={30} color="#ffffff" weight="bold" /><Check onClick={()=> verifyOrganization(item._id)} className='cursor-pointer' size={30} color="#ffffff" weight="bold" /></div>)
        }
      </div>
      )
      }
      
      
    </div>
  )
}

export default Card