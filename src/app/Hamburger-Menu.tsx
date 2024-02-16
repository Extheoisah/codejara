import React from "react";
import Image from "next/image";
import LOGO from "./Images/LOGO.svg";
import Cancel from "./Images/Cancel.svg";

export default function HamburgerMenu() {
  return (
    <div className="border-[#303030] h-[500px] border-[1px] rounded-[40px] py-[20px] mt-[30px] bg-[#8a6262]">
      <div className="flex justify-between px-[20px]">
        <div>
          <Image src={LOGO} alt="LOGO"></Image>
        </div>
        <div>
          <Image src={Cancel} alt="Cancel"></Image>
        </div>
      </div>
      <div className="mt-[40px]">
        <p className="px-[20px] py-[25px]">For Talents</p>

        <hr className="bg-[#494949]" />

        <p className="px-[20px] py-[30px]">About Us</p>

        <hr className="bg-[#494949]" />

        <p className="px-[20px] py-[30px]">Contact Us</p>

        <hr className="bg-[#494949]" />
      </div>
    </div>
  );
}
