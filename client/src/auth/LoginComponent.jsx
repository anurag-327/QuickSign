import React, { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import Logo from "../assets/Logo.png";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import toast from "react-hot-toast";
import { valiateLogin } from "../helper/validate";
import { Eye, ArrowRight } from "phosphor-react";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
const LoginComponent = ({ organization }) => {
  const navigate = useNavigate();
  const [toggleEye, setToggleEye] = useState(false);
  const [loginLoading, setLoginLoading] = useState(false);
  const [searchParams] = useSearchParams();
  let redirect_url;
  for (const entry of searchParams.entries()) {
    const [param, value] = entry;
    if (param === "redirect_url") redirect_url = value;
  }

  async function handlelogin(e) {
    const data = new FormData(e.target);
    let { email, password } = Object.fromEntries(data.entries());
    if (valiateLogin(email, password) === true) {
      setLoginLoading(true);
      let options = {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ email: email, password: password }),
      };
      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL}/auth`,
        options
      );
      const data = await response.json();
      if (response.status === 200 && data) {
        setLoginLoading(false);
        var s = "";
        const user=data.user;
        for (var key in user) {
            if (s != "") {
                s += "&";
            }
            s += (key + "=" + encodeURIComponent(user[key]));
        }
        redirect_url =redirect_url + `?status=true&token=${data.token}`+"&"+s;
        console.log(redirect_url);
        toast.success("Login successfull");
        window.location.href=redirect_url;
      } else {
        setLoginLoading(false);
        toast.error(`${data.message}`);
      }
    }
  }

  return (
    organization && (
      <div className="  w-[420px] sm:s-full sm:h-screen   border  border-gray-300  rounded-xl  flex flex-col gap-8 sm:justify-start  justify-around items-center">
        <Toaster position="top-center" reverseOrder />
        <div className=" flex border-b-2 sm:border-t-2 sm:justify-center items-center w-full ">
          <img className="w-[30px] ml-2" src={Logo} />
          <h1 className="ml-2 text-gray-500">Sign In with QuickSign</h1>
        </div>
        <div className="flex justify-center gap-3 items-center">
          <img
            className="w-[60px] ml-2 border rounded-full gap-2 border-gray-500"
            src={Logo}
          />
          <ArrowRight size={40} color="#000000" weight="bold" />
          <img
            className="w-[60px] ml-2 border rounded-full border-gray-500"
            src={organization.profile}
          />
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-semibold">Verify your account...</h2>
          <h3 className="text-lg">
            to continue to{" "}
            <a
              href={organization.link}
              rel="noopener noreferrer"
              target="blank"
              className="text-blue-500 font-semibold"
            >
              {organization.name}
            </a>{" "}
          </h3>
        </div>
        <div className="w-[350px] py-8 ">
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
                  placeholder="Quicksign Email"
                />
              </div>
              <div className="flex items-center bg-white rounded-md border-2">
                <input
                  type={toggleEye ? "text" : "password"}
                  autoComplete="off"
                  autoCorrect="off"
                  className="passwordfield   w-[93%] rounded-md p-2  hover:resize-none outline-none "
                  name="password"
                  placeholder="Quicksign password"
                />
                <Eye
                  className="cursor-pointer "
                  size={20}
                  onClick={() => setToggleEye(!toggleEye)}
                  color="#000000"
                />
              </div>
              <div className="text-center  rounded-lg text-white p-1">
                {loginLoading === true ? (
                  <Loader />
                ) : (
                  <button className="signupbutton w-full block  p-2 bg-blue-700 rounded-md">
                    Verify
                  </button>
                )}
              </div>
              <div className="mt-10 font-serif">
                <p className="text-sm text-gray-600">
                  By Continuing this you provide your consent to share your
                  details with {organization.name}
                  <br></br>
                  Before using this app, you can review Quicksign’s{" "}
                  <a
                    href="#"
                    rel="noopener noreferrer"
                    target="blank"
                    className="text-blue-600 mr-2 font-semibold"
                  >
                    privacy policy
                  </a>
                  and
                  <a
                    href="#"
                    rel="noopener noreferrer"
                    target="blank"
                    className="text-blue-600 font-semibold ml-2"
                  >
                    terms of service
                  </a>
                  .
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  );
};

export default LoginComponent;
