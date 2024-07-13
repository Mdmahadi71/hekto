import React, { useContext } from 'react'
import Container from './Container'
import { IoGridSharp } from "react-icons/io5";
import { FaList, FaRegHeart, FaCartPlus } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";
import { IoMdStarOutline } from "react-icons/io";
import { TbZoomIn } from "react-icons/tb";
import ShopList from '../assets/shopllistt.png'
import newss from '../assets/Newsd.png'
import { DataApi } from './ContextApi';



const ListShopmain = () => {
    let data = useContext(DataApi)
    

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
                <div className="">
                    {data.map((item)=>(
                        <div className=" border-[1px]  px-4 py-4 my-[25px] shadow-sm">
                        <div className=" flex gap-x-[40px] items-center">
                            <div className="">
                                <img src={item.thumbnail} alt="" />
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
                    ))}
                    
                    {/* <div className=" border-[1px]  px-4 py-4 my-[25px] shadow-sm">
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
                    </div> */}
                </div>

                <div className=" pl-[200px] py-4">
                    <img src={newss} alt="" />
                </div>
            </Container>
        </div>
    )
}

export default ListShopmain