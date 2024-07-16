import React from 'react'
import { CiMail } from "react-icons/ci";
import Container from './Container'
import { FaPhoneAlt, FaRegHeart, FaCartArrowDown } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FcManager } from "react-icons/fc";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Menu = () => {

    let data = useSelector((state)=>state.product.cartItem)


    return (
        <div className=' py-[15px] bg-[#7E33E0]'>
            <Container>
                <div className=" flex justify-between ">
                    <div className=" w-[50%]">
                        <div className=" flex gap-x-[50px] items-center">
                            <div className=" flex gap-x-3 items-center font-hakto font-normal text-[#F1F1F1] text-[16px]">
                                <div className="">
                                    <CiMail />
                                </div>
                                <div className="">
                                    <h2>habibalmasud79@gmail.com</h2>
                                </div>
                            </div>
                            <div className="flex gap-x-3 items-center font-hakto font-normal text-[#F1F1F1] text-[16px]">
                                <div className="">
                                    <FaPhoneAlt />
                                </div>
                                <div className="">
                                    <h2>01317159871</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" w-[50%]">
                        <div className=" flex justify-end gap-x-6">
                            <div className=" flex gap-x-2 font-hakto font-normal text-[#F1F1F1] text-[16px]  items-center">
                                <h2>English</h2>
                                <RiArrowDropDownLine />
                            </div>
                            <div className=" flex gap-x-2 font-hakto font-normal text-[#F1F1F1] text-[16px] items-center ">
                                <h2>USD</h2>
                                <RiArrowDropDownLine />
                            </div>
                            <div className=" flex gap-x-2 font-hakto font-normal text-[#F1F1F1] text-[16px] items-center">
                                <h2>Login</h2>
                                <FcManager />
                            </div>
                            <Link to= '/Shopping'>
                            <div className=" relative cursor-pointer flex gap-x-2 font-hakto font-normal text-[#F1F1F1] text-[16px] items-center" >
                                    {data.length ? (<div className=" absolute top-[-15px] text-center lg:h-[20px] h-[15px] 
                                        lg:w-[20px] w-[15px] bg-[#F5F5F3] leading-[20px] lg:right-[-9px] ">
                                        <h2 className=' font-dm text-[14px] text-[#262626]'>{data.length}</h2>
                                    </div>) : ('')}
                                    <h2>Wishlist</h2>
                                   <FaRegHeart />
                                </div>
                                </Link>
                                <Link to= '/Shopping'>
                                <div className=" relative cursor-pointer flex gap-x-2 font-hakto font-normal text-[#F1F1F1] text-[16px] items-center" >
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
