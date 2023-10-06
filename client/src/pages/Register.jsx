import React, { useEffect, useState } from "react";
import { useSearchParams } from 'react-router-dom';
import { Toaster } from "react-hot-toast";
import LoginBanner from "../components/LoginBanner";
import RegisterOrganization from "../components/RegisterOrganization";
import RegisterUserComponent from "../components/RegisterUserComponent"
import Header from "../components/Header";
import Footer from "../components/Footer";
const Login = () => {
    const [searchParams] = useSearchParams(); 
    let type,redirect_url;
    for (const entry of searchParams.entries()) {
      const [param, value] = entry;
      if (param === "redirect_url") redirect_url = value;
      if (param === "type") type = value;
    }
  return (
    <section className="flex flex-col  justify-center items-center">
      <Toaster position="top-center" reverseOrder />
      <Header />
      
      {
        type==="user"&&<RegisterUserComponent/>
      }
      {
        type==="organization"&&<RegisterOrganization/>
      }
      <Footer />
    </section>
  );
};

export default Login;
