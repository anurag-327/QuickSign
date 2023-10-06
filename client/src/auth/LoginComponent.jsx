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
const LoginComponent = ({ organization }) => {
  const navigate = useNavigate();
  const [toggleEye, setToggleEye] = useState(false);
  const [loginLoading, setLoginLoading] = useState(false);
  const [searchParams] = useSearchParams();
  let redirect_url,state;
  const token=getToken();
  for (const entry of searchParams.entries()) 
  {
    const [param, value] = entry;
    if (param === "redirect_url") redirect_url = value;
    if(param==="state") state=value;
  }
  async function authorise() 
  {
    
    setLoginLoading(true)
    try{
      if(token && token.type=="user")
      {
        const body={
          method:"post",
          headers:{
            "content-type":"application/json",
            "authorization":`Bearer ${token.token}`
          },
          body:JSON.stringify({
            organizationId:organization._id
          })
        }
        const response = await fetch(
          `${BASE_URL}/auth`,
          body
        );
        const data = await response.json();
        if(data.status==200 && data)
        {
           setLoginLoading(false);
           var s="";
           const user=data.user;
           for (var key in user) 
           {
              if (s != "") {
                s += "&";
              }
              s += (key + "=" + encodeURIComponent(user[key]));
           }
           redirect_url =redirect_url + `?status=true&token=${data.token}`+"&"+s;
           console.log(redirect_url);
           alert(redirect_url)
           toast.success("Authorisation successfull");
           window.location.href=redirect_url;
        }
        else
        {
          setLoginLoading(false);
          toast.error(`${data.message}`);
        }
      }
    }catch(err)
    {
      setLoginLoading(false);
      toast.error(`${err}`);
    }  
  }
  function abortAuth()
  {
    setLoginLoading(false)
    window.location.href=redirect_url;
  }
  function redirectToLogin()
  {
    let rd=`http://localhost:5173/auth?state=${state}&redirect_url=${redirect_url}`
    navigate(`/auth/login?type=user&redirect_url=${rd}`)
  }
    let flag=true;
    useEffect(() =>
    {
      if(flag==true)
      {
        const token=getToken();
       if(!token)
       {
             console.log(window.location.href)
             toast.error("No active sessions found")
             navigate(`/auth/login?type=user&redirect_url=${window.location.href}`)
          
        }
        else
        {
           if(token.type!="user")
           {
             navigate(`/auth/login?type=user&redirect_url=${window.location.href}`)
           }
       }
       flag=false;
      }
       
    },[])

  return (
    organization && (
      <div className="  w-[420px] bg-[#333] p-4 sm:w-full font-poppins sm:h-auto   border  border-gray-300  rounded-2xl  flex flex-col gap-4 sm:justify-start  justify-around items-center">
        <Toaster position="top-center" reverseOrder />
             
        <div className="flex justify-center gap-3 items-center">
          <CodesandboxLogo size={80} color="#ffffff" weight="light" />
          <hr className="w-[40px]" />
          <CheckCircle size={32} color="#bc9b80" weight="fill" />
          <hr className="w-[40px]" />
          <img
            className="w-[60px] ml-2 border rounded-full border-gray-500"
            src={organization.profile}
          />
        </div>
        <div className="text-center">
          <h2 className="text-2xl spa font-semibold">Authorise account...</h2>
          <h2 className="text-sm -mt-4">to continue to{" "}
            <a href={organization.link} rel="noopener noreferrer" target="blank" className="text-green-500 text-lg font-semibold">
              {organization.name}
            </a>{" "}
          </h2>
        </div>
        <div className="flex flex-col gap-2 max-w-[300px] w-full">
             <button  onClick={authorise} className={`rounded-md font-sans cursor-pointer border-none py-1 px-4 w-full font-semibold bg-green-500 text-white text-lg ${loginLoading && "bg-green-200 cursor-not-allowed "}`}>Authorise {organization.name}</button>
            <button disabled={loginLoading} onClick={abortAuth} className={`rounded-md cursor-pointer py-1 px-4 w-full font-sans font-semibold border-2 border-green-500  bg-white  ${loginLoading && "bg-gray-200 cursor-not-alloweds"} text-black text-lg`}>Cancel</button>
        </div>

        <div className="px-7 font-sans">
            <p className="text-sm  text-justify ">
                By Continuing this you provide your consent to share your
                details with {organization.name}.
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