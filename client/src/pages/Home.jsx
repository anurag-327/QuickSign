import React,{useState,useEffect,useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import { getToken } from '../helper/tokenHandler';
import Navbar from '../components/Navbar';
import { UserContext } from '../Context/ContextAPI';
import Loader from '../components/Loader';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Dashboard from '../components/Dashboard';
import Slider from '../components/Slider';
import { useSearchParams } from 'react-router-dom';
const Home = () => {
  const navigate=useNavigate();
  const {user}=useContext(UserContext)
  const token=getToken();
  const [searchParams]=useSearchParams();
    let tab="applications";
    for (const entry of searchParams.entries()) {
      const [param, value] = entry;
      if(param=="tab")
        tab=value
    }
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
      <Footer />
    </>      
  )
}

export default Home