import React,{useState,useEffect,useContext, createContext} from 'react'
export const  UserContext=createContext();
import { getToken } from '../helper/tokenHandler'
import { BASE_URL } from '../base';
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
                 const response = await fetch(`${BASE_URL}/api/getuser`, options);
                 const data = await response.json();
                 if(response.status===200 && data)
                 {
                     setUser(data)
                 }
                
             }())
            }

            else if(token.type==="organization")
            {
                // console.log("org")
                ( async function()
            {
                
             let options={
                 method:"GET",
                 headers:{
                     "authorization":`Bearer ${token.token}`
                 },
             }
             const response = await fetch(`${BASE_URL}/api/getorganization`, options);
             const data = await response.json();
             if(response.status===200 && data)
             {
                console.log(response)
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
