import React from 'react'
import avatar from "../assets/logo.png"
const CompanyCard = ({item}) => {
  return (
   
<div className="flex items-center justify-center border-2 border-gray-400 rounded-md">

<div className="min-w-[220px]">
    <div className="bg-white shadow-xl rounded-lg py-3">
        <div className="photo-wrapper p-2">
            <img className="w-28 border-2 border-blue-600 object-cover h-28 rounded-full mx-auto" src={avatar || item.company.profile} alt={item.company.name}/>
        </div>
        <div className="p-2">
            <h3 className="text-center text-xl text-gray-900 font-medium leading-8">{item.company.name}</h3>
            <div className="text-center text-gray-400 text-xs font-semibold">
                <p>{item.company.type}</p>
            </div>
            {/* <table className="text-xs my-1">
                <tbody>
                <tr>
                    <td className="px-2 py-2 text-gray-500 font-semibold">Email</td>
                    <td className="px-2 py-2">{item.company.contact}</td>
                </tr>
            </tbody></table> */}

            <div className="text-center my-1">
                <a className="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium" target="_blank" href={item.company.link}>{item.company.link}</a>
            </div>

        </div>
    </div>
</div>

</div>
  )
}

export default CompanyCard