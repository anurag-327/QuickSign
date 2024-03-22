import React, { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import LoginComponent from "../components/Login/LoginComponent";
import AuthSidebar from "../components/UI/AuthSidebar";
import Footer from "../components/UI/Footer";
import Header from "../components/UI/Header";
const Login = () => {
  return (
    <section>
      <Toaster position="top-right" reverseOrder />
      <Header />
      <div className="grid px-6 md:px-0 min-w-[70vh] items-center bg-white grid-cols-1 md:grid-cols-2 ">
        <AuthSidebar />
        <LoginComponent />
      </div>
      <Footer />
    </section>
  );
};

export default Login;
