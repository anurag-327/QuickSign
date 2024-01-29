import React, { useContext } from "react";
import { UserContext } from "../../Context/ContextAPI";
import { Globe, LinkSimpleHorizontal, PlusCircle } from "phosphor-react";
const OAuthApps = () => {
  const { applications } = useContext(UserContext);
  return (
    <div className="px-2 w-full">
      <h2 className="text-start text-2xl font-bold"> OAuth Apps</h2>
      {applications.length > 0 ? (
        <div className="flex flex-col flex-wrap w-full gap-4 mx-auto mt-8 sm:w-fit sm:flex-row  ">
          {applications.map((data, index) => (
            <a
              key={data._id}
              href={`/dashboard/application/${data._id}`}
              className=" w-[95%] min-h-[150px] mx-auto md:w-[45%]  shadow-md border border-gray-200  px-2 py-2 rounded-lg flex flex-col gap-3"
            >
              <span className="font-[500] ">{data.name}</span>
              <span className="flex gap-2 items-center w-full whitespace-nowrap overflow-hidden text-sm">
                <Globe size={20} color="#0000ff" />
                <span className="w-full overflow-hidden">
                  {data.description}
                </span>
              </span>
              <span className="flex w-full gap-2 overflow-hidden text-sm whitespace-nowrap">
                <LinkSimpleHorizontal size={20} color="#0000ff" />
                {data.homepageURL}
              </span>

              <p className="px-2 text-blue-900  text-sm underline">
                Configure Project
              </p>
            </a>
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
