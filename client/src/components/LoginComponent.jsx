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
    <div className="   mx-auto h-[98vh] font-poppins flex flex-col gap-8 sm:justify-center justify-center items-center">
      <Toaster position="top-center" reverseOrder />
    
      <div className=" flex flex-col justify-center items-center">
             <CodesandboxLogo size={100} color="#ffffff" weight="light" />
             <h1 className="text-3xl sm:text-xl mt-2 font-bold font-mono text-white">Hello Again!</h1>
         </div>
      <div className="w-[380px] mx-auto sm:w-[94%] ">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handlelogin(e);
          }}
          method="post"
        >
          <div className="flex flex-col   gap-4 mt-5 loginsection">
          <div class="relative  bg-white rounded-lg">
               <input
                  type="email"
                  required
                  className="peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
                  id="email"
                  placeholder="name@example.com"
                  name="email" />
               <label
                 htmlFor="email"
                 className="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                 >Email address</label
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
            

            <div className="text-center  w-full rounded-lg ">
                {
                    loading===true?(<Loader/>):( <button className="signupbutton w-[100%] block border-none px-2 py-3 cursor-pointer bg-blue-600 text-white text-lg font-semibold rounded-md">
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
    </div>
  );
};

export default LoginComponent;
