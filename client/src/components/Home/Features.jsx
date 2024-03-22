import React from "react";

const Features = () => {
  return (
    <section className="container px-4 py-4 mx-auto border-gray-700">
      <hr class="w-full h-0 border-t mt-4 border-gray-900 " />

      <div className="flex justify-center w-full mt-20 sm:mt-20">
        <span className=" px-4 text-base text-blue-100 relative z-10 before:content-[''] before:block before:relative before:inset-0 before:h-0.5 before:rounded-full before:bg-gradient-to-r from-transparent before:-left-36 before:top-3 to-gray-300 after:content-[''] after:block after:relative after:inset-0 after:h-0.5 after:bg-gradient-to-r  after:left-36 after:rounded-full after:rotate-180 after:-top-2.5 ">
          Why QuickSign
        </span>
      </div>
      <div className="flex flex-col items-center justify-center gap-12 my-16 sm:flex-row sm:gap-2">
        <div className="flex flex-col items-center justify-center rounded-lg shadow-md w-fit image-container">
          <img
            className="w-16 aspect-square image"
            src="/SingleSignOn.webp"
            alt="seamless authentication"
          />
          <h2 className="mt-1 font-sans text-xs text-gray-400 ">
            Seamless Authentication
          </h2>
        </div>
        <div>
          <div className="relative h-px rotate-90 bg-gray-500  w-14 sm:w-20 sm:rotate-0">
            <div className="absolute flex items-center justify-center w-6 h-6 text-gray-300 bg-transparent border border-gray-600 rounded-full -top-3 left-4 sm:left-7">
              <span className="-mt-2.5">.</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg shadow-md w-fit image-container">
          <img
            className="w-16 image aspect-square"
            src="/SocialLogin.webp"
            alt="seamless authentication"
          />
          <h2 className="mt-1 font-sans text-xs text-gray-400 ">
            User-Friendly Interface
          </h2>
        </div>
        <div>
          <div className="relative h-px rotate-90 bg-gray-500  w-14 sm:w-20 sm:rotate-0">
            <div className="absolute flex items-center justify-center w-6 h-6 text-gray-300 bg-transparent border border-gray-600 rounded-full -top-3 left-4 sm:left-7">
              <span className="-mt-2.5">.</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg shadow-md w-fit image-container">
          <img
            className="w-16 image aspect-square"
            src="/Password.webp"
            alt="seamless authentication"
          />
          <h2 className="mt-1 font-sans text-xs text-gray-400 ">
            Minimal Data Storage
          </h2>
        </div>
        <div>
          <div className="relative h-px rotate-90 bg-gray-500  w-14 sm:w-20 sm:rotate-0">
            <div className="absolute flex items-center justify-center w-6 h-6 text-gray-300 bg-transparent border border-gray-600 rounded-full -top-3 left-4 sm:left-7">
              <span className="-mt-2.5">.</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg shadow-md w-fit image-container">
          <img
            className="w-16 image aspect-square"
            src="/MagicLink.webp"
            alt="seamless authentication"
          />
          <h2 className="mt-1 font-sans text-xs text-gray-400 ">
            Robust Security
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Features;
