import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import Loader from '../components/Loader';

const Application = () => {
  const navigate=useNavigate();
  
  
  useEffect(()=>
  {
    if(!getToken())
    {
      navigate("/")
    }
  })
  return (
   <>
       {
        user!=undefined?(<section className=' w-[95%] md:w-[80%] mx-auto gap-5  py-10 md:flex-row flex flex-col'>
          <Slider tab={tab} />
          <Dashboard tab={tab} />
      </section>):(<div className='w-[100%] h-[100vh] flex sm:flex-col justify-center items-center'><Loader/>
        <div className='ml-8 sm:ml-0 text-white sm:mt-4'>Setting up the dashboard...</div></div>)
      } 
   </>
  )
}

export default Application