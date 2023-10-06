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
      {
        user!=undefined?(<div className='flex flex-col w-full justify-center items-center'><Navbar />{token.type==="user"&&<UserDashboard />}{token.type==="organization"&&<OrganizationDashboard />}<Footer /></div>):(<div className='w-[100%] h-[100vh] flex sm:flex-col justify-center items-center'><Loader/>
        <div className='ml-8 sm:ml-0 text-white sm:mt-4'>Setting up the dashboard...</div></div>)
      }
       
    </>
  )
}

export default Home