import React, { useState } from 'react'
import { CiMail } from "react-icons/ci";
import Container from './Container'
import { FaPhoneAlt, FaRegHeart, FaCartArrowDown } from "react-icons/fa";
import { FcManager } from "react-icons/fc";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Menu = () => {

    let data = useSelector((state)=>state.product.cartItem)

    return (
        <div className=' py-[15px] bg-[#7E33E0]'>
            <Container>
                <div className={` lg:flex lg:justify-between`}>
                    <div className=" lg:w-[50%]">
                        <div className=" lg:flex gap-x-[50px] items-center">
                            <div className=" flex gap-x-3 items-center lg:justify-start justify-center font-hakto font-normal text-[#F1F1F1] text-[16px] lg:my-0 my-3">
                                <div className="">
                                    <CiMail />
                                </div>
                                <div className="">
                                    <h2>habibalmasud79@gmail.com</h2>
                                </div>
                            </div>
                            <div className="flex gap-x-3 items-center lg:justify-start justify-center font-hakto font-normal text-[#F1F1F1] text-[16px] lg:my-0 my-3">
                                <div className="">
                                    <FaPhoneAlt />
                                </div>
                                <div className="">
                                    <h2>01317159871</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" lg:w-[50%]">
                        <div className=" flex justify-end gap-x-6">
                            <div className=" flex gap-x-2 font-hakto font-normal text-[#F1F1F1] text-[16px]  items-center lg:my-0 my-4">
                                <select className=' bg-[#7E33E0] outline-none' name="" id="">
                                    <option className=' bg-[#7E33E0]' value="English">English</option>
                                    <option className=' bg-[#7E33E0]'  value="Bangla">Bangla</option>
                                </select>
                            </div>
                            <div className=" flex lg:gap-x-2 gap-x-1 font-hakto font-normal text-[#F1F1F1] text-[16px] items-center lg:my-0 my-4">
                                <select className=' bg-[#7E33E0] outline-none' name="" id="">
                                    <option className=' bg-[#7E33E0]' value="BDT">BDT</option>
                                    <option className=' bg-[#7E33E0]'  value="USD">USD</option>
                                </select>
                            </div>
                            <Link to={'/LoginPage'}>
                            <div className=" flex gap-x-2 font-hakto font-normal text-[#F1F1F1] text-[16px] items-center lg:my-0 my-4">
                                <h2>Login</h2>
                                <FcManager />
                            </div>
                            </Link>
                            <Link to= '/Shopping'>
                            <div className=" relative cursor-pointer flex gap-x-2 font-hakto font-normal text-[#F1F1F1] text-[16px] items-center lg:my-0 my-4" >
                                    {data.length ? (<div className=" absolute top-[-15px] text-center lg:h-[20px] h-[15px] 
                                        lg:w-[20px] w-[15px] bg-[#F5F5F3] leading-[20px] lg:right-[-9px] ">
                                        <h2 className=' font-dm text-[14px] text-[#262626]'>{data.length}</h2>
                                    </div>) : ('')}
                                    <h2>Wishlist</h2>
                                   <FaRegHeart />
                                </div>
                                </Link>
                                <Link to= '/Shopping'>
                                <div className=" relative cursor-pointer flex gap-x-2 font-hakto font-normal text-[#F1F1F1] text-[16px] items-center lg:my-0 my-4" >
                                    {data.length ? (<div className=" absolute top-[-15px] text-center lg:h-[20px] h-[15px] 
                                        lg:w-[20px] w-[15px] bg-[#F5F5F3] leading-[20px] lg:right-[-9px] ">
                                        <h2 className=' font-dm text-[14px] text-[#262626]'>{data.length}</h2>
                                    </div>) : ('')}
                                    <FaCartArrowDown />
                                </div>
                                </Link>
                            </div>
                        </div>
                    </div>
            </Container>
        </div>
    )
}

export default Menu
