import React,{useState} from 'react'
import { useForm } from "react-hook-form"
import { getToken } from '../../helper/tokenHandler'
import {toast} from"react-hot-toast"
import { BASE_URL } from '../../base'
const AddNewOAuth = () => {
  const [loading,setLoading]=useState(false)
  const token=getToken();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const onSubmit = async (data) => {
       setLoading(true)
       let options={
            method:"POST",
            headers:{
                "content-type": "application/json",
                "authorization":`Bearer ${token.token}`
            },
            body:JSON.stringify(data)
        }
        const res=await fetch(`${BASE_URL}/api/application/register`,options);
        const result= await res.json();
        if(result.status==201)
        {
          setLoading(false)
            toast.success("Successfully Added!")
            document.getElementById("Form").reset();
        }
        else
        {
            setLoading(false)
            console.log(result,data)
            toast.error("Error Adding Application!")
        }
  }

  return (
    <div className='w-full px-3 bg-inherit text-white'>
      <h2 className=" text-2xl font-bold">Add new OAuth App</h2>
      <form id="Form" onSubmit={handleSubmit(onSubmit)}className="flex flex-col  w-[100%] sm:w-[50%] sm:min-w-[400px] mx-auto  gap-4 mt-5 loginsection">
          <div className="relative mt-10 rounded-lg w-full">
            <h3 className='text-lg font-bold mb-2'>Name <span className='text-red-500 text-2xl'>*</span></h3>
            <input
                type="name"
             
                className="peer m-0 block h-[58px] w-full rounded border border-solid border-zinc-700 bg-zinc-900 outline-none px-3 py-4 text-base font-normal leading-tight text-white "
                id="name"
                {...register("name",{required:true})}
                placeholder="Ex-QuickSign"
                name="name" />
                 {errors.name && <span className='text-center text-red-400 w-full'>This field is required !</span>}
            </div>
            <div className="relative mt-5 rounded-lg w-full">
            <h3 className='text-lg font-bold mb-2'>Description</h3>
            <textarea
                type="text"
                rows={5}
                className="peer m-0 block w-full rounded border border-solid border-zinc-700 bg-zinc-900 outline-none px-3 py-4 text-base font-normal leading-tight text-white "
                id="description"
                placeholder="Description"
                {...register("description")}
                name="description" />
            </div>
            <div className="relative mt-5 rounded-lg w-full">
            <h3 className='text-lg font-bold mb-2'>Homepage URL <span className='text-red-500 text-2xl'>*</span></h3>
            <input
                type="text"
               
                className="peer m-0 block h-[58px] w-full rounded border border-solid border-zinc-700 bg-zinc-900 outline-none px-3 py-4 text-base font-normal leading-tight text-white "
                id="homepageURL"
                {...register("homepageURL",{required:true,pattern:/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi})}
                placeholder="https//www.quick-sign.com/"
                name="homepageURL" />
                {errors.homepageURL && <span className='text-center text-red-400 w-full'>Not a valid URL !</span>}
            </div>
            <div className="relative mt-5 rounded-lg w-full">
            <h3 className='text-lg font-bold mb-2'>Authorization Callback URL <span className='text-red-500 text-2xl'>*</span></h3>
            <input
                type="text"
              
                className="peer m-0 block h-[58px] w-full rounded border border-solid border-zinc-700 bg-zinc-900 outline-none px-3 py-4 text-base font-normal leading-tight text-white "
                id="callbackURL"
                {...register("callbackURL",{required:true,pattern:/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi})}
                placeholder="https//www.quick-sign.com/login"
                name="callbackURL" />
                {errors.callbackURL && <span className='text-center text-red-400 w-full'>Not a valid URL !</span>}
            </div>
            {/* <div className='mt-5 bg-zinc-900 border border-zinc-700 px-3 py-8'>
                    <label htmlFor='profile'>
                         <img  src={"https://github.com/anurag-327/QuickSign/assets/98267696/373a8c6a-6e65-4b02-9ba6-27cdf49ea4b8"}  className='w-[100px] object-cover border cursor-pointer border-gray-800 rounded-full m-auto h-auto' alt="profile"/>
                    </label>
                    <input   className='hidden' id="profile" name="profile" type="file"></input>
                    <div className='text-lg text-center mt-3 font-light'>
                       Drop your Organization Logo here
                    </div>
                </div> */}
            <div className='mt-4'>
                <button disabled={loading}  className={`w-[100%] block border-none px-2 py-3 cursor-pointer ${loading?"bg-green-300":"bg-green-600"} bg-blue-600 text-white text-lg font-semibold rounded-md`} type="Submit">Create</button>
            </div>
        </form>
    </div>
  )
}

export default AddNewOAuth