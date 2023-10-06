import { CodesandboxLogo, User } from "phosphor-react";
import React, { useContext } from "react";
import { UserContext } from "../Context/ContextAPI";
import avatar from "../assets/Logo.png";
import { CopyToClipboard } from "react-copy-to-clipboard";
import toast from "react-hot-toast";
import {CodepenLogo,Copy} from "phosphor-react"
import copy from "copy-to-clipboard";
import Footer from "./Footer";
const OrganizationDashboard = () => {
  const { user } = useContext(UserContext);
  const copyToClipboard = (data) => {
    copy(data);
    toast.success("Copied to clipboard !")
}

  function copykey() {}
  return (
    <div className="px-8 text-white overflow-hidden py-4 mt-20 w-[50%] md:w-[80%] sm:w-[95%] flex-grow-0 flex-1 justify-center items-start flex-col gap-3">

      <h2 className="text-6xl gap-4 flex sm:text-4xl mt-5 font-bold ">
        <CodesandboxLogo size={60} weight="fill"   /> Welcome {user.name}
      </h2>

      <div className="px-5 py-5 mt-8 bg-[#181818] border border-gray-600 rounded-lg">
        <p className="whitespace-pre-wrap text-lg font-semibold">
          If you encounter any issues or have questions about using QuickSign's
          OAuth system, please refer to our{" "}
          <a href="/docs" className="font-bold text-blue-300">
            Developer Docs
          </a>{" "}
          for detailed guidance.
        </p>
      </div>

      <div>
          <h2 className="text-3xl text-gray-300 flex  gap-4 text-start my-10 font-bold ">
            <CodesandboxLogo size={40} weight="fill"  />Your
            Application credentials
          </h2>
          <div className="flex gap-4 flex-col">
            <div className="px-8 py-6  bg-[#181818] overflow-auto  whitespace-pre-wrap  border border-gray-600 rounded-lg">
                 <div className="flex justify-between mb-2">
                    <h3 className="text-2xl text-gray-300 mb-2">API KEY</h3>
                    <Copy onClick={()=> copyToClipboard(user.API_KEY)} className=" cursor-pointer" size={32} weight="light" />
                 </div>
                 <input readOnly className="w-full overflow-visible bg-[#333] outline-none py-3 px-3 rounded-md font-semibold text-lg  " value={user.API_KEY}/>
            </div>
            <div className="px-8 py-6  bg-[#181818] overflow-auto  whitespace-pre-wrap  border border-gray-600 rounded-lg">
                 <div className="flex justify-between mb-2">
                    <h3 className="text-2xl text-gray-300 mb-2">Client ID</h3>
                    <Copy className=" cursor-pointer" size={32} weight="light" />
                 </div>
                 <input onClick={()=> copyToClipboard("N/A")} readOnly className="w-full overflow-visible bg-[#333] outline-none py-3 px-3 rounded-md font-semibold text-lg  " value="N/A"/>
            </div>
          </div>
       </div>
      
       <div>
          <h2 className="text-3xl text-gray-300 flex  gap-4 text-start my-10 font-bold ">
            <CodesandboxLogo size={40} weight="fill"  />General Credentials
          </h2>
          <div className="bg-[#181818] mb-6 flex flex-col gap-3 px-5 py-3 rounded-md border border-gray-600">
            <div className="flex gap-5 border border-gray-600 rounded-md px-3 py-3 items-center">
              <h4 className="text-2xl">Name :</h4>
              <p className="text-xl ">{user.name}</p>
            </div>
            <div className="flex gap-5 items-center border border-gray-600 rounded-md px-3 py-3">
              <h4 className="text-2xl">Email :</h4>
              <p className="text-xl ">{user.email}</p>
            </div>
            <div className="flex gap-5 items-center border border-gray-600 rounded-md px-3 py-3">
              <h4 className="text-2xl">Contact :</h4>
              <p className="text-xl ">{user.contact}</p>
            </div>
            <div className="flex gap-5 items-center border border-gray-600 rounded-md px-3 py-3">
              <h4 className="text-2xl">Type :</h4>
              <p className="text-xl ">Application</p>
            </div>
            <div className="flex gap-5 items-center border border-gray-600 rounded-md px-3 py-3">
              <h4 className="text-2xl">Staus :</h4>
              <p className="text-xl ">verified & active</p>
            </div>
            <div className="flex gap-5 items-center border border-gray-600 rounded-md px-3 py-3">
              <h4 className="text-2xl">URL :</h4>
              <p className="text-xl ">{user.link}</p>
            </div>
            
          </div>
       </div>
    </div>
  );
};

export default OrganizationDashboard;
