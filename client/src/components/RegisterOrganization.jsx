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
        setToken(data.token,type);
        toast.success("Registration successfull");
        // setSucessPage(true)
        navigate("/home");
      } else {
        setLoading(false);
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
      !sucessPage?(<div className="w-[50%] pb-5 min-h-[100vh] font-poppins sm:w-[100%] flex flex-col justify-center items-center">
        <Toaster position="top-center" reverseOrder />
      <div className="w-[350px]  ">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handlesignup(e);
          }}
          method="post"
        >
          <div className="flex flex-col mt-10 gap-3 w-full signupsection  ">
          <div className=" flex flex-col justify-center items-center">
             <CodesandboxLogo size={50} color="#ffffff" weight="light" />
             <h1 className="text-3xl font-bold text-white">Register here!</h1>
         </div>
            <div className="mx-auto ">
                    <label className="" htmlFor='profile'>
                         <img  src={profile || avatar }  className='  w-[100px] h-[100px] mx-32 object-cover border cursor-pointer border-gray-800 rounded-full m-auto ' alt="profile"/>
                    </label>
                    <input onChange={uploadprofile} className='hidden' id="profile" name="profile" type="file"></input>
                    <p className=" text-center text-white font-semibold ">Drop your organization logo here</p>
            </div>
            <div className="w-[95%]">
              <input
                type="text"
                required
                autoComplete="off"
                autoCorrect="off"
                className="namefield  border-2 w-full text-lg  rounded-md p-2 outline-none"
                name="name"
                placeholder="organization name"
              />
            </div>
            <div className="w-[95%]">
              <input
                type="email"
                autoComplete="off"
                autoCorrect="off"
                className="emailfield border-2 w-full text-lg rounded-md p-2  outline-none"
                name="email"
                placeholder="email address"
              />
            </div>
            <div className="group w-[95%]">
              <input
                type="text"
                autoComplete="off"
                autoCorrect="off"
                className="  border-2 w-full text-lg  rounded-md p-2  outline-none"
                name="contact"
                placeholder="contact"
              />
              <p className="group-focus-within:block hidden text-center  text-sm  msg">contact can be phone number or mail to reach you out in case of emergency</p>
            </div>
            <div className="w-[95%]">
              <input
                type="text"
                autoComplete="off"
                autoCorrect="off"
                className=" border-2 w-full text-lg  rounded-md p-2  outline-none"
                name="address"
                placeholder="address"
              />
            </div>
            <div className="group w-[95%]">
              <input
                type="text"
                autoComplete="off"
                autoCorrect="off"
                className=" border-2 w-full text-lg  rounded-md p-2  outline-none"
                name="link"
                placeholder="website link"
              />
              <p className="group-focus-within:block hidden text-center text-sm  msg">Ex. www.quicksign.com</p>
            </div>
            <div className="group w-[95%]">
               <div className=" bg-white relative rounded-md border-2">
                 <input
                  type={toggleEye ? "text" : "password"}
                  autoComplete="off"
                  autoCorrect="off"
                  className="passwordfield text-lg   w-[100%] rounded-md p-2  hover:resize-none outline-none "
                  name="password"
                  placeholder="password"
                 />
                <Eye
                  className="cursor-pointer absolute right-0 top-2 bottom-0 "
                  size={30}
                  onClick={() => setToggleEye(!toggleEye)}
                  color="#000000"
                />
               </div>
               <p className="group-focus-within:block hidden text-center  text-sm  msg">must include [a-z], [0-9], [special character]</p>
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
                <button className="signupbutton cursor-pointer w-full block text-white text-lg font-semibold  p-2 bg-blue-700 rounded-md">
                  Register
                </button>
              )}
            </div>
            <div id="loginfooter" className=" mb-20 text-center mt-4 ">
              <span className="msg">
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