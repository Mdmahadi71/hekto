import React from 'react'
import Container from './Container'
import { FaStar ,FaRegHeart,FaFacebookF ,FaTwitter,FaInstagramSquare   } from "react-icons/fa";
import productImgone from '../assets/prodetils.png'
import productImgtow from '../assets/prodetils2.png'

const ProductTocart = () => {
  return (
    <div className=' py-[100px]'>
        <Container>
            <div className=" border-[1px] px-[15px] py-[20px]  shadow-md">
                <div className=" flex justify-between items-center">
                <div className="w-[50%]">
                    <div className="flex gap-x-[50px] ">
                        <div className="w-[20%]">
                            <div className=" ">
                               <div className="w-[151px] h-[155px] my-[11px]">
                               <img src={productImgone}  alt="" />
                               </div>
                               <div className="w-[151px] h-[155px] my-[11px]">
                               <img src={productImgone}  alt="" />
                               </div>
                               <div className="w-[151px] h-[155px] my-[11px]">
                               <img src={productImgone}  alt="" />
                               </div>
                            </div>
                        </div>
                        <div className="w-[27%]">
                            <div className=" w-[375px] h-[487px] my-[11px]">
                                <img src={productImgtow} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[50%]">
                    <div className="">
                        <h3 className=' font-hakto font-semibold text-[#0D134E] text-[35px]'>Playwood arm chair</h3>

                        <div className=" flex gap-x-[10px] items-center">
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <p>(22)</p>
                        </div>
                        <h5><span className=' font-hakto font-light text-[#151875] text-[16px]'>$32.00</span> <span className=' font-hakto font-light text-[#FB2E86] text-[16px]'>$32.00</span></h5>
                        <h3 className=' font-hakto font-medium text-[19px] text-[#0D134E] py-[7px]'>color</h3>
                        <p className=' font-hakto font-light text-[#A9ACC6] text-[16px] py-[7px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.</p>
                        <div className=" flex gap-x-[20px] items-center justify-center">
                            <button className=' border-[1px] px-4 py-3 bg-[#FB2E86] text-[#151875] rounded-[5px]'>
                                <a className=' font-hakto font-medium text-[18px]'>Add To cart</a>
                            </button>
                            <i><FaRegHeart /></i>
                        </div>
                        <h3  className=' font-hakto font-medium text-[19px] text-[#0D134E] py-[7px]'>Categories:</h3>
                        <h5  className=' font-hakto font-medium text-[19px] text-[#0D134E] py-[7px]'>Tags</h5>
                        <div className=" flex gap-x-[20px] items-center py-[7px]">
                            <h3 className=' font-hakto font-medium text-[19px] text-[#0D134E]'>Share</h3>
                            <div className=" flex gap-x-[20px]">
                                <FaFacebookF />
                                <FaInstagramSquare />
                                <FaTwitter />
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default ProductTocart