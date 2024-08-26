import React from 'react'
import Container from './Container'
import fotter from '../assets/Hekto.png'
import { FaFacebookSquare,FaInstagram ,FaTwitter  } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Fotter = () => {
  return (
    <div className=' py-[100px] bg-[#EEEFFB]'>
      <Container>
        <div className=" lg:flex">
            <div className="lg:w-[35%]">
                <div className="">
                    <img src={fotter} className='' alt="" />
                    <div className=" py-[30px]">
                        <input type="text" placeholder='Enter Email Address' className=' border-[1px] border-white w-[250px] h-[50px]
                         bg-[#FFFFFF] font-hakto font-medium text-[16px] text-[#8A8FB9] pl-[10px] outline-none' />
                         <button className=' border-[1px] border-[red] bg-[#FB2E86] w-[100px] h-[50px] outline-none'>
                            <a className=' font-hakto font-semibold text-[16px] text-[#EEEFFB] '>Sign Up</a>
                         </button>
                    </div>
                    <h3  className=' font-hakto font-normal text-[#8A8FB9] text-[16px] py-[10px]'>Contact Info</h3>
                    <p  className=' font-hakto font-normal text-[#8A8FB9] text-[16px] py-[10px]'>17 Princess Road, London, Greater London NW1 8JR, UK</p>
                </div>
            </div>
            <div className="lg:w-[65%]">
              <div className=" flex justify-between">
                <div className="">
                  <ul className=' '>
                    <li className=' font-hakto font-normal text-[#000000] text-[22px] py-[10px]'>Catagories</li>
                    <li className=' font-hakto font-normal text-[#8A8FB9] text-[16px] py-[10px]'>Laptops & Computers</li>
                    <li className=' font-hakto font-normal text-[#8A8FB9] text-[16px] py-[10px]'>Cameras & Photography</li>
                    <li className=' font-hakto font-normal text-[#8A8FB9] text-[16px] py-[10px]'>Smart Phones & Tablets</li>
                    <li className=' font-hakto font-normal text-[#8A8FB9] text-[16px] py-[10px]'>Video Games & Consoles</li>
                    <li className=' font-hakto font-normal text-[#8A8FB9] text-[16px] py-[10px]'>Waterproof Headphones</li>
                  </ul>
                </div>
                <div className="">
                  <ul>
                    <li className=' font-hakto font-normal text-[#000000] text-[22px] py-[10px]'>Customer Care</li>
                    <li className=' font-hakto font-normal text-[#8A8FB9] text-[16px] py-[10px]'>My Account</li>
                    <li className=' font-hakto font-normal text-[#8A8FB9] text-[16px] py-[10px]'>Discount</li>
                    <li className=' font-hakto font-normal text-[#8A8FB9] text-[16px] py-[10px]'>Returns</li>
                    <li className=' font-hakto font-normal text-[#8A8FB9] text-[16px] py-[10px]'>Orders History</li>
                    <li className=' font-hakto font-normal text-[#8A8FB9] text-[16px] py-[10px]'>Order Tracking</li>
                  </ul>
                </div>
                <div className="">
                  <ul>
                    <li className=' font-hakto font-normal text-[#000000] text-[22px] py-[10px]'>Pages</li>
                    <li className=' font-hakto font-normal text-[#8A8FB9] text-[16px] py-[10px]'><Link to={'/BlogPage'}>Blog</Link></li>
                    <li className=' font-hakto font-normal text-[#8A8FB9] text-[16px] py-[10px]'>Browse the Shop</li>
                    <li className=' font-hakto font-normal text-[#8A8FB9] text-[16px] py-[10px]'>Category</li>
                    <li className=' font-hakto font-normal text-[#8A8FB9] text-[16px] py-[10px]'>Pre-Built Pages</li>
                    <li className=' font-hakto font-normal text-[#8A8FB9] text-[16px] py-[10px]'>Visual Composer Elements</li>
                    <li className=' font-hakto font-normal text-[#8A8FB9] text-[16px] py-[10px]'>WooCommerce Pages</li>
                  </ul>
                </div>
              </div>
            </div>
        </div>

        <div className=" flex justify-around items-center py-[20px] bg-[#E7E4F8]">
          <div className="">
            <p>©Webecy - All Rights Reserved</p>
          </div>
          <div className=" flex gap-x-[20px]">
              <FaFacebookSquare/>
              <FaInstagram />
              <FaTwitter />
          </div>
        </div>


      </Container>
    </div>
  )
}

export default Fotter
