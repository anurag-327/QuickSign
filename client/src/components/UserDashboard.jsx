import React, { useContext } from "react";
import { UserContext } from "../Context/ContextAPI";
import CompanyCard from "./CompanyCard";
import Footer from "./Footer";
import AccessTable from "./AccessTable";
const Dashboard = () => {
  const { user } = useContext(UserContext);
  return (
    <div className=" mt-20 font-sans text-white text-center w-full">
      <div className="text-2xl mt-5 font-bold ">DASHBOARD</div>
      <div className="mt-1">Organizations that have access to your account are displayed below</div>
      <div className="flex flex-row gap-2 flex-wrap items-center justify-center mt-1 w-full ">
        {user.access.length >= 1 ? (
          <div className="w-[50%] sm:w-[90%]  ">
            <AccessTable organizations={user.access} />
        </div>) : (
          <h1 className="font-bold">You have not logined to any account using quicksign..</h1>
        )}
      </div>
      
    </div>
  );
};

export default Dashboard;
