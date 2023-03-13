import React,{useContext} from 'react'
import Loader from '../components/Loader'
import { AdminContext } from '../Context/AdminContext'
import AdminNavbar from './components/AdminNavbar'
import AdminDashboard from './components/AdminDashboard'
const Admin = () => {
    const {admin}=useContext(AdminContext);
  return (
    <>    {
      admin!== undefined?(<div className='flex flex-col  items-end'><AdminNavbar/><AdminDashboard /></div>):( <div className='w-[100%] h-[100vh] flex sm:flex-col justify-center items-center'><Loader/> <div className='ml-8 sm:ml-0 sm:mt-4'>Setting up the dashboard...</div></div>)
    }
   </>

  )
}

export default Admin