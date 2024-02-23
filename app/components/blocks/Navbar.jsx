"use client";
import Image from "next/image";
import logo from "@/public/images/logo.png";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { FaSortUp } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import { useState } from "react";

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
    <nav className="flex justify-between md:items-center p-2">
      <div className="max-w-48 h-auto">
        <Image src={logo} />
      </div>
      <div className=" flex flex-row-reverse">
        <div
          className={
            showFullNav
              ? "block"
              : "hidden md:block transition-opacity duration-300"
          }>
          <ul className="flex flex-col md:flex-row gap-4 items-center">
            <li>Explore</li>
            <li>Discover</li>
            <li>For professionals</li>
            <li className="relative">
              <BiDotsHorizontalRounded
                onClick={() => dropDownToggle()}
                className="cursor-pointer"
              />
              {showDropDown && (
                <div className="absolute top-10 -left-2 p-3 bg-[#111111] text-[#929292] w-56">
                  <ul className="relative">
                    <FaSortUp className="absolute -top-[20px] text-xl text-[#111111]" />
                    <li>Community</li>
                    <li>Blog</li>
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
              <button className="">Login</button>
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
