import React, { useContext } from "react";
import { UserContext } from "../Context/ContextAPI";
import CompanyCard from "./CompanyCard";
import Footer from "./Footer";
const Dashboard = () => {
  const { user } = useContext(UserContext);
  return (
    <div className=" mt-20 text-center w-full">
      <div className="text-2xl font-bold text-gray-400">DASHBOARD</div>
      <div>Organizations that have access to your account are displayed below</div>
      <div className="flex flex-row gap-2 flex-wrap items-center justify-center mt-5 w-full ">
        {user.access.length >= 1 ? (
          <div className="flex flex-row gap-2 flex-wrap items-center justify-center mt-5 w-full ">
            {
                user.access.map((item) => (<CompanyCard key={item._id} item={item} />))
            }
        </div>) : (
          <h1 className="font-bold">You have not logined to any account using quicksign..</h1>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
