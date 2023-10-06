import { List ,X} from 'phosphor-react'
import React, { useContext, useState } from 'react'

import { motion } from "framer-motion"
const Header = () => {

  const [drawer,setDrawer]=useState(false);
  return (
    <div className='absolute bg-black top-0 left-0 text-white font-sans w-[99%] p-2'>
      {
        drawer?(<X onClick={() => setDrawer(!drawer)} className='right-8 top-3 cursor-pointer absolute' color="#ffffff" size={40} weight='light'/>)
        :(<List onClick={() => setDrawer(!drawer)} className='right-8 top-3 cursor-pointer absolute' color="#ffffff" size={40} weight='light'/>)
      }
       {
        drawer&&(
            <div className='flex fixed right-0  font-semibold w-[300px]  sm:h-screen h-screen z-10 font-sans top-14 bg-black outline outline-gray-600  sm:left-0  p-5 rounded-md  gap-4  flex-col '>  
                <a href="/documentation" className=' p-2 no-underline rounded-md bg-blue-600 text-lg text-white text-center'>Documentation</a>
                <a  href="/contact" className=' p-2 no-underline rounded-md bg-blue-600 text-lg text-white text-center '>Contact Us</a>
                
             </div>
        )
       } 
    </div>
  )
}

export default Header