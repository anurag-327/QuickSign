import React, { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import LoginBanner from "../components/LoginBanner";
import LoginComponent from "../components/LoginComponent";
import Footer from "../components/Footer";
const Login = () => {
  return (
    <section className="flex sm:flex-col   gap-1 justify-center items-center">
      <Toaster position="top-center" reverseOrder />
      <LoginBanner/>
      <LoginComponent/>
      {/* <Footer /> */}
    </section>
  );
};

export default Login;
