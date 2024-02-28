import React from 'react'
import Image from 'next/image'
import Question1 from "./Images/Question1.svg"
import Question2 from "./Images/Question2.svg"
import Question3 from "./Images/Question3.svg"
import Question4 from "./Images/Question4.svg"
import Question5 from "./Images/Question5.svg"

export default function Question() {
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

      <div className='border-[#DBE1E7] border-[1px] bg-[#F7F8F9] mt-[30px] rounded-[10px] px-[20px] py-[10px]'>
        <Image src={Question1} alt='One'></Image>
        <p className='text-[20px] font-[600] text-[#090909] mt-[10px]'>Lorem ipsun di maria</p>
      </div>

      <div className='border-[#DBE1E7] border-[1px] bg-[#F7F8F9] mt-[30px] rounded-[10px] px-[20px] py-[10px]'>
        <Image src={Question2} alt='One'></Image>
        <p className='text-[20px] font-[600] text-[#090909] mt-[10px]'>Lorem ipsun di maria</p>
      </div>

      <div className='border-[#DBE1E7] border-[1px] bg-[#F7F8F9] mt-[30px] rounded-[10px] px-[20px] py-[10px]'>
        <Image src={Question3} alt='One'></Image>
        <p className='text-[20px] font-[600] text-[#090909] mt-[10px]'>Lorem ipsun di maria</p>
      </div>

      <div className='border-[#DBE1E7] border-[1px] bg-[#F7F8F9] mt-[30px] rounded-[10px] px-[20px] py-[10px]'>
        <Image src={Question4} alt='One'></Image>
        <p className='text-[20px] font-[600] text-[#090909] mt-[10px]'>Lorem ipsun di maria</p>
      </div>

      <div className='border-[#DBE1E7] border-[1px] bg-[#F7F8F9] mt-[30px] rounded-[10px] px-[20px] py-[10px]'>
        <Image src={Question5} alt='One'></Image>
        <p className='text-[20px] font-[600] text-[#090909] mt-[10px]'>Lorem ipsun di maria</p>
      </div>
    </div>
  )
}
