import React from 'react'
import Container from './Container'
import Hakto from '../assets/Hekto.png'
import { CiSearch } from "react-icons/ci";
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div className=' py-[20px]'>
      <Container>
        <div className=" flex justify-between  items-center">
            <div className="w-[15%]">
                <img src={Hakto} alt="" />
            </div>
            <div className="w-[60%] mt-2">
                <div className=" flex gap-x-[35px] ">
                  <Link to = '/'>
                    <a className=' font-hakto font-medium text-[16px] text-[#0D0E43] hover:text-[#FB2E86] duration-200'>Home</a>
                    </Link>
                    <Link to = '/Faq'>
                    <a  className=' font-hakto font-medium text-[16px] text-[#0D0E43] hover:text-[#FB2E86] duration-200'>Faq</a>
                    </Link>
                    <Link to = '/ShopGrid'>
                    <a  className=' font-hakto font-medium text-[16px] text-[#0D0E43] hover:text-[#FB2E86] duration-200'>Shop Grid</a>
                    </Link>
                    <Link to = '/BlogPage'>
                    <a  className=' font-hakto font-medium text-[16px] text-[#0D0E43] hover:text-[#FB2E86] duration-200'>Blog </a>
                    </Link>
                    <Link to = '/Shopsidebar'>
                    <a  className=' font-hakto font-medium text-[16px] text-[#0D0E43] hover:text-[#FB2E86] duration-200'>Shop</a>
                    </Link>
                    <Link to = '/ContactUs'>
                    <a  className=' font-hakto font-medium text-[16px] text-[#0D0E43] hover:text-[#FB2E86] duration-200'>Contact</a>
                    </Link>
                </div>
            </div>
            <div className="w-[17%] justify-end">
                <div className=" flex">
                    <input type="text" className=' bg-[#D9D9D9] ' />
                    <div className=" bg-[#FB2E86] p-[8px]">
                    <div className="">
                    <CiSearch/>
                    </div>
                    </div>
                </div>
            </div>
        </div>
      </Container>
    </div>
  )
}

export default Navbar
