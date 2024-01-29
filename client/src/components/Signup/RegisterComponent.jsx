import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";
import {
  Swap,
  CodesandboxLogo,
  Eye,
  EyeSlash,
  ShieldStar,
} from "phosphor-react";
import { BASE_URL } from "../../base";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { valiateLogin, validateSignup } from "../../helper/validate";
import { setToken, getToken } from "../../helper/tokenHandler";
const RegisterComponent = () => {
  const navigate = useNavigate();
  const [toggleEye, setToggleEye] = useState(false);
  const [loading, setLoading] = useState(false);
  const [searchParams] = useSearchParams();
  let redirect_url = "",
    flag = true;
  for (const entry of searchParams.entries()) {
    const [param, value] = entry;
    if (flag == true) {
      redirect_url += `${value}`;
      flag = false;
    } else {
      redirect_url += `&${param}=${value}`;
    }
  }

  async function handleSignUp(e) {
    const data = new FormData(e.target);
    let { name, email, password } = Object.fromEntries(data.entries());
    if (validateSignup(name, email, password) === true) {
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
        }),
      };
      const response = await fetch(`${BASE_URL}/api/auth/register`, options);
      const res = await response.json();
      if (res.status == 201) {
        setLoading(false);
        setToken(res.token);
        if (redirect_url) {
          window.location.href = redirect_url;
        } else {
          navigate("/dashboard");
        }
      } else {
        setLoading(false);
        console.log(res);
        toast.error(res.message);
      }
    }
  }
  useEffect(() => {
    if (getToken()) {
      navigate("/dashboard");
    }
  });
  return (
    <div className="   mx-auto min-h-screen font-poppins flex flex-col gap-8  justify-center items-center">
      <Toaster position="top-center" reverseOrder />
      <div className=" flex flex-col justify-center mt-20  items-center">
        <ShieldStar className="" size={200} color="#634bd8" weight="fill" />
        <h1 className="text-2xl sm:text-3xl mt-2 font-bold  dark:text-white">
          Quick Sign
        </h1>
      </div>
      <form
        className="flex flex-col  w-[100%] sm:w-[380px] mx-auto  gap-4 mt-4 loginsection"
        onSubmit={(e) => {
          e.preventDefault();
          handleSignUp(e);
        }}
        method="post"
      >
        <div className="relative  bg-white rounded-lg w-full">
          <input
            type="text"
            required
            className="peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
            id="name"
            placeholder="name@example.com"
            name="name"
          />
          <label
            htmlFor="name"
            className="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
          >
            Name <span className="text-red-500 font-bold text-lg">*</span>
          </label>
        </div>
        <div className="relative  bg-white rounded-lg w-full">
          <input
            type="email"
            required
            className="peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
            id="email"
            placeholder="name@example.com"
            name="email"
          />
          <label
            htmlFor="email"
            className="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
          >
            Email address{" "}
            <span className="text-red-500 font-bold text-lg">*</span>
          </label>
        </div>
        <div className="relative rounded-lg bg-white w-full">
          <input
            type={toggleEye ? "text" : "password"}
            required
            autoComplete="off"
            autoCorrect="off"
            className="peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
            id="password"
            placeholder="Password"
            name="password"
          />
          <label
            htmlFor="password"
            className="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
          >
            Password <span className="text-red-500 font-bold text-lg">*</span>
          </label>
          {toggleEye ? (
            <EyeSlash
              className="cursor-pointer absolute right-3 top-4"
              size={25}
              onClick={() => setToggleEye(!toggleEye)}
              color="#000000"
            />
          ) : (
            <Eye
              className="cursor-pointer absolute right-3 top-4"
              size={25}
              onClick={() => setToggleEye(!toggleEye)}
              color="#000000"
            />
          )}
        </div>
        <div className="checkboxfield flex items-center">
          <input id="cb" type="checkbox" className="w-5 h-5" defaultChecked />
          <label htmlFor="cb" className="dark:text-white ml-2 cursor-pointer">
            I accept Terms and Conditions
          </label>
        </div>
        <div className="text-center mt-6 w-full rounded-lg ">
          {loading === true ? (
            <button
              disabled
              className="signupbutton w-[100%] block border-none px-2 py-3 cursor-pointer bg-blue-300 text-white text-lg font-semibold rounded-md"
            >
              Registering user
            </button>
          ) : (
            <button className="signupbutton w-[100%] block border-none px-2 py-3 cursor-pointer bg-blue-600 text-white text-lg font-semibold rounded-md">
              Register
            </button>
          )}
        </div>
        <div className="  text-center  ">
          <span className="msg dark:text-white">
            Already a Member?{" "}
            {redirect_url ? (
              <a
                href={`/auth/login?redirect_url=${redirect_url}`}
                className="underline  font-bold text-blue-500"
              >
                Login
              </a>
            ) : (
              <a
                href={`/auth/login`}
                className="underline  font-bold text-blue-500"
              >
                login
              </a>
            )}
          </span>
        </div>
      </form>
    </div>
  );
};

export default RegisterComponent;
