import React, { useContext } from 'react'
import { AdminContext } from '../../Context/AdminContext'
import Card from './Card'

const OrganizationsComponent = () => {
    const {admin,organizations}=useContext(AdminContext)
    useContext(()=>
    {

    },[organizations])
  return (
    <div className='w-[60%] md:w-[70%] sm:w-[95%] mx-auto '>
 <div className="text-2xl w-full mx-auto text-center sm:mt-20 mt-10 font-bold text-white ">REGISTERED ORGANIZATIONS</div>
        <div className='flex flex-col mt-10 sm:mt-20 gap-10 justify-center items-center'>
          <table className="w-full rounded-lg text-gray-200 text-lg mt-5 mb-10  bg-[#181818] border-gray-500 border divide-y-2 divide-gray-500">
            <thead className="ltr:text-center rtl:text-center">
              <tr>
                  <th className="px-4 py-2 border bg-green-700 font-medium  whitespace-pre-wrap">
                    Application
                  </th>
                  <th className="px-4 py-2  border bg-green-700 sm:hidden font-medium  whitespace-pre-wrap">
                    Type
                  </th>
                  <th className="px-4 py-2  bg-green-700  border font-medium  whitespace-pre-wrap">
                    status
                  </th>
                  <th className="px-4 py-2 font-medium bg-green-700  border  whitespace-pre-wrap">
                    Link
                  </th>
              </tr>
             </thead>
             <tbody className="divide-y text-center divide-gray-500 ">
             {
            admin.map((data,index) => <tr>
            <td className="px-4 py-2 font-medium  border whitespace-pre-wrap">{data.name}</td>
            <td className="px-4 py-2 sm:hidden border whitespace-pre-wrap">{data.type}</td>
            <td className="px-4 py-2  border whitespace-pre-wrap">{data.status}</td>
            <td className="px-4 py-2 text-blue-400 underline border whitespace-pre-wrap"><a href={data.link}>Link</a></td>
          </tr>)
        }
    </tbody>
           
    </table>
            
              
        </div>
       
     </div>
  )
}

export default OrganizationsComponent