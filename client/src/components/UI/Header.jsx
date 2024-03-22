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
    <nav className="z-50 flex w-full px-6 py-3 bg-white font-poppins max-w-screen dark:text-white">
      {/* <div className='flex float-right'>
         <List id="list" className='block sm:hidden' onClick={toggleDrawer} size={32} weight="light" color="#ffffff" />
         <X id="X" onClick={toggleDrawer} className="hidden sm:hidden" size={32} weight="light" color="#ffffff"/>
      </div> */}
      <div>
        <a className="font-semibold" href="/">
          QuickSign
        </a>
      </div>
      <div className="flex justify-end w-full">
        <div id="Drawer" className="flex flex-row gap-4 text-sm sm:text-base">
          <a
            className="hover:underline hover:text-blue-800"
            href="https://quicksign-doc.vercel.app/"
          >
            Docs
          </a>
          <a
            className="text-sm hover:underline hover:text-blue-800 sm:text-base"
            target="blank"
            href="https://quicksign-playground.vercel.app/"
          >
            Try Now ↗
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
