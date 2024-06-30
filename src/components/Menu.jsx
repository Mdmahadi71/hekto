import React from 'react'
import { CiMail } from "react-icons/ci";
import Container from './Container'
import { FaPhoneAlt,FaRegHeart ,FaCartArrowDown  } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FcManager } from "react-icons/fc";

const Menu = () => {
  return (
      <div className=' py-[15px] bg-[#7E33E0]'>
          <Container>
              <div className=" flex justify-between ">
                  <div className=" w-[50%]">
                      <div className=" flex gap-x-[50px] items-center">
                          <div className=" flex gap-x-3 items-center font-hakto font-normal text-[#F1F1F1] text-[16px]">
                              <div className="">
                                  <CiMail />
                              </div>
                              <div className="">
                                  <h2>habibalmasud79@gmail.com</h2>
                              </div>
                          </div>
                          <div className="flex gap-x-3 items-center font-hakto font-normal text-[#F1F1F1] text-[16px]">
                              <div className="">
                                  <FaPhoneAlt />
                              </div>
                              <div className="">
                                  <h2>01317159871</h2>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className=" w-[50%]">
                      <div className=" flex justify-end gap-x-6">
                          <div className=" flex gap-x-2 font-hakto font-normal text-[#F1F1F1] text-[16px]  items-center">
                              <h2>English</h2>
                              <RiArrowDropDownLine />
                          </div>
                          <div className=" flex gap-x-2 font-hakto font-normal text-[#F1F1F1] text-[16px] items-center ">
                              <h2>USD</h2>
                              <RiArrowDropDownLine />
                          </div>
                          <div className=" flex gap-x-2 font-hakto font-normal text-[#F1F1F1] text-[16px] items-center">
                              <h2>Login</h2>
                              <FcManager />
                          </div>
                          <div className=" flex gap-x-2 font-hakto font-normal text-[#F1F1F1] text-[16px] items-center">
                              <h2>Wishlist</h2>
                              <FaRegHeart />
                          </div>
                          <div className=" flex gap-x-2 font-hakto font-normal text-[#F1F1F1] text-[16px] items-centers">
                              <FaCartArrowDown />
                          </div>

                      </div>
                  </div>
              </div>
          </Container>
      </div>
  )
}

export default Menu
