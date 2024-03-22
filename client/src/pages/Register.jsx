import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import RegisterComponent from "../components/Signup/RegisterComponent";
import AuthSidebar from "../components/UI/AuthSidebar";
import Footer from "../components/UI/Footer";
import Header from "../components/UI/Header";
const Register = () => {
  return (
    <section>
      <Toaster position="top-center" reverseOrder />
      <Header />
      <div className="grid  min-w-[70vh] items-center bg-white grid-cols-1 md:grid-cols-2 px-6 md:px-0">
        <AuthSidebar />
        <RegisterComponent />
      </div>
      <Footer />
    </section>
  );
};

export default Register;
