import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";
const Banner = () => {
  return (
    <div className="bg-[url('https://images.pexels.com/photos/13043589/pexels-photo-13043589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] h-[659px] w-full bg-cover bg-center flex justify-center items-center bg-[rgba(0, 0, 0, 0.2)] bg-blend-overlay">
      <div className="max-w-[963px] text-white">
        <h2 className="text-5xl pr-16 pl-5 mb-6">
          {" "}
          Your local source of high quality images and videos directly from
          their creators
        </h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Search photos and videos"
            className="w-full h-16 bg-white rounded-[60px] border-none text-2xl pl-8 placeholder:text-black"
          />
          <BiSearchAlt2 className="absolute top-5 right-6 text-black text-2xl" />
        </div>
        <p className=" opacity-100 pl-8 mb-0 mt-6">
          <b>Recommended: </b>
          <span className="opacity-70">
            {" "}
            Summer, Food, Covid-19, React State, Love
          </span>
        </p>
      </div>
    </div>
  );
};

export default Banner;
