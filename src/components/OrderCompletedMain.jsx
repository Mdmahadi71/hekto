import React from 'react'
import Container from './Container'
import { FaCheck } from "react-icons/fa";
import checklist2 from '../assets/checklist.png'
import Clock2 from '../assets/clock.png'
import newss from '../assets/Newsd.png'

const OrderCompletedMain = () => {
    return (
        <div className=' py-[100px]'>
            <Container>
                <div className="  justify-center text-center ml-[250px] ">
                    <div className="w-[80%]">
                        <div className=" border-[1px] border-[#F6F5FF] py-[50px] px-[30px] relative">
                            <h1 className=' ml-[350px]'><FaCheck className=' text-[35px] text-[#FF1788]' /></h1>
                            <h3 className=' font-hakto font-semibold text-[#101750] text-[35px]'>Your Order Is Completed! </h3>
                            <p className=' font-hakto font-normal text-[#8D92A7] text-[16px]'>Thank you for your order! Your order is being processed and will be completed within 3-6 hours. You will receive an email confirmation when your order is completed.</p>
                            <button className=' border-[1px] border-[#FF1788] bg-[#FF1788] px-[15px] py-[10px]  rounded-[5px] mt-[15px]'>
                                <a className=' font-hakto font-medium text-[16px] text-white'>Continue Shopping</a>
                            </button>
                            <div className=" absolute bottom-[-40px] right-[-40px]">
                                <img src={checklist2} alt="" />
                            </div>
                            <div className=" absolute left-[-50px] top-[30px]">
                                <img src={Clock2} alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className=" pl-[200px] py-4">
                    <img src={newss} alt="" />
                </div>
            </Container>
        </div>
    )
}

export default OrderCompletedMain