import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/reactIcon.png";
import Node from "../assets/node.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 pb-16 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Skills
          </p>
          <p className="py-4">// These are techologies I`ve worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-105 duration-500">
            <img className="w-28 mx-auto" src={HTML} alt="HTML icon" />
            <p className="py-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-105 duration-500">
            <img className="w-28 mx-auto" src={CSS} alt="CSS icon" />
            <p className="py-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-105 duration-500">
            <img className="w-28 mx-auto" src={Tailwind} alt="CSS icon" />
            <p className="py-4">TAILWIND</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-105 duration-500">
            <img
              className="w-28 mx-auto"
              src={JavaScript}
              alt="JavaScript icon"
            />
            <p className="py-4">JAVASCRIPT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-105 duration-500">
            <img className="w-28 mx-auto" src={ReactImg} alt="React icon" />
            <p className="py-4">REACT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-105 duration-500">
            <img className="w-28 mx-auto" src={GitHub} alt="GitHub icon" />
            <p className="py-4">GITHUB</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-105 duration-500">
            <img className="w-28 mx-auto" src={Node} alt="Node icon" />
            <p className="py-4">NODE</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
