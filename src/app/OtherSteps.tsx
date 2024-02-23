"use client";
import React from "react";
import Image from "next/image";


interface OtherStepsProps {
  number: string;
  alt: string;
  text1: string;
  Img: string;
  text2: string;
  text3: string;
}

const OtherSteps: React.FC<OtherStepsProps> = ({
  number,
  alt,
  text1,
  Img,
  text2,
  text3,
}) => {
  return (
    <div className="mt-[50px] text-center px-[20px]">  
      {/* Content */}
      <div className="relative z-[50]">
        <Image src={number} alt={alt} className="mx-auto"></Image>
        <p className="text-[25px] font-[600] mt-[30px]">{text1}</p>

        <div className="relative z-10 mt-[30px] text-center">
          <Image src={Img} alt={alt}></Image>
        </div>
        <p className="text-[25px] font-[600] leading-[25px] mt-[30px]">
          {text2}
        </p>
        <p className="text-[15px] items-center tracking-[0.1em] font-[400] leading-[25px] mt-[30px]">
          {text3}
        </p>
      </div>
      
    </div>
  );
};

export default OtherSteps;
