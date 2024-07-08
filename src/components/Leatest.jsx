import React from 'react'
// import { Tabs } from 'flowbite';
import Container from './Container'
import leatest from '../assets/chayar.png'
import leatest2 from '../assets/chayar2.png'
import leatest3 from '../assets/chayar3.png'
import leatest4 from '../assets/chayar4.png'
import { MdOutlineZoomIn } from "react-icons/md";
import { FaCartArrowDown } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { BsCart } from "react-icons/bs";




const Leatest = () => {
    // const tabsElement = document.getElementById('tabs-example');
    // const tabElements = [
    //     {
    //         id: 'arrival',
    //         triggerEl: document.querySelector('#arrival-tab-example'),
    //         targetEl: document.querySelector('#arrival-example'),
    //     },
    //     {
    //         id: 'seller',
    //         triggerEl: document.querySelector('#seller-tab-example'),
    //         targetEl: document.querySelector('#seller-example'),
    //     },
    //     {
    //         id: 'featured',
    //         triggerEl: document.querySelector('#featured-tab-example'),
    //         targetEl: document.querySelector('#featured-example'),
    //     },
    //     {
    //         id: 'offer',
    //         triggerEl: document.querySelector('#offer-tab-example'),
    //         targetEl: document.querySelector('#offer-example'),
    //     },
    // ];
    

    // const options = {
    //     defaultTabId: 'settings',
    //     activeClasses:
    //         'text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-400 border-blue-600 dark:border-blue-500',
    //     inactiveClasses:
    //         'text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300',
    //     onShow: () => {
    //         console.log('tab is shown');
    //     },
    // };

    // const instanceOptions = {
    //     id: 'tabs-example',
    //     override: true
    // };
    // const tabs = new Tabs(tabsElement, tabElements, options, instanceOptions);
    return (
        <div className=' py-[50px]'>
            <Container>
                <div className="">
                    <h2 className=' font-hakto font-semibold text-[42px] text-[#151875] text-center'>Leatest Products</h2>
                    <div className="">
                        {/* <div className="">
                            <ul className="flex flex-wrap justify-center -mb-px text-sm font-medium text-center" id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
                                <li class="me-2" role="presentation">
                                    <button className="inline-block  text-[18px] text-[#151875] font-lato font-normal" id="arrival-tab" data-tabs-target="#arrival" type="button" role="tab" aria-controls="arrival" aria-selected="true">New Arrival</button>
                                </li>
                                <li class="me-2 px-[60px]" role="presentation">
                                    <button className="inline-block  text-[18px] text-[#151875] font-lato font-normal" id="seller-tab" data-tabs-target="#seller" type="button" role="tab" aria-controls="seller" aria-selected="false">Best Seller</button>
                                </li>
                                <li class="me-2 pr-[60px]" role="presentation">
                                    <button className="inline-block  text-[18px] text-[#151875] font-lato font-normal" id="featured-tab" data-tabs-target="#featured" type="button" role="tab" aria-controls="featured" aria-selected="false">Featured</button>
                                </li>
                                <li class="me-2" role="presentation">
                                    <button className="inline-block  text-[18px] text-[#151875] font-lato font-normal" id="offer-tab" data-tabs-target="#offer" type="button" role="tab" aria-controls="offer" aria-selected="false">Special Offer</button>
                                </li>

                            </ul>
                        </div> */}






                        <ul className=' flex gap-x-5 justify-center'>
                          <li><a className=' font-hakto font-semibold text-[18px] text-[#151875] hover:text-[#FB2E86] hover:border-b-[2px] hover:border-[#FB2E86] duration-200 gap-x-[50px]'>New Arrival</a></li>
                          <li><a className=' font-hakto font-semibold text-[18px] text-[#151875] hover:text-[#FB2E86] hover:border-b-[2px] hover:border-[#FB2E86] duration-200 gap-x-[50px]'>Best Seller</a></li>
                          <li><a className=' font-hakto font-semibold text-[18px] text-[#151875] hover:text-[#FB2E86] hover:border-b-[2px] hover:border-[#FB2E86] duration-200'>Featured</a></li>
                          <li><a className=' font-hakto font-semibold text-[18px] text-[#151875] hover:text-[#FB2E86] hover:border-b-[2px] hover:border-[#FB2E86] duration-200'>Special Offer</a></li>
                      </ul>
                    </div>
                </div>
                <div className=" " id="tabs-example" role="presentation" aria-controls="contacts-example">
              <div className=" flex justify-between " >
                  <div className="w-[32%]">
                      <div className=" mt-4">
                          <div className=" bg-[#F7F7F7] relative group overflow-hidden ">
                              <img src={leatest} className='translate-x-[61%] py-[50px]' alt="" />
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
                              <img src={leatest} className='translate-x-[61%] py-[50px]' alt="" />
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
                              <img src={leatest} className='translate-x-[61%] py-[50px]' alt="" />
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
                              <img src={leatest} className='translate-x-[61%] py-[50px]' alt="" />
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
                              <img src={leatest} className='translate-x-[61%] py-[50px]' alt="" />
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
                              <img src={leatest} className='translate-x-[61%] py-[50px]' alt="" />
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
              </div>

                {/* <div className=" default-tab-content">
                <div class=" " id="arrival" role="tabpanel" aria-labelledby="arrival-tab">
                    <div className="pt-[62px] hidden">
                        <div className=" flex justify-between " >
                            <div className="w-[32%]">
                                <div className=" mt-4">
                                    <div className=" bg-[#F7F7F7] relative group overflow-hidden ">
                                        <img src={leatest} className='translate-x-[61%] py-[50px]' alt="" />
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
                                        <img src={leatest} className='translate-x-[61%] py-[50px]' alt="" />
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
                                        <img src={leatest} className='translate-x-[61%] py-[50px]' alt="" />
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
                                        <img src={leatest} className='translate-x-[61%] py-[50px]' alt="" />
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
                                        <img src={leatest} className='translate-x-[61%] py-[50px]' alt="" />
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
                                        <img src={leatest} className='translate-x-[61%] py-[50px]' alt="" />
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
                    </div>
                </div>
                <div class=" " id="seller" role="tabpanel" aria-labelledby="seller-tab">
                    <div className="pt-[62px]">
                        <div className=" flex justify-between " >
                            <div className="w-[32%]">
                                <div className=" mt-4">
                                    <div className=" bg-[#F7F7F7] relative group overflow-hidden ">
                                        <img src={leatest2} className='translate-x-[61%] py-[50px]' alt="" />
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
                                        <img src={leatest2} className='translate-x-[61%] py-[50px]' alt="" />
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
                                        <img src={leatest2} className='translate-x-[61%] py-[50px]' alt="" />
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
                                        <img src={leatest2} className='translate-x-[61%] py-[50px]' alt="" />
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
                                        <img src={leatest2} className='translate-x-[61%] py-[50px]' alt="" />
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
                                        <img src={leatest2} className='translate-x-[61%] py-[50px]' alt="" />
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
                    </div>
                </div>
                <div class=" " id="featured" role="tabpanel" aria-labelledby="featured-tab">
                    <div className="pt-[62px]">
                        <div className=" flex justify-between " >
                            <div className="w-[32%]">
                                <div className=" mt-4">
                                    <div className=" bg-[#F7F7F7] relative group overflow-hidden ">
                                        <img src={leatest3} className='translate-x-[61%] py-[50px]' alt="" />
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
                                        <img src={leatest3} className='translate-x-[61%] py-[50px]' alt="" />
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
                                        <img src={leatest3} className='translate-x-[61%] py-[50px]' alt="" />
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
                                        <img src={leatest3} className='translate-x-[61%] py-[50px]' alt="" />
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
                                        <img src={leatest3} className='translate-x-[61%] py-[50px]' alt="" />
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
                                        <img src={leatest3} className='translate-x-[61%] py-[50px]' alt="" />
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
                    </div>
                </div>
                <div class=" " id="offer" role="tabpanel" aria-labelledby="offer-tab">
                    <div className="pt-[62px]">
                        <div className=" flex justify-between " >
                            <div className="w-[32%]">
                                <div className=" mt-4">
                                    <div className=" bg-[#F7F7F7] relative group overflow-hidden ">
                                        <img src={leatest4} className='translate-x-[61%] py-[50px]' alt="" />
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
                                        <img src={leatest4} className='translate-x-[61%] py-[50px]' alt="" />
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
                                        <img src={leatest4} className='translate-x-[61%] py-[50px]' alt="" />
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
                                        <img src={leatest4} className='translate-x-[61%] py-[50px]' alt="" />
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
                                        <img src={leatest4} className='translate-x-[61%] py-[50px]' alt="" />
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
                                        <img src={leatest4} className='translate-x-[61%] py-[50px]' alt="" />
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
                    </div>
                </div>

                </div> */}
            </Container>
        </div>
    )
}

export default Leatest
