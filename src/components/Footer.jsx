import React from "react";
import { FaGithub } from "react-icons/fa";
import { AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import { FiMail } from "react-icons/fi";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="bg-slate-900 p-4" style={{ cursor: "default" }}>
      <div className="flex justify-between flex-wrap gap-4">
        <p className="text-white text-center w-full sm:w-auto font-light">
          © {year} Pratham. All rights reserved.
        </p>
        <div className="text-white flex justify-around sm:w-[250px] w-full">
          <a
            href="mailto:prathamshrestha05@gmail.com"
            className="transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1"
            style={{ cursor: "pointer" }}
          >
            <FiMail className="text-xl" />
          </a>
          <a
            without
            rel="noreferrer"
            href="https://www.linkedin.com/in/pratham-shrestha-5254b3317/"
            target="_blank"
            className="transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1"
            style={{ cursor: "pointer" }}
          >
            <AiFillLinkedin className="text-xl" />
          </a>
          <a
            without
            rel="noreferrer"
            href="https://github.com/PrathamShrestha69"
            target="_blank"
            className="transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1"
            style={{ cursor: "pointer" }}
          >
            <FaGithub className="text-xl" />
          </a>
          <a
            without
            rel="noreferrer"
            href="https://www.instagram.com/pratham_shrestha69?igsh=Z2Z1b25obHg3cHhs/"
            target="_blank"
            className="transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1"
            style={{ cursor: "pointer" }}
          >
            <AiFillInstagram className="text-xl" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
