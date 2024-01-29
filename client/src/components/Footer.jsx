import React from "react";
import { GithubLogo } from "phosphor-react";
import { Socicons } from "socicons";
const Footer = () => {
  return (
    <footer className=" flex bg-white gap-1 flex-col text-gray-800 items-center text-center mt-12 font-sans z-10 px-4 py-8  font-semibold ">
      <div className="justify-center flex flex-col items-center gap-1">
        <a
          className="flex bg-black px-3 gap-4 py-1 text-white rounded-md"
          href="https://github.com/anurag-327/QuickSign"
        >
          <Socicons icon="github" size={25} color="#ffffff" weight="fill" />
          Github
        </a>
        <a
          target="blank"
          href="https://www.vercel.com"
          className="flex h-9  px-3 gap-2 py-1 border mt-2 bg-gray-200  rounded-md"
        >
          Hoisted on{" "}
          <Socicons
            className="mt-1"
            icon="vercel"
            size={80}
            color="#000000"
            weight="fill"
          />
        </a>
      </div>
      <div className="mt-1">
        <span>
          Copyright © <span id="">2024</span>
          <span> By Quick Sign</span>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
