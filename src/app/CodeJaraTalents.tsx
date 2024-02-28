"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Talent1 from "./Images/Talent1.svg";
import ArrowLeft from "./Images/ArrowLeft.svg";
import ArrowRight from "./Images/ArrowRight.svg";
import Talent2 from "./Images/Talent2.svg";
import Talent3 from "./Images/Talent3.svg";
import Talent4 from "./Images/Talent4.svg";
import Talent5 from "./Images/Talent5.svg";
import Talent6 from "./Images/Talent6.svg";
import Talent7 from "./Images/Talent7.svg";
import Talent8 from "./Images/Talent8.svg";
import "./Main.css"

import Talents from "./Talents";

const CodeJaraTalents: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft -= 10; // Adjust scroll speed as needed
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft += 10; // Adjust scroll speed as needed
    }
  };

  const handleScroll = (e: React.WheelEvent<HTMLDivElement>) => {
    if (e.deltaY > 0) {
      scrollRight();
    } else {
      scrollLeft();
    }
  };

  return (
    <div className="bg-[#FFFFFF]">
      <div className="text-[#090909] mt-[30px] px-[20px]">
        <p className="text-[32px] font-bold text-center pt-[20px]">
          Codejara Talents
        </p>
        <p className="text-[18px] leading-[30px] mt-[10px] font-normal text-center">
          Connect with the talent(s) suitable for your project in three (3) easy
          steps
        </p>
      </div>

      <div
        ref={carouselRef}
        className="carousel-container overflow-x-auto whitespace-nowrap hide-scrollbar px-[20px] mx-auto mt-[30px]"
        onWheel={handleScroll}
      >
        <div className="lg:grid lg:grid-cols-4">
        <Talents
          Img={Talent1}
          alt="Talent1"
          text1="Bamidele Oladimeji"
          text2="Product Designer"
        />

        <Talents
          Img={Talent2}
          alt="Talent2"
          text1="Olayinka Adebiyi"
          text2="Data Analyst"
        />

        <Talents
          Img={Talent3}
          alt="Talent3"
          text1="Theophilus Isah"
          text2="Bitcoin/Lightning Developer"
        />

        <Talents
          Img={Talent4}
          alt="Talent4"
          text1="Tracy Akhionbare"
          text2="Product Designer"
        />

        <Talents
          Img={Talent5}
          alt="Talent5"
          text1="Blessing Umolo"
          text2="Frontend Developer"
        />

        <Talents
          Img={Talent6}
          alt="Talent6"
          text1="Lilian Nwamaife"
          text2="Product Designer"
        />

        <Talents
          Img={Talent7}
          alt="Talent7"
          text1="Oluwatobi Bamidele"
          text2="Full stack Developer"
        />

        <Talents
          Img={Talent8}
          alt="Talent8"
          text1="Emmanuel Itakpe"
          text2="Bitcoin Application Developer"
        />
        </div>
      </div>

      <div className="flex justify-center gap-[20px] mt-[40px] pb-[30px]">
        <div className="focus:outline-none" onClick={scrollLeft}>
          <Image src={ArrowLeft} alt="ArrowLeft"></Image>
        </div>
        <div className="focus:outline-none" onClick={scrollRight}>
          <Image src={ArrowRight} alt="ArrowRight"></Image>
        </div>
      </div>

      <div className="flex justify-center items-center mt-[50px] gap-[20px] pb-[50px]">
          <div className="bg-[#090909] text-[#FFFFFF] rounded-[50px] w-[150px] px-[20px] py-[15px] text-center">
            Hire Talents
          </div>
          <div className=" border-[#494949] border-[1px] text-[#090909] rounded-[50px] w-[150px] px-[20px] py-[15px] text-center">
            Join Codejara
          </div>
        </div>
    </div>
  );
};

export default CodeJaraTalents;
