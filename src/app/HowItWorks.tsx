import React from "react";
import Image from "next/image";
import Work from "./Images/Work.svg";
import Steps from "./Steps";
import Step1 from "./Images/Step1.svg";
import Step2 from "./Images/Step2.svg";
import Step3 from "./Images/Step3.svg";
import OtherSteps from "./OtherSteps";
import Steps1 from "./Images/Steps1.svg";
import Steps1Image from "./Images/Steps1Image.svg";
import Steps2 from "./Images/Steps2.svg";
import Steps2Image from "./Images/Steps2Image.svg";
import Steps3 from "./Images/Steps3.svg";
import Steps3Image from "./Images/Steps3Image.svg";
import HWVTB from "./Images/HWVTB.svg"

const HowItWorks: React.FC = () => {
  return (
    <div className="bg-[#FFFFFF]">
      <div className="text-black pt-[70px] px-[20px]">
        <p className="text-[32px] font-[600] text-center">How it works</p>
        <p className="text-[18px] leading-[30px] mt-[10px] font-[400] text-center">
          Connect with the talent(s) suitable for your project in three (3) easy
          steps
        </p>
        <Image src={Work} alt="" className="mt-[20px]"></Image>
      </div>

      <div>
        <Steps
          Number={Step1}
          alt="Step1"
          text1="Reach out to us"
          text2="Fill out a short form with project details and talent requirements, and we'll reach out for a brief discussion to understand your needs."
        />

        <Steps
          Number={Step2}
          alt="Step2"
          text1="Find the perfect fit for you"
          text2="Once we understand your needs, we'll match you with a vetted talent or a top-notch team based on your specific needs."
        />

        <Steps
          Number={Step3}
          alt="Step3"
          text1="Get started"
          text2="Fill out a short form with project details and talent requirements, and we'll reach out for a brief discussion to understand your needs."
        />
      </div>

      <div className="bg-[#030303]">
        <div className="text-[#FFFFFF] mt-[70px] px-[20px] bg-[#030303]">
          <p className="text-[32px] font-[600] text-center pt-[50px]">
            How we vet Talents
          </p>
          <p className="text-[18px] leading-[30px] mt-[10px] font-[400] text-center">
            Connect with the talent(s) suitable for your project in three (3)
            easy steps
          </p>
        </div>
        <div className="relative">
        <div className="absolute z-0 px-[20px]">
        <Image src={HWVTB} alt="" className="z-0"></Image>
      </div>
          <OtherSteps
            number={Steps1}
            alt="alt"
            text1="STEP ONE"
            Img={Steps1Image}
            text2="Technical Interview"
            text3="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis."
          />

          <OtherSteps
            number={Steps2}
            alt="alt"
            text1="STEP TWO"
            Img={Steps2Image}
            text2="Technical Interview"
            text3="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis."
          />

<OtherSteps
            number={Steps3}
            alt="alt"
            text1="STEP THREE"
            Img={Steps3Image}
            text2="Technical Interview"
            text3="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis."
          />

<div className="flex justify-center items-center mt-[50px] gap-[20px] pb-[50px]">
          <div className="bg-[#FFFFFF] text-[#090909] rounded-[50px] w-[150px] px-[20px] py-[15px] text-center">
            Hire Talents
          </div>
          <div className=" border-[#494949] border-[1px] text-[#FFFFFF] rounded-[50px] w-[150px] px-[20px] py-[15px] text-center">
            Join Codejara
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
