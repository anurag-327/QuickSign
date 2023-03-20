import React,{useState,useEffect,useContext,createContext} from 'react'
export const AdminContext=createContext();
import { BASE_URL } from '../base';
const AdminContextAPI = ({children}) => {
    const [admin,setAdmin]=useState();
    const [pendingOrganizations,setPendingOrganizations]=useState([]);
    const [organizations,setOrganizations]=useState([]);
    const [currentPage,setCurrentPage]=useState("pending");
    useEffect(()=>
    {
        ( async function()
                {
                    
                 let options={
                     method:"GET",
                 }
                 const response = await fetch(`${BASE_URL}/api/admin/getorganizations`, options);
                 const data = await response.json();
                 if(response.status===200 && data)
                 {
                     setAdmin(data)
                     setPendingOrganizations(data.filter((item) => item.status==="pending"))
                     setOrganizations(data.filter((item) => item.status==="verified"))
                     
                 }
                
             }())
    },[])
  return (
    <AdminContext.Provider value={{admin,currentPage,setCurrentPage,organizations,setOrganizations,pendingOrganizations,setPendingOrganizations}}>{children}</AdminContext.Provider>
  )
}

export default AdminContextAPI