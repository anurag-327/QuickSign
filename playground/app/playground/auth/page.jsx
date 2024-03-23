"use client";
import { ShieldStar } from "@phosphor-icons/react/dist/ssr";
export default function () {
  async function initiateQuickSign() {
    window.location.href = `${process.env.NEXT_PUBLIC_QUICKSIGN_URL}?clientId=${process.env.NEXT_PUBLIC_QUICKSIGN_CLIENTID}&clientSecret=${process.env.NEXT_PUBLIC_QUICKSIGN_CLIENTSECRET}`;
  }
  return (
    <div className="flex items-center justify-center w-full min-h-screen">
      <div className="z-40 mt-20 card animatecard2 ">
        <div>
          <div className="w-[350px] sm:w-[420px] relative  bg-branddark rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border-2 border-gray-600">
            <div className="flex flex-col justify-center w-full p-8 mt-10 text-blue-100">
              <div className="flex flex-col items-center justify-center w-full gap-1 -mt-8 text-center">
                <ShieldStar size={40} weight="fill" className="mx-center" />
                <span className="font-semibold">Sign up using QuickSign</span>
              </div>
              <div className="mt-10">
                <div>
                  <div className="text-xs">
                    <span>Email Address</span>
                    <input
                      type="email"
                      placeholder="johndoe@gmail.com"
                      className="w-full px-4 py-2 mt-1 text-xs text-gray-300 bg-gray-900 border border-gray-600 rounded-full outline-none resize-none"
                    ></input>
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
                    <button
                      onClick={initiateQuickSign}
                      className="w-full py-2 mt-4 text-center bg-blue-600 rounded-full"
                    >
                      <span className="absolute left-16 sm:left-24">
                        <ShieldStar
                          size={20}
                          weight="fill"
                          className="mx-center"
                        />
                      </span>
                      <span className="mt-2 font-semibold">
                        Continue with QuickSign
                      </span>
                    </button>
                    <button className="w-full py-2 mt-4 text-center border border-gray-600 rounded-full">
                      <span className="absolute left-16 sm:left-24 -mt-0.5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="22"
                          height="22"
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
                    </button>
                  </div>
                  <div className="mt-4 text-xs text-center">
                    <span>
                      Don't have an account?
                      <a
                        className="ml-1 text-blue-400 underline"
                        href="http://localhost:5173/auth/login?redirect_url=http://localhost:3000/playground/auth"
                      >
                        Sign up
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
