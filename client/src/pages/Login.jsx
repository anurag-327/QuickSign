import React, { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import LoginBanner from "../components/LoginBanner";
import LoginComponent from "../components/LoginComponent";
import Footer from "../components/Footer";
import Header from "../components/Header";
const Login = () => {
  return (
    <section className="px-6 sm:px-0 justify-center items-center">
      <Toaster position="top-center" reverseOrder />
      <Header />  
      <LoginComponent/>
      <Footer />
    </section>
  );
};

export default Login;
