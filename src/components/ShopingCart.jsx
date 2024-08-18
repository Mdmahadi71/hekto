import React from 'react'
import Container from './Container'
import { FaPlus, FaMinus } from "react-icons/fa";
import { RxCrossCircled } from "react-icons/rx";
import { FaCheckCircle } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { productIncr, productremove, prooductDecr } from './Slice/productSlice';
import { Link } from 'react-router-dom';

const ShopingCart = () => {
    let cartdata = useSelector((state) => state.product.cartItem)
    let dispacth = useDispatch()


    let handelPlus = ((item) => {
        dispacth(productIncr(item))
    })
    let hendleDec = ((item) => {
        dispacth(prooductDecr(item))
    })
    let hemdelremove = ((item) => {
        dispacth(productremove(item))
    })
    let hemdelremoveall = (() => {
        dispacth(productremove(cartdata))
    })

    const { totalPrice, totatQuntity } = cartdata.reduce((acc, item) => {
        acc.totalPrice += item.price * item.qun
        acc.totatQuntity += item.qun
        return acc
    }, { totalPrice: 0, totatQuntity: 0 })


    return (
        <div className=' py-[40px]'>

            <div className=' bg-[#F6F5FF] py-[90px]'>
                <Container>
                    <div className="">
                        <h2 className=' font-hakto font-semibold text-[#101750] text-[35px]'>Shopping Curt</h2>
                        <h2><Link to='/'><span className=' font-hakto font-medium text-[16px] text-[#101750]  hover:text-[#FB2E86] duration-300'>Home.Pages</span>
                        </Link> <Link to='/ProductDetails'><span className=' font-hakto font-medium text-[16px] text-[#101750]  hover:text-[#FB2E86] duration-300'>.Shopping Curt</span></Link></h2>
                    </div>
                </Container>
            </div>

            <Container>
                <div className=" lg:flex justify-between">
                    <div className="lg:w-[68%]">
                        <div className=" flex justify-between">
                            <div className="w-[40%]">
                                <h3 className=' font-hakto font-medium text-[#1D3178] text-[20px]'>Product</h3>
                            </div>
                            <div className="lg:w-[20%] w-[17%]">
                                <h3 className=' font-hakto font-medium text-[#1D3178] text-[20px]'>Price</h3>
                            </div>
                            <div className="w-[20%]">
                                <p className=' font-hakto font-medium text-[#1D3178] text-[20px]'>Quantity</p>
                            </div>
                            <div className="lg:w-[20%] w-[16%]">
                                <h3 className=' font-hakto font-medium text-[#1D3178] text-[20px]'>Total</h3>
                            </div>
                        </div>
                        {cartdata.map((item, i) => (
                            <div className=" border-b-[2px] border-[#E1E1E4] pb-[30px]">
                                <div className=" flex justify-between items-center">
                                    <div className="w-[40%]">
                                        <div className="flex gap-x-[20px] py-3">
                                            <div className=" relative">
                                                <img src={item.thumbnail} className='w-[83px] h-[87px]' alt="" />
                                                <div onClick={() => hemdelremove(i)} className=" absolute top-[-10px] right-[-10px]">
                                                    <RxCrossCircled className=' text-[25px] text-[#000000]' />
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
                                            <h3 className=' font-hakto font-medium text-[14px] text-[#15245E]'>${item.price}</h3>
                                        </div>
                                    </div>
                                    <div className="w-[20%]">
                                        <div className=" border-[1px]  px-2 py-3 bg-[#BEBFC2] inline-block">
                                            <div className=" flex lg:gap-x-[20px] gap-x-[8px] items-center">
                                                <div onClick={() => hendleDec(i)} className="">
                                                    <FaMinus />
                                                </div>
                                                <h2 className=' font-hakto font-medium text-[14px] text-[#15245E]'>{item.qun}</h2>
                                                <div onClick={() => handelPlus(i)} className="">
                                                    <FaPlus />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[20%] ">
                                        <h3 className=' font-hakto font-medium text-[14px] text-[#15245E] '>£{item.price}</h3>
                                    </div>
                                </div>
                            </div>

                        ))}


                        <div className=" flex justify-between py-[30px]">
                            <button className=' border-[1px]  bg-[#FB2E86] px-4 py-3 rounded-[5px] text-white hover:bg-[#19D16F] duration-300'>
                                <a className=' font-hakto font-medium text-[16px]'>Update Curt</a>
                            </button>
                            <button onClick={() => hemdelremoveall()} className=' border-[1px]  bg-[#FB2E86] px-4 py-3 rounded-[5px] text-white hover:bg-[#19D16F] duration-300'>
                                <a className=' font-hakto font-medium text-[16px]'>Clear Curt</a>
                            </button>
                        </div>


                    </div>
                    <div className="lg:w-[28%]">
                        <div className=" text-center">
                            <h3 className=' font-hakto font-semibold text-[#1D3178] text-[20px]'>Cart Totals</h3>
                        </div>
                        <div className=" border-[1px] border-[#F4F4FC] bg-[#F4F4FC] px-[20px] py-[20px] rounded-[10px]">
                            <div className=" flex justify-between border-b-[1px] border-[#E8E6F1] py-3">
                                <h3 className=' font-hakto font-medium text-[#1D3178] text-[16px]'>Subtotals:</h3>
                                <h3 className=' font-hakto font-medium text-[#1D3178] text-[16px]'>£{totalPrice}</h3>
                            </div>
                            <div className=" flex justify-between border-b-[1px] border-[#E8E6F1] py-3 mt-[40px]">
                                <h3 className=' font-hakto font-medium text-[#1D3178] text-[16px]'>Total Quntity:</h3>
                                <h3 className=' font-hakto font-medium text-[#1D3178] text-[16px]'>{totatQuntity}</h3>
                            </div>
                            <div className=" flex justify-between border-b-[1px] border-[#E8E6F1] py-3 mt-[40px]">
                                <h3 className=' font-hakto font-medium text-[#1D3178] text-[16px]'>Totals:</h3>
                                <h3 className=' font-hakto font-medium text-[#1D3178] text-[16px]'>£{totalPrice}</h3>
                            </div>
                            <div className=" flex gap-x-[20px] items-center my-[30px]">
                                <FaCheckCircle className=' text-[#19D16F] text-[18px]' />
                                <p className=' font-hakto font-medium text-[#8A91AB] text-[12px]'>Shipping & taxes calculated at checkout</p>
                            </div>
                            <Link to='/singup'>
                                <button className=' border-[1px] py-[15px] bg-[#19D16F] w-full'>
                                    <a className=' font-hakto font-medium text-[#FFFFFF] text-[16px]'>Proceed To Checkout</a>
                                </button>
                            </Link>
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
                            <button className=' border-[1px]  bg-[#FB2E86] px-4 py-3 rounded-[5px] text-white hover:bg-[#19D16F] duration-300 mt-[30px]'>
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
