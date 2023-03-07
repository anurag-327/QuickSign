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
import profile from "../assets/profile.png";
const RegisterUserComponent = () => {

  const navigate = useNavigate();
  const [toggleEye, setToggleEye] = useState(false);
  const [loading, setLoading] = useState(false);

  // getting query parameter
  const [searchParams] = useSearchParams();
  let type;
  for (const entry of searchParams.entries()) {
    const [param, value] = entry;
    type = value;
  }

  async function handlesignup(e) {
    const data = new FormData(e.target);
    const { name, email, phonenumber, password } = Object.fromEntries(
      data.entries()
    );
    if (validateSignup(name, email, password, profile) === true) {
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
          
        }),
      };
      const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/auth/${type}/register`, options);
      const data = await response.json();
      if (response.status === 201 && data) {
        setLoading(false);
        setToken(data.token);
        toast.success("Registration successfull");
        navigate("/home");
      } else {
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
    <div className="w-[50%] h-[100vh] sm:w-[100%] flex flex-col justify-center items-center">
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
              <img className="w-[120px]" src={Logo} />
              <h1 className="text-3xl font-bold text-violet-700">
                Register User
              </h1>
            </div>
            {/* <div>
                    <label htmlFor='profile'>
                         <img  src={profile || avatar }  className='w-[100px] h-[100px] object-cover border cursor-pointer border-gray-800 rounded-full m-auto ' alt="profile"/>
                    </label>
                    <input onChange={uploadprofile} className='hidden' id="profile" name="profile" type="file"></input>
                </div> */}
            <div>
              <input
                type="text"
                autoCorrect="off"
                className="namefield  border-2 w-full rounded-md p-2 outline-none"
                name="name"
                placeholder="Name"
              />
            </div>
            <div>
              <input
                type="email"
                autoCorrect="off"
                className="emailfield border-2 w-full rounded-md p-2  outline-none"
                name="email"
                placeholder="Email Address"
              />
            </div>
            <div>
              <input
                type="text"
                autoCorrect="off"
                className="pnofield border-2 w-full rounded-md p-2  outline-none"
                name="phonenumber"
                placeholder="Phone Number"
              />
            </div>
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

            <div className="checkboxfield">
              <input type="checkbox" className="" defaultChecked />
              <label className="text-blue-500 cursor-pointer">
                I accept Terms and Conditions
              </label>
            </div>
            <div className="text-center  rounded-lg text-white mt-2 p-1">
              {loading === true ? (
                <Loader />
              ) : (
                <button className="signupbutton w-full block  p-2 bg-blue-700 rounded-md">
                  Register
                </button>
              )}
            </div>
            <div id="loginfooter" className=" text-center mt-4 ">
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
    </div>
  );
};

export default RegisterUserComponent;
