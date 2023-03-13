import React,{useState,useEffect,useContext, createContext} from 'react'
export const  UserContext=createContext();
import { getToken } from '../helper/tokenHandler'
export default function ContextAPI({children}) {
   
    const [user,setUser]=useState();
    useEffect(() =>
    {
        const token=getToken();
        if(token)
        {
            if(token.type=="user")
            {
                ( async function()
                {
                    
                 let options={
                     method:"GET",
                     headers:{
                         "authorization":`Bearer ${token.token}`
                     },
                 }
                 const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/getuser`, options);
                 const data = await response.json();
                 if(response.status===200 && data)
                 {
                     setUser(data)
                 }
                
             }())
            }

            else if(token.type==="organization")
            {
                ( async function()
            {
                
             let options={
                 method:"GET",
                 headers:{
                     "authorization":`Bearer ${token.token}`
                 },
             }
             const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/getorganization`, options);
             const data = await response.json();
             if(response.status===200 && data)
             {
                 setUser(data)
             }
            
         }())
            }
        }
       

    },[])
  return (
    <UserContext.Provider value={{user,setUser}} >{children}</UserContext.Provider>
  )
}
