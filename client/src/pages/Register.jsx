import React, { useEffect, useState } from "react";
import { useSearchParams } from 'react-router-dom';
import { Toaster } from "react-hot-toast";
import LoginBanner from "../components/LoginBanner";
import RegisterOrganization from "../components/RegisterOrganization";
import RegisterUserComponent from "../components/RegisterUserComponent"
const Login = () => {
    const [searchParams] = useSearchParams(); 
	let type;
	for (const entry of searchParams.entries()) 
	{
		const [param, value] = entry;
		type = value;
    }
  return (
    <section className="flex sm:flex-col   gap-1 justify-center items-center">
      <Toaster position="top-center" reverseOrder />
      <LoginBanner/>
      {
        type==="user"&&<RegisterUserComponent/>
      }
      {
        type==="organization"&&<RegisterOrganization/>
      }
    </section>
  );
};

export default Login;
