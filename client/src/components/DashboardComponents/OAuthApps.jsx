import React, { useContext } from 'react'
import { UserContext } from '../../Context/ContextAPI'
import { PlusCircle } from 'phosphor-react'
const OAuthApps = () => {
  const {applications}=useContext(UserContext)
  return (
    <div className="px-6">
      <h2 className="text-start text-2xl font-bold"> OAuth Apps</h2>
      <div>
        {
          applications.length>0?(
          <div className="flex gap-4 mt-10 flex-wrap justify-start mx-auto">
             {
              applications.map((data,index)=> <a href={`/dashboard/application/${data._id}`} className=" w-[95%] mx-auto md:w-[49%] min-w-[400px] bg-zinc-900 border border-zinc-800  px-6 py-6 rounded-lg flex gap-4">
                      <div className=""><img className="w-[60px] h-[60px] rounded-full" src={data.logo} alt="logo" /></div>
                      <div>
                        <h2 className="font-bold text-xl">{data.name}</h2>
                        <p className="text-sm text-gray-500">{data.description}</p>
                      </div>
              </a>)
             }
          </div>):(
          <div className="w-full mt-10 text-center flex flex-col gap-4">
              <h2 className="text-lg font-semibold">No OAuth Apps Found</h2>
              <a className={` font-semibold bg-green-700 flex gap-2 rounded-md px-2 items-center py-2`} href="/dashboard?tab=addoauth"><PlusCircle size={25} color="#ffffff" weight="light" />Add New OAuth App</a>
          </div>)
        }
      </div>
    </div>
  )
}

export default OAuthApps