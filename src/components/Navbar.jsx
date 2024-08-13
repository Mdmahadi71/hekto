import React, { useState } from 'react'
import Container from './Container'
import Hakto from '../assets/Hekto.png'
import { CiSearch } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { RxCross1 } from "react-icons/rx";
import { FaBars } from "react-icons/fa";


const Navbar = () => {
  let [show, setshow] = useState(false)
  let handelbars = (() => {
    setshow(!show)
  })


  return (
    <div className=' py-[20px]'>
      <Container>
        <div className="flex justify-between  items-center">
          <div className="lg:w-[15%] w-[40%] flex justify-between items-center">
            <img src={Hakto} alt="" />
            <div onClick={handelbars} className=" lg:hidden">
              {show ? <RxCross1 /> : <FaBars />}
            </div>
          </div>
          <div className="lg:w-[60%] mt-2">
            <ul className={`lg:flex justify-center text-center gap-x-[35px] absolute lg:static duration-300 ${show == true ? 'top-[270px] left-0 bg-[#EBF4F3] w-full' : 'top-[270px] left-[-250px]'}`}>
              <li>
                <Link to='/'>
                  <a className=' font-hakto font-medium text-[16px] text-[#0D0E43] hover:text-[#FB2E86] duration-200'>Home</a>
                </Link>
              </li>
              <li>
                <Link to='/Faq'>
                  <a className=' font-hakto font-medium text-[16px] text-[#0D0E43] hover:text-[#FB2E86] duration-200'>Faq</a>
                </Link>
              </li>
              <li>
                <Link to='/ShopGrid'>
                  <a className=' font-hakto font-medium text-[16px] text-[#0D0E43] hover:text-[#FB2E86] duration-200'>Shop Grid</a>
                </Link>
              </li>
              <li>
                <Link to='/BlogPage'>
                  <a className=' font-hakto font-medium text-[16px] text-[#0D0E43] hover:text-[#FB2E86] duration-200'>Blog </a>
                </Link>
              </li>
              <li>
                <Link to='/Shopsidebar'>
                  <a className=' font-hakto font-medium text-[16px] text-[#0D0E43] hover:text-[#FB2E86] duration-200'>Shop</a>
                </Link>
              </li>
              <li>
                <Link to='/ContactUs'>
                  <a className=' font-hakto font-medium text-[16px] text-[#0D0E43] hover:text-[#FB2E86] duration-200'>Contact</a>
                </Link>
              </li>
            </ul>

          </div>


          <div className="lg:w-[17%]  lg:justify-end ">
            <div className=" flex">
              <input type="text" className=' bg-[#D9D9D9] outline-none' />
              <div className=" bg-[#FB2E86] p-[8px]">
                <div className="">
                  <CiSearch />
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
