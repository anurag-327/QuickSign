import React, { useContext,useState } from 'react'
import { UserContext } from '../Context/ContextAPI'
import { removeToken } from '../helper/tokenHandler';
import { useNavigate } from 'react-router-dom';
import Profile from './DashboardComponents/Profile';
import { Toaster } from "react-hot-toast"
import Slider from './Slider';
import AuthorizedApps from './DashboardComponents/AuthorizedApps';
import OAuthApps from './DashboardComponents/OAuthApps';
import AddNewOAuth from './DashboardComponents/AddNewOAuth';

const Dashboard = ({tab}) => {
    const navigate=useNavigate();
    const { user }=useContext(UserContext); 
   function renderSwitch() {
      switch(tab) {
        case 'authorizedapps':
          return <AuthorizedApps />;
        case 'applications':
          return <OAuthApps />;
        case 'addoauth':
          return <AddNewOAuth />;
        case 'profile':
          return <Profile/>;
        default:
          navigate("/dashboard?tab=authorizedapps")
      }
    }
  return (
    <div className='text-white sm:w-full border rounded-xl py-6 px-4 border-zinc-900 w-[100%-350px] overflow-hidden font-poppins flex flex-col items-center mx-2'>
       <Toaster position="top-center" reverseOrder />
        {
         renderSwitch()
        }
        
    </div>
  )
}

export default Dashboard