import { Eye, EyeSlash, ShieldStar } from "phosphor-react";
import { useForm } from "react-hook-form";
import { LoginSchema, SignUpSchema } from "../schema/LoginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
export default function () {
  return (
    <div className="md:p-16 bg-gray-200 min-h-screen">
      <div className="grid  min-w-[80vh] items-center bg-white grid-cols-1 md:grid-cols-2 ">
        <LoginAuthForm />
        {/* <SignUpAuthForm /> */}
        <AuthSidebar />
      </div>
    </div>
  );
}
function SignUpAuthForm() {
  const redirect_url = "";
  const [showPassword, SetShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting, touchedFields },
  } = useForm({
    resolver: zodResolver(SignUpSchema),
  });

  function onSubmit(data) {
    console.log(data);
  }
  return (
    <div className=" p-8 md:p-12 lg:p-28 xl:p-36 order-2 md:order-1">
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
                  isSubmitting ? "bg-blue-300" : "bg-blue-600"
                } `}
              >
                Sign in
              </button>
            </div>
          </div>
          <div className="  text-center  my-4">
            <span className="msg dark:text-white text-sm text-gray-600">
              Don't have an account?{" "}
              <a
                href={`/auth/register?redirect_url=${
                  redirect_url ? redirect_url : "/"
                }`}
                className="font-semibold text-blue-500"
              >
                Sign up
              </a>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
function LoginAuthForm() {
  const redirect_url = "";
  const [showPassword, SetShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting, touchedFields },
  } = useForm({
    resolver: zodResolver(LoginSchema),
  });

  function onSubmit(data) {
    console.log(data);
  }
  return (
    <div className=" p-8 md:p-12 lg:p-28 xl:p-36 order-2 md:order-1">
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
                  isSubmitting ? "bg-blue-300" : "bg-blue-600"
                } `}
              >
                Sign in
              </button>
            </div>
          </div>
          <div className="  text-center  my-4">
            <span className="msg dark:text-white text-sm text-gray-600">
              Don't have an account?{" "}
              <a
                href={`/auth/register?redirect_url=${
                  redirect_url ? redirect_url : "/"
                }`}
                className="font-semibold text-blue-500"
              >
                Sign up
              </a>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
function AuthSidebar() {
  return (
    <div className="order:1 md:order-2 flex h-[300px] md:h-full md:bg-gray-100 justify-center items-center">
      <div className="flex justify-center items-center">
        <div>
          <div>
            {/* <div className="h-[150px] w-[150px] rounded-full -top-[100px] bg-blue-600 "></div> */}
            <ShieldStar
              className="mx-auto"
              size={180}
              color="#634bd8"
              weight="fill"
            />
          </div>
          <div className="h-[120px] w-[200px] relative rounded-b-full  -top-[75px] bg-blue-600 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg  bg-opacity-0 "></div>
        </div>
      </div>
    </div>
  );
}
