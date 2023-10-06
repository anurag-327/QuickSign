import React, { useState } from "react";
import { Toaster } from "react-hot-toast";
import Logo from "../assets/Logo.png";
import { verifyEmail } from "../helper/verify";
import { generateOTP, sendOTP } from "../helper/OTPHandler";
import Loader from "../components/Loader";
import { Eye } from "phosphor-react";
import { useSearchParams } from "react-router-dom";
import toast from 'react-hot-toast'
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../base";
import {Swap,CodesandboxLogo} from "phosphor-react"
const RecoverAccount = () => {
  const navigate=useNavigate();
  const [searchParams] = useSearchParams();
  let type;
  for (const entry of searchParams.entries()) {
    const [param, value] = entry;
    type = value;
  }

  const [toggleEye, setToggleEye] = useState(false);
  const [emailsection, setEmailsection] = useState(true);
  const [otpSection, setOTPSection] = useState(false);
  const [errormsg, seterrormsg] = useState(false);
  const [msg,setmsg]=useState("")
  const [forgotPassword, setForgotPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [OTP, setOTP] = useState();
  const [userOTP, setUserOTP] = useState();
  const [loading, setLoading] = useState(false);
  const [accountdeatils,setAccountDetails]=useState()

  async function handleSendOTP() {
    setmsg("")
    if (verifyEmail(email) == true) {
      setLoading(true)
      const res= await fetch(`${BASE_URL}/api/auth/${type}/verifyemail?email=${email}`) 
      const data=await res.json();
      if(res.status==200)
      {
        
        setAccountDetails(data);
        const otp = generateOTP();
       
        const x=await sendOTP(email, otp);
        console.log(x)
        if(x.ok)
        {
          setOTP(otp);
          setEmailsection(false);
          setOTPSection(true);
          setmsg("")
          seterrormsg(false)
          setLoading(false)
        }
        else{
          setLoading(false)
          toast.error("Couldnot send OTP...")
        }
        
      }
      else{
        seterrormsg(true)
        setmsg("Email doesnot exist in our database")
        setLoading(false)
      }
      
    }
  }
  function verifyOTP() {
    setmsg("")
    if (toString(userOTP) === toString(OTP)) {
      setForgotPassword(true);
      setOTPSection(false);
      setmsg("")
      seterrormsg(false)
    } else {
      seterrormsg(true);
      setmsg("OTP Didnot match...")
    }
  }

  async function handleresetPassword(e)
  {
    setmsg("")
    const data=new FormData(e.target)
    let {password,confirmpassword}=Object.fromEntries(data.entries())
    if(password===confirmpassword)
    {
      let options={
        method:"PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ _id:accountdeatils._id, password: password }),
      }
      const res= await fetch(`${BASE_URL}/api/auth/${type}/resetpassword`,options) 
        const data2=await res.json();
        if(res.status==200)
        {
          toast.success("Successfully reset password")
          seterrormsg(true)
          setmsg("redirecting to login page...")  
          setTimeout(()=>
          {
            navigate(`/auth/login?type=${type}`)
          },3000)
        }
        else
        {
          setmsg("could not reset password...")
          toast.error('Could not reset password'); 
        }
    }
    else
    {
      setmsg("Password and confirm password did not match")
      seterrormsg(true)
    }
    
  }
  return (
    <div className="w-[100%] h-[100vh] text-center bg-[#111010] flex  justify-center items-center">
      <Toaster position="top-center" reverseOrder />
      <div className="w-[350px]">
        <div>
        <div className=" flex flex-col justify-center items-center">
             <CodesandboxLogo size={100} color="#ffffff" weight="light" />
         </div>
          <h2 className="my-5 text-xl font-bold text-white">
            Recover your Account
          </h2>
        </div>
        {emailsection === true && (
          <div className="flex flex-col  gap-5">
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              autoComplete="off"
              autoCorrect="off"
              className="  rounded-md p-2 text-lg w-[95%]  outline-none"
              name="email"
              placeholder="Email"
            />
            <div className="text-center  rounded-lg text-white p-1">
              {loading === true ? (
                <Loader />
              ) : (
                <button
                  onClick={handleSendOTP}
                  className=" w-full block  cursor-pointer p-2 text-lg bg-blue-600 text-white rounded-md"
                >
                  Send OTP
                </button>
              )}
            </div>
            {errormsg === true && <div className="text-red-600 font-semibold">{msg}</div>}
          </div>
        )}
        {otpSection === true && (
          <div className="flex flex-col gap-5">
            <input
              type="number"
              onChange={(e) => setUserOTP(e.target.value)}
              // type="text"
              autoComplete="off"
              autoCorrect="off"
              className="  border-2 w-full rounded-md p-2  outline-none"
              name="OTP"
              placeholder="Enter OTP"
            />
            <div className="text-center  rounded-lg text-white p-1">
              {loading === true ? (
                <Loader />
              ) : (
                <button
                  onClick={verifyOTP}
                  className=" w-full block  p-2 bg-blue-700 rounded-md"
                >
                  Verify OTP
                </button>
              )}
            </div>
              {errormsg === true && <div className="text-red-600 font-semibold">{msg}</div>}
          </div>
        )}
        {forgotPassword === true && (
           
          <div className="flex flex-col gap-3">
            <div>
              <span className="text-2xl font-semibold text-start">New Password</span>
              </div>
              <form
              className="flex flex-col gap-3"
           onSubmit={(e) => {
             e.preventDefault();
             handleresetPassword(e);
           }}
           method="post"
         >
            <div className="flex items-center bg-white rounded-md border-2">
              <input
                type={toggleEye ? "text" : "password"}
                autoComplete="off"
                autoCorrect="off"
                className="passwordfield  w-[93%] rounded-md p-2  hover:resize-none outline-none "
                name="password"
                placeholder="password"
              />
              <Eye
                className="cursor-pointer "
                size={20}
                onClick={() => setToggleEye(!toggleEye)}
                color="#000000"
              />
            </div>
            <div>
              <input
                type="password"
                onChange={(e) => setUserOTP(e.target.value)}
                // type="text"
                autoComplete="off"
                autoCorrect="off"
                className="  border-2 w-full rounded-md p-2  outline-none"
                name="confirmpassword"
                placeholder="Confirm Password"
              />
            </div>
            {loading === true ? (
                <Loader />
              ) : (
                <button
        
                  className=" w-full block  p-2 bg-blue-700 text-white rounded-md"
                >
                  Reset Password
                </button>
              )}
              {errormsg === true && <div className="text-red-600 font-semibold">{msg}</div>}
              </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecoverAccount;
