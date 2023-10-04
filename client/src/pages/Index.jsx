import React, { useEffect, useState } from "react";
import LoginBanner from "../components/LoginBanner";
import Logo from "../assets/Logo.png"
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { getToken } from "../helper/tokenHandler";
import { useNavigate } from "react-router-dom";
import {Swap,CodesandboxLogo} from "phosphor-react"
const Login = () => {
  const navigate=useNavigate();
  useEffect(()=>
  {
    if(getToken())
    {
      navigate("/home")
    }
  })
  return (
    <section className="flex gap-1 w-[99vw] h-[98vh] overflow-hidden justify-center items-center">
      <LoginBanner/>
      <div className="w-[50%] sm:w-[100%]   flex flex-col gap-10  justify-center items-center">
         <div className=" flex flex-col justify-center items-center">
             <CodesandboxLogo size={100} color="#ffffff" weight="light" />
             <h2 className="text-3xl font-bold font-mono mt-2">Welcome to QuickSign</h2>
         </div>
         <div className="flex flex-col gap-5 w-[100%] items-center">
            <a className="bg-violet-500 sm:w-[80%] w-[40%] no-underline hover:shadow-xl hover:scale-105 transform translate duration-300 text-center font-bold text-white p-3 rounded-lg" href="/auth/login?type=user">Register as User</a>
            <a className="bg-green-500 sm:w-[80%] w-[40%] no-underline hover:shadow-xl hover:scale-105 transform translate duration-300 text-center font-bold text-white p-3 rounded-lg" href="/auth/login?type=organization">Register as Organization</a>
         </div>
      </div>
         <Footer />
    </section>
  );
};

export default Login;
