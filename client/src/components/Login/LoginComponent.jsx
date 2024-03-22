import React, { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import { valiateLogin, validateSignup } from "../../helper/validate";
import { getToken, setToken } from "../../helper/tokenHandler";
import { BASE_URL } from "../../base";
import { Eye, EyeSlash, ShieldStar } from "phosphor-react";
import { set, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "../../schema/LoginSchema";
const LoginComponent = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, SetShowPassword] = useState(false);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const redirect_url = queryParams.get("redirect_url") || "";
  let linkref = "/auth/register";
  if (redirect_url)
    linkref = `/auth/register?redirect_url=${encodeURIComponent(redirect_url)}`;
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting, touchedFields },
  } = useForm({
    resolver: zodResolver(LoginSchema),
  });
  async function onSubmit(data) {
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
      const response = await fetch(`${BASE_URL}/api/auth/login`, options);
      const res = await response.json();
      if (res.status == 200) {
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
        toast.error("Error signing");
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
          <h3 className="text-4xl font-semibold">Welcome Back</h3>
          <p className="text-sm text-gray-500 mt-2">
            Welcome back! Please enter your details
          </p>
        </div>
        <form className="mt-10" onSubmit={handleSubmit(onSubmit)}>
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
              placeholder="your@email.com"
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
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 focus:outline-none checked:bg-blue-600"
                defaultChecked
                {...register("remember")}
              />
              <label
                htmlFor="remember"
                className="ml-2 block text-sm font-semibold text-gray-500 dark:text-gray-300"
              >
                Remember for 30 days
              </label>
            </div>
          </div>
          <div>
            <div className="text-center mt-6 w-full rounded-lg ">
              <button
                disabled={isSubmitting}
                className={`w-[100%] block border-none px-2 py-2 cursor-pointe text-white text-lg font-semibold rounded-md ${
                  isSubmitting ? "bg-blue-300" : "bg-brand"
                } `}
              >
                Sign in
              </button>
            </div>
          </div>
          <div className="  text-center  my-4">
            <span className="msg dark:text-white text-sm text-gray-600">
              Don't have an account?{" "}
              <a href={linkref} className="font-semibold text-blue-500">
                Sign up
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
