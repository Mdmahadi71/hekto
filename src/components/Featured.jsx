import React from 'react'
import Container from '../Container'
import feature from '../assets/chayar.png'
import { FaCartArrowDown,FaRegHeart  } from "react-icons/fa";
import { MdOutlineZoomIn } from "react-icons/md";

const Featured = () => {
  return (
    <div className=' py-[60px]'>
      <Container>
        <div className="">
            <h2 className=' font-hakto font-semibold text-[42px] text-[#1A0B5B] text-center'>Featured Products</h2>
        </div>
        <div className=" flex justify-between">
            <div className="w-[20%]">
                <div className="">
                    <div className=" ">
                        <div className=" bg-[#F6F7FB] relative  group overflow-hidden p-[20px]">
                            <img src={feature} alt="" />
                            <div className=" absolute top-[-20px] left-[80px] group-hover:top-[10px] duration-300">
                               <div className=" flex gap-x-[20px] text-center">
                               <FaCartArrowDown/>
                                <FaRegHeart />
                                <MdOutlineZoomIn/>
                               </div>
                            </div>
                            <div className=" absolute bottom-[-200px] left-[50px]  group-hover:bottom-[4px] duration-300">
                                <div className=" border-[1px] border-[#000000] py-[10px] px-[15px] bg-[#08D15F] text-center">
                                    <a className=' font-hakto font-medium text-[16px] text-[#ffffff]'>View Details</a>
                                </div>
                            </div>
                        </div>
                        <div className=" text-center bg-[#0e07070c] py-[20px] hover:bg-[#2F1AC4] group-hover:text-[#FFFFFF]  duration-200 ">
                            <h3 className=' font-hakto font-medium text-[18px] text-[#FB2E86] hover:text-[#FFFFFF] duration-200'>Cantilever chair</h3>
                            <div className=" flex gap-x-2 justify-center py-2">
                                <div className=" text-center">
                                    <div className="bg-[#05E6B7] h-[2px] w-4"></div>
                                </div>
                                <div className=" text-center">
                                    <div className="bg-[#FB2E86] h-[2px] w-4"></div>
                                </div>
                                <div className=" text-center">
                                    <div className="bg-[#00009D] h-[2px] w-4"></div>
                                </div>
                            </div>
                            <h4 className=' font-hakto font-normal text-[14px] text-[#151875] hover:text-[#FFFFFF] duration-200'>Code - Y523201</h4>
                            <p className=' font-hakto font-medium text-[14px] text-[#151875] hover:text-[#FFFFFF] duration-200'>$42.00</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[20%]">
                <div className="">
                    <div className=" ">
                        <div className=" bg-[#F6F7FB] relative  group overflow-hidden p-[20px]">
                            <img src={feature} alt="" />
                            <div className=" absolute top-[-20px] left-[80px] group-hover:top-[10px] duration-300">
                               <div className=" flex gap-x-[20px] text-center">
                               <FaCartArrowDown/>
                                <FaRegHeart />
                                <MdOutlineZoomIn/>
                               </div>
                            </div>
                            <div className=" absolute bottom-[-200px] left-[50px]  group-hover:bottom-[4px] duration-300">
                                <div className=" border-[1px] border-[#000000] py-[10px] px-[15px] bg-[#08D15F] text-center">
                                    <a className=' font-hakto font-medium text-[16px] text-[#ffffff]'>View Details</a>
                                </div>
                            </div>
                        </div>
                        <div className=" text-center bg-[#0e07070c] py-[20px] hover:bg-[#2F1AC4] group-hover:text-[#FFFFFF]  duration-200 ">
                            <h3 className=' font-hakto font-medium text-[18px] text-[#FB2E86] hover:text-[#FFFFFF] duration-200'>Cantilever chair</h3>
                            <div className=" flex gap-x-2 justify-center py-2">
                                <div className=" text-center">
                                    <div className="bg-[#05E6B7] h-[2px] w-4"></div>
                                </div>
                                <div className=" text-center">
                                    <div className="bg-[#FB2E86] h-[2px] w-4"></div>
                                </div>
                                <div className=" text-center">
                                    <div className="bg-[#00009D] h-[2px] w-4"></div>
                                </div>
                            </div>
                            <h4 className=' font-hakto font-normal text-[14px] text-[#151875] hover:text-[#FFFFFF] duration-200'>Code - Y523201</h4>
                            <p className=' font-hakto font-medium text-[14px] text-[#151875] hover:text-[#FFFFFF] duration-200'>$42.00</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[20%]">
                <div className="">
                    <div className=" ">
                        <div className=" bg-[#F6F7FB] relative  group overflow-hidden p-[20px]">
                            <img src={feature} alt="" />
                            <div className=" absolute top-[-20px] left-[80px] group-hover:top-[10px] duration-300">
                               <div className=" flex gap-x-[20px] text-center">
                               <FaCartArrowDown/>
                                <FaRegHeart />
                                <MdOutlineZoomIn/>
                               </div>
                            </div>
                            <div className=" absolute bottom-[-200px] left-[50px]  group-hover:bottom-[4px] duration-300">
                                <div className=" border-[1px] border-[#000000] py-[10px] px-[15px] bg-[#08D15F] text-center">
                                    <a className=' font-hakto font-medium text-[16px] text-[#ffffff]'>View Details</a>
                                </div>
                            </div>
                        </div>
                        <div className=" text-center bg-[#0e07070c] py-[20px] hover:bg-[#2F1AC4] group-hover:text-[#FFFFFF]  duration-200 ">
                            <h3 className=' font-hakto font-medium text-[18px] text-[#FB2E86] hover:text-[#FFFFFF] duration-200'>Cantilever chair</h3>
                            <div className=" flex gap-x-2 justify-center py-2">
                                <div className=" text-center">
                                    <div className="bg-[#05E6B7] h-[2px] w-4"></div>
                                </div>
                                <div className=" text-center">
                                    <div className="bg-[#FB2E86] h-[2px] w-4"></div>
                                </div>
                                <div className=" text-center">
                                    <div className="bg-[#00009D] h-[2px] w-4"></div>
                                </div>
                            </div>
                            <h4 className=' font-hakto font-normal text-[14px] text-[#151875] hover:text-[#FFFFFF] duration-200'>Code - Y523201</h4>
                            <p className=' font-hakto font-medium text-[14px] text-[#151875] hover:text-[#FFFFFF] duration-200'>$42.00</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[20%]">
                <div className="">
                    <div className=" ">
                        <div className=" bg-[#F6F7FB] relative  group overflow-hidden p-[20px]">
                            <img src={feature} alt="" />
                            <div className=" absolute top-[-20px] left-[80px] group-hover:top-[10px] duration-300">
                               <div className=" flex gap-x-[20px] text-center">
                               <FaCartArrowDown/>
                                <FaRegHeart />
                                <MdOutlineZoomIn/>
                               </div>
                            </div>
                            <div className=" absolute bottom-[-200px] left-[50px]  group-hover:bottom-[4px] duration-300">
                                <div className=" border-[1px] border-[#000000] py-[10px] px-[15px] bg-[#08D15F] text-center">
                                    <a className=' font-hakto font-medium text-[16px] text-[#ffffff]'>View Details</a>
                                </div>
                            </div>
                        </div>
                        <div className=" text-center bg-[#0e07070c] py-[20px] hover:bg-[#2F1AC4] group-hover:text-[#FFFFFF]  duration-200 ">
                            <h3 className=' font-hakto font-medium text-[18px] text-[#FB2E86] hover:text-[#FFFFFF] duration-200'>Cantilever chair</h3>
                            <div className=" flex gap-x-2 justify-center py-2">
                                <div className=" text-center">
                                    <div className="bg-[#05E6B7] h-[2px] w-4"></div>
                                </div>
                                <div className=" text-center">
                                    <div className="bg-[#FB2E86] h-[2px] w-4"></div>
                                </div>
                                <div className=" text-center">
                                    <div className="bg-[#00009D] h-[2px] w-4"></div>
                                </div>
                            </div>
                            <h4 className=' font-hakto font-normal text-[14px] text-[#151875] hover:text-[#FFFFFF] duration-200'>Code - Y523201</h4>
                            <p className=' font-hakto font-medium text-[14px] text-[#151875] hover:text-[#FFFFFF] duration-200'>$42.00</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </Container>
    </div>
  )
}

export default Featured
