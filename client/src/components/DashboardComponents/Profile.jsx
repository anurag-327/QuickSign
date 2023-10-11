import React, { useContext,useState } from 'react'
import { UserContext } from '../../Context/ContextAPI'
import { BASE_URL } from '../../base';
import toast from "react-hot-toast"
import { getToken, removeToken } from '../../helper/tokenHandler';
import { useNavigate } from 'react-router-dom';
const Profile = () => {
    const naviagate=useNavigate()
    const { user,setUser }=useContext(UserContext);
    const [name,setName]=useState(user.name)
    const [profile,setProfile]=useState(user.profile)
    const [deleteMessage,setDeleteMessage]=useState("")
    const [oldPassword,setOldPassword]=useState("")
    const [newPassword,setNewPassword]=useState("")
    const [passwordError,setPasswordError]=useState()
    const [nameLoading,setNameLoading]=useState(false)
    const [passwordLoading,setPasswordLoading]=useState(false)
    const [deleteLoading,setDeleteLoading]=useState(false)
    const token=getToken();
    async function updateInfo(field,value)
    {
        setNameLoading(true)
        let x;
        switch(field)
        {
            case "name":
               x={
                field:"name",
                value:value
               }
               break;
            case "profile":
                x={
                    field:"profile",
                    value:value
                   }
                break;
            default :
               console.log("No such field exist")                   
        }
        let options={
            method:"PUT",
            headers:{
                "content-type": "application/json",
                "authorization":`Bearer ${token.token}`
            },
            body:JSON.stringify(x)
        }
        const res=await fetch(`${BASE_URL}/api/auth/update`,options);
        const data= await res.json();
        if(data.status==200)
        {
            setNameLoading(false)
            setName(data.user.name)
            setProfile(data.user.profile)
            setUser({...user,name:data.user.name,profile:data.user.profile})
            toast.success("Successfully updated!")
        }
        else
        {
            setNameLoading(true)
            console.log(data)
            toast.error("Error Updating field!")
        }
    }
    async function updatePassword(e)
    {
        setPasswordError()
        setPasswordLoading(true)
        let options={
            method:"PUT",
            headers:{
                "content-type": "application/json",
                "authorization":`Bearer ${token.token}`
            },
            body:JSON.stringify({
                oldPassword:oldPassword,newPassword:newPassword
            })
        }
        const res=await fetch(`${BASE_URL}/api/auth/resetpassword`,options);
        const data= await res.json();
        if(data.status==200)
        {
            setPasswordLoading(false)
            setOldPassword("")
            setNewPassword("")
            toast.success("Password Updated")
            document.getElementById("passForm").reset();
        }
        else
        {
            setPasswordLoading(false)
            console.log(data)
            setPasswordError(data.message)
            toast.error("Error Updating field!")
        }
    }
    async function deleteAccount()
    {
        setDeleteLoading(true)
        let options={
            method:"DELETE",
            headers:{
                "content-type": "application/json",
                "authorization":`Bearer ${token.token}`
            },
        }
        const res=await fetch(`${BASE_URL}/api/auth/delete/${user._id}`,options);
        const data= await res.json();
        if(data.status==200)
        {
            setDeleteLoading(false)
            removeToken();
            toast.success("Deleted Successfully")
            naviagate("/")
        }
        else
        {
            setDeleteLoading(false)
            toast.error("Error Deleting Account")
        }
    }
  return (
    <div className='md:w-[70%] md:min-w-[400px] my-10 w-[90%] flex flex-col gap-8 mx-auto'>
            <div>
                    <label htmlFor='profile'>
                         <img  src={profile}  className='w-[100px] object-cover border cursor-pointer border-gray-800 rounded-full m-auto h-auto' alt="profile"/>
                    </label>
                    <input  className='hidden' id="profile" name="profile" type="file"></input>
                    <div className='text-lg text-center mt-3 font-light'>
                        Update Profile
                    </div>
                </div>
            <div className="px-6 sm:px-8 py-6  w-full bg-zinc-900  overflow-auto  whitespace-pre-wrap  border border-zinc-900 rounded-lg">
                 <div className="flex justify-between  w-full">
                    <h3 className="text-2xl text-gray-300 mb-2">Name</h3>
                 </div>
                 <input type="text" autoCorrect="off" defaultValue={name} onChange={(e) => setName(e.target.value)}  className="w-full mt-2 overflow-visible bg-[#333] outline-none py-3 px-3 rounded-md font-semibold text-lg"/>
                 {
                   user.name!=name&&<button disabled={nameLoading} onClick={()=> updateInfo("name",name)} className={`${!nameLoading?"bg-green-600":"bg-green-300"} mt-4 rounded-md mr-4 float-right px-3 py-2`}>Update</button>
                 }
            </div>
            <div className="px-6 sm:px-8 py-6 w-full bg-zinc-900  overflow-auto  whitespace-pre-wrap  border border-zinc-900 rounded-lg">
                 <div className="flex justify-between  w-full">
                    <h3 className="text-2xl text-gray-300 mb-2">Email</h3>
                 </div>
                 <input type="text" autoCorrect="off" readOnly defaultValue={user.email}   className="w-full mt-2 overflow-visible bg-[#333] outline-none py-3 px-3 rounded-md font-semibold text-lg"/>
            </div>
            
            <form id="passForm"  onSubmit={(e)=> {e.preventDefault();
             updatePassword(e)}} method="post" className="px-6 sm:px-8 py-6 w-full bg-zinc-900  overflow-auto  whitespace-pre-wrap  border border-zinc-900 rounded-lg">
                 <div className="flex justify-between mb-4  w-full">
                    <h3 className="text-2xl text-gray-300 mb-2">Reset Password</h3>
                 </div>
                 <div>
                    <h3 className="text-xl text-gray-300 mb-2">Old Password</h3>
                    <input type="text" required autoCorrect="off" defaultValue={oldPassword} onChange={(e) => setOldPassword(e.target.value)}   className="w-full mt-2 overflow-visible bg-[#333] outline-none py-3 px-3 rounded-md font-semibold text-lg"/>
                 </div>
                 <div>
                    <h3 className="text-xl mt-2 text-gray-300 mb-2">New Password</h3>
                    <input type="text" required autoCorrect="off" defaultValue={newPassword} onChange={(e) => setNewPassword(e.target.value)}  className="w-full mt-2 overflow-visible bg-[#333] outline-none py-3 px-3 rounded-md font-semibold text-lg"/>
                 </div> 
                 {
                   (oldPassword!=newPassword)&&<button  className='bg-green-600 mt-4 outline-none rounded-md mr-4 float-right px-3 py-2'>Update</button>
                 }
                 {
                   <span className='text-red-400 mt-4 rounded-md mr-4 text-sm sm:text-xl float-right px-3 py-2'>{passwordError}</span>
                 }
            </form>
            <div className="px-6 sm:px-8 py-6 w-full bg-zinc-900  overflow-auto  whitespace-pre-wrap  border border-zinc-900 rounded-lg">
                 <div className="  w-full">
                    <h3 className="text-2xl text-red-800 font-bold mb-2">Delete Account</h3>
                    <p className='text-center my-4 whitespace-pre-wrap text-sm'>Note! This is a destructive action continuing will delete your profie</p>
                    <p>Type <span className='text-red-400 select-none my-2 font-bold'>QuickSign/Delete/{user.name}</span> to delete your account</p>
                    <input id="deleteBox" value={deleteMessage} type="text" autoCorrect="off" autoComplete='off' onChange={(e) => setDeleteMessage(e.target.value) }   className="w-full  mt-2 outline-none bg-zinc-700 py-3 px-3 rounded-md font-semibold text-lg"/>
                 </div>
                 {
                    deleteMessage===`QuickSign/Delete/${user.name}`&&<button onClick={deleteAccount}  className={`bg-red-500 mt-4 rounded-md mr-4 float-right px-3 py-2 ${deleteLoading?"bg-red-200":"bg-red-500"}`}>Delete my account</button>
                 }
            </div>
        </div>
  )
}

export default Profile