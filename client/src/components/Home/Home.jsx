import React from "react";
import { Swap, CodesandboxLogo } from "phosphor-react";
const Home = () => {
  return (
    <div className="sm:w-[50%] w-[95%]   flex flex-col gap-10  justify-center items-center">
      <div className=" flex flex-col justify-center items-center">
        <CodesandboxLogo
          className=""
          size={100}
          color="#000000"
          weight="light"
        />
        <h2 className="text-2xl sm:text-3xl text-center dark:text-white font-bold  mt-3">
          {" "}
          QuickSign
        </h2>
        <p className="mt-1 dark:text-white text-center font-poppins">
          An OAuth Provider for hastle free signups
        </p>
      </div>
      <div className="flex flex-col gap-5 w-[100%] items-center">
        <a
          className="bg-violet-500 w-[80%] sm:w-[50%] hover:bg-violet-400 no-underline text-center font-bold text-white p-3 rounded-lg"
          href="/auth/login"
        >
          Sign In to Continue
        </a>
      </div>
    </div>
  );
};

export default Home;
