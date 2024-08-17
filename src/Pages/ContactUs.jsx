import React from 'react'
import Container from '../components/Container'
import { Link } from 'react-router-dom'
import { IoIosContact } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import TouchImg from '../assets/Touch.png'

const ContactUs = () => {
    return (
        <>
            <div className=' bg-[#F6F5FF] py-[90px]'>
                <Container>
                    <div className="">
                        <h2 className=' font-hakto font-semibold text-[#101750] text-[35px]'>Contact Us</h2>
                        <h2><Link to='/'><span className=' font-hakto font-medium text-[16px] text-[#101750]  hover:text-[#FB2E86] duration-300'>Home.Pages</span>
                        </Link> <Link to='/ContactUs'><span className=' font-hakto font-medium text-[16px] text-[#101750]  hover:text-[#FB2E86] duration-300'>.Contact Us</span></Link></h2>

                    </div>
                </Container>
            </div>
            <div className=" py-[50px]">
                <Container>
                    <div className=" lg:flex justify-between">
                        <div className="lg:w-[50%]">
                            <div className="">
                                <h3 className=' font-hakto font-medium text-[36px] text-[#151875]'>Information About us</h3>
                                <p className=' font-hakto font-normal text-[#8A8FB9] text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.</p>
                                <div className=" flex gap-x-[20px] pt-[40px]">
                                    <div className=" border-[1px] bg-[#5625DF] h-[25px] w-[25px] rounded-[50%]"></div>
                                    <div className=" border-[1px] bg-[#FF27B7] h-[25px] w-[25px] rounded-[50%]"></div>
                                    <div className=" border-[1px] bg-[#37DAF3] h-[25px] w-[25px] rounded-[50%]"></div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-[50%]">
                            <h3 className=' font-hakto font-medium text-[36px] text-[#151875]'>Contact Way</h3>
                            <div className=" flex justify-between py-[20px]">
                                <div className=" flex gap-x-[20px]">
                                    <div className=" border-[1px] bg-[#5625DF] h-[45px] w-[45px] rounded-[50%]"></div>
                                    <div className="">
                                        <h6 className=' font-hakto font-normal text-[16px] text-[#8A8FB9]'>Tel: 877-67-88-99</h6>
                                        <h6 className=' font-hakto font-normal text-[16px] text-[#8A8FB9]'>E-Mail: shop@store.com</h6>
                                    </div>
                                </div>
                                <div className=" flex gap-x-[20px]">
                                    <div className=" border-[1px] bg-[#FB2E86] h-[45px] w-[45px] rounded-[50%]"></div>
                                    <div className="">
                                        <h6 className=' font-hakto font-normal text-[16px] text-[#8A8FB9]'>Tel: 877-67-88-99</h6>
                                        <h6 className=' font-hakto font-normal text-[16px] text-[#8A8FB9]'>E-Mail: shop@store.com</h6>
                                    </div>
                                </div>
                            </div>
                            <div className=" flex justify-between py-[20px]">
                                <div className=" flex gap-x-[20px]">
                                    <div className=" border-[1px] bg-[#1BE982] h-[45px] w-[45px] rounded-[50%]"></div>
                                    <div className="">
                                        <h6 className=' font-hakto font-normal text-[16px] text-[#8A8FB9]'>Tel: 877-67-88-99</h6>
                                        <h6 className=' font-hakto font-normal text-[16px] text-[#8A8FB9]'>E-Mail: shop@store.com</h6>
                                    </div>
                                </div>
                                <div className=" flex gap-x-[20px]">
                                    <div className=" border-[1px] bg-[#FFB265] h-[45px] w-[45px] rounded-[50%]"></div>
                                    <div className="">
                                        <h6 className=' font-hakto font-normal text-[16px] text-[#8A8FB9]'>Tel: 877-67-88-99</h6>
                                        <h6 className=' font-hakto font-normal text-[16px] text-[#8A8FB9]'>E-Mail: shop@store.com</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" my-[50px]">
                        <div className=" lg:flex justify-between ">
                            <div className=":w-[50%]">
                                <h3 className=' font-hakto font-medium text-[36px] text-[#151875]'>Get In Touch</h3>
                                <p className=' font-hakto font-light text-[16px] text-[#8A8FB9]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices  tristique amet erat vitae eget dolor los vitae lobortis quis bibendum quam.</p>
                                <div className="">
                                    <div className=" flex justify-between py-[30px]">
                                        <div className="w-[48%] relative">
                                            <input type="text" placeholder='Your Name*' className=' font-hakto font-light text-[#8A8FB9] text-[13px] pl-[30px] w-full h-[50px] outline-none border-[1px]' />
                                            <div className=" absolute top-[16px] left-[10px]">
                                                <IoIosContact />
                                            </div>
                                        </div>
                                        <div className="w-[48%] relative">
                                            <input type="text" placeholder='Write Your Email*' className=' font-hakto font-light text-[#8A8FB9] text-[13px] pl-[30px] w-full h-[50px] outline-none border-[1px]' />
                                            <div className=" absolute top-[16px] left-[10px]">
                                                <IoMdMail />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="">
                                        <input type="text" className=' font-hakto font-light text-[#8A8FB9] text-[13px] pl-[30px] w-full h-[200px] outline-none border-[1px] text-top' placeholder='Write your comment*' />
                                    </div>
                                    <div className=" flex gap-x-2 py-[20px]">
                                        <MdCheckBoxOutlineBlank />
                                        <p className=' font-hakto font-light text-[13px] text-[#8A91AB]'>Save my name, email, and website in this browser for the next time I comment.</p>
                                    </div>

                                    <button className=' border-[1px] bg-[#FB2E86] w-full py-[15px]  rounded-[5px] my-[20px]'>
                                        <a className=' font-hakto font-medium text-[17px] text-[#FFFFFF]'>Continue Shipping</a>
                                    </button>
                                </div>
                            </div>
                            <div className="lg:w-[50%]">
                                <img src={TouchImg} alt="" />
                            </div>
                        </div>
                    </div>
                </Container>
            </div>

        </>
    )
}

export default ContactUs