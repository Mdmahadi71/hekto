import React, { useContext } from 'react'
import Container from './Container'
import { IoGridSharp } from "react-icons/io5";
import { FaList ,FaRegHeart,FaCartPlus  } from "react-icons/fa";
import GridImg from '../assets/gridlist.png'
import { TbZoomIn } from "react-icons/tb";
import gritlists from '../assets/gridlist1.png'
import GridlistImgd from '../assets/gridlist3.png'
import newss from '../assets/Newsd.png'
import { DataApi } from './ContextApi';



const EcommerceAcceories = () => {


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
                                    <IoGridSharp/>
                                    <FaList/>
                                </div>
                                <input type="text" className=' border-[1px] border-[#E7E6EF] w-[200px] h-[40px] outline-none ' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" flex flex-wrap">
                {data.map((item)=>(
                    <div className="w-[24%] flex flex-wrap">
                        
                            <div className=" group overflow-hidden">
                            <div className="   bg-[#F6F7FB] relative group-hover:bg-[#EBF4F3] duration-300">
                                 <div className=" w-[90%] justify-center">
                                   <img src={item.thumbnail} className='py-[40px] w-full ' alt="" />
                                 </div>
                                <div className=" absolute bottom-1 left-[-50px] group-hover:left-0 duration-300">              
                                    <FaCartPlus className=' text-[40px] py-[10px]'/>
                                    <TbZoomIn className=' text-[40px] py-[10px]'/>
                                    <FaRegHeart className=' text-[40px] py-[10px]'/>
                            </div>
                            </div>
                           
                            <div className=" text-center py-[20px]">
                                <h3 className=' font-hakto font-medium text-[18px] text-[#151875]'>{item.title}</h3>
                                <div className=" flex gap-x-[10px] justify-center py-[10px] items-center">
                                    <div className=" w-[10px] h-[10px] rounded-[50%] bg-[#DE9034]"></div>
                                    <div className=" w-[10px] h-[10px] rounded-[50%] bg-[#EC42A2]"></div>
                                    <div className=" w-[10px] h-[10px] rounded-[50%] bg-[#8568FF]"></div>
                                </div>
                                <h4><span className=' font-hakto font-normal text-[14px] text-[#151875]'>${item.price} </span> <span className=' font-hakto font-normal text-[14px] text-[#FB2E86]'>${item.price}</span></h4>
                            </div>
                        </div>
                    </div>
                     ))}
                    {/* <div className="w-[24%]">
                        <div className=" group overflow-hidden">
                            <div className="   bg-[#F6F7FB] relative group-hover:bg-[#EBF4F3] duration-300">
                                <img src={gritlists} className='translate-x-[39%] py-[40px]' alt="" />
                                <div className=" absolute bottom-1 left-[-50px] group-hover:left-0 duration-300">              
                                    <FaCartPlus className=' text-[40px] py-[10px]'/>
                                    <TbZoomIn className=' text-[40px] py-[10px]'/>
                                    <FaRegHeart className=' text-[40px] py-[10px]'/>
                            </div>
                            </div>
                           
                            <div className=" text-center py-[20px]">
                                <h3 className=' font-hakto font-medium text-[18px] text-[#151875]'>Vel elit euismod</h3>
                                <div className=" flex gap-x-[10px] justify-center py-[10px] items-center">
                                    <div className=" w-[10px] h-[10px] rounded-[50%] bg-[#DE9034]"></div>
                                    <div className=" w-[10px] h-[10px] rounded-[50%] bg-[#EC42A2]"></div>
                                    <div className=" w-[10px] h-[10px] rounded-[50%] bg-[#8568FF]"></div>
                                </div>
                                <h4><span className=' font-hakto font-normal text-[14px] text-[#151875]'>$26.00 </span> <span className=' font-hakto font-normal text-[14px] text-[#FB2E86]'>$42.00</span></h4>
                            </div>
                        </div>
                    </div>
                    <div className="w-[24%]">
                        <div className=" group overflow-hidden">
                            <div className="   bg-[#F6F7FB] relative group-hover:bg-[#EBF4F3] duration-300">
                                <img src={gritlists} className='translate-x-[39%] py-[40px]' alt="" />
                                <div className=" absolute bottom-1 left-[-50px] group-hover:left-0 duration-300">              
                                    <FaCartPlus className=' text-[40px] py-[10px]'/>
                                    <TbZoomIn className=' text-[40px] py-[10px]'/>
                                    <FaRegHeart className=' text-[40px] py-[10px]'/>
                            </div>
                            </div>
                           
                            <div className=" text-center py-[20px]">
                                <h3 className=' font-hakto font-medium text-[18px] text-[#151875]'>Vel elit euismod</h3>
                                <div className=" flex gap-x-[10px] justify-center py-[10px] items-center">
                                    <div className=" w-[10px] h-[10px] rounded-[50%] bg-[#DE9034]"></div>
                                    <div className=" w-[10px] h-[10px] rounded-[50%] bg-[#EC42A2]"></div>
                                    <div className=" w-[10px] h-[10px] rounded-[50%] bg-[#8568FF]"></div>
                                </div>
                                <h4><span className=' font-hakto font-normal text-[14px] text-[#151875]'>$26.00 </span> <span className=' font-hakto font-normal text-[14px] text-[#FB2E86]'>$42.00</span></h4>
                            </div>
                        </div>
                    </div>
                    <div className="w-[24%]">
                        <div className=" group overflow-hidden">
                            <div className="   bg-[#F6F7FB] relative group-hover:bg-[#EBF4F3] duration-300">
                                <img src={gritlists} className='translate-x-[39%] py-[40px]' alt="" />
                                <div className=" absolute bottom-1 left-[-50px] group-hover:left-0 duration-300">              
                                    <FaCartPlus className=' text-[40px] py-[10px]'/>
                                    <TbZoomIn className=' text-[40px] py-[10px]'/>
                                    <FaRegHeart className=' text-[40px] py-[10px]'/>
                            </div>
                            </div>
                           
                            <div className=" text-center py-[20px]">
                                <h3 className=' font-hakto font-medium text-[18px] text-[#151875]'>Vel elit euismod</h3>
                                <div className=" flex gap-x-[10px] justify-center py-[10px] items-center">
                                    <div className=" w-[10px] h-[10px] rounded-[50%] bg-[#DE9034]"></div>
                                    <div className=" w-[10px] h-[10px] rounded-[50%] bg-[#EC42A2]"></div>
                                    <div className=" w-[10px] h-[10px] rounded-[50%] bg-[#8568FF]"></div>
                                </div>
                                <h4><span className=' font-hakto font-normal text-[14px] text-[#151875]'>$26.00 </span> <span className=' font-hakto font-normal text-[14px] text-[#FB2E86]'>$42.00</span></h4>
                            </div>
                        </div>
                    </div> */}
                </div>
                {/* <div className=" flex justify-between">
                    <div className="w-[24%]">
                        <div className=" group overflow-hidden">
                            <div className="   bg-[#F6F7FB] relative group-hover:bg-[#EBF4F3] duration-300">
                                <img src={GridlistImgd} className='translate-x-[39%] py-[40px]' alt="" />
                                <div className=" absolute bottom-1 left-[-50px] group-hover:left-0 duration-300">              
                                    <FaCartPlus className=' text-[40px] py-[10px]'/>
                                    <TbZoomIn className=' text-[40px] py-[10px]'/>
                                    <FaRegHeart className=' text-[40px] py-[10px]'/>
                            </div>
                            </div>
                           
                            <div className=" text-center py-[20px]">
                                <h3 className=' font-hakto font-medium text-[18px] text-[#151875]'>Vel elit euismod</h3>
                                <div className=" flex gap-x-[10px] justify-center py-[10px] items-center">
                                    <div className=" w-[10px] h-[10px] rounded-[50%] bg-[#DE9034]"></div>
                                    <div className=" w-[10px] h-[10px] rounded-[50%] bg-[#EC42A2]"></div>
                                    <div className=" w-[10px] h-[10px] rounded-[50%] bg-[#8568FF]"></div>
                                </div>
                                <h4><span className=' font-hakto font-normal text-[14px] text-[#151875]'>$26.00 </span> <span className=' font-hakto font-normal text-[14px] text-[#FB2E86]'>$42.00</span></h4>
                            </div>
                        </div>
                    </div>
                    <div className="w-[24%]">
                        <div className=" group overflow-hidden">
                            <div className="   bg-[#F6F7FB] relative group-hover:bg-[#EBF4F3] duration-300">
                                <img src={GridlistImgd} className='translate-x-[39%] py-[40px]' alt="" />
                                <div className=" absolute bottom-1 left-[-50px] group-hover:left-0 duration-300">              
                                    <FaCartPlus className=' text-[40px] py-[10px]'/>
                                    <TbZoomIn className=' text-[40px] py-[10px]'/>
                                    <FaRegHeart className=' text-[40px] py-[10px]'/>
                            </div>
                            </div>
                           
                            <div className=" text-center py-[20px]">
                                <h3 className=' font-hakto font-medium text-[18px] text-[#151875]'>Vel elit euismod</h3>
                                <div className=" flex gap-x-[10px] justify-center py-[10px] items-center">
                                    <div className=" w-[10px] h-[10px] rounded-[50%] bg-[#DE9034]"></div>
                                    <div className=" w-[10px] h-[10px] rounded-[50%] bg-[#EC42A2]"></div>
                                    <div className=" w-[10px] h-[10px] rounded-[50%] bg-[#8568FF]"></div>
                                </div>
                                <h4><span className=' font-hakto font-normal text-[14px] text-[#151875]'>$26.00 </span> <span className=' font-hakto font-normal text-[14px] text-[#FB2E86]'>$42.00</span></h4>
                            </div>
                        </div>
                    </div>
                    <div className="w-[24%]">
                        <div className=" group overflow-hidden">
                            <div className="   bg-[#F6F7FB] relative group-hover:bg-[#EBF4F3] duration-300">
                                <img src={GridlistImgd} className='translate-x-[39%] py-[40px]' alt="" />
                                <div className=" absolute bottom-1 left-[-50px] group-hover:left-0 duration-300">              
                                    <FaCartPlus className=' text-[40px] py-[10px]'/>
                                    <TbZoomIn className=' text-[40px] py-[10px]'/>
                                    <FaRegHeart className=' text-[40px] py-[10px]'/>
                            </div>
                            </div>
                           
                            <div className=" text-center py-[20px]">
                                <h3 className=' font-hakto font-medium text-[18px] text-[#151875]'>Vel elit euismod</h3>
                                <div className=" flex gap-x-[10px] justify-center py-[10px] items-center">
                                    <div className=" w-[10px] h-[10px] rounded-[50%] bg-[#DE9034]"></div>
                                    <div className=" w-[10px] h-[10px] rounded-[50%] bg-[#EC42A2]"></div>
                                    <div className=" w-[10px] h-[10px] rounded-[50%] bg-[#8568FF]"></div>
                                </div>
                                <h4><span className=' font-hakto font-normal text-[14px] text-[#151875]'>$26.00 </span> <span className=' font-hakto font-normal text-[14px] text-[#FB2E86]'>$42.00</span></h4>
                            </div>
                        </div>
                    </div>
                    <div className="w-[24%]">
                        <div className=" group overflow-hidden">
                            <div className="   bg-[#F6F7FB] relative group-hover:bg-[#EBF4F3] duration-300">
                                <img src={GridlistImgd} className='translate-x-[39%] py-[40px]' alt="" />
                                <div className=" absolute bottom-1 left-[-50px] group-hover:left-0 duration-300">              
                                    <FaCartPlus className=' text-[40px] py-[10px]'/>
                                    <TbZoomIn className=' text-[40px] py-[10px]'/>
                                    <FaRegHeart className=' text-[40px] py-[10px]'/>
                            </div>
                            </div>
                           
                            <div className=" text-center py-[20px]">
                                <h3 className=' font-hakto font-medium text-[18px] text-[#151875]'>Vel elit euismod</h3>
                                <div className=" flex gap-x-[10px] justify-center py-[10px] items-center">
                                    <div className=" w-[10px] h-[10px] rounded-[50%] bg-[#DE9034]"></div>
                                    <div className=" w-[10px] h-[10px] rounded-[50%] bg-[#EC42A2]"></div>
                                    <div className=" w-[10px] h-[10px] rounded-[50%] bg-[#8568FF]"></div>
                                </div>
                                <h4><span className=' font-hakto font-normal text-[14px] text-[#151875]'>$26.00 </span> <span className=' font-hakto font-normal text-[14px] text-[#FB2E86]'>$42.00</span></h4>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* <div className=" flex justify-between">
                    <div className="w-[24%]">
                        <div className=" group overflow-hidden">
                            <div className="   bg-[#F6F7FB] relative group-hover:bg-[#EBF4F3] duration-300">
                                <img src={GridImg} className='translate-x-[39%] py-[40px]' alt="" />
                                <div className=" absolute bottom-1 left-[-50px] group-hover:left-0 duration-300">              
                                    <FaCartPlus className=' text-[40px] py-[10px]'/>
                                    <TbZoomIn className=' text-[40px] py-[10px]'/>
                                    <FaRegHeart className=' text-[40px] py-[10px]'/>
                            </div>
                            </div>
                           
                            <div className=" text-center py-[20px]">
                                <h3 className=' font-hakto font-medium text-[18px] text-[#151875]'>Vel elit euismod</h3>
                                <div className=" flex gap-x-[10px] justify-center py-[10px] items-center">
                                    <div className=" w-[10px] h-[10px] rounded-[50%] bg-[#DE9034]"></div>
                                    <div className=" w-[10px] h-[10px] rounded-[50%] bg-[#EC42A2]"></div>
                                    <div className=" w-[10px] h-[10px] rounded-[50%] bg-[#8568FF]"></div>
                                </div>
                                <h4><span className=' font-hakto font-normal text-[14px] text-[#151875]'>$26.00 </span> <span className=' font-hakto font-normal text-[14px] text-[#FB2E86]'>$42.00</span></h4>
                            </div>
                        </div>
                    </div>
                    <div className="w-[24%]">
                        <div className=" group overflow-hidden">
                            <div className="   bg-[#F6F7FB] relative group-hover:bg-[#EBF4F3] duration-300">
                                <img src={GridImg} className='translate-x-[39%] py-[40px]' alt="" />
                                <div className=" absolute bottom-1 left-[-50px] group-hover:left-0 duration-300">              
                                    <FaCartPlus className=' text-[40px] py-[10px]'/>
                                    <TbZoomIn className=' text-[40px] py-[10px]'/>
                                    <FaRegHeart className=' text-[40px] py-[10px]'/>
                            </div>
                            </div>
                           
                            <div className=" text-center py-[20px]">
                                <h3 className=' font-hakto font-medium text-[18px] text-[#151875]'>Vel elit euismod</h3>
                                <div className=" flex gap-x-[10px] justify-center py-[10px] items-center">
                                    <div className=" w-[10px] h-[10px] rounded-[50%] bg-[#DE9034]"></div>
                                    <div className=" w-[10px] h-[10px] rounded-[50%] bg-[#EC42A2]"></div>
                                    <div className=" w-[10px] h-[10px] rounded-[50%] bg-[#8568FF]"></div>
                                </div>
                                <h4><span className=' font-hakto font-normal text-[14px] text-[#151875]'>$26.00 </span> <span className=' font-hakto font-normal text-[14px] text-[#FB2E86]'>$42.00</span></h4>
                            </div>
                        </div>
                    </div>
                    <div className="w-[24%]">
                        <div className=" group overflow-hidden">
                            <div className="   bg-[#F6F7FB] relative group-hover:bg-[#EBF4F3] duration-300">
                                <img src={GridImg} className='translate-x-[39%] py-[40px]' alt="" />
                                <div className=" absolute bottom-1 left-[-50px] group-hover:left-0 duration-300">              
                                    <FaCartPlus className=' text-[40px] py-[10px]'/>
                                    <TbZoomIn className=' text-[40px] py-[10px]'/>
                                    <FaRegHeart className=' text-[40px] py-[10px]'/>
                            </div>
                            </div>
                           
                            <div className=" text-center py-[20px]">
                                <h3 className=' font-hakto font-medium text-[18px] text-[#151875]'>Vel elit euismod</h3>
                                <div className=" flex gap-x-[10px] justify-center py-[10px] items-center">
                                    <div className=" w-[10px] h-[10px] rounded-[50%] bg-[#DE9034]"></div>
                                    <div className=" w-[10px] h-[10px] rounded-[50%] bg-[#EC42A2]"></div>
                                    <div className=" w-[10px] h-[10px] rounded-[50%] bg-[#8568FF]"></div>
                                </div>
                                <h4><span className=' font-hakto font-normal text-[14px] text-[#151875]'>$26.00 </span> <span className=' font-hakto font-normal text-[14px] text-[#FB2E86]'>$42.00</span></h4>
                            </div>
                        </div>
                    </div>
                    <div className="w-[24%]">
                        <div className=" group overflow-hidden">
                            <div className="   bg-[#F6F7FB] relative group-hover:bg-[#EBF4F3] duration-300">
                                <img src={GridImg} className='translate-x-[39%] py-[40px]' alt="" />
                                <div className=" absolute bottom-1 left-[-50px] group-hover:left-0 duration-300">              
                                    <FaCartPlus className=' text-[40px] py-[10px]'/>
                                    <TbZoomIn className=' text-[40px] py-[10px]'/>
                                    <FaRegHeart className=' text-[40px] py-[10px]'/>
                            </div>
                            </div>
                           
                            <div className=" text-center py-[20px]">
                                <h3 className=' font-hakto font-medium text-[18px] text-[#151875]'>Vel elit euismod</h3>
                                <div className=" flex gap-x-[10px] justify-center py-[10px] items-center">
                                    <div className=" w-[10px] h-[10px] rounded-[50%] bg-[#DE9034]"></div>
                                    <div className=" w-[10px] h-[10px] rounded-[50%] bg-[#EC42A2]"></div>
                                    <div className=" w-[10px] h-[10px] rounded-[50%] bg-[#8568FF]"></div>
                                </div>
                                <h4><span className=' font-hakto font-normal text-[14px] text-[#151875]'>$26.00 </span> <span className=' font-hakto font-normal text-[14px] text-[#FB2E86]'>$42.00</span></h4>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className=" pl-[200px] py-4">
                    <img src={newss} alt="" />
                </div>
            </Container>
        </div>
    )
}

export default EcommerceAcceories
