import React from "react";
import Image from "next/image";
import LOGO from "./Images/LOGO.svg";
import Linkedlin from "./Images/Linkedlin.svg";
import Facebook from "./Images/Facebook.svg";
import Twitter from "./Images/Twitter.svg";
import Copy from "./Images/CopyRight.svg";
export default function Footer() {
  return (
    <div className="bg-[#090909]">
      <Image
        src={LOGO}
        alt="LOGO"
        className="w-[70%] mx-auto mt-[30px]"
      ></Image>

      <p className="text-[16px] font-[400] text-center px-[30px] leading-[30px] mt-[25px]">
        Connecting Clients from all over the world with Nigeria&#39;s Top Tech
        Talents for Building, Scaling, and Growing Businesses.
      </p>

      <div className="flex justify-center gap-[20px] mt-[50px]">
        <Image src={Linkedlin} alt="Linkedlin"></Image>
        <Image src={Facebook} alt="Linkedlin"></Image>
        <Image src={Twitter} alt="Linkedlin"></Image>
      </div>

      <div className=" border-[#494949] border-[1px] text-[#090909] text-[14px] font-[400] bg-[#FFFFFF] rounded-[50px] w-[200px] px-[20px] py-[25px] text-center mx-auto mt-[70px]">
        Hire Talents
      </div>

      <div className="bg-[#121212] mt-[70px] h-[70px] flex items-center justify-center">
        <div className="flex justify-center gap-[15px] text-[#B3B3B3] text-[12px] font-[400]">
          <div className="flex justify-center gap-[5px]">
            <Image src={Copy} alt="Copyright"></Image>
            <p>Codejara</p>
          </div>
          <p>All Rights Reserved 2023</p>
        </div>
      </div>
    </div>
  );
}
