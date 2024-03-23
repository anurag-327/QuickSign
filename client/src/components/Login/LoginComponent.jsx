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
    <div className="order-2 w-full p-0  md:p-12 lg:p-24 xl:p-28 md:order-1">
      <div>
        <div>
          <h3 className="text-4xl font-semibold">Welcome Back</h3>
          <p className="mt-2 text-sm text-gray-500">
            Welcome back! Please enter your details
          </p>
        </div>
        <form className="mt-10" onSubmit={handleSubmit(onSubmit)}>
          <div className="my-4">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              {...register("email")}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="your@email.com"
            />
            {touchedFields.email && errors.email && (
              <div className="text-sm text-red-600">{errors.email.message}</div>
            )}
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
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
                className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500 focus:outline-none checked:bg-blue-600"
                defaultChecked
                {...register("remember")}
              />
              <label
                htmlFor="remember"
                className="block ml-2 text-sm font-semibold text-gray-500 dark:text-gray-300"
              >
                Remember for 30 days
              </label>
            </div>
          </div>
          <div>
            <div className="w-full mt-6 text-center rounded-lg ">
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
          <div className="my-4 text-center ">
            <span className="text-sm text-gray-600 msg dark:text-white">
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
