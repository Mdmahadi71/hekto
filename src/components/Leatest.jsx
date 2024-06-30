import React from 'react'
import Container from './Container'
import leatest from '../assets/chayar.png'
import { MdOutlineZoomIn } from "react-icons/md";
import { FaCartArrowDown } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";

const Leatest = () => {
  return (
      <div className=' py-[50px]'>
          <Container>
              <div className="">
                  <h2 className=' font-hakto font-semibold text-[42px] text-[#151875] text-center'>Leatest Products</h2>
                  <div className="">
                      <ul className=' flex gap-x-5 justify-center'>
                          <li><a className=' font-hakto font-semibold text-[18px] text-[#151875] hover:text-[#FB2E86] hover:border-b-[2px] hover:border-[#FB2E86] duration-200 gap-x-[50px]'>New Arrival</a></li>
                          <li><a className=' font-hakto font-semibold text-[18px] text-[#151875] hover:text-[#FB2E86] hover:border-b-[2px] hover:border-[#FB2E86] duration-200 gap-x-[50px]'>Best Seller</a></li>
                          <li><a className=' font-hakto font-semibold text-[18px] text-[#151875] hover:text-[#FB2E86] hover:border-b-[2px] hover:border-[#FB2E86] duration-200'>Featured</a></li>
                          <li><a className=' font-hakto font-semibold text-[18px] text-[#151875] hover:text-[#FB2E86] hover:border-b-[2px] hover:border-[#FB2E86] duration-200'>Special Offer</a></li>
                      </ul>
                  </div>
              </div>
              <div className=" flex justify-between">
                  <div className="w-[32%]">
                      <div className=" mt-4">
                          <div className=" bg-[#F7F7F7] relative group overflow-hidden ">
                              <img src={leatest} className='translate-x-[50%] py-[50px]' alt="" />
                              <div className=" absolute bottom-[-150px] left-[30px] gap-y-[20px] group-hover:bottom-[50px] duration-500">
                                  <FaCartArrowDown className=' my-4 text-[24px] text-[#2F1AC4]' />
                                  <CiHeart className=' my-4 text-[24px] text-[#2F1AC4]' />
                                  <MdOutlineZoomIn className=' my-4 text-[24px] text-[#2F1AC4]' />
                              </div>
                          </div>
                          <div className=" flex justify-between">
                              <h2 className=' font-hakto font-semibold text-[18px] text-[#151875]'>Comfort Handy Craft</h2>
                              <div className=" flex gap-x-2 items-center">
                                  <h3 className=' font-hakto font-normal text-[14px] text-[#151875]'>$42.00</h3>
                                  <p className=' font-hakto font-normal text-[12px] text-[#FB2E86]' >$65.00</p>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="w-[32%]">
                      <div className=" mt-4">
                          <div className=" bg-[#F7F7F7] relative group overflow-hidden ">
                              <img src={leatest} className='translate-x-[50%] py-[50px]' alt="" />
                              <div className=" absolute bottom-[-150px] left-[30px] gap-y-[20px] group-hover:bottom-[50px] duration-500">
                                  <FaCartArrowDown className=' my-4 text-[24px] text-[#2F1AC4]' />
                                  <CiHeart className=' my-4 text-[24px] text-[#2F1AC4]' />
                                  <MdOutlineZoomIn className=' my-4 text-[24px] text-[#2F1AC4]' />
                              </div>
                          </div>
                          <div className=" flex justify-between">
                              <h2 className=' font-hakto font-semibold text-[18px] text-[#151875]'>Comfort Handy Craft</h2>
                              <div className=" flex gap-x-2 items-center">
                                  <h3 className=' font-hakto font-normal text-[14px] text-[#151875]'>$42.00</h3>
                                  <p className=' font-hakto font-normal text-[12px] text-[#FB2E86]' >$65.00</p>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="w-[32%]">
                      <div className=" mt-4">
                          <div className=" bg-[#F7F7F7] relative group overflow-hidden ">
                              <img src={leatest} className='translate-x-[50%] py-[50px]' alt="" />
                              <div className=" absolute bottom-[-150px] left-[30px] gap-y-[20px] group-hover:bottom-[50px] duration-500">
                                  <FaCartArrowDown className=' my-4 text-[24px] text-[#2F1AC4]' />
                                  <CiHeart className=' my-4 text-[24px] text-[#2F1AC4]' />
                                  <MdOutlineZoomIn className=' my-4 text-[24px] text-[#2F1AC4]' />
                              </div>
                          </div>
                          <div className=" flex justify-between">
                              <h2 className=' font-hakto font-semibold text-[18px] text-[#151875]'>Comfort Handy Craft</h2>
                              <div className=" flex gap-x-2 items-center">
                                  <h3 className=' font-hakto font-normal text-[14px] text-[#151875]'>$42.00</h3>
                                  <p className=' font-hakto font-normal text-[12px] text-[#FB2E86]' >$65.00</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className=" flex justify-between mt-[20px]">
                  <div className="w-[32%]">
                      <div className=" mt-4">
                          <div className=" bg-[#F7F7F7] relative group overflow-hidden ">
                              <img src={leatest} className='translate-x-[50%] py-[50px]' alt="" />
                              <div className=" absolute bottom-[-150px] left-[30px] gap-y-[20px] group-hover:bottom-[50px] duration-500">
                                  <FaCartArrowDown className=' my-4 text-[24px] text-[#2F1AC4]' />
                                  <CiHeart className=' my-4 text-[24px] text-[#2F1AC4]' />
                                  <MdOutlineZoomIn className=' my-4 text-[24px] text-[#2F1AC4]' />
                              </div>
                          </div>
                          <div className=" flex justify-between">
                              <h2 className=' font-hakto font-semibold text-[18px] text-[#151875]'>Comfort Handy Craft</h2>
                              <div className=" flex gap-x-2 items-center">
                                  <h3 className=' font-hakto font-normal text-[14px] text-[#151875]'>$42.00</h3>
                                  <p className=' font-hakto font-normal text-[12px] text-[#FB2E86]' >$65.00</p>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="w-[32%]">
                      <div className=" mt-4">
                          <div className=" bg-[#F7F7F7] relative group overflow-hidden ">
                              <img src={leatest} className='translate-x-[50%] py-[50px]' alt="" />
                              <div className=" absolute bottom-[-150px] left-[30px] gap-y-[20px] group-hover:bottom-[50px] duration-500">
                                  <FaCartArrowDown className=' my-4 text-[24px] text-[#2F1AC4]' />
                                  <CiHeart className=' my-4 text-[24px] text-[#2F1AC4]' />
                                  <MdOutlineZoomIn className=' my-4 text-[24px] text-[#2F1AC4]' />
                              </div>
                          </div>
                          <div className=" flex justify-between">
                              <h2 className=' font-hakto font-semibold text-[18px] text-[#151875]'>Comfort Handy Craft</h2>
                              <div className=" flex gap-x-2 items-center">
                                  <h3 className=' font-hakto font-normal text-[14px] text-[#151875]'>$42.00</h3>
                                  <p className=' font-hakto font-normal text-[12px] text-[#FB2E86]' >$65.00</p>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="w-[32%]">
                      <div className=" mt-4">
                          <div className=" bg-[#F7F7F7] relative group overflow-hidden ">
                              <img src={leatest} className='translate-x-[50%] py-[50px]' alt="" />
                              <div className=" absolute bottom-[-150px] left-[30px] gap-y-[20px] group-hover:bottom-[50px] duration-500">
                                  <FaCartArrowDown className=' my-4 text-[24px] text-[#2F1AC4]' />
                                  <CiHeart className=' my-4 text-[24px] text-[#2F1AC4]' />
                                  <MdOutlineZoomIn className=' my-4 text-[24px] text-[#2F1AC4]' />
                              </div>
                          </div>
                          <div className=" flex justify-between">
                              <h2 className=' font-hakto font-semibold text-[18px] text-[#151875]'>Comfort Handy Craft</h2>
                              <div className=" flex gap-x-2 items-center">
                                  <h3 className=' font-hakto font-normal text-[14px] text-[#151875]'>$42.00</h3>
                                  <p className=' font-hakto font-normal text-[12px] text-[#FB2E86]' >$65.00</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </Container>
      </div>
  )
}

export default Leatest
