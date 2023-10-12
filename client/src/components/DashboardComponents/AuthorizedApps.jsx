import React, { useContext } from 'react'
import { UserContext } from '../../Context/ContextAPI'
import { getToken } from '../../helper/tokenHandler'
import { BASE_URL } from '../../base'
import toast from 'react-hot-toast'
const AuthorizedApps = () => {
  const {authorizations,setAuthorizations}=useContext(UserContext)
  const token=getToken();
  function Card({data})
  {
    async function removeAuthorization()
    {
      let options={
        method:"Delete",
        headers:{
            "content-type": "application/json",
            "authorization":`Bearer ${token.token}`
        },
        body:JSON.stringify({
          clientId:data.clientId._id
        })
    }
    const res=await fetch(`${BASE_URL}/api/oauth/removeauthorization`,options);
    const result= await res.json();
    if(result.status==200)
    {
        toast.success("Successfully Removed!")
        setAuthorizations(authorizations.filter(item => item.clientId === data.clientId._id))
    }
    else
    {
        
        console.log(result,data)
        toast.error("Error removing Authorization!")
    }
    }
    return ( <div className='flex w-[80%] sm:min-w-[300px] mx-auto sm:w-[50%] gap-4 justify-around items-center bg-zinc-800 border border-zinc-700 px-3 py-3 rounded-md'>
      <h3 className='text-lg font-semibold'>{data.clientId.name}</h3>
      <button onClick={removeAuthorization} className='bg-gray-600 rounded-md px-2  py-2'>Remove Authorization</button>
   </div>)
  }
  return (
    <div className='w-full p-3'>
     <h2 className=" mb-4 w-full text-2xl font-dbold">Authorized Apps</h2>
     <div className='flex justify-center mt-6 w-full'>
     {
        authorizations.length==0?(<span className='font-semibold text-center w-full mx-auto'>You have not authorized to any application</span>):(
          <div className='flex flex-col gap-2 w-full flex-wrap flex-grow-0'>
            {
              authorizations.map((data,index) => <Card key={data._id} data={data} />)
            }
             
          </div>
        )
     }
     </div>
     
    </div>
  )
}

export default AuthorizedApps