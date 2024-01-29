import {
  CodesandboxLogo,
  Shield,
  ShieldChevron,
  ShieldStar,
} from "phosphor-react";
import React from "react";
function Icons() {
  return (
    <div className="w-[100vw] absolute top-[15%] right-0 left-0 bottom-0 ">
      <div className="flex flex-col gap-10">
        <div className="icons1">
          <div className="icon">🔐</div>
          <div className="icon">🔑</div>
          <div className="icon">🔓</div>
          <div className="icon">🔗</div>
          <div className="icon">🚀</div>
        </div>
        <div className="icons2">
          <div className="icon">🔐</div>
          <div className="icon">🔑</div>
          <div className="icon">🔓</div>
          <div className="icon">🔗</div>
          <div className="icon">🚀</div>
        </div>
        <div className="icons3">
          <div className="icon">🔐</div>
          <div className="icon">🔑</div>
          <div className="icon">🔓</div>
          <div className="icon">🔗</div>
          <div className="icon">🚀</div>
        </div>
        <div className="icons4">
          <div className="icon">🔐</div>
          <div className="icon">🔑</div>
          <div className="icon">🔓</div>
          <div className="icon">🔗</div>
          <div className="icon">🚀</div>
        </div>
      </div>
    </div>
  );
}
const Landing = () => {
  return (
    <>
      {" "}
      <section className="w-full bg-gray-100 relative py-6 flex mt-10 sm:mt-0 flex-col gap-20 min-h-[70vh]   justify-center items-center">
        {/* <Icons /> */}
        <div className="flex flex-col rounded-full p-4 items-center sm:flex-row gap-2 ">
          <div className=" h-fit">
            <ShieldStar className="" size={200} color="#634bd8" weight="fill" />
          </div>
          <div>
            <h2 className="text-5xl font-black font-sans sm:text-8xl text-center sm:text-start">
              Quicksign
            </h2>
            <p className="mt-4 ml-0 sm:ml-8 text-center text-xl font-bold text-gray-500 ">
              OAuth Provider for hastle free signups
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row sm:gap-8 gap-4">
          <a
            href="https://quicksign-doc.vercel.app/"
            className=" font-semibold text-lg bg-white  shadow-md shadow-gray-300 border px-8 py-2 rounded-full"
          >
            Documentation
          </a>
          <a
            href="/dashboard"
            className="bg-blue-600 text-lg font-semibold text-white px-8 py-2 rounded-full"
          >
            Dashboard
          </a>
        </div>
      </section>
    </>
  );
};

export default Landing;
