"use client";
import React from "react";
import Image from "next/image";

interface TechTalentsProps {
    Img: string;
    alt: string;
    text1: string;
    text2: string;
  }

const TechTalent:React.FC<TechTalentsProps> = ({ Img, alt, text1, text2 }) => {
       return (
    <div className="bg-[#FAFAFA]">
        <div className="px-[20px] bg-[#FAFAFA]">
      <div className="border-[1px] border-[#EBEBEB] text-[#090909] pl-[20px] mt-[30px] py-[20px] rounded-[10px]">
        <Image src={Img} alt={alt}></Image>

        <div className="mt-[20px]">
            <p className="text-[25px] font-[600]">{text1}</p>
            <p className="text-[15px] font-[400] lg:w-[65%]">{text2}</p>
        </div>

      </div>
      </div>
    </div>
  );
}

export default TechTalent;
