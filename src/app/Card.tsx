"use client";

import React from "react";
import Image from "next/image";

interface CardProps {
  src: string;
  alt: string;
  text1: string;
  text2: string;
}

const Card: React.FC<CardProps> = ({ src, alt, text1, text2 }) => {
  return (
    <div className="flex justify-center">
      <div className="w-[90%] border-[#DBE1E7] border-t-[1px] border-r-0 border-b-[1px] border-l-0 mt-[30px] py-[20px] shadow-lg px-[20px]">
        <div>
          <style jsx>{`
            .shadow-lg {
              box-shadow: 0 3.9291138648986816px 9.822785377502441px -1.9645569324493408px
                  rgba(0, 0, 0, 0.05),
                0 1.9645569324493408px 1.9645569324493408px -0.9822784662246704px
                  rgba(0, 0, 0, 0.1),
                inset 0 -0.9822784662246704px 3.9291138648986816px 0 rgba(0, 0, 0, 0.05);
            }
          `}</style>
          <Image src={src} alt={alt}></Image>
        </div>
        <div className="text-black mt-[25px]">
          <p className="text-[25px] font-[600]">{text1}</p>
          <p className="text-[15px] font-[300] leading-[28px]">{text2}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
