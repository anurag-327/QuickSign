import { List, X } from "phosphor-react";
import React, { useContext, useState } from "react";

const Header = () => {
  const [drawer, setDrawer] = useState(false);
  function toggleDrawer() {
    document.querySelector("#Drawer").classList.toggle("sm:hidden");
    document.querySelector("#list").classList.toggle("block");
    document.querySelector("#X").classList.toggle("hidden");
  }
  return (
    <nav className=" z-50 flex font-poppins bg-white w-full max-w-screen py-3 px-6 dark:text-white  ">
      {/* <div className='flex float-right'>
         <List id="list" className='block sm:hidden' onClick={toggleDrawer} size={32} weight="light" color="#ffffff" />
         <X id="X" onClick={toggleDrawer} className=" hidden sm:hidden" size={32} weight="light" color="#ffffff"/>
      </div> */}
      <div>
        <a className="font-semibold" href="/">
          QuickSign
        </a>
      </div>
      <div className="w-full flex justify-end">
        <div id="Drawer" className="flex gap-4 flex-row  text-sm sm:text-lg">
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
      </div>
    </nav>
  );
};

export default Header;
