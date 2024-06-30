import React from 'react'
import Container from './Container'
import { RiArrowDropUpLine } from "react-icons/ri";
import disc from '../assets/discount.png'

const Discount = () => {
  return (
    <div className='py-[50px]'>
      <Container>
        <div className=" py-[15px]">
            <h2 className=' font-hakto font-semibold text-[#151875] text-[42px] text-center'>Discount Item</h2>
        </div>
        <div className="py-[15px]">
            <div className="">
                <ul className=' flex gap-x-5 justify-center'>
                    <li><a className=' font-hakto font-semibold text-[18px] text-[#151875] hover:text-[#FB2E86] hover:border-b-[2px] hover:border-[#FB2E86] duration-200 gap-x-[50px]'>Wood Chair</a></li>
                    <li><a className=' font-hakto font-semibold text-[18px] text-[#151875] hover:text-[#FB2E86] hover:border-b-[2px] hover:border-[#FB2E86] duration-200 gap-x-[50px]'>Plastic Chair</a></li>
                    <li><a className=' font-hakto font-semibold text-[18px] text-[#151875] hover:text-[#FB2E86] hover:border-b-[2px] hover:border-[#FB2E86] duration-200 gap-x-[50px]'>Sofa Colletion</a></li>
                </ul>
            </div>
        </div>
        <div className=" flex justify-between items-center">
            <div className="w-[50%]">
                <div className="">
                    <h4 className=' font-hakto font-semibold text-[#151875] text-[25px]'>20% Discount Of All Products</h4>
                    <h5 className=' font-hakto font-medium text-[#FB2E86] text-[21px]'>Eams Sofa Compact</h5>
                    <p className=' font-hakto font-normal text-[#B7BACB] text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.</p>
                    <div className=" flex justify-between">
                        <div className=" flex gap-x-1 items-center">
                            <RiArrowDropUpLine/>
                            <p className=' font-hakto font-normal text-[#B8B8DC] text-[16px]'>Material expose like metals</p>
                        </div>
                        <div className=" flex gap-x-1 items-center">
                            <RiArrowDropUpLine/>
                            <p className=' font-hakto font-normal text-[#B8B8DC] text-[16px]'>Material expose like metals</p>
                        </div>
                    </div>
                    <div className=" flex justify-between">
                        <div className=" flex gap-x-1 items-center">
                            <RiArrowDropUpLine/>
                            <p className=' font-hakto font-normal text-[#B8B8DC] text-[16px]'>Material expose like metals</p>
                        </div>
                        <div className=" flex gap-x-1 items-center">
                            <RiArrowDropUpLine/>
                            <p className=' font-hakto font-normal text-[#B8B8DC] text-[16px]'>Material expose like metals</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[50%]">
                <img src={disc} alt="" />
            </div>
        </div>
      </Container>
    </div>
  )
}

export default Discount
