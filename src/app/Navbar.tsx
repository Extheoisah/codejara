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
    <div className="bg-black">
      <div
        className={`${
          showMenu ? "h-[500px]" : ""
        } border-[#303030] border-[1px] rounded-[40px] py-[20px] mt-[30px] bg-[#111111] mx-[20px] `}
      >
        <div className="flex justify-between px-[20px]">
          <div>
            <Image src={LOGO} alt="LOGO"></Image>
          </div>
          <div className="">
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
