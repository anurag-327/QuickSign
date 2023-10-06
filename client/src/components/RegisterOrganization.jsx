import React, { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { useSearchParams } from "react-router-dom";
import Logo from "../assets/Logo.png";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { valiateLogin, validateSignup } from "../helper/validate";
import { setToBase64 } from "../helper/profileImageHandler";
import { getToken, setToken } from "../helper/tokenHandler";
import { Eye } from "phosphor-react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Loader from "./Loader";
import avatar from "../assets/companylogo.webp";
import { BASE_URL } from "../base";
import {Swap,CodesandboxLogo} from "phosphor-react"
const RegisterOrganization = () => {
  const navigate = useNavigate();
  const [toggleEye, setToggleEye] = useState(false);
  const [sucessPage, setSucessPage] = useState(false);
  const [loading, setLoading] = useState(false);
  const [profile,setProfile]=useState("")
  // getting query parameter
  const [searchParams] = useSearchParams();
  let type;
  for (const entry of searchParams.entries()) {
    const [param, value] = entry;
    type = value;
  }

  async function handlesignup(e) {
    const data = new FormData(e.target);
    console
    const { name, email, contact,link,address, password } = Object.fromEntries(
      data.entries()
    );
    
    if (validateSignup(name, email,contact,address,link, password, profile) === true) {
      setLoading(true);
      let options = {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
          contact: contact,
          link:link,
          address:address,
          profile:profile
          
        }),
      };
      const response = await fetch(`${BASE_URL}/api/auth/${type}/register`, options);
      const data = await response.json();
      if (response.status === 201 && data) {
        setLoading(false);
        // setToken(data.token,type);
        toast.success("Registration successfull");
        setSucessPage(true)
        // navigate("/home");
      } else {
        setLoading(false);
        console.log(data.message)
        toast.error(`${data.message}`);
      }
    }
  }
  async function uploadprofile(e)
  {
      const base64=await setToBase64(e.target.files[0])
      setProfile(base64)
  }
  return (
    <>
    {
      !sucessPage?(<div className=" pb-5 min-h-[100vh] font-poppins  flex flex-col justify-center items-center">
        <Toaster position="top-center" reverseOrder />
      <div className="w-[400px] sm:w-[94%]  ">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handlesignup(e);
          }}
          method="post"
        >
          <div className="flex flex-col mt-10 gap-3 w-full sm:mt-20 signupsection  ">
          <div className=" flex gap-2 justify-center items-center">
             <CodesandboxLogo size={35} color="#ffffff" weight="light" />
             <h1 className="text-3xl font-bold text-white">Register here!</h1>
         </div>
            <div className="mx-auto mt-3">
                    <label className="" htmlFor='profile'>
                         <img  src={profile || "http://localhost:5173/public/champagnedark.svg" }  className=' p-3  w-[80px] h-[80px] mx-32 object-cover border cursor-pointer bg-gray-200 rounded-full m-auto ' alt="profile"/>
                    </label>
                    <input onChange={uploadprofile} className='hidden' id="profile" name="profile" type="file"></input>
                    <p className=" text-center mt-4 text-white font-semibold ">Drop your Application logo here</p>
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
                 >Application Name</label
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
                  id="contact"
                  placeholder="+91 XXXX--"
                  name="contact" />
               <label
                 for="contact"
                 className="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                 >Contact</label
               >
            </div>

            <div class="relative  bg-white rounded-lg">
               <input
                  type="text"
                  required
                  className="peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
                  id="address"
                  placeholder="Park Street, UK"
                  name="address" />
               <label
                 for="address"
                 className="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                 >Address</label
               >
            </div>
            <div class="relative bg-white rounded-lg">
               <input
                  type="text"
                  required
                  className="peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
                  id="link"
                  placeholder="www.quicksign.com"
                  name="link" />
               <label
                 for="link"
                 className="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                 >Redirect URI</label
               >
            </div>
            
            <div className="group w-[100%] rounded-lg">
               <div className=" bg-white relative rounded-lg">
                 <input
                  type={toggleEye ? "text" : "password"}
                  autoComplete="off"
                  autoCorrect="off"
                  className="passwordfield text-lg placeholder:font-extralight text-neutral-500  w-[100%] rounded-md px-2 py-3  hover:resize-none outline-none "
                  name="password"
                  placeholder="Password"
                 />
                <Eye
                  className="cursor-pointer absolute right-2 top-3  "
                  size={25}
                  onClick={() => setToggleEye(!toggleEye)}
                  color="#000000"
                />
               </div>
               <p className="text-white mt-1 group-focus-within:block hidden text-center  text-sm  msg">must include [a-z], [0-9], [special character]</p>
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
                <button className="signupbutton cursor-pointer w-full block text-white text-lg font-semibold  px-2 py-3 bg-blue-700 rounded-md">
                  Register
                </button>
              )}
            </div>

            <div id="loginfooter" className="  text-center mt-2 ">
              <span className="msg text-white">
                Already a member ?{" "}
                <Link
                  className="font-bold text-blue-500 underline"
                  to={`/auth/login?type=${type}`}
                >
                  Login
                </Link>
              </span>
            </div>

            </div>
          
           
            
            
          </div>
        </form>
      </div>
    </div>):(<div className="w-[50%] font-poppins  h-[100vh] sm:w-[100%] flex flex-col justify-center items-center">
          <span className="text-2xl font-bold">Successfully Registered Organization 🎇</span>
          <span className="mt-5">Refresh the window to access your dashboard..</span>
          <a rel="noopener noreferrer" href="/" className="px-8 py-3 font-semibold rounded mt-5 bg-violet-400 dark:text-gray-900">Back to homepage</a>
          <span className="text-sm mt-3">In case of any issue Contact us at : <a className="font-bold text-blue-200" href="mailto:anuragsrivastav0027@gmail.com">anuragsrivastav0027@gmail.com</a></span>
		
</div>)
    }
    
    
    </>
  );
}

export default RegisterOrganization