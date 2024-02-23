"use client";
import React from "react";
import Image from "next/image";

interface TalentsProps {
  Img: string;
  alt: string;
  text1: string;
  text2: string;
}

const Talents: React.FC<TalentsProps> = ({ Img, alt, text1, text2 }) => {
  return (
    <div className="inline-block outline-none mr-[20px]">
      <Image src={Img} alt={alt}></Image>
      <div>
        <p className="text-black">{text1}</p>
        <p className="text-black">{text2}</p>
      </div>
    </div>
  );
};

export default Talents;
