import React, { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import Logo from "../assets/Logo.png";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import toast from "react-hot-toast";
import { valiateLogin } from "../helper/validate";
import { Eye, ArrowRight } from "phosphor-react";
import { Link } from "react-router-dom";
import { BASE_URL } from "../base";
import Loader from "../components/Loader";
import { Swap, CodesandboxLogo, CheckCircle } from "phosphor-react";
import { getToken } from "../helper/tokenHandler";
const LoginComponent = ({
  application,
  clientId,
  clientSecret,
  redirect_url,
}) => {
  console.log(application);
  const navigate = useNavigate();
  const [loginLoading, setLoginLoading] = useState(false);
  async function authorise() {
    setLoginLoading(true);
    try {
      const token = getToken();
      if (token) {
        (async function () {
          let options = {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${token.token}`,
            },
            body: JSON.stringify({
              clientId,
              clientSecret,
            }),
          };
          const response = await fetch(
            `${BASE_URL}/api/OAuth/authorize`,
            options
          );
          const data = await response.json();
          if (data.status === 201) {
            setLoginLoading(false);
            console.log(data);
            toast.success("Authorisation successfull");
            let redirect_url =
              application.callbackURL + `?status=true&token=${data.token}`;
            console.log(redirect_url);
            window.location.href = redirect_url;
          } else {
            console.log("Failed to authorise");
            console.log(data);
            setLoginLoading(false);
          }
        })();
      } else {
        console.log("Access token missing");
        setLoginLoading(false);
        console.log(window.location.href);
        toast.error("No active sessions found");
        flag = false;
        navigate(`/auth/login?redirect_url=${window.location.href}`);
      }
    } catch (err) {
      setLoginLoading(false);
      toast.error(err);
    }
  }
  function abortAuth() {
    setLoginLoading(false);
    if (redirect_url) window.location.href = redirect_url;
    else window.location.href = application.homepageURL;
  }

  let flag = true;
  useEffect(() => {}, []);

  return (
    application && (
      <div className="  sm:w-[420px] bg-white p-2 sm:p-4 w-[95%] font-poppins sm:h-auto   border  border-gray-300  rounded-2xl  flex flex-col gap-4 sm:justify-start  justify-around items-center">
        <Toaster position="top-center" reverseOrder />

        <div className="flex justify-center gap-3 items-center">
          {/* <CodesandboxLogo size={80} color="#000000" weight="light" /> */}
          <img
            className="w-[60px] mr-2 rounded-full border-gray-500"
            src={application.logo}
          />
          <hr className="w-[40px]" />
          <CheckCircle size={32} color="#bc9b80" weight="fill" />
          <hr className="w-[40px]" />
          <img
            className="w-[60px] ml-2  rounded-full border-gray-500"
            src={
              "https://github-production-user-asset-6210df.s3.amazonaws.com/98267696/273621841-381eb2f4-0245-417b-8b71-56ff3ead9797.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20240129%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240129T115313Z&X-Amz-Expires=300&X-Amz-Signature=7e827c8961323a7d6c8e22b98a6a59e5c083201c05c7dfea0af18f6dd459d74d&X-Amz-SignedHeaders=host&actor_id=98267696&key_id=0&repo_id=613187554"
            }
          />
        </div>
        <div className="text-center">
          <h2 className="text-2xl spa font-semibold">Authorise account...</h2>
          <h2 className="text-sm">
            to continue to{" "}
            <a
              href={application.homepageURL}
              rel="noopener noreferrer"
              target="blank"
              className="text-green-500 text-lg font-semibold"
            >
              {application.name}
            </a>{" "}
          </h2>
        </div>
        <div className="flex flex-col gap-2 max-w-[300px] w-full">
          <button
            onClick={authorise}
            className={`rounded-md font-sans cursor-pointer border-none py-1 px-4 w-full font-semibold bg-green-500 text-white text-lg ${
              loginLoading && "bg-green-200 cursor-not-allowed "
            }`}
          >
            Authorise {application.name}
          </button>
          <button
            disabled={loginLoading}
            onClick={abortAuth}
            className={`rounded-md cursor-pointer py-1 px-4 w-full font-sans font-semibold border border-gray-400  bg-white  ${
              loginLoading && "bg-gray-200 cursor-not-alloweds"
            } text-black text-lg`}
          >
            Cancel
          </button>
        </div>

        <div className="px-7 font-sans">
          <p className="text-sm  text-justify ">
            By Continuing this you provide your consent to share your details
            with {application.name}. Before using this app, you can review
            Quicksign’s{" "}
            <a
              href="https://quicksign-doc.vercel.app/"
              rel="noopener noreferrer"
              target="blank"
              className="text-blue-500 mr-2 font-semibold"
            >
              privacy policy
            </a>
            and
            <a
              href="https://quicksign-doc.vercel.app/"
              rel="noopener noreferrer"
              target="blank"
              className="text-blue-500 font-semibold ml-2"
            >
              Terms of service
            </a>
            .
          </p>
        </div>
      </div>
    )
  );
};

export default LoginComponent;
