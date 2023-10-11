import React, { useEffect, useState } from "react";

import Footer from "../components/Footer";
import { getToken } from "../helper/tokenHandler";
import { useNavigate } from "react-router-dom";
import {Swap,CodesandboxLogo} from "phosphor-react"
import Header from "../components/Header";
const Login = () => {
  const navigate=useNavigate();
  useEffect(()=>
  {
    if(getToken())
    {
      navigate("/dashboard")
    }
  })
  return (
    <>
    <section className="flex gap-1 font-poppins w-[99vw] h-[98vh] overflow-hidden justify-center items-center">
      <Header />
      <div className="sm:w-[50%] w-[100%]   flex flex-col gap-10  justify-center items-center">
         <div className=" flex flex-col justify-center items-center">
             <CodesandboxLogo className="animate-pulse" size={100} color="#ffffff" weight="light" />
             <h2 className="text-3xl sm:text-2xl text-center text-white font-bold font-mono mt-3">Welcome to QuickSign</h2>
             <p className="mt-1 text-white font-poppins">An OAuth for hastle free signups</p>
         </div>
         <div className="flex flex-col gap-5 w-[100%] items-center">
            <a className="bg-violet-500 w-[80%] sm:w-[50%] no-underline hover:shadow-xl hover:scale-105 transform translate duration-300 text-center font-bold text-white p-3 rounded-lg" href="/auth/login">Sign In to Continue</a>
         </div>   
      </div>
    </section>
      <Footer />
    </>
  );
};

export default Login;
