import { List ,X} from 'phosphor-react'
import React, { useContext, useState } from 'react'
import { removeToken } from '../helper/tokenHandler'
import { motion } from "framer-motion"
const Header = () => {

  const [drawer,setDrawer]=useState(false);
  return (
    <nav className=" fixed top-0 z-50 font-poppins bg-gradient-to-l from-[#111010] to-[#000000] via-[#181818] w-full max-w-screen py-3 px-6 text-white  ">
      <div className='flex float-right sm:float-right mr-3 sm:mr-1  gap-8 sm:gap-3 text-lg'>
        <a className='hover:underline hover:text-blue-200' href="/">Home</a>
        <a className='hover:underline hover:text-blue-200' href="/contact">Contact Us</a>
        <a className='hover:underline hover:text-blue-200' href="/docs">Docs</a>
      </div>
    </nav>
  )
}

export default Header