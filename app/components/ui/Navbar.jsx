"use client";
import Image from "next/image";
import logo from "@/public/images/logo.png";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { FaSortUp } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import { useState } from "react";
import Facebook from "@/public/images/facebook.png";
import Twitter from "@/public/images/twitter.png";
import Instagram from "@/public/images/instagram.png";
import Pinterest from "@/public/images/pinterest.png";
import Veddit from "@/public/images/veddit.png";
import Meddit from "@/public/images/meddit.png";

const Navbar = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [showFullNav, setShowFullNav] = useState(false);
  const dropDownToggle = () => {
    setShowDropDown(!showDropDown);
  };
  const fullNavToggle = () => {
    setShowFullNav(!showFullNav);
  };
  return (
    <nav className="relative h-full  flex justify-between md:items-center p-2 text-[#818181]">
      <div className="max-w-48 h-auto">
        <Image src={logo} />
      </div>
      <div className=" flex flex-row-reverse">
        <div
          className={
            showFullNav
              ? "block absolute md:static bg-white top-12 md:bg-white px-10 pt-3 pb-8 z-20"
              : "hidden md:block static"
          }>
          <ul className="flex flex-col md:flex-row gap-4 items-center cursor-pointer">
            <li className="hover:text-black text-black ">Explore</li>
            <li className="hover:text-black ">Discover</li>
            <li className="hover:text-black ">For professionals</li>
            <li className="relative text-xl">
              <BiDotsHorizontalRounded
                onClick={() => dropDownToggle()}
                className="cursor-pointer"
              />
              {showDropDown && (
                <div className="absolute top-10 -left-2 p-3 bg-[#111111] text-[#929292] w-56 cursor-pointer">
                  <ul className="relative">
                    <FaSortUp className="absolute -top-[20px] text-lg text-[#111111]" />
                    <li className="hover:text-white">About click motto</li>
                    <li className="hover:text-white text-white">Pricing</li>
                    <li className="hover:text-white">License</li>
                    <li className="hover:text-white">Partnership</li>
                    <li className="hover:text-white">Blog</li>
                    <li className="hover:text-white">Help</li>
                    <li className="hover:text-white">Join the Team</li>
                    <ul className="flex gap-2">
                      <li>
                        <Image
                          className="w-7 h-auto"
                          src={Facebook}
                          alt="Facebook_Logo"
                        />
                      </li>
                      <li>
                        <Image
                          className="w-7 h-auto"
                          src={Twitter}
                          alt="Twitter_Logo"
                        />
                      </li>
                      <li>
                        <Image
                          className="w-7 h-auto"
                          src={Instagram}
                          alt="Instagram_Logo"
                        />
                      </li>
                      <li>
                        <Image
                          className="w-7 h-auto"
                          src={Pinterest}
                          alt="Pinterest_Logo"
                        />
                      </li>
                      <li>
                        <Image
                          className="w-7 h-auto"
                          src={Veddit}
                          alt="Veddit_Logo"
                        />
                      </li>
                      <li>
                        <Image
                          className="w-7 h-auto"
                          src={Meddit}
                          alt="Meddit_Logo"
                        />
                      </li>
                    </ul>
                  </ul>
                </div>
              )}
            </li>
            <li>
              <button className="btn btn-outline">Submit Photos</button>
            </li>
            <li>
              <div className="border border-[#818181] h-10"></div>
            </li>
            <li>
              <button className="hover:font-semibold hover:text-black">
                Login
              </button>
            </li>
            <li>
              <button className="btn btn-error">Join Free</button>
            </li>
          </ul>
        </div>
      </div>
      <FaBarsStaggered
        className="text-2xl cursor-pointer -left-5  md:hidden"
        onClick={() => fullNavToggle()}
      />
    </nav>
  );
};

export default Navbar;
