import React from 'react'
import { IoMdStarOutline } from "react-icons/io";
import { TbZoomIn } from "react-icons/tb";
import { FaList, FaRegHeart, FaCartPlus } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";
import { Link, useParams } from 'react-router-dom';

const Post = ({ Allpage }) => {


    return (
        <div>
            {Allpage.map((item) => (
                <div className=" border-[1px]  px-4 py-4 my-[25px] shadow-sm">
                    <div className=" flex gap-x-[40px] items-center">
                        <Link to={`/Shopsidebar/${item.id}`}>
                        <div className="">
                            <img src={item.thumbnail} alt="" />
                        </div>
                        </Link>
                        <div className=" w-[50%]">
                            <div className=" flex  items-center gap-x-[20px] py-[8px]">
                                <h3 className=' font-hakto font-medium text-[#111C85] text-[20px]'>{item.title}</h3>
                                <div className=" flex gap-x-[10px] ">
                                    <div className=" w-[10px] h-[10px] rounded-[50%] bg-[#DE9034]"></div>
                                    <div className=" w-[10px] h-[10px] rounded-[50%] bg-[#EC42A2]"></div>
                                    <div className=" w-[10px] h-[10px] rounded-[50%] bg-[#8568FF]"></div>
                                </div>
                            </div>
                            <div className=" flex gap-x-[20px] items-center py-4">
                                <h5 className=' font-hakto font-normal text-[16px] text-[#111C85] hover:text-[#FF2AAA] duration-300'>${item.price}</h5>
                                <h5 className=' font-hakto font-normal text-[16px] text-[#FF2AAA] hover:text-[#111C85] duration-300'>${item.price}</h5>
                                <div className=" flex gap-x-[10px]">
                                    <FaRegStar />
                                    <FaRegStar />
                                    <FaRegStar />
                                    <FaRegStar />
                                    <IoMdStarOutline />
                                </div>
                            </div>
                            <p className=' font-hakto font-light text-[17px] text-[#9295AA]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
                            <div className=" flex gap-x-[40px] pt-[18px]">
                                <FaCartPlus />
                                <TbZoomIn />
                                <FaRegHeart />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Post