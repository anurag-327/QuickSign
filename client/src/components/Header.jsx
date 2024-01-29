import { List, X } from "phosphor-react";
import React, { useContext, useState } from "react";
import { removeToken } from "../helper/tokenHandler";
import { motion } from "framer-motion";
const Header = () => {
  const [drawer, setDrawer] = useState(false);
  function toggleDrawer() {
    document.querySelector("#Drawer").classList.toggle("sm:hidden");
    document.querySelector("#list").classList.toggle("block");
    document.querySelector("#X").classList.toggle("hidden");
  }
  return (
    <nav className=" fixed top-0 z-50 font-poppins dark:bg-gradient-to-l dark:from-[#111010] dark:to-[#000000] dark:via-black bg-gray-100 w-full max-w-screen py-3 px-6 dark:text-white  ">
      {/* <div className='flex float-right'>
         <List id="list" className='block sm:hidden' onClick={toggleDrawer} size={32} weight="light" color="#ffffff" />
         <X id="X" onClick={toggleDrawer} className=" hidden sm:hidden" size={32} weight="light" color="#ffffff"/>
      </div> */}
      <div
        id="Drawer"
        className="flex gap-4 flex-row float-right text-sm sm:text-lg top-0   "
      >
        <a className="hover:underline hover:text-blue-800  " href="/">
          Home
        </a>
        <a
          className="hover:underline hover:text-blue-800"
          href="https://quicksign-doc.vercel.app/"
        >
          Docs
        </a>
        <a
          className="hover:underline hover:text-blue-800 "
          target="blank"
          href="https://my-vault-pm.vercel.app/"
        >
          Try Now ↗
        </a>
      </div>
    </nav>
  );
};

export default Header;
