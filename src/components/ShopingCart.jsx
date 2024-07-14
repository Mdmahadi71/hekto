import React from 'react'
import Container from './Container'
import CartImg from '../assets/cartpage.png'
import { FaPlus ,FaMinus } from "react-icons/fa";
import { RxCrossCircled } from "react-icons/rx";
import { FaCheckCircle } from "react-icons/fa";
import { useSelector } from 'react-redux';

const ShopingCart = () => {
    // let cartdata = useSelector((state) => state.product.cartItem)
    // console.log(cartdata);
    
  return (
    <div className=' py-[40px]'>
      <Container>
        <div className=" flex justify-between">
            <div className="w-[68%]">
                <div className=" flex justify-between">
                    <div className="w-[40%]">
                        <h3 className=' font-hakto font-medium text-[#1D3178] text-[20px]'>Product</h3>
                    </div>
                    <div className="w-[20%]">
                        <h3 className=' font-hakto font-medium text-[#1D3178] text-[20px]'>Price</h3>
                    </div>
                    <div className="w-[20%]">
                        <p className=' font-hakto font-medium text-[#1D3178] text-[20px]'>Quantity</p>
                    </div>
                    <div className="w-[20%]">
                        <h3 className=' font-hakto font-medium text-[#1D3178] text-[20px]'>Total</h3>
                    </div>
                </div>
               <div className=" border-b-[2px] border-[#E1E1E4] pb-[30px]">
               <div className=" flex justify-between items-center">
                    <div className="w-[40%]">
                       <div className="flex gap-x-[20px] py-3">
                        <div className=" relative">
                            <img src={CartImg} className='w-[83px] h-[87px]' alt="" />
                            <div className=" absolute top-[-10px] right-[-10px]">
                                <RxCrossCircled className=' text-[25px] text-[#000000]'/>
                            </div>
                        </div>
                            <div className="">
                                <h5 className=' font-hakto font-medium text-[16px] text-[#000000]'>Ut diam consequat</h5>
                                <h6 className=' font-hakto font-normal text-[#A1A8C1] text-[12px]'>Color Brown</h6>
                                <p className=' font-hakto font-normal text-[#A1A8C1] text-[12px]'>Size: XL</p>
                            </div>
                       </div>
                    </div>
                    <div className="w-[20%]">
                        <div className="">
                            <h3 className=' font-hakto font-medium text-[14px] text-[#15245E]'>$43</h3>
                        </div>
                    </div>
                    <div className="w-[20%]">
                        <div className=" border-[1px]  px-2 py-3 bg-[#BEBFC2] inline-block">
                            <div className=" flex gap-x-[20px] items-center">
                                <FaPlus/>
                                <h2 className=' font-hakto font-medium text-[14px] text-[#15245E]'>0</h2>
                                <FaMinus />
                            </div>
                        </div>
                    </div>
                    <div className="w-[20%]">
                        <h3 className=' font-hakto font-medium text-[14px] text-[#15245E]'>£219.0</h3>
                    </div>
                </div>
               </div>

               <div className=" flex justify-between py-[30px]">
                    <button className=' border-[1px]  bg-[#FB2E86] px-4 py-3 rounded-[5px] text-white hover:bg-[#19D16F] duration-300'>
                       <a className=' font-hakto font-medium text-[16px]'>Update Curt</a>
                    </button>
                    <button className=' border-[1px]  bg-[#FB2E86] px-4 py-3 rounded-[5px] text-white hover:bg-[#19D16F] duration-300'>
                       <a className=' font-hakto font-medium text-[16px]'>Clear Curt</a>
                    </button>
               </div>
            </div>
            <div className="w-[28%]">
                <div className=" text-center">
                    <h3 className=' font-hakto font-semibold text-[#1D3178] text-[20px]'>Cart Totals</h3>
                </div>
                <div className=" border-[1px] border-[#F4F4FC] bg-[#F4F4FC] px-[20px] py-[20px] rounded-[10px]">
                    <div className=" flex justify-between border-b-[1px] border-[#E8E6F1] py-3">
                        <h3 className=' font-hakto font-medium text-[#1D3178] text-[16px]'>Subtotals:</h3>
                        <h3 className=' font-hakto font-medium text-[#1D3178] text-[16px]'>£219.00</h3>
                    </div>
                    <div className=" flex justify-between border-b-[1px] border-[#E8E6F1] py-3 mt-[40px]">
                        <h3 className=' font-hakto font-medium text-[#1D3178] text-[16px]'>Totals:</h3>
                        <h3 className=' font-hakto font-medium text-[#1D3178] text-[16px]'>£219.00</h3>
                    </div>
                    <div className=" flex gap-x-[20px] items-center my-[30px]">
                        <FaCheckCircle className=' text-[#19D16F] text-[18px]'/>
                        <p className=' font-hakto font-medium text-[#8A91AB] text-[12px]'>Shipping & taxes calculated at checkout</p>
                    </div>

                    <button className=' border-[1px] py-[15px] bg-[#19D16F] w-full'>
                        <a className=' font-hakto font-medium text-[#FFFFFF] text-[16px]'>Proceed To Checkout</a>
                    </button>
                </div>

                <div className="border-[1px] border-[#F4F4FC] bg-[#F4F4FC] px-[20px] py-[20px] rounded-[10px] mt-[50px]">
                    <div className=" text-center">
                        <h3 className=' font-hakto font-semibold text-[#1D3178] text-[20px]'>Calculate Shopping</h3>
                    </div>
                    <div className="">
                        <div className=" border-b-[1px] border-[#C7CEE4] mt-[15px]">
                            <input type="text" placeholder='Bangladesh' className=' w-full h-[40px] font-hakto font-light text-[#C5CBE3] text-[14px] bg-[#F4F4FC] outline-none' />
                        </div>
                        <div className=" border-b-[1px] border-[#C7CEE4] mt-[15px]">
                            <input type="text" placeholder='Mirpur Dhaka - 1200' className=' w-full h-[40px] font-hakto font-light text-[#C5CBE3] text-[14px] bg-[#F4F4FC] outline-none' />
                        </div>
                        <div className=" border-b-[1px] border-[#C7CEE4] mt-[15px]">
                            <input type="text" placeholder='Postal Code' className=' w-full h-[40px] font-hakto font-light text-[#C5CBE3] text-[14px] bg-[#F4F4FC] outline-none' />
                        </div>
                    </div>
                    <button  className=' border-[1px]  bg-[#FB2E86] px-4 py-3 rounded-[5px] text-white hover:bg-[#19D16F] duration-300 mt-[30px]'>
                        <a className=' font-hakto font-medium text-[17px]'>Calculate Shiping</a>
                    </button>
                </div>
            </div>
        </div>
      </Container>
    </div>
  )
}

export default ShopingCart
