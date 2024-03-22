import React, { useEffect, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getToken } from "../helper/tokenHandler";
import { UserContext } from "../Context/ContextAPI";
import Loader from "../components/Loader";
import Footer from "../components/UI/Footer";
import Dashboard from "../components/Dashboard";
import Slider from "../components/Slider";
import { useSearchParams } from "react-router-dom";
import Header from "../components/UI/Header";
const Home = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  let tab = queryParams.get("tab") || "applications";
  let flag = true;
  useEffect(() => {
    if (!getToken()) {
      if (flag == true) {
        // to avoid rendering twice
        console.log(window.location.href);
        navigate(`/auth/login?redirect_url=${window.location.href}`);
        flag = false;
      }
    }
  });
  return (
    <>
      {user != undefined ? (
        <>
          <Header />
          <section className=" w-[95%] md:w-[80%] mx-auto gap-5   py-4 md:flex-row flex flex-col">
            <Slider tab={tab} />
            <Dashboard tab={tab} />
          </section>
          <Footer />
        </>
      ) : (
        <div className="w-[100%] h-[100vh] flex sm:flex-col justify-center items-center">
          <Loader />
          <div className="ml-8 sm:ml-0  sm:mt-4">
            Setting up the dashboard...
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
