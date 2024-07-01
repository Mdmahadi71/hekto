import React from 'react'
import Container from './Container'
import blog from '../assets/blog.png'
import { BsVectorPen } from "react-icons/bs";
import { FaRegCalendarAlt } from "react-icons/fa";

const Lblog = () => {
  return (
    <div className=' py-[40px]'>
      <Container>
        <div className="">
            <h3 className=' font-hakto font-semibold text-[35px] text-[#151875] text-center'>Leatest Blog</h3>
        </div>
        <div className=" flex justify-between">
            <div className="w-[32%]">
                <div className=" px-4 group ">
                    <img src={blog} alt="" />
                    <div className=" flex gap-x-[30px]">
                        <div className="flex gap-x-2 items-center">
                            <BsVectorPen className=' text-[#FB2E86]'/>
                            <p className=' font-hakto font-normal text-[#151875] text-[14px]'>SaberAli</p>
                        </div>
                        <div className=" flex gap-x-2 items-center">
                            <FaRegCalendarAlt className=' text-[#FFA454]'/>
                            <p className=' font-hakto font-normal text-[#151875] text-[14px]'>21 August,2020</p>
                        </div>
                    </div>
                    <h4 className=' font-hakto font-medium text-[#151875] text-[16px]
                     group-hover:text-[#FB2E86] duration-300 py-[20px]'>Top esssential Trends in 2021</h4>
                    <p className=' font-hakto font-medium text-[#72718F] text-[16px]'>More off this less hello samlande lied much
                    over tightly circa horse taped mightly</p>
                    <button className='border-b-[2px] border-[#151875] font-hakto font-medium text-[#151875] text-[16px]
                     group-hover:text-[#FB2E86] group-hover:border-[#FB2E86] duration-300'>Read More</button>
                </div>
                
            </div>
            <div className="w-[32%]">
                <div className=" px-4 group ">
                    <img src={blog} alt="" />
                    <div className=" flex gap-x-[30px]">
                        <div className="flex gap-x-2 items-center">
                            <BsVectorPen className=' text-[#FB2E86]'/>
                            <p className=' font-hakto font-normal text-[#151875] text-[14px]'>SaberAli</p>
                        </div>
                        <div className=" flex gap-x-2 items-center">
                            <FaRegCalendarAlt className=' text-[#FFA454]'/>
                            <p className=' font-hakto font-normal text-[#151875] text-[14px]'>21 August,2020</p>
                        </div>
                    </div>
                    <h4 className=' font-hakto font-medium text-[#151875] text-[16px]
                     group-hover:text-[#FB2E86] duration-300 py-[20px]'>Top esssential Trends in 2021</h4>
                    <p className=' font-hakto font-medium text-[#72718F] text-[16px]'>More off this less hello samlande lied much
                    over tightly circa horse taped mightly</p>
                    <button className='border-b-[2px] border-[#151875] font-hakto font-medium text-[#151875] text-[16px]
                     group-hover:text-[#FB2E86] group-hover:border-[#FB2E86] duration-300'>Read More</button>
                </div>
                
            </div>
            <div className="w-[32%]">
                <div className=" px-4 group ">
                    <img src={blog} alt="" />
                    <div className=" flex gap-x-[30px]">
                        <div className="flex gap-x-2 items-center">
                            <BsVectorPen className=' text-[#FB2E86]'/>
                            <p className=' font-hakto font-normal text-[#151875] text-[14px]'>SaberAli</p>
                        </div>
                        <div className=" flex gap-x-2 items-center">
                            <FaRegCalendarAlt className=' text-[#FFA454]'/>
                            <p className=' font-hakto font-normal text-[#151875] text-[14px]'>21 August,2020</p>
                        </div>
                    </div>
                    <h4 className=' font-hakto font-medium text-[#151875] text-[16px]
                     group-hover:text-[#FB2E86] duration-300 py-[20px]'>Top esssential Trends in 2021</h4>
                    <p className=' font-hakto font-medium text-[#72718F] text-[16px]'>More off this less hello samlande lied much
                    over tightly circa horse taped mightly</p>
                    <button className='border-b-[2px] border-[#151875] font-hakto font-medium text-[#151875] text-[16px]
                     group-hover:text-[#FB2E86] group-hover:border-[#FB2E86] duration-300'>Read More</button>
                </div>
                
            </div>
        </div>
      </Container>
    </div>
  )
}

export default Lblog
