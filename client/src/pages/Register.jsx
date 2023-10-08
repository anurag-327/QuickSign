import React, { useEffect, useState } from "react";
import { useSearchParams } from 'react-router-dom';
import { Toaster } from "react-hot-toast";
import Header from "../components/Header";
import Footer from "../components/Footer";
import RegisterComponent from "../components/RegisterComponent";
const Register = () => {
  return (
    <section className="flex flex-col  justify-center items-center">
      <Toaster position="top-center" reverseOrder />
      <Header />
      <RegisterComponent />
      <Footer />
    </section>
  );
};

export default Register;
