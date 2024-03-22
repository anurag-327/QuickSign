import React from "react";
import { ShieldStar } from "phosphor-react";
const Landing = () => {
  return (
    <main className="relative flex flex-col items-center w-full py-6">
      {/* shadow */}
      <div>
        <div className="relative -mt-20">
          <div className="spotlight rotate-[20deg]"></div>
          <div className="spotlight"></div>
          <div className="spotlight rotate-[-20deg]"></div>
        </div>
      </div>
      {/* Introducing  */}
      <div className="mt-10 sm:mt-20">
        <span className=" px-4 text-sm text-blue-100 relative z-10 before:content-[''] before:block before:relative before:inset-0 before:h-0.5 before:rounded-full before:bg-gradient-to-r from-transparent before:-left-28 before:top-4 to-gray-300 after:content-[''] after:block after:relative after:inset-0 after:h-0.5 after:bg-gradient-to-r  after:left-28 after:rounded-full after:rotate-180 after:-top-3 ">
          Introducing
        </span>
      </div>
      {/* Brand name  */}
      <div className="flex flex-col items-center gap-2 p-4 mt-8 rounded-full ">
        <div className="flex flex-col">
          <h2 className="py-2 text-6xl font-black text-center text-transparent sm:text-8xl sm:text-start bg-gradient-to-b from-blue-800 to-pink-200 bg-clip-text">
            QuickSign
          </h2>
          <p className="mt-4 ml-0 text-sm font-bold text-center whitespace-pre-wrap sm:ml-8 sm:text-xl text-brandgray2 ">
            OAuth Provider for hastle free signups
          </p>
        </div>
        <a
          href="https://quicksign-playground.vercel.app/"
          target="_blank"
          className=" bg-blue-100 text-center z-10 w-fit text-gray-400 text-xs mt-4 mx-auto sm:text-base bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10  border py-0.5 px-10 border-gray-600 rounded-full"
        >
          <span>Try Now</span>
        </a>
      </div>

      {/* Forms  */}
      <div className="z-40 flex gap-2">
        <Card1 />
        <Card2 />
        <Card3 />
      </div>
      {/* Try Now btn  */}
      {/* <div className="mt-10 cursor-pointer">
        <div className="relative">
          <img src="./background.webp" className="w-96" alt="try now"></img>
          <span className="absolute font-bold  text-3xl text-brand z-20 top-[4.8rem] left-[8rem]">
            Try Now
          </span>
        </div>
      </div> */}
    </main>
  );
};

export default Landing;

function Card1() {
  return (
    <div className="z-20 mt-20 card ">
      <div>
        <div className="w-[350px] sm:w-[420px] relative translatecard1 bg-branddark rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border-2 border-gray-600">
          <div className="absolute font-extrabold text-white top-4 left-6">
            .
          </div>
          <div className="absolute font-extrabold text-white top-4 right-6">
            .
          </div>
          <div className="absolute font-extrabold text-white bottom-6 left-6">
            .
          </div>
          <div className="absolute font-extrabold text-white bottom-6 right-6">
            .
          </div>
          <div className="flex flex-col justify-center w-full p-8 mt-6 text-blue-100">
            <div className="flex flex-col items-center justify-center w-full gap-1 -mt-8 text-center">
              <ShieldStar size={50} className="mx-center" />
              <span className="font-semibold">Continue using QuickSign</span>
            </div>
            <div className="flex flex-col gap-4 mt-6">
              <div className="text-xs ">
                <span>Name</span>
                <div className="w-full px-4 py-2 mt-1 text-xs bg-gray-900 border border-gray-600 rounded-full">
                  John Doe
                </div>
              </div>
              <div className="text-xs ">
                <span>Email Address</span>
                <div className="w-full px-4 py-2 mt-1 text-xs bg-gray-900 border border-gray-600 rounded-full">
                  johndoe@gmail.com
                </div>
              </div>
              <div className="text-xs ">
                <span>Password</span>
                <div className="w-full px-4 py-2 mt-1 text-xs bg-gray-900 border border-gray-600 rounded-full">
                  ********
                </div>
              </div>
              <div className="text-xs ">
                <div className="w-full px-4 py-2 mt-1 text-xs font-semibold text-center text-black rounded-full bg-brand ">
                  Register to QuickSign
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Card2() {
  return (
    <div className="z-40 mt-20 image-container ">
      <div className="image">
        <div className="w-[350px] image sm:w-[420px] relative  bg-branddark rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border-2 border-gray-600">
          <div className="absolute font-extrabold text-white top-4 left-6">
            .
          </div>
          <div className="absolute font-extrabold text-white top-4 right-6">
            .
          </div>
          <div className="absolute font-extrabold text-white bottom-6 left-6">
            .
          </div>
          <div className="absolute font-extrabold text-white bottom-6 right-6">
            .
          </div>
          <div className="flex flex-col justify-center w-full p-8 mt-10 text-blue-100 image">
            <div className="flex flex-col items-center justify-center w-full gap-1 -mt-8 text-center">
              <ShieldStar size={50} className="mx-center" />
              <span className="font-semibold">Sign up using QuickSign</span>
            </div>
            <div className="mt-10">
              <div>
                <div className="text-xs">
                  <span>Email Address</span>
                  <div className="w-full px-4 py-2 mt-1 text-xs bg-gray-900 border border-gray-600 rounded-full">
                    johndoe@gmail.com
                  </div>
                  <div className="w-full py-2 mt-4 text-sm font-semibold text-center border border-gray-600 rounded-full">
                    <span className="mt-2">Continue</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-4 text-xs justify-evenly">
                  <div className="h-px bg-gray-600 w-[30%]"></div>
                  <div>OR</div>
                  <div className="h-px bg-gray-600 w-[30%]"></div>
                </div>
                <div className="text-sm">
                  <div className="w-full py-2 mt-4 text-center border border-gray-600 rounded-full">
                    <span className="absolute left-16 sm:left-24 sm:-mt-0.5">
                      <ShieldStar size={24} weight="fill" />
                    </span>
                    <span className="mt-2 ml-6 font-semibold">
                      Continue with QuickSign
                    </span>
                  </div>
                  <div className="w-full py-2 mt-4 text-center border border-gray-600 rounded-full">
                    <span className="absolute left-16 sm:left-24 sm:-mt-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="24"
                        height="24"
                        viewBox="0 0 48 48"
                      >
                        <path
                          fill="#fbc02d"
                          d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                        ></path>
                        <path
                          fill="#e53935"
                          d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                        ></path>
                        <path
                          fill="#4caf50"
                          d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                        ></path>
                        <path
                          fill="#1565c0"
                          d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                        ></path>
                      </svg>
                    </span>
                    <span className="mt-2 font-semibold">
                      Continue with Google
                    </span>
                  </div>
                </div>
                <div className="mt-4 text-xs text-center">
                  <span>Don't have an account?Sign up</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Card3() {
  return (
    <div className="z-20 mt-20 card ">
      <div>
        <div className="w-[350px] sm:w-[420px] relative translatecard3 bg-branddark rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border-2 border-gray-600">
          <div className="absolute font-extrabold text-white top-4 left-6">
            .
          </div>
          <div className="absolute font-extrabold text-white top-4 right-6">
            .
          </div>
          <div className="absolute font-extrabold text-white bottom-6 left-6">
            .
          </div>
          <div className="absolute font-extrabold text-white bottom-6 right-6">
            .
          </div>
          <div className="flex flex-col justify-center w-full p-8 mt-10 text-blue-100">
            <div className="flex flex-col items-center justify-center w-full gap-1 -mt-8 text-center">
              <span className="font-semibold">
                Register your app on QuickSign
              </span>
            </div>
            <div className="flex flex-col gap-4 mt-6">
              <div className="text-xs ">
                <span>Name</span>
                <div className="w-full px-4 py-2 mt-1 text-xs bg-gray-900 border border-gray-600 rounded-full">
                  Quick Sign
                </div>
              </div>
              <div className="text-xs ">
                <span>Description</span>
                <div className="w-full px-4 py-2 mt-1 text-xs bg-gray-900 border border-gray-600 rounded-full">
                  OAuth Provider for hastle free signups
                </div>
              </div>
              <div className="text-xs ">
                <span>Homepage URL</span>
                <div className="w-full px-4 py-2 mt-1 text-xs bg-gray-900 border border-gray-600 rounded-full">
                  https://quick-sign.vercel.app/
                </div>
              </div>
              <div className="text-xs ">
                <span>CallbackURL</span>
                <div className="w-full px-4 py-2 mt-1 text-xs bg-gray-900 border border-gray-600 rounded-full">
                  https://quick-sign-playgorund.vercel.app/auth/login
                </div>
              </div>
              <div>
                <div className="w-full px-4 py-2 mt-1 text-xs font-semibold text-center text-black rounded-full cursor-pointer bg-brand">
                  Register
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
