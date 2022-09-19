import React from "react";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] mx-auto p-4"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8 mx-auto">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Contact
          </p>
        </div>

        <div className="flex flex-col top-[35%]">
        <ul className="mx-auto my-5">
          <li className="w-[160px] h-[60px] flex justify-between items-center duration-300 my-3 hover:scale-105 bg-[#333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/AntonGolovachuk" target="_blank"
            >
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center duration-300 my-3 hover:scale-105 bg-[#6fc2b0]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="mailto:antongolovachukk@gmail.com"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center duration-300 my-3 hover:scale-105 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://docs.google.com/document/d/1LCdRNuyjoYK8Ba9cjSnK-xOuVAd6BxNgXakDRgVvu5s/edit?usp=sharing" target="_blank"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
      </div>
    </div>
  );
};

export default Contact;
