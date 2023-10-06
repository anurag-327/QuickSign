import React from 'react'

const AccessTable = ({organizations}) => {
   
  return (
    <table className="min-w-full rounded-lg text-gray-200 text-lg mt-5 mb-10  bg-[#181818] border-gray-500 border divide-y-2 divide-gray-500">
    <thead className="ltr:text-left rtl:text-right">
      <tr>
        
        <th className="px-4 py-2 font-medium border bg-[#333]  whitespace-nowrap">
          Application
        </th>
        <th className="px-4 py-2 sm:hidden border bg-[#333] font-medium  whitespace-nowrap">
          Type
        </th>
        <th className="px-4 py-2 sm:hidden border bg-[#333] font-medium  whitespace-nowrap">
          Link
        </th>
        <th className="px-4 py-2 border bg-[#333] font-medium  whitespace-nowrap">
          status
        </th>
      </tr>
    </thead>

    <tbody className="divide-y divide-gray-500 ">
    {
            organizations.map((data,index) => <tr>
            
            <td className="px-4 py-2 font-medium  border  whitespace-nowrap">
              {data.name}
            </td>
            <td className="px-4 py-2 sm:hidden border  whitespace-nowrap">{data.type}</td>
            <td className="px-4 py-2 sm:hidden border  whitespace-nowrap">{data.status}</td>
            <td className="px-4 py-2 border  whitespace-pre-wrap">{data.link}</td>
          </tr>)
        }
    </tbody>
  </table>
  )
}

export default AccessTable