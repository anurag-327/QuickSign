import React, { useEffect, useState } from "react";
import LoginBanner from "../components/LoginBanner";
import Logo from "../assets/Logo.png"
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
const Login = () => {
  return (
    <section className="flex sm:flex-col   gap-1 justify-center items-center">
      <LoginBanner/>
      <div className="w-[50%] sm:w-[100%] sm:h-[70vh] h-[100vh] flex flex-col gap-10  justify-center items-center">
         <div className=" flex flex-col justify-center items-center">
             <img className="sm:w-[150px]" src={Logo} alt="Logo"/>
         </div>
         <div className="flex flex-col gap-5 w-[100%] items-center">
            <Link className="bg-violet-500 sm:w-[80%] w-[40%] hover:shadow-xl hover:scale-105 transform translate duration-300 text-center font-bold text-white p-3 rounded-lg" to="/auth/login?type=user">Register as User</Link>
            <Link className="bg-green-500 sm:w-[80%] w-[40%] hover:shadow-xl hover:scale-105 transform translate duration-300 text-center font-bold text-white p-3 rounded-lg" to="/auth/login?type=organization">Register as Organization</Link>
         </div>
         <Footer />
      </div>
    </section>
  );
};

export default Login;
