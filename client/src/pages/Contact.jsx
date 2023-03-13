import React, { useEffect, useState } from "react";
import LoginBanner from "../components/LoginBanner";
import Logo from "../assets/Logo.png"
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
const Login = () => {
  return (
    <section className="flex sm:flex-col   gap-1 justify-center items-center">
      <LoginBanner/>
      <div className="w-[50%]  sm:w-[100%] sm:h-[70vh] h-[100vh] flex flex-col gap-2  justify-center items-center">
         <div className=" flex flex-col justify-center items-center">
             <img className=" w-[150px]" src={Logo} alt="Logo"/>
         </div>
         <div className="mt-10">
            <a className="font-bold text-blue-500" href="mailto:anuragsrivastav0027@gmail.com">Email: anuragsrivastav0027@gmail.com</a>
         </div>
         <div className="px-4 py-2 bg-blue-600 text-white rounded-md">
            <h2 className="  font-bold">Address: KNIT Sultanpur, Sultanpur, Uttar Pradesh</h2>
         </div>
         <Footer />
      </div>
    </section>
  );
};

export default Login;
