import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaUser,
  FaHome,
  FaClipboardList,
  FaPhone,
  FaMobile,
} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const Navbar = ({ showSocials }) => {
  return (
    <div className="w-full h-[60px] bg-transparent fixed z-10 flex justify-between items-center p-4 py-12">
      <div className="w-10 sm:w-20 rounded-full">
        <Image
        width={80}
        height={80}
          src="https://my-portfolio-pi-murex.vercel.app/static/media/logo.a7f41cc9a14655a40552.png"
          alt="/"
          className="rounded-full"
        />
      </div>
      <div>
        <ul>
          <div className="w-full h-full flex justify-between items-center p-4">
            <div
              className={`${"text-base sm:text-xl font-bold p-1 rounded-lg cursor-pointer text-gray-300 hover:text-yellow-300 duration-500"}`}
            >
              <Link href="/">
                <h1 className="px-2 sm:px-4">
                  <FaHome />
                </h1>
              </Link>
            </div>
            <div
              className={`${"text-base sm:text-xl font-bold p-1 rounded-lg cursor-pointer text-gray-300 hover:text-orange-600 duration-500"}`}
            >
              <Link href="/about">
                <h1 className="px-2 sm:px-4">
                  <FaUser />
                </h1>
              </Link>
            </div>
            <div
              className={`${"text-base sm:text-xl font-bold p-1 rounded-lg cursor-pointer text-gray-300 hover:text-blue-500 duration-500"}`}
            >
              <Link href="/skills">
                <h1 className="px-2 sm:px-4">
                  <FaClipboardList />
                </h1>
              </Link>
            </div>
            <div
              className={`${"text-base sm:text-xl font-bold p-1 rounded-lg cursor-pointer text-gray-300 hover:text-emerald-500 duration-500"}`}
            >
              <Link href="/contact">
                <h1 className="px-2 sm:px-4">
                  <FaMobile />
                </h1>
              </Link>
            </div>
          </div>
        </ul>

        <div className={showSocials ? "block" : "hidden"}>
          <div className="hidden md:flex lg:flex fixed flex-col top-[35%] left-0 font-semibold">
            <ul>
              <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[5px] hover:bg-blue-600 rounded-xl duration-300 px-4 cursor-pointer">
                <a
                  className="flex justify-between items-center w-full text-gray-300"
                  href="https://www.linkedin.com/in/pradyumna-d-95a88123b/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Linkedin <FaLinkedin size={30} />
                </a>
              </li>
              <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[5px] hover:bg-[#171515] rounded-xl duration-300 px-4 cursor-pointer">
                <a
                  className="flex justify-between items-center w-full text-gray-300"
                  href="https://github.com/YARE0909"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub <FaGithub size={30} />
                </a>
              </li>
              <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[5px] hover:bg-[#1DA1F2] rounded-xl duration-300 px-4 cursor-pointer">
                <a
                  className="flex justify-between items-center w-full text-gray-300"
                  href="https://twitter.com/PradyumnaD7"
                  target="_blank"
                  rel="noreferrer"
                >
                  Twitter <FaTwitter size={30} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
