import React, { useEffect } from "react";
import Footer from "../components/Footer";
import { getToken } from "../helper/tokenHandler";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Home from "../components/Home/Home";
import Landing from "../components/Home/Landing";
import Features from "../components/Home/Features";
const Login = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (getToken()) {
      navigate("/dashboard");
    }
  });
  return (
    <>
      <section className="flex flex-col font-poppins w-[99vw] min-h-[90vh] overflow-hidden justify-center items-center">
        <Header />
        <Landing />
        {/* <Home /> */}
        {/* <Features /> */}
      </section>
      <Footer />
    </>
  );
};

export default Login;
