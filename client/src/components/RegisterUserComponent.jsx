import React, { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { useSearchParams } from "react-router-dom";
import Logo from "../assets/Logo.png";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { valiateLogin, validateSignup,validateUserSignup } from "../helper/validate";
import { setToBase64 } from "../helper/profileImageHandler";
import { getToken, setToken } from "../helper/tokenHandler";
import { Eye } from "phosphor-react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Loader from "./Loader";
import avatar from "../assets/companylogo.webp";
import { BASE_URL } from "../base";
import {Swap,CodesandboxLogo} from "phosphor-react"
const RegisterUserComponent = () => {

  const navigate = useNavigate();
  const [toggleEye, setToggleEye] = useState(false);
  const [loading, setLoading] = useState(false);
  const [profile,setProfile]=useState("")
  // getting query parameter
  const [searchParams] = useSearchParams();
  let type,redirect_url;
  let flag=true;
  for (const entry of searchParams.entries()) {
    const [param, value] = entry;
    if(param=="redirect_url")
    {
      if(flag==true)
    {
        redirect_url=value;
        flag=false
    }
    else
    {
       redirect_url+="&redirect_url="+value
    } 
    } 
    if (param === "type") type = value;
  }
  async function uploadprofile(e)
  {
      const base64=await setToBase64(e.target.files[0])
      setProfile(base64)
  }
  async function handlesignup(e) {
    const data = new FormData(e.target);
    const { name, email, phonenumber, password } = Object.fromEntries(
      data.entries()
    );
    if (validateUserSignup(name, email,phonenumber, password, profile) === true) {
      setLoading(true);
      let options = {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          phonenumber: phonenumber,
          password: password,
          profile:profile
        }),
      };
      const response = await fetch(`${BASE_URL}/api/auth/${type}/register`, options);
      const data = await response.json();
      if (response.status === 201 && data) {
        setLoading(false);
        setToken(data.token,type);
        toast.success("Registration successfull");
        if(redirect_url)
        {
          window.location.href=redirect_url;
        }
        else
        {
          navigate("/home");
        }
      } else {
        console.log(data)
        setLoading(false);
        toast.error(`${data.message}`);
      }
    }
  }
  // async function uploadprofile(e)
  // {
  //     const base64=await setToBase64(e.target.files[0])
  //     setProfile(base64)
  // }
  return (
    <div className=" h-[98vh]  font-poppins flex flex-col justify-center items-center">
      <Toaster position="top-center" reverseOrder />Name
      <div className="w-[380px] sm:w-[90%] ">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handlesignup(e);
          }}
          method="post"
        >
          <div className="flex flex-col gap-3 w-full signupsection sm:mt-4 ">
          <div className=" flex gap-4 justify-center items-center">
             <CodesandboxLogo size={40} color="#ffffff" weight="light" />
             <h1 className="text-3xl font-bold font-mono text-white">Register here!</h1>
         </div>
            <div className=" mx-auto mt-4">
                    <label className="" htmlFor='profile'>
                         <img  src={profile || avatar }  className='  w-[100px] h-[100px] mx-28 object-cover border cursor-pointer border-gray-800 rounded-full m-auto ' alt="profile"/>
                    </label>
                    <input onChange={uploadprofile} className='hidden' id="profile" name="profile" type="file"></input>
                    <p className=" text-center mt-2 text-white font-semibold ">Drop your profile photo here here</p>
            </div>

            <div className="flex flex-col gap-3 mt-6">

            <div class="relative bg-white rounded-lg">
               <input
                  type="text"
                  required
                  className="peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
                  id="name"
                  name="name"
                  placeholder="QuickSign"
                   />
               <label
                 for="name"
                 className="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                 > Name</label
               >
            </div>

            <div class="relative  bg-white rounded-lg">
               <input
                  type="email"
                  required
                  className="peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
                  id="email"
                  placeholder="name@example.com"
                  name="email" />
               <label
                 for="email"
                 className="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                 >Email address</label
               >
            </div>
            <div class="relative  bg-white rounded-lg">
               <input
                  type="text"
                  required
                  className="peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
                  id="phonenumber"
                  placeholder="+91 XXXX"
                  name="phonenumber" />
               <label
                 for="phonenumber"
                 className="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                 >Phone Number</label
               >
            </div>
            
            <div className="relative rounded-md border-2 full">
              <input
                type={toggleEye ? "text" : "password"}
                autoComplete="off"
                autoCorrect="off"
                className="passwordfield  w-[100%] rounded-md px-2 py-3 text-lg hover:resize-none outline-none "
                name="password"
                placeholder="password"
              />
              <Eye
                className="cursor-pointer absolute right-2 top-3"
                size={30}
                onClick={() => setToggleEye(!toggleEye)}
                color="#000000"
              />
            </div>
            </div>
            
            
           
            <div className="checkboxfield flex items-center">
              <input id="cb" type="checkbox" className="w-5 h-5" defaultChecked />
              <label for="cb" className="text-white ml-2 cursor-pointer">
                I accept Terms and Conditions
              </label>
            </div>
            <div className="text-center  rounded-lg text-white mt-2 p-1">
              {loading === true ? (
                <Loader />
              ) : (
                <button className="signupbutton w-full block cursor-pointer px-2 py-3 text-lg text-white font-semibold bg-blue-700 rounded-md">
                  Register
                </button>
              )}
            </div>
            <div id="loginfooter" className=" text-center mt-4 ">
              <span className="msg text-white">
                Already a member ?{" "}
                {
                  redirect_url?(<a
                    href={`/auth/login?type=${type}&redirect_url=${redirect_url}`}
                    className="underline  font-bold text-blue-200"
                  >
                    Login
                  </a>):(<a
                    href={`/auth/login?type=${type}`}
                    className="underline  font-bold text-blue-200"
                  >
                    Login
                  </a>)
                }
                
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterUserComponent;
