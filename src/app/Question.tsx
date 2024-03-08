"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Question1 from "./Images/Question1.svg";
import Question2 from "./Images/Question2.svg";
import Question3 from "./Images/Question3.svg";
import Question4 from "./Images/Question4.svg";
import Question5 from "./Images/Question5.svg";

export default function Question() {
  const [answerText, setAnswerText] = useState<string>("Move cursor to question to display answer");
  

  const handleQuestionHover = (text: string) => {
    setAnswerText(text);
  };

  return (
    <div className='bg-[#FAFAFA] px-[20px]'>
      <div className="text-[#090909] pt-[30px] px-[20px]">
        <p className="text-[32px] font-bold text-center pt-[20px]">
          Frequently Asked Questions
        </p>
        <p className="text-[18px] leading-[30px] mt-[10px] font-normal text-center">
          We know you have questions and we have answered some below:
        </p>
      </div>

      <div className='lg:flex lg:w-full lg:gap-[90px] lg:px-[40px]'>
        <div className='lg:w-[40%]'>
          <div
            className='border-[#DBE1E7] border-[1px] bg-[#F7F8F9] mt-[30px] rounded-[10px] px-[20px] py-[10px]'
            onMouseEnter={() => handleQuestionHover("Blessing for Question 1")}
            onMouseLeave={() => handleQuestionHover("")}
          >
            <Image src={Question1} alt='One' />
            <p className='text-[20px] font-[600] text-[#090909] mt-[10px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>

          <div
            className='border-[#DBE1E7] border-[1px] bg-[#F7F8F9] mt-[30px] rounded-[10px] px-[20px] py-[10px]'
            onMouseEnter={() => handleQuestionHover("Blessing for Question 2")}
            onMouseLeave={() => handleQuestionHover("")}
          >
            <Image src={Question2} alt='Two' />
            <p className='text-[20px] font-[600] text-[#090909] mt-[10px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>

          <div
            className='border-[#DBE1E7] border-[1px] bg-[#F7F8F9] mt-[30px] rounded-[10px] px-[20px] py-[10px]'
            onMouseEnter={() => handleQuestionHover("Blessing for Question 3")}
            onMouseLeave={() => handleQuestionHover("")}
          >
            <Image src={Question3} alt='Three' />
            <p className='text-[20px] font-[600] text-[#090909] mt-[10px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>

          <div
            className='border-[#DBE1E7] border-[1px] bg-[#F7F8F9] mt-[30px] rounded-[10px] px-[20px] py-[10px]'
            onMouseEnter={() => handleQuestionHover("Blessing for Question 4")}
            onMouseLeave={() => handleQuestionHover("")}
          >
            <Image src={Question4} alt='Four' />
            <p className='text-[20px] font-[600] text-[#090909] mt-[10px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>

          <div
            className='border-[#DBE1E7] border-[1px] bg-[#F7F8F9] mt-[30px] rounded-[10px] px-[20px] py-[10px]'
            onMouseEnter={() => handleQuestionHover("Blessing for Question 5")}
            onMouseLeave={() => handleQuestionHover("")}
          >
            <Image src={Question5} alt='Five' />
            <p className='text-[20px] font-[600] text-[#090909] mt-[10px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>

        </div>

        <div className='hidden lg:block lg:w-[40%] lg:mt-[30px]'>
          <div className='bg-[#090909] w-[800px] h-[650px] rounded-[10px] lg:flex lg:justify-center lg:items-center lg:text-center'>
            {answerText}
          </div>
        </div>
      </div>
    </div>
  );
}
