import React from 'react'
import Container from './Container'
import { FaCheck } from "react-icons/fa";
import checklist2 from '../assets/checklist.png'
import Clock2 from '../assets/clock.png'
import newss from '../assets/Newsd.png'
import { Link } from 'react-router-dom'
import TextImg from './reusable/TextImg';

const OrderCompletedMain = () => {
    return (
        <div className=' '>

            <div className=' bg-[#F6F5FF] py-[90px]'>
                <Container>
                    <div className="">
                        <h2 className=' font-hakto font-semibold text-[#101750] text-[35px]'>Order Completed</h2>
                        <h2><Link to='/'><span className=' font-hakto font-medium text-[16px] text-[#101750]  hover:text-[#FB2E86] duration-300'>Home.Pages</span>
                        </Link> <Link to='/OrderCompleted'><span className=' font-hakto font-medium text-[16px] text-[#101750]  hover:text-[#FB2E86] duration-300'>.OrderCompleted</span></Link></h2>

                    </div>
                </Container>
            </div>

            <div className="py-[100px]">
                <Container>
                    <div className=" lg:w-[500px]  text-center mx-auto ">
                        <div className="">
                            <div className=" border-[1px] border-[#F6F5FF] py-[50px] px-[30px] relative">
                                
                                <div className=" mx-[50%] ">
                                    <FaCheck className=' text-[35px] text-[#FF1788]' />
                                  </div>
                                <h3 className=' font-hakto font-semibold text-[#101750] text-[35px]'>Your Order Is Completed! </h3>
                                <p className=' font-hakto font-normal text-[#8D92A7] text-[16px]'>Thank you for your order! Your order is being processed and will
                                     be completed within 3-6 hours. You will receive an email confirmation when your order is completed.</p>
                                <Link to={'/Shopsidebar'}>   
                                <button className=' border-[1px] border-[#FF1788] bg-[#FF1788] px-[15px] py-[10px]  rounded-[5px] mt-[15px]'>
                                    <a className=' font-hakto font-medium text-[16px] text-white'>Continue Shopping</a>
                                </button>
                                </Link> 
                                <div className=" absolute bottom-[-40px] lg:right-[-40px] right-0">
                                    <img src={checklist2} alt="" />
                                </div>
                                <div className=" absolute lg:left-[-50px] left-0 lg:top-[30px] top-[0px]">
                                    <img src={Clock2} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className=" mx-auto lg:py-7 mt-[30px]">
                        <TextImg/>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default OrderCompletedMain