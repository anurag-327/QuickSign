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
import { BASE_URL } from "../base";
import {Swap,CodesandboxLogo} from "phosphor-react"

const LoginComponent = () => 
{
  const navigate = useNavigate();
  const [toggleEye, setToggleEye] = useState(false);
  const [loading,setLoading]=useState(false)
  // getting query parameter
  const [searchParams] = useSearchParams();
  let redirect_url,type;
  let flag=true;
  
  for (const entry of searchParams.entries()) {
    const [param, value] = entry;
    if (param === "redirect_url") 
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
  

  async function handlelogin(e) 
  {
    
    const data = new FormData(e.target);
    let { email, password } = Object.fromEntries(data.entries());
    // console.log(check)
    if (valiateLogin(email, password) === true) {
        setLoading(true)
      let options = {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ email: email, password: password }),
      };
      const response = await fetch(`${BASE_URL}/api/auth/${type}/login`, options);
      const data = await response.json();
      if (response.status === 200 && data) {
        setLoading(false)
        setToken(data.token,type);
        toast.success("Login successfull");
        if(redirect_url)
        {
          window.location.href=redirect_url;
        }
        else
        {
          navigate("/home");
        }
      } else {
        setLoading(false)
        toast.error(`${data.message}`);
      }
    }
  }
  useEffect(()=>
  {
    if(getToken())
    {
      navigate("/home")
    }
  })
  return (
    <div className="  w-[50%]  sm:w-[100%] h-[98vh] font-poppins flex flex-col gap-8 sm:justify-around justify-center items-center">
      <Toaster position="top-center" reverseOrder />
    
      <div className=" flex flex-col justify-center items-center">
             <CodesandboxLogo size={100} color="#ffffff" weight="light" />
             <h1 className="text-3xl font-bold font-mono text-white">Hello Again!</h1>
         </div>
      <div className="w-[350px] ">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handlelogin(e);
          }}
          method="post"
        >
          <div className="flex flex-col w-[350px]  gap-3 loginsection">
            <div>
              <input
                type="email"
                
                className="username w-[95%] border-none hover:resize-none rounded-md p-2 text-lg  outline-none"
                name="email"
                placeholder="Email"
              />
            </div>
            <div className="relative w-[95%] bg-white rounded-md">
              <input
                type={toggleEye ? "text" : "password"}
                autoComplete="off"
                autoCorrect="off"
                className="passwordfield  text-lg w-[100%] rounded-md p-2 border-none hover:resize-none outline-none "
                name="password"
                placeholder="password"
              />
              <Eye
                className="cursor-pointer absolute right-1 top-1 bottom-0"
                size={30}
                onClick={() => setToggleEye(!toggleEye)}
                color="#000000"
                weight="light"
              />
            </div>
            

            <div className="text-center  w-full rounded-lg ">
                {
                    loading===true?(<Loader/>):( <button className="signupbutton w-[100%] block border-none p-2 cursor-pointer bg-blue-600 text-white text-lg font-semibold rounded-md">
                    Login
                  </button>)
                }
            </div>
            <div className="text-center mt-6  font-bold text-white ">
              <a className="text-white no-underline" href={`/auth/recover?type=${type}`}>Forgot Password</a>
            </div>
            <div id="loginfooter" className="  text-center  ">
              <span className="msg text-white">
                Not a member?{" "}
                {
                  redirect_url?(<a
                    href={`/auth/register?type=${type}&redirect_url=${redirect_url}`}
                    className="underline  font-bold text-blue-200"
                  >
                    Register Here
                  </a>):(<a
                    href={`/auth/register?type=${type}`}
                    className="underline  font-bold text-blue-200"
                  >
                    Register Here
                  </a>)
                }
                
              </span>
            </div>
          </div>
        </form>
      </div>
      <Footer/>
    </div>
  );
};

export default LoginComponent;
