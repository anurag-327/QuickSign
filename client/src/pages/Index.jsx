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
    <section className="flex gap-1 font-poppins w-[99vw] min-h-[99vh] overflow-hidden justify-center items-center">
      <Header />
      <div className="sm:w-[50%] w-[95%]   flex flex-col gap-10  justify-center items-center">
         <div className=" flex flex-col justify-center items-center">
             <CodesandboxLogo className="" size={100} color="#ffffff" weight="light" />
             <h2 className="text-2xl sm:text-3xl text-center text-white font-bold  mt-3"> QuickSign</h2>
             <p className="mt-1 text-white text-center font-poppins">An OAuth Provider for hastle free signups</p>
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
