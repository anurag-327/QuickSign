import React, { useContext } from "react";
import { UserContext } from "../../Context/ContextAPI";
import {
  ArrowSquareOut,
  Gear,
  GearSix,
  Globe,
  LinkSimpleHorizontal,
  PlusCircle,
} from "phosphor-react";
const OAuthApps = () => {
  const { applications } = useContext(UserContext);
  return (
    <div className=" w-full">
      <h2 className="text-start text-xl  font-bold"> OAuth Apps</h2>
      <hr className="h-[1.5px] bg-gray-300 mt-4" />
      {applications.length > 0 ? (
        <div className="flex mt-8 flex-col flex-wrap justify-start w-full gap-4 mx-auto">
          {applications.map((data, index) => (
            <div
              key={data._id}
              className=" w-full flex justify-between mx-auto rounded-md border-gray-300 px-2 sm:px-4 py-2 gap-3 bg-white"
            >
              <a href={`/dashboard/application/${data._id}`} className="w-full">
                <div className="flex w-full gap-2 justify-start items-center">
                  <div className="h-8 w-8 flex justify-center items-center bg-brand aspect-square">
                    <span className="text-white capitalize font-semibold">
                      {data.name[0]}
                    </span>
                  </div>
                  <div>
                    <span className="font-semibold">{data.name}</span>
                  </div>
                </div>
              </a>
              <div className="flex gap-2 sm:gap-4 justify-center items-center">
                <a href={`${data.homepageURL}`}>
                  <div>
                    <ArrowSquareOut size={25} />
                  </div>
                </a>
                <a href={`/dashboard/application/${data._id}`}>
                  <div>
                    <GearSix size={25} />
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="w-full mt-10 text-center flex flex-col gap-4">
          <h2 className="text-lg font-semibold">No OAuth Apps Found</h2>
          <a
            className={` font-semibold bg-green-500  w-fit mx-auto flex gap-2 rounded-md px-2 items-center py-2`}
            href="/dashboard?tab=addoauth"
          >
            <PlusCircle size={25} color="#ffffff" weight="light" />
            Add New OAuth App
          </a>
        </div>
      )}
    </div>
  );
};

export default OAuthApps;
