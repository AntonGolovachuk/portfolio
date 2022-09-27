import React from "react"
import {HiArrowNarrowRight} from "react-icons/hi"
import { Link } from "react-scroll"
import Typed from "react-typed"

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
        <div className="max-w-[1000px] mx-auto flex flex-col justify-center h-full px-8">
            <p className="text-pink-600 text-xl font-medium">Hi, my name is</p>
            <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">Anton Golovachuk</h1>
            <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">I`m <Typed strings={[`Frontend Developer`]} typeSpeed={50} loop/></h2>
            <p className="text-[#8892b0] py-4 max-w-[700px]">Resourceful but a little insecure.
</p>
            <div>
                <Link to="work" smooth={true} duration={500} className="group w-[160px] text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 duration-300">View Work <HiArrowNarrowRight className="ml-3 group-hover:rotate-90 duration-300"/></Link>
            </div>
        </div>
    </div>
  )
}

export default Home