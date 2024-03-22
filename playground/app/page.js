import { ShieldStar } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center w-full min-h-screen py-6 bg-grid">
      {/* shadow */}
      {/* <div>
        <div className="relative -mt-20">
          <div className="spotlight rotate-[20deg]"></div>
          <div className="spotlight"></div>
          <div className="spotlight rotate-[-20deg]"></div>
        </div>
      </div> */}
      {/* Introducing  */}
      <div className="mt-20 sm:mt-10">
        <span className=" px-4 font-mono text-sm text-blue-100 relative z-10 before:content-[''] before:block before:relative before:inset-0 before:h-0.5 before:rounded-full before:bg-gradient-to-r from-transparent before:-left-28 before:top-4 to-gray-300 after:content-[''] after:block after:relative after:inset-0 after:h-0.5 after:bg-gradient-to-r  after:left-28 after:rounded-full after:rotate-180 after:-top-3 ">
          Introducing
        </span>
      </div>
      {/* Brand name  */}
      <div className="flex flex-col items-center gap-2 p-4 mt-8 rounded-full sm:flex-row ">
        <div>
          <h2 className="py-2 text-6xl font-black text-center text-transparent sm:text-8xl sm:text-start bg-gradient-to-b from-blue-800 to-pink-200 bg-clip-text">
            QuickSign
          </h2>
          <p className="mt-4 ml-0 font-mono text-center text-white whitespace-pre-wrap sm:ml-8 text-brandgray2 ">
            OAuth Provider for hastle free signups
          </p>
        </div>
      </div>
      {/* Try Now  */}
      <a
        className="text-white hover:bg-blue-400 transition duration-100 border border-gray-600 mt-5 py-0.5 px-4 rounded-full"
        href="/playground/auth"
      >
        Try Now
      </a>
    </main>
  );
}

export function Navbar() {
  return (
    <>
      <div className="flex items-center w-full mt-8 text-gray-400 justify-evenly ">
        <div className="">
          <a className="font-mono " href="https://quicksign-doc.vercel.app/">
            View Docs
          </a>
        </div>
        <a href="/" className="font-sans text-2xl font-bold">
          <ShieldStar
            size={50}
            weight="fill"
            className="mt-2 sm:ml-16 text-branddark2 hover:text-branddark"
          />
        </a>
        <a
          href="https://github.com/anurag-327/QuickSign"
          className=" bg-blue-100 font-mono bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10  border py-0.5 px-4 border-gray-600 rounded-full"
        >
          View on Github
        </a>
      </div>
    </>
  );
}
