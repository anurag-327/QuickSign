import react from "react";
import quicksignbanner from "../assets/quicksignbanner.png"
import Logo from "../assets/Logo.png"
import Footer from "./Footer.jsx"
import { Link } from "react-router-dom";
const LoginBanner = () => {
  return (
    <div className="bg-yellow-300  sm:w-[100%] justify-evenly gap-10 flex flex-col items-center text-black relative w-[50%] h-[100vh]">
      
      <div className="text-5xl text-blue-600  mt-10 w-full text-center font-bold">QUICK SIGN</div>
      <div className="relative flex justify-evenly w-full item-center">
      <div className=" w-[200px] sm:w-[250px]  rotate-[-30deg]  sm:rotate-0   ">
           <img className=" rounded-2xl  " src={Logo} />
      </div>
      <div className="rounded-2xl w-[200px] sm:hidden    rotate-[30deg]   ">
           <img className=" rounded-2xl " src={Logo} />
      </div>
      </div>
    
      <div className=" bottom-8 text-center w-full">
        <h2 className="text-3xl font-bold">Solution to hassle free signup</h2>
        <h3 className="text-lg ">Have Single account to manage Signup across multiple platforms</h3>
        <div className="flex flex-wrap justify-center items-center mt-5">
        <Link className="underline" to="/">Home</Link>
        <Link className="underline ml-10" to="/contact">Contact Us</Link>
        <Link className="underline ml-10" to="/documentation">documentation</Link>
        <Link className="underline ml-10" to="/faq">FAQ</Link>
        </div>
         
      </div>
      
    </div>
  );
};
export default LoginBanner;
