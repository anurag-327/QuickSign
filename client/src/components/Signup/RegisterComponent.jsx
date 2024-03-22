import React, { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import { getToken, setToken } from "../../helper/tokenHandler";
import { BASE_URL } from "../../base";
import { Eye, EyeSlash, ShieldStar } from "phosphor-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignUpSchema } from "../../schema/LoginSchema";
const LoginComponent = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, SetShowPassword] = useState(false);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const redirect_url = queryParams.get("redirect_url") || "";
  let linkref = "/auth/login";
  if (redirect_url) linkref = `/auth/login?redirect_url=${redirect_url}`;
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting, touchedFields },
  } = useForm({
    resolver: zodResolver(SignUpSchema),
  });
  async function onSubmit(data) {
    console.log(data);
    try {
      setLoading(true);
      setError("");
      let options = {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
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
        setError(res.message);
        toast.error(res.message);
      }
    } catch (error) {
      setError("Server Error");
      toast.error("Error signing");
    }
  }
  useEffect(() => {
    if (getToken()) {
      navigate("/dashboard");
    }
  });
  return (
    <div className=" p-0 md:p-12 lg:p-24 xl:p-28 order-2 md:order-1">
      <div>
        <div>
          <h3 className="text-4xl font-semibold">Create an Account</h3>
          <p className="text-sm text-gray-500 mt-2">
            Welcome! Please fill in the form below to create your account.
          </p>
        </div>
        <form className="mt-10" onSubmit={handleSubmit(onSubmit)}>
          <div className="my-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              {...register("name")}
              className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="John Doe"
            />
            {touchedFields.name && errors.name && (
              <div className="text-sm text-red-600">{errors.name.message}</div>
            )}
          </div>
          <div className="my-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              {...register("email")}
              className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="johndoe@email.com"
            />
            {touchedFields.email && errors.email && (
              <div className="text-sm text-red-600">{errors.email.message}</div>
            )}
          </div>
          <div className="mb-4 relative">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              {...register("password")}
              placeholder="Enter your password"
            />
            <div className="absolute right-4 top-10">
              {showPassword ? (
                <EyeSlash
                  onClick={() => SetShowPassword(!showPassword)}
                  size={20}
                ></EyeSlash>
              ) : (
                <Eye onClick={() => SetShowPassword(!showPassword)} size={20} />
              )}
            </div>
            <a
              href="#"
              className="text-xs font-semibold text-gray-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Forgot Password?
            </a>
            {touchedFields.password && errors.password && (
              <div className="text-sm text-red-600">
                {errors.password.message}
              </div>
            )}
          </div>
          <div>
            <div className="text-center mt-6 w-full rounded-lg ">
              <button
                disabled={isSubmitting}
                className={`w-[100%] block border-none px-2 py-2 cursor-pointe text-white text-lg font-semibold rounded-md ${
                  isSubmitting ? "bg-blue-300" : "bg-brand"
                } `}
              >
                Sign Up
              </button>
            </div>
          </div>
          <div className="  text-center  my-4">
            <span className="msg dark:text-white text-sm text-gray-600">
              Already have an account?{" "}
              <a href={linkref} className="font-semibold text-blue-500">
                Sign in
              </a>
            </span>
          </div>
        </form>
        {error && (
          <div>
            <span className="text-red-600">! {error}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginComponent;
