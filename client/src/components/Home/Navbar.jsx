import { ShieldStar } from "phosphor-react";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-evenly items-center mt-8 text-gray-400 ">
      <div className="">
        <a
          className=" font-black text-xs sm:text-base"
          href="https://quicksign-doc.vercel.app/"
        >
          View Docs
        </a>
      </div>
      <div className="font-bold font-sans text-2xl ml-10 sm:ml-0">
        <ShieldStar
          size={50}
          weight="fill"
          className="text-branddark2 hover:text-branddark mt-2 "
        />
      </div>
      <a
        href="/dashboard"
        className=" bg-blue-100 text-xs sm:text-base bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10  border py-0.5 px-4 border-gray-600 rounded-full"
      >
        Dashboard
      </a>
    </div>
  );
};

export default Navbar;
