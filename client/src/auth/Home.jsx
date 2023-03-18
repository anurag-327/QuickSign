import React,{useState,useEffect} from 'react'
import LoginComponent from './LoginComponent'
import { useSearchParams } from 'react-router-dom'
import Footer from '../components/Footer'
import Loader from '../components/Loader'
const Home = () => {
    const [pageloading,setPageLoading]=useState(false);
    const [searchParams] = useSearchParams();
    const [organization,setOrganization]=useState();
    const [error,setError]=useState();
    let state;
    for (const entry of searchParams.entries()) {
      const [param, value] = entry;
      if(param==="state")
      state=value;
    }
    
    useEffect(() =>
    { 
    ( async function()
            {
                
             let options={
                 method:"GET",
                 headers:{
                     "authorization":`Bearer ${state}`
                 },
             }
             const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/getorganization`, options);
             const data = await response.json();
             if(response.status===200 && data)
             {
                 setOrganization(data);
                 setPageLoading(false)
             }
             else
             {
                 setPageLoading(false)
                setError(true)
             }
            
         }())
  },[])

  return (
    <div className='flex flex-col w-full h-screen justify-center items-center'>
        {
            pageloading?(<><Loader/> <div className=' mt-2'>Verify Organization...</div></>):(
                error?(<><p>Could Not verify Organizatiob</p></>):(<><LoginComponent organization={organization}  />
                </>)
            )
        }
       
    </div>
  )
}

export default Home