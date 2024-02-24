"use client";
import Image from "next/image";
import logo from "@/public/images/logo.png";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { FaSortUp } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { useState } from "react";
import Facebook from "@/public/images/facebook.png";
import Twitter from "@/public/images/twitter.png";
import Instagram from "@/public/images/instagram.png";
import Pinterest from "@/public/images/pinterest.png";
import Veddit from "@/public/images/veddit.png";
import Meddit from "@/public/images/meddit.png";
import NavList from "./NavList";
import MainBtn from "./MainBtn";
import ColoredBtn from "./ColoredBtn";
import DropdownList from "./DropdownList";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [showFullNav, setShowFullNav] = useState(false);

  const socialIcons = [
    {
      icon: Facebook,
      link: "#",
    },
    {
      icon: Twitter,
      link: "#",
    },
    {
      icon: Instagram,
      link: "#",
    },
    {
      icon: Pinterest,
      link: "#",
    },
    {
      icon: Veddit,
      link: "#",
    },
    {
      icon: Meddit,
      link: "#",
    },
  ];

  const dropDownToggle = () => {
    setShowDropDown(!showDropDown);
  };
  const fullNavToggle = () => {
    setShowFullNav(!showFullNav);
  };
  return (
    <div className="h-[64px] w-full px-[40px] py-[16px] flex justify-between items-center bg-white fixed top-0 z-[99999]">
      <div className="w-[179.88px]">
        <Image src={logo} alt="Main Logo" className="w-full" />
      </div>
      <ul
        className={`lg:w-auto lg:flex lg:items-center lg:static lg:h-auto lg:border-none absolute bg-white top-[64px] w-[250px] h-screen lg:p-0 pt-[5px] border-l border-white duration-500 z-[9999] ${
          showFullNav ? "right-[0px]" : "right-[-250px]"
        }`}>
        <NavList label="Explore" active={true} />
        <NavList label="Discover" />
        <NavList label="For Professionals" />
        <li className="relative text-gray lg:ml-[23px] px-[10px] py-[5px] lg:p-0">
          <BiDotsHorizontalRounded
            className="text-[25px] cursor-pointer"
            onClick={dropDownToggle}
          />
          <ul
            className={`absolute top-[34px] left-[0px] w-full lg:top-[44px] lg:left-[-9px] lg:w-[218px] bg-[#111] pt-[5px] ${
              showDropDown ? "block" : "hidden"
            }`}>
            <DropdownList label="About Click Motto" />
            <DropdownList label="Pricing" />
            <DropdownList label="License" />
            <DropdownList label="Partnerships" />
            <DropdownList label="Blog" />
            <DropdownList label="Help" />
            <DropdownList label="Join The Team" />
            <ul className="flex justify-between items-center py-[7px] px-[12px] border-t border-slate">
              <FaSortUp className="text-[#111111] absolute top-[-9px] left-[9px] text-[25px]" />
              {socialIcons.map((item, index) => (
                <li key={"nav-icons-" + index}>
                  <Link href={item.link}>
                    <Image src={item.icon} height={18} alt="Social Icons" />
                  </Link>
                </li>
              ))}
            </ul>
          </ul>
        </li>
        <li className="lg:ml-[23px] px-[10px] py-[5px] lg:p-0">
          <MainBtn label="Submit Photos" />
        </li>
        <li className="lg:ml-[23px]">
          <div className="lg:h-[34px] lg:w-[2px] lg:m-0 bg-gray w-full h-[1px] mt-[10px] mb-[5px]"></div>
        </li>
        <NavList label="Login" />
        <li className="lg:ml-[23px] px-[10px] py-[5px] lg:p-0">
          <ColoredBtn label="Join Free" />
        </li>
      </ul>
      <div
        className="text-2xl cursor-pointer  lg:hidden"
        onClick={fullNavToggle}>
        {showFullNav ? <AiOutlineClose /> : <CiMenuFries />}
      </div>
    </div>
  );
};

export default Navbar;
