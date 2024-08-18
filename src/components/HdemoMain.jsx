import React from 'react'
import Container from './Container'
import { FaCheckCircle } from "react-icons/fa";
import cartpageImg from '../assets/cartpage.png'
import { useDispatch, useSelector } from 'react-redux';
import { RxCrossCircled } from "react-icons/rx";
import { productremove } from './Slice/productSlice';
import { Link } from 'react-router-dom'

const HdemoMain = () => {
    let cartdata = useSelector((state) => state.product.cartItem)
    let dispacth = useDispatch()

    let hendelremove = ((item) => {
        dispacth(productremove(item))
    })

    const { totalPrice, totatQuntity } = cartdata.reduce((acc, item) => {
        acc.totalPrice += item.price * item.qun
        acc.totatQuntity += item.qun
        return acc
    }, { totalPrice: 0, totatQuntity: 0 })
    return (
        <div className=''>

            <div className=' bg-[#F6F5FF] py-[90px]'>
                <Container>
                    <div className="">
                        <h2 className=' font-hakto font-semibold text-[#101750] text-[35px]'>Hekto Demo</h2>
                        <h2><Link to='/'><span className=' font-hakto font-medium text-[16px] text-[#101750]  hover:text-[#FB2E86] duration-300'>Home.Pages</span>
                        </Link> <Link to='/DemoPage'><span className=' font-hakto font-medium text-[16px] text-[#101750]  hover:text-[#FB2E86] duration-300'>Hekto Demo</span></Link></h2>

                    </div>
                </Container>
            </div>

            <div className="py-[40px]">
                <Container>
                    <div className=" py-[20px]">
                        <h3 className=' font-hakto font-semibold text-[#1D3178] text-[35px]'>Hekto Demo</h3>
                        <p className=' font-hakto font-medium text-[#1D3178] text-[16px]'>Cart/ Information/ Shipping/ Payment</p>
                    </div>

                    <div className=" lg:flex justify-between ">
                        <div className="lg:w-[68%]">
                            <div className=" border-[2px] px-[20px] py-[30px] bg-[#F8F8FD]">
                                <div className=" flex justify-between items-center">
                                    <h3 className=' font-hakto font-medium text-[18px] text-[#1D3178]'>Contact Information</h3>
                                    <p className=' font-hakto font-light text-[12px] text-[#C1C8E1]'>Already have an account? Log in</p>
                                </div>
                                <div className=" ">
                                    <input type="text" placeholder='Email or mobile phone number'
                                        className=' font-hakto font-light text-[12px] text-[#C1C8E1] border-b-[2px] pt-3 outline-none  w-full bg-[#F8F8FD]' />

                                    <div className=" flex gap-x-[15px] items-center py-[30px]">
                                        <FaCheckCircle className=' text-[#19D16F]' />
                                        <p className='font-hakto font-light text-[12px] text-[#8A91AB]'>Keep me up to date on news and excluive offers</p>
                                    </div>
                                    <div className=" py-[20px]">
                                        <h2 className=' font-hakto font-medium text-[18px] text-[#1D3178]'>Shipping address</h2>

                                        <div className=" flex justify-between items-center py-[20px]">
                                            <div className=" w-[47%]">
                                                <input type="text" className=' font-hakto font-normal text-[12px] text-[#C1C8E1] border-b-[2px] pt-3 outline-none  w-full bg-[#F8F8FD]' placeholder='First name (optional)' />
                                            </div>
                                            <div className=" w-[47%]">
                                                <input type="text" className=' font-hakto font-normal text-[12px] text-[#C1C8E1] border-b-[2px] pt-3 outline-none  w-full bg-[#F8F8FD]' placeholder='Last name' />
                                            </div>
                                        </div>
                                        <div className="py-[20px]">
                                            <input type="text" className=' font-hakto font-normal text-[12px] text-[#C1C8E1] border-b-[2px] pt-3 outline-none  w-full bg-[#F8F8FD]' placeholder='Address' />
                                        </div>
                                        <div className="py-[20px]">
                                            <input type="text" className=' font-hakto font-normal text-[12px] text-[#C1C8E1] border-b-[2px] pt-3 outline-none  w-full bg-[#F8F8FD]' placeholder='Appaetnentment,suit,e.t.c (optinal)' />
                                        </div>
                                        <div className="py-[20px]">
                                            <input type="text" className=' font-hakto font-normal text-[12px] text-[#C1C8E1] border-b-[2px] pt-3 outline-none  w-full bg-[#F8F8FD]' placeholder='City' />
                                        </div>
                                        <div className=" flex justify-between items-center py-[20px]">
                                            <div className=" w-[47%]">
                                                <input type="text" className=' font-hakto font-normal text-[12px] text-[#C1C8E1] border-b-[2px] pt-3 outline-none  w-full bg-[#F8F8FD]' placeholder='Bangladesh' />
                                            </div>
                                            <div className=" w-[47%]">
                                                <input type="text" className=' font-hakto font-normal text-[12px] text-[#C1C8E1] border-b-[2px] pt-3 outline-none  w-full bg-[#F8F8FD]' placeholder='Postal Code' />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <button className=' border-[1px] border-[#FB2E86] bg-[#FB2E86] px-[20px] py-[15px] rounded-[5px] my-[30px]'>
                                    <a className=' font-hakto font-medium text-[#FFFFFF] text-[18px]'>Continue Shipping</a>
                                </button>


                            </div>
                        </div>
                        <div className="lg:w-[29%]">
                            {cartdata.map((item, i) => (
                                <div className=" flex justify-between items-center border-b-[1px] border-[#E1E1E4] py-[10px] mt-[15px]">
                                    <div className=" flex gap-x-[20px]">
                                        <div className=" relative">
                                            <img src={item.thumbnail} className=' w-[83px] h-[87px]' alt="" />
                                            <div onClick={() => hendelremove(i)} className=" absolute top-[-10px] right-[-10px]">
                                                <RxCrossCircled className=' text-[25px] text-[#000000]' />
                                            </div>
                                        </div>
                                        <div className="">
                                            <h5 className=' font-hakto font-medium text-[16px] text-[#000000]'>{item.title}</h5>
                                            <h6 className=' font-hakto font-normal text-[14px] text-[#A1A8C1]'>{item.brand}</h6>
                                            <p className=' font-hakto font-normal text-[14px] text-[#A1A8C1]'>Size: XL</p>
                                        </div>
                                    </div>
                                    <h4 className=' font-hakto font-medium text-[16px] text-[#15245E]'>${item.price}</h4>
                                </div>
                            ))}
                            <div className=" text-center py-[20px]">
                                <h3 className=' font-hakto font-semibold text-[#1D3178] text-[20px]'>Cart Totals</h3>
                            </div>
                            <div className=" border-[1px] border-[#F4F4FC] bg-[#F4F4FC] px-[20px] py-[20px] rounded-[10px]">
                                <div className=" flex justify-between border-b-[1px] border-[#E8E6F1] py-3">
                                    <h3 className=' font-hakto font-medium text-[#1D3178] text-[16px]'>Subtotals:</h3>
                                    <h3 className=' font-hakto font-medium text-[#1D3178] text-[16px]'>£{totalPrice}</h3>
                                </div>
                                <div className=" flex justify-between border-b-[1px] border-[#E8E6F1] py-3 mt-[40px]">
                                    <h3 className=' font-hakto font-medium text-[#1D3178] text-[16px]'>Totals Quntity:</h3>
                                    <h3 className=' font-hakto font-medium text-[#1D3178] text-[16px]'>£{totatQuntity}</h3>
                                </div>
                                <div className=" flex justify-between border-b-[1px] border-[#E8E6F1] py-3 mt-[40px]">
                                    <h3 className=' font-hakto font-medium text-[#1D3178] text-[16px]'>Totals:</h3>
                                    <h3 className=' font-hakto font-medium text-[#1D3178] text-[16px]'>£{totalPrice}</h3>
                                </div>
                                <div className=" flex gap-x-[20px] items-center my-[30px]">
                                    <FaCheckCircle className=' text-[#19D16F] text-[18px]' />
                                    <p className=' font-hakto font-medium text-[#8A91AB] text-[12px]'>Shipping & taxes calculated at checkout</p>
                                </div>
                                <Link to={'/OrderCompleted'} >
                                <button className=' border-[1px] py-[15px] bg-[#19D16F] w-full'>
                                    <a className=' font-hakto font-medium text-[#FFFFFF] text-[16px]'>Proceed To Order</a>
                                </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>

        </div>
    )
}

export default HdemoMain
