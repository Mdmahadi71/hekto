import React, { useContext } from 'react'
import Container from './Container'
import Trean from '../assets/chayar.png'
import Trends from '../assets/trabd2.png'
import tracndd from '../assets/trend1.png'
import Trendf from '../assets/trend3.png'
import { DataApi } from './ContextApi'

const Trending = () => {

    let data = useContext(DataApi)
    console.log(data);

    return (
        <div>
            <Container>
                <div className="">
                    <h2 className=' font-hakto font-semibold text-[42px] text-[#151875] text-center'>Trending Products</h2>
                </div>
                <div className=" flex justify-between">
                    <div className="w-[23%]">
                        <div className="border-[1px] border-[] px-[10px] py-[10px] bg-[#FFFFFF] shadow-xl">
                            <div className=" bg-[#F5F6F8] px-[10px] py-[20px]">
                                <img src={Trean} className=' translate-x-[25%]' alt="" />
                            </div>
                            <div className=" py-[30px]">
                                <h4 className=' font-hakto font-medium text-[16px] text-[#151875] text-center'>Cantilever chair</h4>
                                <div className=" flex gap-x-2 justify-center">
                                    <p className=' font-hakto font-normal text-[#151875] text-[14px] text-center'>$26.00 </p>
                                    <p className=' font-hakto font-normal text-[#151875] text-[12px] text-center'>$42.00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[23%]">
                        <div className="border-[1px] border-[] px-[10px] py-[10px] bg-[#FFFFFF] shadow-xl">
                            <div className=" bg-[#F5F6F8] px-[10px] py-[20px]">
                                <img src={Trean} className=' translate-x-[25%]' alt="" />
                            </div>
                            <div className=" py-[30px]">
                                <h4 className=' font-hakto font-medium text-[16px] text-[#151875] text-center'>Cantilever chair</h4>
                                <div className=" flex gap-x-2 justify-center">
                                    <p className=' font-hakto font-normal text-[#151875] text-[14px] text-center'>$26.00 </p>
                                    <p className=' font-hakto font-normal text-[#151875] text-[12px] text-center'>$42.00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[23%]">
                        <div className="border-[1px] border-[] px-[10px] py-[10px] bg-[#FFFFFF] shadow-xl">
                            <div className=" bg-[#F5F6F8] px-[10px] py-[20px]">
                                <img src={Trean} className=' translate-x-[25%]' alt="" />
                            </div>
                            <div className=" py-[30px]">
                                <h4 className=' font-hakto font-medium text-[16px] text-[#151875] text-center'>Cantilever chair</h4>
                                <div className=" flex gap-x-2 justify-center">
                                    <p className=' font-hakto font-normal text-[#151875] text-[14px] text-center'>$26.00 </p>
                                    <p className=' font-hakto font-normal text-[#151875] text-[12px] text-center'>$42.00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[23%]">
                        <div className="border-[1px] border-[] px-[10px] py-[10px] bg-[#FFFFFF] shadow-xl">
                            <div className=" bg-[#F5F6F8] px-[10px] py-[20px]">
                                <img src={Trean} className=' translate-x-[25%]' alt="" />
                            </div>
                            <div className=" py-[30px]">
                                <h4 className=' font-hakto font-medium text-[16px] text-[#151875] text-center'>Cantilever chair</h4>
                                <div className=" flex gap-x-2 justify-center">
                                    <p className=' font-hakto font-normal text-[#151875] text-[14px] text-center'>$26.00 </p>
                                    <p className=' font-hakto font-normal text-[#151875] text-[12px] text-center'>$42.00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className=" flex justify-between py-[ py-[40px]">
                    <div className="w-[32%]">
                        <div className=" border-[1px] border-[#FFF6FB] h-[300px] w-[400px] px-[10px] py-3 bg-[#FFF6FB] ">
                            <div className="">
                                <h4 className=' font-hakto font-medium text-[26px] text-[#151875]'>23% off in all products</h4>
                                <p className=' font-hakto font-normal text-[16px] text-[#FB2E86] border-b-[1px] border-[#FB2E86] inline-block'>Shop Now</p>
                            </div>
                            <div className=" ">
                                <img src={tracndd} className=' translate-x-[50%]' alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="w-[32%]">
                        <div className=" border-[1px] border-[#FFF6FB]  h-[300px] w-[400px]  px-[10px] py-3 bg-[#FFF6FB]">
                            <div className="">
                                <h4 className=' font-hakto font-medium text-[26px] text-[#151875]'>23% off in all products</h4>
                                <p className=' font-hakto font-normal text-[16px] text-[#FB2E86] border-b-[1px] border-[#FB2E86] inline-block'>View Collection</p>
                            </div>
                            <div className=" ">
                                <img src={Trends} className=' translate-x-[20%]' alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="w-[25%]">
                        <div className=" h-[300px] w-[300px] ">
                            <div className=" flex gap-x-2 items-center py-4">
                                <div className=" bg-[#F5F6F8]">
                                    <img src={Trendf} alt="" />
                                </div>
                                <div className="">
                                    <h4 className=' font-hakto font-medium text-[16px] text-[#151875]'>Executive Seat chair</h4>
                                    <p className=' font-hakto font-medium text-[12px] text-[#151875]'>$32.00</p>
                                </div>
                            </div>
                            <div className=" flex gap-x-2 items-center py-4">
                                <div className=" bg-[#F5F6F8]">
                                    <img src={Trendf} alt="" />
                                </div>
                                <div className="">
                                    <h4 className=' font-hakto font-medium text-[16px] text-[#151875]'>Executive Seat chair</h4>
                                    <p className=' font-hakto font-medium text-[12px] text-[#151875]'>$32.00</p>
                                </div>
                            </div>
                            <div className=" flex gap-x-2 items-center py-4">
                                <div className=" bg-[#F5F6F8]">
                                    <img src={Trendf} alt="" />
                                </div>
                                <div className="">
                                    <h4 className=' font-hakto font-medium text-[16px] text-[#151875]'>Executive Seat chair</h4>
                                    <p className=' font-hakto font-medium text-[12px] text-[#151875]'>$32.00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Trending
