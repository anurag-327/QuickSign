import React, { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import Logo from "../assets/Logo.png";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import toast from "react-hot-toast";
import { valiateLogin } from "../helper/validate";
import { Eye, ArrowRight } from "phosphor-react";
import { Link } from "react-router-dom";
import { BASE_URL } from "../base";
import Loader from "../components/Loader";
import {Swap,CodesandboxLogo,CheckCircle} from "phosphor-react"
import { getToken } from "../helper/tokenHandler";
const LoginComponent = ({ application,clientId,clientSecret }) => {
  const navigate = useNavigate();
  const [toggleEye, setToggleEye] = useState(false);
  const [loginLoading, setLoginLoading] = useState(false);
  const [searchParams] = useSearchParams();
  async function authorise() 
  {
    
    setLoginLoading(true)
    try{
      const token=getToken();
      if(token)
      {
          (async function()
          {
              let options={
                  method:"POST",
                  headers:{
                      "content-type": "application/json",
                      "authorization":`Bearer ${token.token}`
                  },
                  body:JSON.stringify({
                  clientId,clientSecret
                   })
              }
              const response = await fetch(`${BASE_URL}/api/OAuth/authorize`, options);
              const data = await response.json();
              if(data.status===201)
              {
                  setLoginLoading(false)
                  console.log(data)
                  toast.success("Authorisation successfull");
                  let redirect_url =application.callbackURL+ `?status=true&token=${data.token}`
                  console.log(redirect_url);
                  window.location.href=redirect_url;
              }
              else
              {
                  console.log("Failed to authorise")
                  console.log(data)
                  setLoginLoading(false)
              }  
          }())
        }
        else
        {
          console.log("Access token missing")
          setLoginLoading(false)
          console.log(window.location.href)
          toast.error("No active sessions found")
          flag=false
          navigate(`/auth/login?redirect_url=${window.location.href}`)
        }
    }catch(err)
    {
      setLoginLoading(false);
      toast.error(err);
    }  
  }
  function abortAuth()
  {
    setLoginLoading(false)
    if(redirect_url)
       window.location.href=redirect_url;
    else
       window.location.href=application.homepageURL
  }
  
    let flag=true;
    useEffect(() =>
    {
      
    },[])

  return (
    application && (
      <div className="  sm:w-[420px] bg-[#333] p-4 w-[95%] font-poppins sm:h-auto   border  border-gray-300  rounded-2xl  flex flex-col gap-4 sm:justify-start  justify-around items-center">
        <Toaster position="top-center" reverseOrder />
             
        <div className="flex justify-center gap-3 items-center">
          <CodesandboxLogo size={80} color="#ffffff" weight="light" />
          <hr className="w-[40px]" />
          <CheckCircle size={32} color="#bc9b80" weight="fill" />
          <hr className="w-[40px]" />
          <img
            className="w-[60px] ml-2 border rounded-full border-gray-500"
            src={"https://avatars.githubusercontent.com/u/98267696?v=4" }
          />
        </div>
        <div className="text-center">
          <h2 className="text-2xl spa font-semibold">Authorise account...</h2>
          <h2 className="text-sm">to continue to{" "}
            <a href={application.homepageURL} rel="noopener noreferrer" target="blank" className="text-green-500 text-lg font-semibold">
              {application.name}
            </a>{" "}
          </h2>
        </div>
        <div className="flex flex-col gap-2 max-w-[300px] w-full">
             <button  onClick={authorise} className={`rounded-md font-sans cursor-pointer border-none py-1 px-4 w-full font-semibold bg-green-500 text-white text-lg ${loginLoading && "bg-green-200 cursor-not-allowed "}`}>Authorise {application.name}</button>
            <button disabled={loginLoading} onClick={abortAuth} className={`rounded-md cursor-pointer py-1 px-4 w-full font-sans font-semibold border-2 border-green-500  bg-white  ${loginLoading && "bg-gray-200 cursor-not-alloweds"} text-black text-lg`}>Cancel</button>
        </div>

        <div className="px-7 font-sans">
            <p className="text-sm  text-justify ">
                By Continuing this you provide your consent to share your
                details with {application.name}.
                Before using this app, you can review Quicksign’s{" "}
                <a href="#" rel="noopener noreferrer" target="blank" className="text-blue-200 mr-2 font-semibold">privacy policy</a>
                and
                <a href="#" rel="noopener noreferrer" target="blank" className="text-blue-200 font-semibold ml-2">Terms of service</a>.
            </p>
        </div>
      </div>
    )
  );
};

export default LoginComponent;