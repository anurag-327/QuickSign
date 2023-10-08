import React,{useState,useEffect,useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import { getToken } from '../helper/tokenHandler';
import Navbar from '../components/Navbar';
import { UserContext } from '../Context/ContextAPI';
import Loader from '../components/Loader';
import UserDashboard from '../components/UserDashboard';
import OrganizationDashboard from '../components/OrganizationDashboard';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Dashboard from '../components/Dashboard';
const Home = () => {
  const navigate=useNavigate();
  const {user}=useContext(UserContext)
  const token=getToken();
  useEffect(()=>
  {
    if(!getToken())
    {
      navigate("/")
    }
  })
  return (
    <>
      <Navbar />
      {
        user!=undefined?(<section className='min-h-screen w-[100vw] mt-28 sm:mt-20'>
        <Dashboard />
      </section>):(<div className='w-[100%] h-[100vh] flex sm:flex-col justify-center items-center'><Loader/>
        <div className='ml-8 sm:ml-0 text-white sm:mt-4'>Setting up the dashboard...</div></div>)
      } 
      <Footer />
    </>      
  )
}

export default Home