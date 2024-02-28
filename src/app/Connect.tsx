import React from "react";
import Image from "next/image";
import connect from "./Images/Connect.svg";

export default function Connect() {
  return (
    <div className="bg-[#FFFFFF] px-[20px] py-[50px] h-[400px]">
      <div className="relative bg-[#090909] w-full h-[300px] rounded-[10px] text-center">
        <div className="absolute inset-0 z-10">
          <Image
            src={connect}
            alt="lines"
            className="h-full object-cover rounded-[10px]"
          ></Image>
        </div>{" "}
        <div className="py-[50px] px-[10px] z-20">
          <p className="text-[20px] font-[600] leading-[32px]">
            Connecting clients around the globe with Nigerian creatives.
          </p>
          <p className="text-[14px] font-[400] leading-[20px] mt-[10px]">
            Connecting global clients with the best tech talents in Nigeria for
            business building, scaling, and growth.
          </p>

          <div className="relative z-10 flex justify-center mt-[30px]">
    <div className="absolute border-[#494949] border-[1px] text-[#090909] bg-[#FFFFFF] rounded-[50px] w-[150px] px-[20px] py-[15px] text-center z-20 left-1/2 transform -translate-x-1/2">
      Hire Talents
    </div>
  </div>
        </div>
      </div>
    </div>
  );
}
