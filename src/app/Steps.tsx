"use client";

import React from "react";
import Image from "next/image";

interface StepsProps {
    Number: string;
    alt: string;
    text1: string;
    text2: string;
}

const Steps: React.FC<StepsProps> = ({ Number, alt, text1, text2 }) => {
  return (
   <div className="mt-[50px] text-center px-[20px] lg:text-start">
    <Image src={Number} alt={alt} className="mx-auto lg:mx-0"></Image>
    <div className="text-[#090909] mt-[20px]">
        <p className="text-[25px] font-[600]">{text1}</p>
        <p className="text-[15px] font-[400] leading-[25px] mt-[20px] lg:w-[75%]">{text2}</p>
    </div>
   </div>
  );
};

export default Steps;
