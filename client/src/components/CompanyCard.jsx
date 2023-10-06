import React from 'react'
import avatar from "../assets/Logo.png"
import {ArrowUpRight,Link} from "phosphor-react"
const CompanyCard = ({item}) => {
  return (
    <div className="flex px-5 outline h-20 overflow-hidden justify-between items-center outline-gray-500 outline-2  bg-[#111010] p-2 shadow-md rounded-xl  ">
    <img src={item.profile} alt="" className="w-16 h-16 mx-auto rounded-full dark:bg-gray-500 aspect-square" />
    <div className=" text-center -mt-1">
      <div className="">
        <h2 className="text-xl font-semibold sm:text-2xl">{item.name}</h2>
        <p className="px-5 -mt-3 text-sm sm:text-base ">{item.type}</p>
      </div>
      <div className="flex justify-around -mt-3 align-center">
        <a rel="noopener noreferrer" href="#" aria-label="GitHub" className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400">
        <Link size={24} color="#ffffff" weight="fill" />
        </a>
       
    
        <a rel="noopener noreferrer" href={`mailto:${item.email}`} aria-label="Email" className="p-2 rounded-md text-white">
          <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-current">
            <path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"></path>
          </svg>
        </a>
      </div>
    </div>
  </div>

  )
}

export default CompanyCard