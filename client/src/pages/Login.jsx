import React, { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";

import LoginComponent from "../components/Login/LoginComponent";
import Footer from "../components/Footer";
import Header from "../components/Header";
const Login = () => {
  return (
    <section className="px-6 sm:px-0 ">
      <Toaster position="top-center" reverseOrder />
      <Header />
      <LoginComponent />
      <Footer />
    </section>
  );
};

export default Login;
