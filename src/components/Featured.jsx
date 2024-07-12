import React, { useContext, useEffect, useState } from 'react'
import Container from './Container'
import feature from '../assets/chayar.png'
import { FaCartArrowDown,FaRegHeart  } from "react-icons/fa";
import { MdOutlineZoomIn } from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import axios from 'axios';
// import { DataApi } from './ContextApi';


const Featured = () => {

    //  let data = useContext(DataApi)
    //  console.log(data);
    let [item , setitem] = useState([])
    

    let getdata =(()=>{
        axios.get(('https://dummyjson.com/products')).then((response)=>{
            setitem(response.data.products);
            
        })
    })
    useEffect(() => {
        getdata()
    }, [])
   


    const settings = {
        dots: true,
        infinite: true,
        arrows:false,
        autoplay:true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        appendDots: dots => (
            <div
              style={{
      
                borderRadius: "10px",
                padding: "-10px",
                marginTop:"100px"
              }}
            >
              <ul style={{ margin: "-10px" }}> {dots} </ul>
            </div>
          ),
          customPaging: i => (
            <div
              style={{
                color: "transparent",
                height:"4px",
                redius:"10px",
                width:"20px",
                background:"#FEBAD7",
                borderRadius:"10px",
              }}
            >
              {i + 1}
            </div>
          )
      };
  return (
    <div className=' py-[60px]'>
      <Container>
        <div className="">
            <h2 className=' font-hakto font-semibold text-[42px] text-[#1A0B5B] text-center'>Featured Products</h2>
        </div>
       
        <Slider {...settings}>
            {item.map((items)=>(
                <div className="flex w-[25%]" >
                <div className="bg-[#F6F7FB] shadow-xl">
                    <div className=" relative  group overflow-hidden">
                        <div className=" bg-[#F6F7FB] relative  group overflow-hidden p-[20px]">
                            <img src={items.thumbnail} className=' translate-x-[8%]' alt="" />
                            <div className=" absolute top-[-20px] left-[80px] group-hover:top-[10px] duration-300">
                               <div className=" flex gap-x-[20px] text-center">
                               <FaCartArrowDown/>
                                <FaRegHeart />
                                <MdOutlineZoomIn/>
                               </div>
                            </div>
                            <button className='absolute bottom-[-200px] left-[65px]  group-hover:bottom-[4px] duration-300'>
                                <div className="border-[1px] border-[#000000] py-[10px] px-[15px] bg-[#08D15F] text-center">
                                    <h3 className=' font-hakto font-medium text-[16px] text-[#ffffff]'>View Details</h3>
                                    </div>
                            </button>
                        </div>
                        <div className=" text-center bg-[#0e07070c] py-[20px] group-hover:bg-[#2F1AC4] group-hover:text-[#FFFFFF]  duration-200 ">
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
                            <h4 className=' font-hakto font-normal text-[14px] text-[#151875] group-hover:text-[#FFFFFF] duration-200'>Code - Y523201</h4>
                            <p className=' font-hakto font-medium text-[14px] text-[#151875] group-hover:text-[#FFFFFF] duration-200'>${items.price}</p>
                        </div>
                    </div>
                </div>
            </div>
            ))}
            {/* <div className="flex w-[25%]" >
                <div className="bg-[#F6F7FB] shadow-xl">
                    <div className=" relative  group overflow-hidden">
                        <div className=" bg-[#F6F7FB] relative  group overflow-hidden p-[20px]">
                            <img src={feature} className=' translate-x-[8%]' alt="" />
                            <div className=" absolute top-[-20px] left-[80px] group-hover:top-[10px] duration-300">
                               <div className=" flex gap-x-[20px] text-center">
                               <FaCartArrowDown/>
                                <FaRegHeart />
                                <MdOutlineZoomIn/>
                               </div>
                            </div>
                            <button className='absolute bottom-[-200px] left-[65px]  group-hover:bottom-[4px] duration-300'>
                                <div className="border-[1px] border-[#000000] py-[10px] px-[15px] bg-[#08D15F] text-center">
                                    <h3 className=' font-hakto font-medium text-[16px] text-[#ffffff]'>View Details</h3>
                                    </div>
                            </button>
                        </div>
                        <div className=" text-center bg-[#0e07070c] py-[20px] group-hover:bg-[#2F1AC4] group-hover:text-[#FFFFFF]  duration-200 ">
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
                            <h4 className=' font-hakto font-normal text-[14px] text-[#151875] group-hover:text-[#FFFFFF] duration-200'>Code - Y523201</h4>
                            <p className=' font-hakto font-medium text-[14px] text-[#151875] group-hover:text-[#FFFFFF] duration-200'>$42.00</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex w-[20%]">
                <div className="bg-[#F6F7FB] shadow-xl">
                    <div className=" relative  group overflow-hidden">
                        <div className=" bg-[#F6F7FB]  relative  group overflow-hidden p-[20px]">
                            <img src={feature} className=' translate-x-[8%]' alt="" />
                            <div className=" absolute top-[-20px] left-[80px] group-hover:top-[10px] duration-300">
                               <div className=" flex gap-x-[20px] text-center">
                               <FaCartArrowDown/>
                                <FaRegHeart />
                                <MdOutlineZoomIn/>
                               </div>
                            </div>
                            <button className='absolute bottom-[-200px] left-[65px]  group-hover:bottom-[4px] duration-300'>
                                <div className="border-[1px] border-[#000000] py-[10px] px-[15px] bg-[#08D15F] text-center">
                                    <h3 className=' font-hakto font-medium text-[16px] text-[#ffffff]'>View Details</h3>
                                    </div>
                            </button>
                        </div>
                        <div className=" text-center bg-[#0e07070c] py-[20px] group-hover:bg-[#2F1AC4] group-hover:text-[#FFFFFF]  duration-200 ">
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
                            <h4 className=' font-hakto font-normal text-[14px] text-[#151875] group-hover:text-[#FFFFFF] duration-200'>Code - Y523201</h4>
                            <p className=' font-hakto font-medium text-[14px] text-[#151875] group-hover:text-[#FFFFFF] duration-200'>$42.00</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="flex w-[20%]">
                <div className=" bg-[#F6F7FB] shadow-xl">
                    <div className=" relative  group overflow-hidden">
                        <div className=" bg-[#F6F7FB] relative  group overflow-hidden p-[20px]">
                            <img src={feature} className=' translate-x-[8%]' alt="" />
                            <div className=" absolute top-[-20px] left-[80px] group-hover:top-[10px] duration-300">
                               <div className=" flex gap-x-[20px] text-center">
                               <FaCartArrowDown/>
                                <FaRegHeart />
                                <MdOutlineZoomIn/>
                               </div>
                            </div>
                            <button className='absolute bottom-[-200px] left-[65px]  group-hover:bottom-[4px] duration-300'>
                                <div className="border-[1px] border-[#000000] py-[10px] px-[15px] bg-[#08D15F] text-center">
                                    <h3 className=' font-hakto font-medium text-[16px] text-[#ffffff]'>View Details</h3>
                                    </div>
                            </button>
                        </div>
                        <div className=" text-center bg-[#0e07070c] py-[20px] group-hover:bg-[#2F1AC4] group-hover:text-[#FFFFFF]  duration-200 ">
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
                            <h4 className=' font-hakto font-normal text-[14px] text-[#151875] group-hover:text-[#FFFFFF] duration-200'>Code - Y523201</h4>
                            <p className=' font-hakto font-medium text-[14px] text-[#151875] group-hover:text-[#FFFFFF] duration-200'>$42.00</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="flex w-[20%]">
                <div className=" bg-[#F6F7FB] shadow-xl">
                    <div className=" relative  group overflow-hidden">
                        <div className=" bg-[#F6F7FB]  relative  group overflow-hidden p-[20px]">
                            <img src={feature} className=' translate-x-[8%]' alt="" />
                            <div className=" absolute top-[-20px] left-[80px] group-hover:top-[10px] duration-300">
                               <div className=" flex gap-x-[20px] text-center">
                               <FaCartArrowDown/>
                                <FaRegHeart />
                                <MdOutlineZoomIn/>
                               </div>
                            </div>
                            <button className='absolute bottom-[-200px] left-[65px]  group-hover:bottom-[4px] duration-300'>
                                <div className="border-[1px] border-[#000000] py-[10px] px-[15px] bg-[#08D15F] text-center">
                                    <h3 className=' font-hakto font-medium text-[16px] text-[#ffffff]'>View Details</h3>
                                    </div>
                            </button>
                        </div>
                        <div className=" text-center bg-[#0e07070c] py-[20px] group-hover:bg-[#2F1AC4] group-hover:text-[#FFFFFF]  duration-300 ">
                            <h3 className=' font-hakto font-medium text-[18px] text-[#FB2E86] hover:text-[#FFFFFF] duration-300'>Cantilever chair</h3>
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
                            <h4 className=' font-hakto font-normal text-[14px] text-[#151875] group-hover:text-[#FFFFFF] duration-300'>Code - Y523201</h4>
                            <p className=' font-hakto font-medium text-[14px] text-[#151875] group-hover:text-[#FFFFFF] duration-300'>$42.00</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="flex w-[20%]">
                <div className=" bg-[#F6F7FB] shadow-xl">
                    <div className=" relative  group overflow-hidden">
                        <div className=" bg-[#F6F7FB]  relative  group overflow-hidden p-[20px]">
                            <img src={feature} className=' translate-x-[8%]' alt="" />
                            <div className=" absolute top-[-20px] left-[80px] group-hover:top-[10px] duration-300">
                               <div className=" flex gap-x-[20px] text-center">
                               <FaCartArrowDown/>
                                <FaRegHeart />
                                <MdOutlineZoomIn/>
                               </div>
                            </div>
                            <button className='absolute bottom-[-200px] left-[65px]  group-hover:bottom-[4px] duration-300'>
                                <div className="border-[1px] border-[#000000] py-[10px] px-[15px] bg-[#08D15F] text-center">
                                    <h3 className=' font-hakto font-medium text-[16px] text-[#ffffff]'>View Details</h3>
                                    </div>
                            </button>
                        </div>
                        <div className=" text-center bg-[#0e07070c] py-[20px] group-hover:bg-[#2F1AC4] group-hover:text-[#FFFFFF]  duration-300 ">
                            <h3 className=' font-hakto font-medium text-[18px] text-[#FB2E86] hover:text-[#FFFFFF] duration-300'>Cantilever chair</h3>
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
                            <h4 className=' font-hakto font-normal text-[14px] text-[#151875] group-hover:text-[#FFFFFF] duration-300'>Code - Y523201</h4>
                            <p className=' font-hakto font-medium text-[14px] text-[#151875] group-hover:text-[#FFFFFF] duration-300'>$42.00</p>
                        </div>
                    </div>
                </div>
            </div> */}

        </Slider>


      </Container>
    </div>
  )
}

export default Featured
