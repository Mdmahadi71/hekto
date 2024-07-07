import React from 'react'
import Container from './Container'
import { IoGridSharp } from "react-icons/io5";
import { FaList, FaRegHeart, FaCartPlus } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";
import { IoMdStarOutline } from "react-icons/io";
import { TbZoomIn } from "react-icons/tb";
import ShopList from '../assets/shopllistt.png'
import newss from '../assets/Newsd.png'
import { MdCheckBox } from "react-icons/md";
import { IoStar } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";


const SidebarMain = () => {
    return (
        <div>
            <Container>
                <div className=" flex justify-between items-center py-[30px]">
                    <div className="w-[50%]">
                        <h4 className=' font-hakto font-semibold text-[#151875] text-[22px]'>Ecommerce Acceories & Fashion item </h4>
                        <p className=' font-hakto font-normal text-[#8A8FB9] text-[12px]'>About 9,620 results (0.62 seconds)</p>
                    </div>
                    <div className="w-[50%]">
                        <div className=" flex justify-between">
                            <div className=" flex gap-x-[10px] items-center">
                                <h5 className=' font-hakto font-medium text-[#3F509E] text-[16px]'>Per Page:</h5>
                                <input type="text" className=' border-[1px] border-[#E7E6EF] w-[80px] h-[40px] outline-none ' />
                            </div>
                            <div className="flex gap-x-[10px] items-center">
                                <h4 className=' font-hakto font-medium text-[#3F509E] text-[16px]'>Sort By:</h4>
                                <input type="text" className=' border-[1px] border-[#E7E6EF] w-[100px] h-[40px] outline-none font-hakto font-medium text-[#8A8FB9] text-[12px] pl-[5px]'
                                    placeholder='Best Match ' />
                            </div>
                            <div className="flex gap-x-[10px] items-center">
                                <div className=" flex gap-x-[10px] items-center">
                                    <h3 className=' font-hakto font-medium text-[#3F509E] text-[16px]'>View:</h3>
                                    <IoGridSharp />
                                    <FaList />
                                </div>
                                <input type="text" className=' border-[1px] border-[#E7E6EF] w-[200px] h-[40px] outline-none ' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" flex justify-between">
                    <div className="w-[25%]">
                        <div className="">
                            <div className="">
                                <h2 className=' font-hakto font-semibold text-[#151875] text-[20px] border-b-[1px] border-[#151875] py-1 inline-block'>Product Brand</h2>
                                <div className=" flex gap-x-[10px] items-center py-2">
                                    <MdCheckBox className=' text-[#E5E0FC]' />
                                    <p className=' font-hakto font-light text-[16px] text-[#7E81A2]'>Coaster Furniture</p>
                                </div>
                                <div className=" flex gap-x-[10px] items-center py-2">
                                    <MdCheckBox className=' text-[#E5E0FC]' />
                                    <p className=' font-hakto font-light text-[16px] text-[#7E81A2]'>Fusion Dot High Fashion</p>
                                </div>
                                <div className=" flex gap-x-[10px] items-center py-2">
                                    <MdCheckBox className=' text-[#E5E0FC]' />
                                    <p className=' font-hakto font-light text-[16px] text-[#7E81A2]'>Unique Furnitture Restor</p>
                                </div>
                                <div className=" flex gap-x-[10px] items-center py-2">
                                    <MdCheckBox className=' text-[#E5E0FC]' />
                                    <p className=' font-hakto font-light text-[16px] text-[#7E81A2]'>Dream Furnitture Flipping</p>
                                </div>
                                <div className=" flex gap-x-[10px] items-center py-2">
                                    <MdCheckBox className=' text-[#E5E0FC]' />
                                    <p className=' font-hakto font-light text-[16px] text-[#7E81A2]'>Young Repurposed</p>
                                </div>
                                <div className=" flex gap-x-[10px] items-center py-2">
                                    <MdCheckBox className=' text-[#E5E0FC]' />
                                    <p className=' font-hakto font-light text-[16px] text-[#7E81A2]'>Green DIY furniture</p>
                                </div>
                            </div>
                            <div className="">
                                <h2 className=' font-hakto font-semibold text-[#151875] text-[20px] border-b-[1px] border-[#151875] py-1 inline-block'>Discount Offer</h2>
                                <div className=" flex gap-x-[10px] items-center py-2">
                                    <MdCheckBox className=' text-[#FF3EB2]' />
                                    <p className=' font-hakto font-light text-[16px] text-[#7E81A2]'>20% Cashback</p>
                                </div>
                                <div className=" flex gap-x-[10px] items-center py-2">
                                    <MdCheckBox className=' text-[#FF3EB2]' />
                                    <p className=' font-hakto font-light text-[16px] text-[#7E81A2]'>5% Cashback Offer</p>
                                </div>
                                <div className=" flex gap-x-[10px] items-center py-2">
                                    <MdCheckBox className=' text-[#FF3EB2]' />
                                    <p className=' font-hakto font-light text-[16px] text-[#7E81A2]'>25% Discount Offer</p>
                                </div>

                            </div>
                            <div className="">
                                <h2 className=' font-hakto font-semibold text-[#151875] text-[20px] border-b-[1px] border-[#151875] py-1 inline-block'>Rating Item</h2>
                                <div className=" flex gap-x-[10px] items-center py-2">
                                    <div className="">
                                        <MdCheckBox className=' text-[#FFC107]' />
                                    </div>
                                    <div className=" flex gap-x-[10px]">
                                        <IoStar className=' text-[#FFC107]' />
                                        <IoStar className=' text-[#FFC107]' />
                                        <IoStar className=' text-[#FFC107]' />
                                        <IoStar className=' text-[#FFC107]' />
                                        <FaRegStar />
                                    </div>
                                    <p>(2341)</p>

                                </div>
                                <div className=" flex gap-x-[10px] items-center py-2">
                                    <div className="">
                                        <MdCheckBox className=' text-[#FFC107]' />
                                    </div>
                                    <div className=" flex gap-x-[10px]">
                                        <IoStar className=' text-[#FFC107]' />
                                        <IoStar className=' text-[#FFC107]' />
                                        <IoStar className=' text-[#FFC107]' />
                                        <FaRegStar />
                                        <FaRegStar />
                                    </div>
                                    <p>(1726)</p>

                                </div>
                                <div className=" flex gap-x-[10px] items-center py-2">
                                    <div className="">
                                        <MdCheckBox className=' text-[#FFC107]' />
                                    </div>
                                    <div className=" flex gap-x-[10px]">
                                        <IoStar className=' text-[#FFC107]' />
                                        <IoStar className=' text-[#FFC107]' />
                                        <FaRegStar />
                                        <FaRegStar />
                                        <FaRegStar />
                                    </div>
                                    <p>(258)</p>

                                </div>
                                <div className=" flex gap-x-[10px] items-center py-2">
                                    <div className="">
                                        <MdCheckBox className=' text-[#FFC107]' />
                                    </div>
                                    <div className=" flex gap-x-[10px]">
                                        <IoStar className=' text-[#FFC107]' />
                                        <IoStar className=' text-[#FFC107]' />
                                        <FaRegStar />
                                        <FaRegStar />
                                        <FaRegStar />
                                    </div>
                                    <p>(25)</p>

                                </div>


                            </div>

                            <div className="">
                                <h2 className=' font-hakto font-semibold text-[#151875] text-[20px] border-b-[1px] border-[#151875] py-1 inline-block'>Categories</h2>
                                <div className=" flex gap-x-[10px] items-center py-2">
                                    <MdCheckBox className=' text-[#FF3EB2]' />
                                    <p className=' font-hakto font-light text-[16px] text-[#7E81A2]'>Prestashop</p>
                                </div>
                                <div className=" flex gap-x-[10px] items-center py-2">
                                    <MdCheckBox className=' text-[#FF3EB2]' />
                                    <p className=' font-hakto font-light text-[16px] text-[#7E81A2]'>Bigcommerce</p>
                                </div>
                                <div className=" flex gap-x-[10px] items-center py-2">
                                    <MdCheckBox className=' text-[#FF3EB2]' />
                                    <p className=' font-hakto font-light text-[16px] text-[#7E81A2]'>osCommerce</p>
                                </div>
                                <div className=" flex gap-x-[10px] items-center py-2">
                                    <MdCheckBox className=' text-[#FF3EB2]' />
                                    <p className=' font-hakto font-light text-[16px] text-[#7E81A2]'>Accessories</p>
                                </div>
                                <div className=" flex gap-x-[10px] items-center py-2">
                                    <MdCheckBox className=' text-[#FF3EB2]' />
                                    <p className=' font-hakto font-light text-[16px] text-[#7E81A2]'>Bags</p>
                                </div>
                                <div className=" flex gap-x-[10px] items-center py-2">
                                    <MdCheckBox className=' text-[#FF3EB2]' />
                                    <p className=' font-hakto font-light text-[16px] text-[#7E81A2]'>Watches</p>
                                </div>

                            </div>
                            <div className="">
                                <h2 className=' font-hakto font-semibold text-[#151875] text-[20px] border-b-[1px] border-[#151875] py-1 inline-block'>Price Filter</h2>
                                <div className=" flex gap-x-[10px] items-center py-2">
                                    <MdCheckBox className=' text-[#FF3EB2]' />
                                    <p className=' font-hakto font-light text-[16px] text-[#7E81A2]'>$0.00 - $150.00</p>
                                </div>
                                <div className=" flex gap-x-[10px] items-center py-2">
                                    <MdCheckBox className=' text-[#FF3EB2]' />
                                    <p className=' font-hakto font-light text-[16px] text-[#7E81A2]'>$150.00 - $350.00</p>
                                </div>
                                <div className=" flex gap-x-[10px] items-center py-2">
                                    <MdCheckBox className=' text-[#FF3EB2]' />
                                    <p className=' font-hakto font-light text-[16px] text-[#7E81A2]'>$150.00 - $504.00</p>
                                </div>
                                <div className=" flex gap-x-[10px] items-center py-2">
                                    <MdCheckBox className=' text-[#FF3EB2]' />
                                    <p className=' font-hakto font-light text-[16px] text-[#7E81A2]'>$450.00 +</p>
                                </div>

                            </div>
                            <div className="relative py-[30px]">
                                <input type=" text" className=' border-[1px] border-[#BCBDDB] w-[300px] h-[35px] outline-none 
                                 font-hakto font-light text-[12px] text-[#151875] pl-[10px]' placeholder='$10.00 - 20000$' />
                                <div className=" absolute top-[40px] right-[40px] font-light text-[16px] text-[#151875]">
                                    <CiSearch />
                                </div>
                            </div>
                            <div className="">
                                <h2 className=' font-hakto font-semibold text-[#151875] text-[20px] border-b-[1px] border-[#151875] py-1 inline-block'>Filter By Color</h2>
                                <div className=" flex gap-x-[10px] items-center py-2">
                                    <div className=" flex gap-x-[10px] items-center">
                                        <div className=" w-[10px] h-[10px] rounded-[50%] bg-[#5E37FF]"></div>
                                        <h3 className=' font-hakto font-light text-[15px] text-[#7E81A2]'>Blue</h3>
                                    </div>
                                    <div className=" flex gap-x-[10px] items-center">
                                        <div className=" w-[10px] h-[10px] rounded-[50%] bg-[#FF9437]"></div>
                                        <h3 className=' font-hakto font-light text-[15px] text-[#7E81A2]'>Orange</h3>
                                    </div>
                                    <div className=" flex gap-x-[10px] items-center">
                                        <div className=" w-[10px] h-[10px] rounded-[50%] bg-[#FFBF95]"></div>
                                        <h3 className=' font-hakto font-light text-[15px] text-[#7E81A2]'>Brown</h3>
                                    </div>

                                </div>
                                <div className=" flex gap-x-[10px] items-center py-2">
                                    <div className=" flex gap-x-[10px] items-center">
                                        <div className=" w-[10px] h-[10px] rounded-[50%] bg-[#33D221]"></div>
                                        <h3 className=' font-hakto font-light text-[15px] text-[#7E81A2]'>Green</h3>
                                    </div>
                                    <div className=" flex gap-x-[10px] items-center">
                                        <div className=" w-[10px] h-[10px] rounded-[50%] bg-[#E248FF]"></div>
                                        <h3 className=' font-hakto font-light text-[15px] text-[#7E81A2]'>Purple</h3>
                                    </div>
                                    <div className=" flex gap-x-[10px] items-center">
                                        <div className=" w-[10px] h-[10px] rounded-[50%] bg-[#26CBFF]"></div>
                                        <h3 className=' font-hakto font-light text-[15px] text-[#7E81A2]'>Sky</h3>
                                    </div>

                                </div>


                            </div>
                        </div>
                    </div>
                    <div className="w-[75%]">
                        <div className=" border-[1px]  px-4 py-4 my-[25px] shadow-sm">
                            <div className=" flex gap-x-[40px] items-center">
                                <div className="">
                                    <img src={ShopList} alt="" />
                                </div>
                                <div className=" w-[50%]">
                                    <div className=" flex  items-center gap-x-[20px] py-[8px]">
                                        <h3 className=' font-hakto font-medium text-[#111C85] text-[20px]'>Accumsan tincidunt</h3>
                                        <div className=" flex gap-x-[10px] ">
                                            <div className=" w-[10px] h-[10px] rounded-[50%] bg-[#DE9034]"></div>
                                            <div className=" w-[10px] h-[10px] rounded-[50%] bg-[#EC42A2]"></div>
                                            <div className=" w-[10px] h-[10px] rounded-[50%] bg-[#8568FF]"></div>
                                        </div>
                                    </div>
                                    <div className=" flex gap-x-[20px] items-center py-4">
                                        <h5 className=' font-hakto font-normal text-[16px] text-[#111C85] hover:text-[#FF2AAA] duration-300'>$26.00</h5>
                                        <h5 className=' font-hakto font-normal text-[16px] text-[#FF2AAA] hover:text-[#111C85] duration-300'>$52.00</h5>
                                        <div className=" flex gap-x-[10px]">
                                            <FaRegStar />
                                            <FaRegStar />
                                            <FaRegStar />
                                            <FaRegStar />
                                            <IoMdStarOutline />
                                        </div>
                                    </div>
                                    <p className=' font-hakto font-light text-[17px] text-[#9295AA]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
                                    <div className=" flex gap-x-[40px] pt-[18px]">
                                        <FaCartPlus />
                                        <TbZoomIn />
                                        <FaRegHeart />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" border-[1px]  px-4 py-4 my-[25px] shadow-sm">
                            <div className=" flex gap-x-[40px] items-center">
                                <div className="">
                                    <img src={ShopList} alt="" />
                                </div>
                                <div className=" w-[50%]">
                                    <div className=" flex  items-center gap-x-[20px] py-[8px]">
                                        <h3 className=' font-hakto font-medium text-[#111C85] text-[20px]'>Accumsan tincidunt</h3>
                                        <div className=" flex gap-x-[10px] ">
                                            <div className=" w-[10px] h-[10px] rounded-[50%] bg-[#DE9034]"></div>
                                            <div className=" w-[10px] h-[10px] rounded-[50%] bg-[#EC42A2]"></div>
                                            <div className=" w-[10px] h-[10px] rounded-[50%] bg-[#8568FF]"></div>
                                        </div>
                                    </div>
                                    <div className=" flex gap-x-[20px] items-center py-4">
                                        <h5 className=' font-hakto font-normal text-[16px] text-[#111C85] hover:text-[#FF2AAA] duration-300'>$26.00</h5>
                                        <h5 className=' font-hakto font-normal text-[16px] text-[#FF2AAA] hover:text-[#111C85] duration-300'>$52.00</h5>
                                        <div className=" flex gap-x-[10px]">
                                            <FaRegStar />
                                            <FaRegStar />
                                            <FaRegStar />
                                            <FaRegStar />
                                            <IoMdStarOutline />
                                        </div>
                                    </div>
                                    <p className=' font-hakto font-light text-[17px] text-[#9295AA]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
                                    <div className=" flex gap-x-[40px] pt-[18px]">
                                        <FaCartPlus />
                                        <TbZoomIn />
                                        <FaRegHeart />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" border-[1px]  px-4 py-4 my-[25px] shadow-sm">
                            <div className=" flex gap-x-[40px] items-center">
                                <div className="">
                                    <img src={ShopList} alt="" />
                                </div>
                                <div className=" w-[50%]">
                                    <div className=" flex  items-center gap-x-[20px] py-[8px]">
                                        <h3 className=' font-hakto font-medium text-[#111C85] text-[20px]'>Accumsan tincidunt</h3>
                                        <div className=" flex gap-x-[10px] ">
                                            <div className=" w-[10px] h-[10px] rounded-[50%] bg-[#DE9034]"></div>
                                            <div className=" w-[10px] h-[10px] rounded-[50%] bg-[#EC42A2]"></div>
                                            <div className=" w-[10px] h-[10px] rounded-[50%] bg-[#8568FF]"></div>
                                        </div>
                                    </div>
                                    <div className=" flex gap-x-[20px] items-center py-4">
                                        <h5 className=' font-hakto font-normal text-[16px] text-[#111C85] hover:text-[#FF2AAA] duration-300'>$26.00</h5>
                                        <h5 className=' font-hakto font-normal text-[16px] text-[#FF2AAA] hover:text-[#111C85] duration-300'>$52.00</h5>
                                        <div className=" flex gap-x-[10px]">
                                            <FaRegStar />
                                            <FaRegStar />
                                            <FaRegStar />
                                            <FaRegStar />
                                            <IoMdStarOutline />
                                        </div>
                                    </div>
                                    <p className=' font-hakto font-light text-[17px] text-[#9295AA]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
                                    <div className=" flex gap-x-[40px] pt-[18px]">
                                        <FaCartPlus />
                                        <TbZoomIn />
                                        <FaRegHeart />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" border-[1px]  px-4 py-4 my-[25px] shadow-sm">
                            <div className=" flex gap-x-[40px] items-center">
                                <div className="">
                                    <img src={ShopList} alt="" />
                                </div>
                                <div className=" w-[50%]">
                                    <div className=" flex  items-center gap-x-[20px] py-[8px]">
                                        <h3 className=' font-hakto font-medium text-[#111C85] text-[20px]'>Accumsan tincidunt</h3>
                                        <div className=" flex gap-x-[10px] ">
                                            <div className=" w-[10px] h-[10px] rounded-[50%] bg-[#DE9034]"></div>
                                            <div className=" w-[10px] h-[10px] rounded-[50%] bg-[#EC42A2]"></div>
                                            <div className=" w-[10px] h-[10px] rounded-[50%] bg-[#8568FF]"></div>
                                        </div>
                                    </div>
                                    <div className=" flex gap-x-[20px] items-center py-4">
                                        <h5 className=' font-hakto font-normal text-[16px] text-[#111C85] hover:text-[#FF2AAA] duration-300'>$26.00</h5>
                                        <h5 className=' font-hakto font-normal text-[16px] text-[#FF2AAA] hover:text-[#111C85] duration-300'>$52.00</h5>
                                        <div className=" flex gap-x-[10px]">
                                            <FaRegStar />
                                            <FaRegStar />
                                            <FaRegStar />
                                            <FaRegStar />
                                            <IoMdStarOutline />
                                        </div>
                                    </div>
                                    <p className=' font-hakto font-light text-[17px] text-[#9295AA]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
                                    <div className=" flex gap-x-[40px] pt-[18px]">
                                        <FaCartPlus />
                                        <TbZoomIn />
                                        <FaRegHeart />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" border-[1px]  px-4 py-4 my-[25px] shadow-sm">
                            <div className=" flex gap-x-[40px] items-center">
                                <div className="">
                                    <img src={ShopList} alt="" />
                                </div>
                                <div className=" w-[50%]">
                                    <div className=" flex  items-center gap-x-[20px] py-[8px]">
                                        <h3 className=' font-hakto font-medium text-[#111C85] text-[20px]'>Accumsan tincidunt</h3>
                                        <div className=" flex gap-x-[10px] ">
                                            <div className=" w-[10px] h-[10px] rounded-[50%] bg-[#DE9034]"></div>
                                            <div className=" w-[10px] h-[10px] rounded-[50%] bg-[#EC42A2]"></div>
                                            <div className=" w-[10px] h-[10px] rounded-[50%] bg-[#8568FF]"></div>
                                        </div>
                                    </div>
                                    <div className=" flex gap-x-[20px] items-center py-4">
                                        <h5 className=' font-hakto font-normal text-[16px] text-[#111C85] hover:text-[#FF2AAA] duration-300'>$26.00</h5>
                                        <h5 className=' font-hakto font-normal text-[16px] text-[#FF2AAA] hover:text-[#111C85] duration-300'>$52.00</h5>
                                        <div className=" flex gap-x-[10px]">
                                            <FaRegStar />
                                            <FaRegStar />
                                            <FaRegStar />
                                            <FaRegStar />
                                            <IoMdStarOutline />
                                        </div>
                                    </div>
                                    <p className=' font-hakto font-light text-[17px] text-[#9295AA]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
                                    <div className=" flex gap-x-[40px] pt-[18px]">
                                        <FaCartPlus />
                                        <TbZoomIn />
                                        <FaRegHeart />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className=" pl-[200px] py-4">
                    <img src={newss} alt="" />
                </div>
            </Container>
        </div>
    )
}

export default SidebarMain
