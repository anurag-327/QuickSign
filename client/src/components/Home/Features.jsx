import React from "react";

const Features = () => {
  return (
    <section className="container border-gray-700 mx-auto px-4  py-4">
      <hr class="w-full h-0 border-t mt-8 border-gray-900 " />

      <div className="mt-20 sm:mt-20 w-full flex justify-center">
        <span className=" px-4 text-base text-blue-100 relative z-10 before:content-[''] before:block before:relative before:inset-0 before:h-0.5 before:rounded-full before:bg-gradient-to-r from-transparent before:-left-36 before:top-3 to-gray-300 after:content-[''] after:block after:relative after:inset-0 after:h-0.5 after:bg-gradient-to-r  after:left-36 after:rounded-full after:rotate-180 after:-top-2.5 ">
          Why QuickSign
        </span>
      </div>
      <div className="flex sm:flex-row flex-col items-center gap-12 sm:gap-2 my-16 justify-center">
        <div className="w-fit image-container rounded-lg flex justify-center items-center flex-col shadow-md">
          <img
            className="w-16 aspect-square image"
            src="/SingleSignOn.webp"
            alt="seamless authentication"
          />
          <h2 className="text-xs mt-1 text-gray-400 font-sans ">
            Seamless Authentication
          </h2>
        </div>
        <div>
          <div className=" w-14 sm:w-20 rotate-90 sm:rotate-0 h-px bg-gray-500 relative">
            <div className="absolute flex justify-center items-center text-gray-300 w-6 h-6 bg-transparent -top-3 left-4 sm:left-7 border-gray-600 rounded-full border">
              <span className="-mt-2.5">.</span>
            </div>
          </div>
        </div>
        <div className="w-fit image-container rounded-lg flex justify-center items-center flex-col shadow-md">
          <img
            className="w-16 image aspect-square"
            src="/SocialLogin.webp"
            alt="seamless authentication"
          />
          <h2 className="text-xs mt-1 text-gray-400 font-sans ">
            User-Friendly Interface
          </h2>
        </div>
        <div>
          <div className=" w-14 sm:w-20 rotate-90 sm:rotate-0 h-px bg-gray-500 relative">
            <div className="absolute flex justify-center items-center text-gray-300 w-6 h-6 bg-transparent -top-3 left-4 sm:left-7 border-gray-600 rounded-full border">
              <span className="-mt-2.5">.</span>
            </div>
          </div>
        </div>
        <div className="w-fit image-container rounded-lg flex justify-center items-center flex-col shadow-md">
          <img
            className="w-16 image aspect-square"
            src="/Password.webp"
            alt="seamless authentication"
          />
          <h2 className="text-xs mt-1 text-gray-400 font-sans ">
            Minimal Data Storage
          </h2>
        </div>
        <div>
          <div className=" w-14 sm:w-20 rotate-90 sm:rotate-0 h-px bg-gray-500 relative">
            <div className="absolute flex justify-center items-center text-gray-300 w-6 h-6 bg-transparent -top-3 left-4 sm:left-7 border-gray-600 rounded-full border">
              <span className="-mt-2.5">.</span>
            </div>
          </div>
        </div>
        <div className="w-fit image-container rounded-lg flex justify-center items-center flex-col shadow-md">
          <img
            className="w-16 image aspect-square"
            src="/MagicLink.webp"
            alt="seamless authentication"
          />
          <h2 className="text-xs mt-1 text-gray-400 font-sans ">
            Robust Security
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Features;
