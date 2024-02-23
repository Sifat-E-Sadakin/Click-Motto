"use client";
import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { gsap } from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

const Banner = () => {
  const container = useRef();

  useGSAP(() => {
    gsap.to(container.current.children, {
      duration: 1,
      opacity: 1,
      y: 0,
      ease: "power3.inOut",
      stagger: 0.3,
      scrollTrigger: {
        trigger: container.current.children,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
  });

  return (
    <div className="bg-[url('https://images.pexels.com/photos/772803/pexels-photo-772803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] h-[659px] w-full bg-cover bg-center flex justify-center items-center bg-[#00000033] bg-blend-overlay">
      <div ref={container} className="max-w-[963px] text-white">
        <h2 className="text-2xl md:text-5xl pr-16 pl-5 mb-6 opacity-0 translate-y-[100px]">
          {" "}
          Your local source of high quality images and videos directly from
          their creators
        </h2>
        <div className="relative opacity-0 translate-y-[100px] ">
          <input
            type="text"
            placeholder="Search photos and videos"
            className="w-full h-16 bg-white rounded-[60px] border-none text-xl md:text-2xl pl-8 placeholder:text-black"
          />
          <BiSearchAlt2 className="absolute top-5 right-6 text-black text-2xl" />
        </div>
        <p className="  pl-8 mb-0 mt-6 opacity-0 translate-y-[100px]">
          <b>Recommended: </b>
          <span className="opacity-70">
            {" "}
            Summer, Food, Covid-19, React State, Love
          </span>
        </p>
        <p className="opacity-0 translate-y-[-200px] text-right mt-32 hidden md:block">
          Photo of the day <span className="opacity-70">by</span>{" "}
          <span className=" underline">John Doe</span>
        </p>
      </div>
    </div>
  );
};

export default Banner;
