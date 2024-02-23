import React from "react";
import Image from "next/image";
import Background from "./Images/Background.svg";
import HeroImage from "./Images/HerosectionImage.svg";
import Image2 from "./Images/image2.svg";
import Card from "./Images/Card.svg";

export default function HeroSection() {
  return (
    <div className="relative bg-black">
      <Image
        className="absolute top-0 left-0"
        src={Background}
        alt="background"
      ></Image>
      <div className="px-[20px]">
        <h1 className="text-[26px] font-semibold leading-[42px] pt-[50px]">
          Talent Bridge: Connecting clients everywhere in the world with
          Nigerian creatives.
        </h1>

        <h2 className="text-[16px] font-light mt-[20px]">
          Connecting Clients from all over the world with Nigeria&apos;s Top
          Tech Talents for Building, Scaling, and Growing Businesses.
        </h2>

        <div className="flex justify-start items-center mt-[30px] gap-[20px]">
          <div className="bg-[#FFFFFF] text-[#090909] rounded-[50px] w-[150px] px-[20px] py-[15px] text-center">
            Hire Talents
          </div>
          <div className=" border-[#494949] border-[1px] text-[#FFFFFF] rounded-[50px] w-[150px] px-[20px] py-[15px] text-center">
            Join Codejara
          </div>
        </div>
      </div>

      <div className="mt-[30px]">
        <Image src={HeroImage} alt="Hero" className="w-screen"></Image>
      </div>

      <div className="bg-[#FAFAFA] text-black text-center px-[20px]">
        <p className="pt-[50px] text-[35px] font-semibold">What we Do?</p>

        <p className="text-[16px] font-[400] mt-[20px]">
          At Codejara, we are your gateway to unlocking the vibrant potential of
          Nigerian talents. Our platform is dedicated to seamlessly connecting
          clients from all over the globe with skilled professionals in Nigeria,
          fostering a collaborative environment that transcends geographical
          boundaries.
        </p>

        <p className="text-[16px] font-[400] mt-[10px]">
          Our vision is to be the catalyst for a global creative ecosystem,
          seamlessly connecting clients with unparalleled talents in Nigeria,
          fostering innovation, and driving positive change.
        </p>

        <div className="flex justify-center mt-[20px]">
          <Image src={Image2} alt=""></Image>
        </div>

        <div className="flex justify-center items-center mt-[30px] gap-[20px]">
          <div className="bg-[#090909] text-[#FFFFFF] rounded-[50px] w-[150px] px-[20px] py-[15px] text-center">
            Hire Talents
          </div>
        </div>
      </div>
    </div>
  );
}
