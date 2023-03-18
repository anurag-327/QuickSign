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

const LoginComponent = () => 
{
  const navigate = useNavigate();
  const [toggleEye, setToggleEye] = useState(false);
  const [loading,setLoading]=useState(false)
  // getting query parameter
  const [searchParams] = useSearchParams();
  let type;
  for (const entry of searchParams.entries()) {
    const [param, value] = entry;
    type = value;
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
      const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/auth/${type}/login`, options);
      const data = await response.json();
      if (response.status === 200 && data) {
        setLoading(false)
        // console.log(data)
        setToken(data.token,type);
        toast.success("Login successfull");
        navigate("/home");
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
    <div className="  w-[50%]  sm:w-[100%] h-[100vh] flex flex-col gap-8 sm:justify-around justify-center items-center">
      <Toaster position="top-center" reverseOrder />
    
      <div className=" flex flex-col justify-center items-center">
        <img className="w-[200px]" src={Logo} />
        <h1 className="text-3xl font-bold text-violet-700">Hello Again!</h1>
      </div>
      <div className="w-[350px] ">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handlelogin(e);
          }}
          method="post"
        >
          <div className="flex flex-col gap-3 w-full loginsection">
            <div>
              <input
                type="email"
                
                autoCorrect="off"
                className="username  border-2 w-full rounded-md p-2  outline-none"
                name="email"
                placeholder="Email"
              />
            </div>
            <div className="flex items-center bg-white rounded-md border-2">
              <input
                type={toggleEye ? "text" : "password"}
                autoComplete="off"
                autoCorrect="off"
                className="passwordfield   w-[93%] rounded-md p-2  hover:resize-none outline-none "
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
            {/* <div className="checkboxfield">
              <input name="check" type="checkbox" className="" defaultChecked />
              <label className=" ml-1">Remember Me</label>
            </div> */}

            <div className="text-center  rounded-lg text-white p-1">
                {
                    loading===true?(<Loader/>):( <button className="signupbutton w-full block  p-2 bg-blue-700 rounded-md">
                    Login
                  </button>)
                }
             
              
            </div>
            <div className="text-center  font-bold text-blue-500">
              <Link to={`/auth/recover?type=${type}`}>Forgot Password</Link>
            </div>
            <div id="loginfooter" className="  text-center mt-4 ">
              <span className="msg">
                Not a member?{" "}
                <Link
                  to={`/auth/register?type=${type}`}
                  className="  font-bold text-blue-500 underline"
                >
                  Register Here
                </Link>
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
