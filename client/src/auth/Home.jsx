import React, { useState, useEffect } from "react";
import LoginComponent from "./LoginComponent";
import { useSearchParams } from "react-router-dom";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import { BASE_URL } from "../base";
import toast from "react-hot-toast";
import { getToken } from "../helper/tokenHandler";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const [pageloading, setPageLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const [application, setApplication] = useState();
  const [error, setError] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  let clientId,
    clientSecret,
    redirect_url = "";
  for (const entry of searchParams.entries()) {
    const [param, value] = entry;
    if (param === "clientId") clientId = value;
    if (param === "clientSecret") clientSecret = value;
    if (param === "redirect_url") redirect_url = value;
  }
  console.log(redirect);
  function redirect() {
    if (redirect_url) window.location.href = redirect_url;
    else window.location.href = "https://quick-sign.vercel.app/";
  }
  let flag = true;
  useEffect(() => {
    if (flag == true) {
      setPageLoading(true);
      if (clientId != undefined && clientSecret != undefined) {
        console.log("credentials Exist");
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
            const response = await fetch(`${BASE_URL}/api/OAuth`, options);
            const data = await response.json();
            if (data.status === 200) {
              setError(false);
              setApplication(data.application);
              if (data.authorization === true) {
                console.log("Already Authorised");
                flag = false;
                let redirect_url =
                  data.application.callbackURL +
                  `?status=true&token=${data.token}`;
                window.location.href = redirect_url;
              } else {
                console.log("Not Authorized");
                setPageLoading(false);
                setError(false);
              }
            } else {
              flag = false;
              console.log("Failed to authorise");
              console.log(data);
              setPageLoading(false);
              setError(true);
              setErrorMessage(data.message);
            }
          })();
        } else {
          console.log("Access token missing");
          setPageLoading(false);
          setError("No active Session Found");
          flag = false;
          navigate(
            `/auth/login?redirect_url=${encodeURIComponent(
              window.location.href
            )}`
          );
        }
        flag = false;
      } else {
        console.log("Credentials Missing");
        toast.error("Missing credentials");
        setPageLoading(false);
        setError(true);
        setErrorMessage("Missing OAuth Credentials");
        flag = false;
      }
      flag = false;
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen font-sans">
      {pageloading ? (
        <>
          <Loader /> <div className="mt-2 ">Verify Application...</div>
        </>
      ) : error ? (
        <>
          <div className="flex flex-col items-center justify-center gap-6">
            <p className="font-semibold sm:text-xl">{errorMessage}</p>
            <button
              onClick={redirect}
              className="px-8 py-2 text-white border rounded-lg bg-zinc-500 border-zinc-500"
            >
              Back
            </button>
          </div>
        </>
      ) : (
        <>
          {application ? (
            <LoginComponent
              application={application}
              clientId={clientId}
              clientSecret={clientSecret}
              redirect_url={redirect_url}
            />
          ) : (
            <div>
              <p className="font-semibold sm:text-xl">{errorMessage}</p>
              <button
                onClick={redirect}
                className="px-8 py-2 text-white border rounded-lg bg-zinc-500 border-zinc-500"
              >
                Back
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Home;
