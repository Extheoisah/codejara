import React from "react";
import Image from "next/image";
import Background from "./Images/Background.svg";
import HeroImage from "./Images/HerosectionImage.svg";
import Image2 from "./Images/image2.svg";
import HeroImageDeskstop from "./Images/HeroImageDeskstop.svg";
import Linkedlin from "./Images/Linkedlin.svg";
import Facebook from "./Images/Facebook.svg";
import Twitter from "./Images/Twitter.svg";

export default function HeroSection() {
  return (
    <div className="relative bg-black">
      <Image
        className="absolute top-0 left-0 lg:w-[30%] lg:top-[-30px]"
        src={Background}
        alt="background"
      ></Image>
      <div className="px-[20px] lg:px-[80px] lg:mt-[70px]">
        <h1 className="text-[26px] font-[600] leading-[42px] pt-[50px] lg:text-[72px] lg:w-[95%] lg:leading-[100px]">
          Talent Bridge: Connecting clients everywhere in the world with
          Nigerian creatives.
        </h1>

        <h2 className="text-[16px] font-light mt-[20px] lg:text-[25px] leading-[45px] lg:w-[80%]">
          Connecting Clients from all over the world with Nigeria&apos;s Top
          Tech Talents for Building, Scaling, and Growing Businesses.
        </h2>

        <div className="lg:flex lg:justify-between lg:items-center">
          <div className="flex justify-start items-center mt-[30px] gap-[20px] lg:text-[20px]">
            <div className="bg-[#FFFFFF] text-[#090909] rounded-[50px] w-[150px] lg:w-[200px] px-[20px] py-[15px] text-center">
              Hire Talents
            </div>
            <div className=" border-[#494949] border-[1px] text-[#FFFFFF] rounded-[50px] w-[150px] px-[20px] py-[15px] text-center lg:w-[200px]">
              Join Codejara
            </div>
          </div>

          <div className="hidden lg:flex lg:gap-[20px]">
            <Image src={Linkedlin} alt="Linkedlin"></Image>
            <Image src={Facebook} alt="Linkedlin"></Image>
            <Image src={Twitter} alt="Linkedlin"></Image>
          </div>
        </div>
      </div>

      <div className="mt-[30px] lg:mt-[50px]">
        <Image
          src={HeroImage}
          alt="Hero"
          className="w-screen lg:hidden"
        ></Image>
        <Image
          src={HeroImageDeskstop}
          alt="deskstop-image"
          className="hidden lg:block w-screen"
        ></Image>
      </div>

      <div className="bg-[#FAFAFA] text-black text-center px-[20px] lg:flex lg:px-[80px] lg:justify-between lg:flex-row-reverse lg:pt-[70px]">
        <div className="lg:w-[50%] lg:text-start lg:leading-[45px]">
          <p className="pt-[50px] text-[35px] font-semibold lg:text-[50px]">What we Do?</p>

          <p className="text-[16px] font-[400] mt-[20px] lg:text-[20px] lg:w-[90%]">
            At Codejara, we are your gateway to unlocking the vibrant potential
            of Nigerian talents. Our platform is dedicated to seamlessly
            connecting clients from all over the globe with skilled
            professionals in Nigeria, fostering a collaborative environment that
            transcends geographical boundaries.
          </p>

          <p className="text-[16px] font-[400] mt-[10px] lg:text-[20px] lg:w-[90%]">
            Our vision is to be the catalyst for a global creative ecosystem,
            seamlessly connecting clients with unparalleled talents in Nigeria,
            fostering innovation, and driving positive change.
          </p>

          <div className="justify-start items-center mt-[30px] gap-[20px] hidden lg:flex">
            <div className="bg-[#090909] text-[#FFFFFF] rounded-[50px] w-[180px] px-[20px] py-[15px] text-center">
              Hire Talents
            </div>
          </div>
        </div>

        <div className="lg:w-[50%]">
          <div className="flex justify-center mt-[20px]">
            <Image src={Image2} alt="" className="lg:w-[80%]"></Image>
          </div>

          <div className="flex justify-center items-center mt-[30px] gap-[20px] lg:hidden">
            <div className="bg-[#090909] text-[#FFFFFF] rounded-[50px] w-[150px] px-[20px] py-[15px] text-center">
              Hire Talents
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
