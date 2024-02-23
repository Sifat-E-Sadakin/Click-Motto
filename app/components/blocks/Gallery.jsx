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

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".gallery", {
      scrollTrigger: {
        trigger: ".gallery",
        start: "top 80%",
      },
      duration: 1,
      opacity: 0,
      y: 100,
      ease: "power3.inOut",
      toggleActions: "play none none reverse",
    });
  });
  return (
    <div className="py-0 px-8 gallery">
      <nav className="flex justify-between items-center mt-5">
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

      <div className="my-5">
        <ResponsiveMasonry columnsCountBreakPoints={columnsCountBreakPoints}>
          <Masonry gutter="15px">
            {galleryImgList.map(image => (
              <img
                src={image.url}
                style={{ width: "100%" }}
                alt="gallery_img"
                key={image.id}
                className="hover:scale-110 duration-200"
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </div>
  );
};

export default Gallery;
