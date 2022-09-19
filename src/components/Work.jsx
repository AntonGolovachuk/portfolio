import React from "react";
import reactBg from "../assets/react.png";
import travelReactApp from "../assets/travel-react-tailwind.png";
import reactChat from "../assets/react-chat.png";
import reactShoppingCart from "../assets/react-shopping-cart.png";
import reactTodo from "../assets/react-todo.png";
import reactWeatherApp from "../assets/react-weather-app.png";

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
          <p className="py-6">Check out some of my recent work</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div
            style={{ backgroundImage: `url(${reactBg})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects*/}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React Landing Page
              </span>
              <div className="pt-8 text-center">
                <a
                  target="_blank"
                  href="https://github.com/AntonGolovachuk/react"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${travelReactApp})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects*/}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React Landing Page
              </span>
              <div className="pt-8 text-center">
                <a
                  target="_blank"
                  href="https://github.com/AntonGolovachuk/travel-react-tailwind"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${reactChat})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects*/}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React Application Chat
              </span>
              <div className="pt-8 text-center">
                <a
                  target="_blank"
                  href="https://github.com/AntonGolovachuk/react-chat"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${reactShoppingCart})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects*/}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React Shopping Cart
              </span>
              <div className="pt-8 text-center">
                <a
                  target="_blank"
                  href="https://github.com/AntonGolovachuk/react-shopping-cart"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${reactTodo})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects*/}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React Todo List
              </span>
              <div className="pt-8 text-center">
                <a
                  target="_blank"
                  href="https://github.com/AntonGolovachuk/react-todo"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${reactWeatherApp})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects*/}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React Weather App
              </span>
              <div className="pt-8 text-center">
                <a
                  href="../pages/build-react-weather-app/index.html"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  target="_blank"
                  href="https://github.com/AntonGolovachuk/react-wheather-app"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
