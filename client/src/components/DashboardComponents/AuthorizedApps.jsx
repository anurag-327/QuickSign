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
    return ( 
    <>
      <div className='p-4 bg-zinc-900 border border-zinc-800 w-[95%] md:w-[250px] flex flex-col gap-2  rounded-lg w'>
      <div className=" flex gap-2 items-center  ">
         <img className="w-[26px] h-[26px] rounded-full" src={data.clientId.logo} alt="logo" />
         <h2 className="font-bold text-xl">{data.clientId.name}</h2>
      </div>
      <div>
        <p className="text-sm text-gray-400">{data.clientId.description}</p>
       <button onClick={removeAuthorization} className='text-white underline mt-2  float-right p-1 rounded-lg '>Remove Authorization</button>
      </div>
      </div>
   </>
   )
  }
  return (
    <div className='w-full p-3'>
     <h2 className=" mb-4 w-full text-2xl font-dbold">Authorized Apps</h2>
     <div className='flex justify-center mt-6 w-full'>
     {
        authorizations.length==0?(<span className='font-semibold text-center w-full mx-auto'>You have not authorized to any application</span>):(
          <div className='flex gap-2 w-full flex-wrap flex-grow-0'>
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