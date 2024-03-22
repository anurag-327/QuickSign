import React from "react";
import {
  ArrowSquareOut,
  Files,
  Key,
  PlusCircle,
  SignOut,
  SquaresFour,
  TestTube,
  User,
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
      <div className="flex flex-col w-full gap-2 px-2 py-4 text-black border-gray-500 text-start">
        <a
          className={`hover:bg-gray-100 ${
            tab == "applications" && "bg-gray-200"
          } flex gap-2 rounded-md px-2 items-center py-2`}
          href="/dashboard?tab=applications"
        >
          <SquaresFour size={25} color="#000000" weight="light" />
          OAuth Apps
        </a>
        <a
          className={`hover:bg-gray-200 ${
            tab == "authorizedapps" && "bg-gray-200 border-gray-400"
          } flex gap-2 rounded-md px-2 items-center py-2`}
          href="/dashboard?tab=authorizedapps"
        >
          <Key size={25} color="#000000" weight="light" />
          Authorized Apps
        </a>
        <a
          className={`hover:bg-gray-200 ${
            tab == "addoauth" && "bg-gray-200 border-gray-400"
          } flex gap-2 rounded-md px-2 items-center py-2`}
          href="/dashboard?tab=addoauth"
        >
          <PlusCircle size={25} color="#000000" weight="light" />
          Add New OAuth App
        </a>
        <a
          className={`hover:bg-gray-200 ${
            tab == "profile" && "bg-gray-200 border-gray-400"
          } flex gap-2 rounded-md px-2 items-center py-2`}
          href="/dashboard?tab=profile"
        >
          <User size={25} color="#000000" weight="light" />
          Profile
        </a>
        <a
          className={`hover:bg-gray-200 border-gray-400 flex gap-2 rounded-md px-2 items-center py-2`}
          href="https://quicksign-doc.vercel.app/"
          target="_blank"
        >
          <ArrowSquareOut size={25} color="#000000" weight="light" />
          Developer Docs
        </a>
        <button
          onClick={() => {
            removeToken();
            navigate("/");
          }}
          className="flex items-center gap-2 px-2 py-2 text-white bg-red-500 border-gray-400 rounded-md outline-none  hover:bg-red-500"
        >
          <SignOut size={25} color="#ffffff" weight="light" />
          LogOut
        </button>
        <a
          className={`hover:bg-gray-200  border bg-blue-200 border-zinc-700 flex justify-center mt-0 sm:mt-10 gap-2 rounded-md px-2 items-center py-2`}
          target="blank"
          href="https://quicksign-playground.vercel.app/"
        >
          <TestTube size={25} color="#000000" weight="light" />
          Try Now{" "}
        </a>
      </div>
    </div>
  );
};

export default Slider;
