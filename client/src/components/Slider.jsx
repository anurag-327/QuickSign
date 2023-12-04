import React from "react";
import {
  Files,
  Key,
  PlusCircle,
  SignOut,
  SquaresFour,
  TestTube,
  UserSquare,
} from "phosphor-react";
import { removeToken } from "../helper/tokenHandler";
import { useNavigate } from "react-router-dom";
const Slider = ({ tab }) => {
  const navigate = useNavigate();
  return (
    <div className="w-full md:w-[350px] flex flex-col gap-4 text-black items-center py-4 px-3 ">
      <div>
        <h2 className="font-bold ">DASHBOARD</h2>
      </div>
      <div className="flex flex-col border-gray-500 py-4 gap-2 text-black text-start w-full px-2">
        <a
          className={`hover:bg-gray-100 ${
            tab == "applications" && "bg-gray-300 border border-gray-400"
          } flex gap-2 rounded-md px-2 items-center py-2`}
          href="/dashboard?tab=applications"
        >
          <SquaresFour size={25} color="#000000" weight="light" />
          OAuth Apps
        </a>
        <a
          className={`hover:bg-gray-100 ${
            tab == "authorizedapps" && "bg-gray-300 border-gray-400"
          } flex gap-2 rounded-md px-2 items-center py-2`}
          href="/dashboard?tab=authorizedapps"
        >
          <Key size={25} color="#000000" weight="light" />
          Authorized Apps
        </a>
        <a
          className={`hover:bg-gray-100 ${
            tab == "addoauth" && "bg-gray-300 border-gray-400"
          } flex gap-2 rounded-md px-2 items-center py-2`}
          href="/dashboard?tab=addoauth"
        >
          <PlusCircle size={25} color="#000000" weight="light" />
          Add New OAuth App
        </a>
        <a
          className={`hover:bg-gray-100 ${
            tab == "profile" && "bg-gray-300 border-gray-400"
          } flex gap-2 rounded-md px-2 items-center py-2`}
          href="/dashboard?tab=profile"
        >
          <UserSquare size={25} color="#000000" weight="light" />
          Profile
        </a>
        <a
          className={`hover:bg-gray-100 border-gray-400 flex gap-2 rounded-md px-2 items-center py-2`}
          href="https://quicksign-doc.vercel.app/"
        >
          <Files size={25} color="#000000" weight="light" />
          Developer Docs
        </a>
        <button
          onClick={() => {
            removeToken();
            navigate("/");
          }}
          className=" hover:bg-gray-100 border-gray-400 outline-none flex gap-2 rounded-md px-2 items-center py-2 "
        >
          <SignOut size={25} color="#000000" weight="light" />
          LogOut
        </button>
        <a
          className={`hover:bg-gray-300  border-2 bg-blue-400 border-zinc-700 flex justify-center mt-0 sm:mt-10 gap-2 rounded-md px-2 items-center py-2`}
          target="blank"
          href="https://my-vault-pm.vercel.app/"
        >
          <TestTube size={25} color="#000000" weight="light" />
          Try Now{" "}
        </a>
      </div>
    </div>
  );
};

export default Slider;
