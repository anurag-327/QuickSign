import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import { getToken } from "../helper/tokenHandler";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../base";
import Slider from "../components/Slider";
import ApplicationDashboard from "../components/DashboardComponents/ApplicationDashboard";
import Footer from "../components/Footer";
import Header from "../components/UI/Header";
const Application = () => {
  const id = useParams().id;
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [application, setApplication] = useState();
  const [error, setError] = useState(false);
  const token = getToken();
  useEffect(() => {
    if (!getToken()) {
      navigate("/");
    } else {
      (async function () {
        let options = {
          method: "GET",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${token.token}`,
          },
        };
        const res = await fetch(
          `${BASE_URL}/api/data/getApplication/${id}`,
          options
        );
        const result = await res.json();
        if (result.status == 200) {
          setLoading(false);
          setApplication(result.data);
        } else {
          console.log(result);
          setLoading(false);
          setError(true);
          navigate("/dashboard");
        }
      })();
    }
  }, []);
  const tab = { id };
  return (
    <>
      {loading === false ? (
        <>
          <Header />
          <section className=" w-[95%]  md:w-[80%] mx-auto gap-5  py-10 md:flex-row flex flex-col">
            <Slider tab={tab} />
            <ApplicationDashboard
              application={application}
              setApplication={setApplication}
            />
          </section>
          <Footer />
        </>
      ) : (
        <div className="w-[100%] h-[100vh] flex sm:flex-col justify-center items-center">
          <Loader />
          <div className="ml-8 sm:ml-0  sm:mt-4">
            Setting up the dashboard...
          </div>
        </div>
      )}
    </>
  );
};

export default Application;
