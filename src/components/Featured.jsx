import React, { useContext, useEffect, useState } from 'react'
import Container from './Container'
import feature from '../assets/chayar.png'
import { FaCartArrowDown,FaRegHeart  } from "react-icons/fa";
import { MdOutlineZoomIn } from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { DataApi } from './ContextApi';




const Featured = () => {
     let data = useContext(DataApi)
    
 
     const settings = {
      dots: true,
      infinite: true,
      arrows:false,
      autoplay:true,
      speed: 3000,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ],
  
    appendDots: dots => (
      <div
        style={{

          borderRadius: "10px",
          paddingTop: "0px",
          marginTop:"0px"
        }}
      >
        <ul style={{ marginTop: "0px" }}> {dots} </ul>
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
          borderRadius:"30px",
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
            {data.map((items)=>(
                <div className="flex w-[23%] gap-x-[10px]" >
                <div className="bg-[#F6F7FB] shadow-xl">
                    <div className=" relative  group overflow-hidden">
                        <div className=" bg-[#F6F7FB] relative  group overflow-hidden p-[20px]">
                            <div className=" p-[15%]">
                               <img src={items.thumbnail} className=' w-full h-[100%]' alt="" />
                            </div>
                            <div className=" absolute top-[-20px] px-[28%] group-hover:top-[30px] duration-300">
                               <div className=" flex gap-x-[20px] text-center">
                               <FaCartArrowDown/>
                                <FaRegHeart />
                                <MdOutlineZoomIn/>
                               </div>
                            </div>
                            <button className='absolute bottom-[-200px] px-[25%] group-hover:bottom-[4px] duration-300'>
                                <div className="border-[1px] py-[10px] px-[15px] bg-[#08D15F] rounded-[3px] text-center">
                                    <h3 className=' font-hakto font-medium text-[16px] text-[#ffffff]'>View Details</h3>
                                    </div>
                            </button>
                        </div>
                        <div className=" text-center bg-[#0e07070c] py-[20px] group-hover:bg-[#2F1AC4] group-hover:text-[#FFFFFF]  duration-200 ">
                            <h3 className=' font-hakto font-medium text-[18px] text-[#FB2E86] hover:text-[#FFFFFF] duration-200'>{items.title}</h3>
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
        </Slider>


      </Container>
    </div>
  )
}

export default Featured
