import React, { useContext } from "react";
import { UserContext } from "../../Context/ContextAPI";
import { getToken } from "../../helper/tokenHandler";
import { BASE_URL } from "../../base";
import toast from "react-hot-toast";
import { WarningOctagon } from "phosphor-react";
const AuthorizedApps = () => {
  const { authorizations, setAuthorizations } = useContext(UserContext);
  const token = getToken();
  function Card({ data }) {
    async function removeAuthorization() {
      let options = {
        method: "Delete",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${token.token}`,
        },
        body: JSON.stringify({
          clientId: data.clientId._id,
        }),
      };
      const res = await fetch(
        `${BASE_URL}/api/oauth/removeauthorization`,
        options
      );
      const result = await res.json();
      if (result.status == 200) {
        toast.success("Successfully Removed!");
        setAuthorizations(
          authorizations.filter((item) => item.clientId === data.clientId._id)
        );
      } else {
        console.log(result, data);
        toast.error("Error removing Authorization!");
      }
    }
    return (
      <>
<<<<<<< HEAD
        <div className="px-4 py-2 shadow-md border border-gray-600 w-[95%]  flex flex-col gap-2  rounded-lg w">
=======
        <div className="px-4 py-2 bg-gray-50 shadow-md border border-gray-200 w-[95%]  flex flex-col gap-2  rounded-lg w">
>>>>>>> lightmode
          <div className=" flex justify-between flex-wrap gap-2 items-center  ">
            <div className="flex gap-2 items-center">
              <img
                className="w-[26px] h-[26px] rounded-full"
                src={data.clientId.logo}
                alt="logo"
              />
              <h2 className="font-bold text-sm">{data.clientId.name}</h2>
            </div>
            <button
              onClick={removeAuthorization}
<<<<<<< HEAD
              className="p-1 text-xs font-semibold border border-gray-600 text-red-400 float-right rounded-md "
=======
              className="p-1 text-xs font-semibold border border-gray-300 text-red-400 float-right rounded-lg "
>>>>>>> lightmode
            >
              <WarningOctagon
                className="inline text-red-400 mr-2"
                size={22}
                weight="fill"
              />
              Remove Authorization
            </button>
          </div>
<<<<<<< HEAD
=======
          <div>
            {/* <p className="text-sm mt-1 text-gray-800">
              {data.clientId.description}
            </p> */}
          </div>
>>>>>>> lightmode
        </div>
      </>
    );
  }
  return (
<<<<<<< HEAD
    <div className="w-full p-3">
=======
    <div className="w-full px-1 py-3">
>>>>>>> lightmode
      <h2 className=" mb-4 w-full text-2xl font-dbold">Authorized Apps</h2>
      <div className="flex justify-center mt-6 w-full">
        {authorizations.length == 0 ? (
          <span className="font-semibold text-center w-full mx-auto">
            You have not authorized to any application
          </span>
        ) : (
<<<<<<< HEAD
          <div className="flex gap-2 w-full flex-wrap flex-grow-0">
=======
          <div className="flex gap-2 w-full flex-wrap flex-col flex-grow-0">
>>>>>>> lightmode
            {authorizations.map((data, index) => (
              <Card key={data._id} data={data} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthorizedApps;
