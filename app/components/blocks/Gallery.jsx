"use client";
import React from "react";
import { AiOutlineCaretDown } from "react-icons/ai";
import "@/app/components/styles/gallery.css";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import galleryImgList from "@/public/images-api/galleryImgList";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Gallery = () => {
  const columnsCountBreakPoints = { 350: 1, 750: 2, 900: 3 };
  const container = useRef(null);
  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.to(".gallery-nav", {
        scrollTrigger: {
          trigger: ".gallery-nav",
          start: "top 100%",
        },
        duration: 1.5,
        opacity: 1,
        y: 0,
        ease: "power3.inOut",
      });
      gsap.to(".gallery-img", {
        opacity: 1,
        y: 0,
        duration: 1.5,
        scrollTrigger: {
          trigger: ".gallery-img",
          start: "top 100%",
        },
      });
    },
    {
      scope: container,
    }
  );
  return (
    <div className="py-0 px-8" ref={container}>
      <nav className="flex justify-between items-center mt-5 gallery-nav opacity-0 translate-y-[50px]">
        <ul className="flex gap-3 items-center m-0 p-0 text-xl font-medium mr-5 cursor-pointer text-[#707070]">
          <li className="text-black">All</li>
          <li className=" hover:text-black">Photos</li>
          <li className=" hover:text-black">Videos</li>
          <li className=" hover:text-black">Freebies</li>
          <li className=" hover:text-black">360</li>
        </ul>
        <div className="relative recommend">
          <p className="m-0 text-black text-xl font-medium cursor-pointer hidden md:flex items-center gap-2  ">
            Recommended <AiOutlineCaretDown className="text-xs " />
          </p>
          <div>
            <ul className="absolute top-6 right-0 bg-white w-52 pt-4 pb-2 hidden  font-normal text-lg text-end  ">
              <li className="hover:bg-[#dfdfdf] hover:text-black cursor-pointer">
                Most Recent
              </li>
              <li className="hover:bg-[#dfdfdf] hover:text-black cursor-pointer">
                Most Viewed
              </li>
              <li className="hover:bg-[#dfdfdf] hover:text-black cursor-pointer">
                Most Downloaded
              </li>
              <li className="hover:bg-[#dfdfdf] hover:text-black cursor-pointer">
                Most Appreciated
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="my-5 gallery-img opacity-0 translate-y-[100px]">
        <ResponsiveMasonry columnsCountBreakPoints={columnsCountBreakPoints}>
          <Masonry gutter="15px">
            {galleryImgList.map(image => (
              <div className="w-full overflow-hidden" key={image.id}>
                <img
                  src={image.url}
                  style={{ width: "100%" }}
                  alt="gallery_img"
                  className="hover:scale-125 duration-700"
                />
              </div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </div>
  );
};

export default Gallery;
