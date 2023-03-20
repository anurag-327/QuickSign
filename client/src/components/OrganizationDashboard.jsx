import { User } from 'phosphor-react'
import React,{useContext} from 'react'
import { UserContext } from '../Context/ContextAPI'
import avatar from "../assets/Logo.png"
const OrganizationDashboard = () => {
  const {user}=useContext(UserContext)
  console.log(user)
  return (
    <div className="flex items-center mt-20 justify-center border-2 border-gray-400 rounded-md">

<div className="min-w-[220px]">
    <div className="bg-white shadow-xl rounded-lg py-3">
        <div className="photo-wrapper p-2">
            <img className="w-28 border-2 border-blue-600 object-cover h-28 rounded-full mx-auto" src={user.profile || avatar} alt={user.name}/>
        </div>
        <div className="p-2">
            <h3 className="text-center text-xl text-gray-900 font-medium leading-8">{user.name}</h3>
            <div className="text-center text-gray-400 text-xs font-semibold">
                <p>{user.type}</p>
            </div>
            {/* <table className="text-xs my-1">
                <tbody>
                <tr>
                    <td className="px-2 py-2 text-gray-500 font-semibold">Email</td>
                    <td className="px-2 py-2">{item.company.contact}</td>
                </tr>
            </tbody></table> */}

            <div className="text-center my-1">
                <a className="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium" target="_blank" href={user.link}>{user.link}</a>
            </div>
            <div>
                <span>API_KEY={user.API_KEY}</span>
            </div>

        </div>
    </div>
</div>

</div>
  )
}

export default OrganizationDashboard