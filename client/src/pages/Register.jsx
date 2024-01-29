import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Header from "../components/Header";
import Footer from "../components/Footer";
import RegisterComponent from "../components/Signup/RegisterComponent";
const Register = () => {
  return (
    <section className="px-6 sm:px-0 ">
      <Toaster position="top-center" reverseOrder />
      <Header />
      <RegisterComponent />
      <Footer />
    </section>
  );
};

export default Register;
