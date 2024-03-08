"use client";

import React, { useState } from "react";
import Image from "next/image";
import LOGO from "./Images/LOGO.svg";
import Hamburger from "./Images/Hamburger.svg";
import Cancel from "./Images/Cancel.svg";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="bg-black relative lg:px-[40px]">
      <div
        className={`${
          showMenu ? "h-[500px] absolute top-0 inset-x-0 z-50" : ""
        } border-[#303030] border-[1px] rounded-[40px] py-[20px] lg:py-[20px] mt-[30px] lg:mt-[70px] bg-[#111111] mx-[20px]`}
      >
        <div className="flex justify-between px-[20px] lg:items-center lg:px-[30px]">
          <div>
            <Image src={LOGO} alt="LOGO" className="lg:w-[150%]"></Image>
          </div>

          <div className="hidden lg:flex lg:gap-[20px]">
            <p>For Talents</p>
            <p>About Us</p>
            <p>Contact Us</p>
          </div>

          <div className="bg-[#FFFFFF] text-[#090909] rounded-[50px] w-[150px] lg:w-[130px] px-[20px] py-[15px] text-center lg:py-[10px] hidden lg:block">
            Hire Talents
          </div>
          <div className="lg:hidden">
            {showMenu ? (
              <Image
                src={Cancel}
                alt="Cancel"
                onClick={handleToggleMenu}
              ></Image>
            ) : (
              <Image
                src={Hamburger}
                alt="Hamburger"
                onClick={handleToggleMenu}
              ></Image>
            )}
          </div>
        </div>
        {showMenu && (
          <div className="mt-[40px]">
            <p className="px-[20px] py-[25px]">For Talents</p>
            <hr className="bg-[#494949]" />
            <p className="px-[20px] py-[30px]">About Us</p>
            <hr className="bg-[#494949]" />
            <p className="px-[20px] py-[30px]">Contact Us</p>
            <hr className="bg-[#494949]" />
          </div>
        )}
      </div>
    </div>
  );
}
