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
    <div className="w-[50%] h-[98vh] sm:w-[100%] font-poppins flex flex-col justify-center items-center">
      <Toaster position="top-center" reverseOrder />
      <div className="w-[350px] ">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handlesignup(e);
          }}
          method="post"
        >
          <div className="flex flex-col gap-3 w-full signupsection  ">
          <div className=" flex flex-col justify-center items-center">
             <CodesandboxLogo size={50} color="#ffffff" weight="light" />
             <h1 className="text-3xl font-bold font-mono text-white">Register here!</h1>
         </div>
            <div className=" mx-auto">
                    <label className="" htmlFor='profile'>
                         <img  src={profile || avatar }  className='  w-[100px] h-[100px] mx-28 object-cover border cursor-pointer border-gray-800 rounded-full m-auto ' alt="profile"/>
                    </label>
                    <input onChange={uploadprofile} className='hidden' id="profile" name="profile" type="file"></input>
                    <p className=" text-center text-white font-semibold ">Drop your profile photo here here</p>
            </div>
            <div className="w-[95%]">
              <input
                type="text"
                autoCorrect="off"
                className="namefield  border-2 w-full rounded-md p-2 text-lg outline-none"
                name="name"
                placeholder="Name"
              />
            </div>
            <div className="w-[95%]">
              <input
                type="email"
                autoCorrect="off"
                className="emailfield border-2 w-full rounded-md p-2 text-lg  outline-none"
                name="email"
                placeholder="Email Address"
              />
            </div>
            <div className="w-[95%]">
              <input
                type="text"
                autoCorrect="off"
                className="pnofield w-full rounded-md p-2 text-lg outline-none"
                name="phonenumber"
                placeholder="Phone Number"
              />
            </div>
            <div className="relative rounded-md border-2 w-[95%]">
              <input
                type={toggleEye ? "text" : "password"}
                autoComplete="off"
                autoCorrect="off"
                className="passwordfield  w-[100%] rounded-md p-2 text-lg hover:resize-none outline-none "
                name="password"
                placeholder="password"
              />
              <Eye
                className="cursor-pointer absolute right-0 top-2"
                size={30}
                onClick={() => setToggleEye(!toggleEye)}
                color="#000000"
              />
            </div>

            <div className="checkboxfield">
              <input type="checkbox" className="" defaultChecked />
              <label className="text-white cursor-pointer">
                I accept Terms and Conditions
              </label>
            </div>
            <div className="text-center  rounded-lg text-white mt-2 p-1">
              {loading === true ? (
                <Loader />
              ) : (
                <button className="signupbutton w-full block cursor-pointer p-2 text-lg text-white font-semibold bg-blue-700 rounded-md">
                  Register
                </button>
              )}
            </div>
            <div id="loginfooter" className=" text-center mt-4 ">
              <span className="msg">
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
