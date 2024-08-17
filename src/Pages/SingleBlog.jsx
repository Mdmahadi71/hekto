import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../components/Container'
import Maurisone from '../assets/Mauris.png'
import Mauristow from '../assets/Mauris2.png'
import Mauristhree from '../assets/Mauris3.png'
import Maurisfure from '../assets/Mauris1.png'
import { FaPenNib, FaRegCalendarAlt, FaSearch, FaFacebookF, FaInstagramSquare, FaTwitter } from "react-icons/fa";
import Maurisfive from '../assets/Mauris5.png'
import newss from '../assets/Newsd.png'
import QuamImg from '../assets/Quam.png'
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { IoIosStar } from "react-icons/io";
import playerImg from '../assets/player.png'
import { IoIosContact } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { MdCheckBoxOutlineBlank } from "react-icons/md";







const SingleBlog = () => {
    return (
        <>
            <div className=' bg-[#F6F5FF] py-[90px]'>
                <Container>
                    <div className="">
                        <h2 className=' font-hakto font-semibold text-[#101750] text-[35px]'>Single Blog</h2>
                        <h2><Link to='/'><span className=' font-hakto font-medium text-[16px] text-[#101750]  hover:text-[#FB2E86] duration-300'>Home.Pages</span>
                        </Link> <Link to='/SingleBlog'><span className=' font-hakto font-medium text-[16px] text-[#101750]  hover:text-[#FB2E86] duration-300'>Single Blog</span></Link></h2>

                    </div>
                </Container>
            </div>
            <div className=" py-[50px]">
                <Container>
                    <div className=" lg:flex justify-between">
                        <div className="lg:w-[68%]">
                            <div className="">
                                <div className="">
                                    <img src={Mauristow} alt="" />
                                    <div className=" flex gap-x-[40px] py-[16px]">
                                        <div className=" flex gap-x-[20px] items-center">
                                            <FaPenNib className=' text-[#FB2E86]' />
                                            <div className=" border-[1px] py-[5px] px-[30px] bg-[#FFE7F9] inline-block">
                                                <h5 className=' font-hakto font-medium text-[#151875] text-[16px]'>Surf Auxion</h5>
                                            </div>
                                        </div>
                                        <div className=" flex gap-x-[20px] items-center">
                                            <FaRegCalendarAlt className=' text-[#FB2E86]' />
                                            <div className=" border-[1px] py-[5px] px-[30px] bg-[#FFECE2] inline-block">
                                                <h5 className=' font-hakto font-medium text-[#151875] text-[16px]'>Aug 09 2020</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                    <h3 className=' font-hakto font-semibold text-[#151875] text-[35px] py-[10px]'>Mauris at orci non vulputate diam tincidunt nec.</h3>
                                    <p className=' font-hakto font-normal text-[#8A8FB9] text-[16px] py-[10px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum
                                        eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.</p>
                                    <p className=' font-hakto font-normal text-[#8A8FB9] text-[16px] py-[10px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, </p>

                                </div>
                            </div>
                            <div className=" flex justify-between">
                                <div className=" w-[48%]">
                                    <img src={Maurisfure} className=' w-full' alt="" />
                                </div>
                                <div className="w-[48%]">
                                    <img src={Mauristhree} className=' w-full' alt="" />
                                </div>
                            </div>
                            <p className=' font-hakto font-normal text-[#8A8FB9] text-[16px] py-[10px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi
                                etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes,
                                lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, </p>
                            <div className=" flex justify-between py-[20px]">
                                <div className="w-[24%]">
                                    <div className="">
                                        <img src={QuamImg} className=' w-full' alt="" />
                                        <div className="">
                                            <h5 className=' font-hakto font-medium text-[19px] text-[#000000]'>Quam sed</h5>
                                            <div className=" ">
                                                <div className=" flex gap-x-2">
                                                  <h4 className=' font-hakto font-medium text-[13px] text-[#232A69]'>$32.00</h4>
                                                  <h4 className=' font-hakto font-medium text-[13px] text-[#FF38B0]'>$32.00</h4>
                                                </div>
                                                <div className=" flex gap-x-[5px]">
                                                    <IoIosStar className=' text-[#FFD659]' />
                                                    <IoIosStar className=' text-[#FFD659]' />
                                                    <IoIosStar className=' text-[#FFD659]' />
                                                    <IoIosStar className=' text-[#FFD659]' />
                                                    <IoIosStar className=' text-[#FFD659]' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[24%]">
                                    <div className="">
                                        <img src={QuamImg} className=' w-full' alt="" />
                                        <div className="">
                                            <h5 className=' font-hakto font-medium text-[19px] text-[#000000]'>Quam sed</h5>
                                            <div className=" ">
                                                <div className=" flex gap-x-2">
                                                  <h4 className=' font-hakto font-medium text-[13px] text-[#232A69]'>$32.00</h4>
                                                  <h4 className=' font-hakto font-medium text-[13px] text-[#FF38B0]'>$32.00</h4>
                                                </div>
                                                <div className=" flex gap-x-[5px]">
                                                    <IoIosStar className=' text-[#FFD659]' />
                                                    <IoIosStar className=' text-[#FFD659]' />
                                                    <IoIosStar className=' text-[#FFD659]' />
                                                    <IoIosStar className=' text-[#FFD659]' />
                                                    <IoIosStar className=' text-[#FFD659]' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[24%]">
                                    <div className="">
                                        <img src={QuamImg} className=' w-full' alt="" />
                                        <div className="">
                                            <h5 className=' font-hakto font-medium text-[19px] text-[#000000]'>Quam sed</h5>
                                            <div className=" ">
                                                <div className=" flex gap-x-2">
                                                  <h4 className=' font-hakto font-medium text-[13px] text-[#232A69]'>$32.00</h4>
                                                  <h4 className=' font-hakto font-medium text-[13px] text-[#FF38B0]'>$32.00</h4>
                                                </div>
                                                <div className=" flex gap-x-[5px]">
                                                    <IoIosStar className=' text-[#FFD659]' />
                                                    <IoIosStar className=' text-[#FFD659]' />
                                                    <IoIosStar className=' text-[#FFD659]' />
                                                    <IoIosStar className=' text-[#FFD659]' />
                                                    <IoIosStar className=' text-[#FFD659]' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[24%]">
                                    <div className="">
                                        <img src={QuamImg} className=' w-full' alt="" />
                                        <div className="">
                                            <h5 className=' font-hakto font-medium text-[19px] text-[#000000]'>Quam sed</h5>
                                            <div className=" ">
                                                <div className=" flex gap-x-2">
                                                  <h4 className=' font-hakto font-medium text-[13px] text-[#232A69]'>$32.00</h4>
                                                  <h4 className=' font-hakto font-medium text-[13px] text-[#FF38B0]'>$32.00</h4>
                                                </div>
                                                <div className=" flex gap-x-[5px]">
                                                    <IoIosStar className=' text-[#FFD659]' />
                                                    <IoIosStar className=' text-[#FFD659]' />
                                                    <IoIosStar className=' text-[#FFD659]' />
                                                    <IoIosStar className=' text-[#FFD659]' />
                                                    <IoIosStar className=' text-[#FFD659]' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                           
                            </div>


                            <p className=' font-hakto font-normal text-[#8A8FB9] text-[16px] py-[10px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi
                                etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes,
                                lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, </p>

                            <p className=' font-hakto font-normal text-[#8A8FB9] text-[16px] py-[10px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi
                                etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes,
                                lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, </p>


                            <div className=" py-[50px]">
                                <div className=" flex gap-x-[20px] justify-center ">
                                    <FaFacebookF className=' text-[#151875]' />
                                    <FaInstagramSquare className='text-[#FB2E86]' />
                                    <FaTwitter className='text-[#1BE982]' />
                                </div>
                                <div className=" flex justify-between items-center bg-[#F7F8FB] py-[20px] mt-5">
                                    <div className=" flex gap-x-[10px] items-center mr-2">
                                        <FaArrowLeftLong />
                                        <h3>Previous Post</h3>
                                    </div>
                                    <div className=" flex gap-x-[10px] items-center ml-2">
                                        <h4>Next Post</h4>
                                        <FaArrowRightLong />
                                    </div>
                                </div>
                            </div>

                            <div className=" lg:w-[80%]">
                                <div className=" border-[2px] px-3 py-3 shadow">
                                    <div className=" flex gap-x-[20px] items-center">
                                        <img src={playerImg} alt="" />
                                        <div className="">
                                            <h4><span className=' font-hakto font-medium text-[19px] text-[#363385]'>Sapien ac</span>
                                                <span className=' font-hakto font-light text-[12px] text-[#A3A2B6]'>Jan 09 2020</span></h4>
                                            <p className=' font-hakto font-light text-[13px] text-[#A3A2B6]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At in vitae rutrum vulputate consectetur.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className=" border-[2px] px-3 py-3 shadow my-[20px]">
                                    <div className=" flex gap-x-[20px] items-center">
                                        <img src={playerImg} alt="" />
                                        <div className="">
                                            <h4><span className=' font-hakto font-medium text-[19px] text-[#363385]'>Sapien ac</span>
                                                <span className=' font-hakto font-light text-[12px] text-[#A3A2B6]'>Jan 09 2020</span></h4>
                                            <p className=' font-hakto font-light text-[13px] text-[#A3A2B6]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At in vitae rutrum vulputate consectetur.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:w-[90%]">
                                <div className=" flex justify-between py-[30px]">
                                    <div className="w-[48%] relative">
                                        <input type="text" placeholder='Your Name*' className=' font-hakto font-light text-[#8A8FB9] text-[13px] pl-[30px] w-full h-[50px] outline-none border-[1px]' />
                                        <div className=" absolute top-[16px] left-[10px]">
                                            <IoIosContact />
                                        </div>
                                    </div>
                                    <div className="w-[48%] relative">
                                        <input type="text" placeholder='Write Your Email*' className=' font-hakto font-light text-[#8A8FB9] text-[13px] pl-[30px] w-full h-[50px] outline-none border-[1px]' />
                                        <div className=" absolute top-[16px] left-[10px]">
                                            <IoMdMail />
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                    <input type="text" className=' font-hakto font-light text-[#8A8FB9] text-[13px] pl-[30px] w-full h-[200px] outline-none border-[1px] text-top' placeholder='Write your comment*' />
                                </div>
                                <div className=" flex gap-x-2 py-[20px]">
                                    <MdCheckBoxOutlineBlank />
                                    <p className=' font-hakto font-light text-[13px] text-[#8A91AB]'>Save my name, email, and website in this browser for the next time I comment.</p>
                                </div>

                                <button className=' border-[1px] bg-[#FB2E86] w-full py-[15px]  rounded-[5px] my-[20px]'>
                                    <a className=' font-hakto font-medium text-[17px] text-[#FFFFFF]'>Continue Shipping</a>
                                </button>
                            </div>
                        </div>
                        <div className="lg:w-[29%]">
                            <div className="">
                                <h3 className=' font-hakto font-semibold text-[22px] text-[#151875]'>Search</h3>
                                <div className="relative">
                                    <input type="text" placeholder=' Search For Posts'
                                        className=' font-hakto font-light text-[14px] text-[#151875] border-[1px] border-[#BDBDD8] w-full h-[50px] outline-none ' />
                                    <div className=" absolute top-[18px] right-[20px]">
                                        <FaSearch />
                                    </div>
                                </div>
                            </div>


                            <div className="">
                                <h3 className=' font-hakto font-semibold text-[22px] text-[#151875]'>Categories</h3>
                                <div className=" flex gap-x-[40px]">
                                    <h4 className=' font-hakto font-medium text-[14px] text-[#000000]  px-[15px] py-[10px]'>Hobbies (14)</h4>
                                    <h4 className=' font-hakto font-medium text-[14px] text-[#000000]  px-[15px] py-[10px]'>Hobbies (14)</h4>
                                </div>
                                <div className=" flex gap-x-[40px]">
                                    <h4 className=' font-hakto font-medium text-[14px] text-[#000000]  px-[15px] py-[10px]'>Hobbies (14)</h4>
                                    <h4 className=' font-hakto font-medium text-[14px] text-[#000000]  px-[15px] py-[10px]'>Hobbies (14)</h4>
                                </div>
                                <div className=" flex gap-x-[40px]">
                                    <h4 className=' font-hakto font-medium text-[14px] text-[#000000]  px-[15px] py-[10px]'>Hobbies (14)</h4>
                                    <h4 className=' font-hakto font-medium text-[14px] text-[#000000]  px-[15px] py-[10px]'>Hobbies (14)</h4>
                                </div>
                            </div>


                            <div className="">
                                <h3 className=' font-hakto font-semibold text-[22px] text-[#151875]'>Recent Post</h3>
                                <div className=" flex gap-x-[20px] py-[15px]" >
                                    <div className="">
                                        <img src={Maurisone} className=' w-[70px] h-[51px]' alt="" />
                                    </div>
                                    <div className="">
                                        <h3 className=' font-hakto font-medium text-[16px] text-[#3F509E]'>It is a long established fact</h3>
                                        <p className=' font-hakto font-normal text-[13px] text-[#8A8FB9]'>Aug 09 2020</p>
                                    </div>
                                </div>
                                <div className=" flex gap-x-[20px] py-[15px]">
                                    <div className="">
                                        <img src={Maurisone} className=' w-[70px] h-[51px]' alt="" />
                                    </div>
                                    <div className="">
                                        <h3 className=' font-hakto font-medium text-[16px] text-[#3F509E]'>It is a long established fact</h3>
                                        <p className=' font-hakto font-normal text-[13px] text-[#8A8FB9]'>Aug 09 2020</p>
                                    </div>
                                </div>
                                <div className=" flex gap-x-[20px] py-[15px]">
                                    <div className="">
                                        <img src={Maurisone} className=' w-[70px] h-[51px]' alt="" />
                                    </div>
                                    <div className="">
                                        <h3 className=' font-hakto font-medium text-[16px] text-[#3F509E]'>It is a long established fact</h3>
                                        <p className=' font-hakto font-normal text-[13px] text-[#8A8FB9]'>Aug 09 2020</p>
                                    </div>
                                </div>
                                <div className=" flex gap-x-[20px] py-[15px]">
                                    <div className="">
                                        <img src={Maurisone} className=' w-[70px] h-[51px]' alt="" />
                                    </div>
                                    <div className="">
                                        <h3 className=' font-hakto font-medium text-[16px] text-[#3F509E]'>It is a long established fact</h3>
                                        <p className=' font-hakto font-normal text-[13px] text-[#8A8FB9]'>Aug 09 2020</p>
                                    </div>
                                </div>
                            </div>


                            <div className="">
                                <h3 className=' font-hakto font-semibold text-[22px] text-[#151875]'>Sale Product</h3>

                                <div className=" flex gap-x-[20px] py-[15px]">
                                    <div className="">
                                        <img src={Maurisone} className=' w-[70px] h-[51px]' alt="" />
                                    </div>
                                    <div className="">
                                        <h3 className=' font-hakto font-medium text-[16px] text-[#3F509E]'>It is a long established fact</h3>
                                        <p className=' font-hakto font-normal text-[13px] text-[#8A8FB9]'>Aug 09 2020</p>
                                    </div>
                                </div>
                                <div className=" flex gap-x-[20px] py-[15px]">
                                    <div className="">
                                        <img src={Maurisone} className=' w-[70px] h-[51px]' alt="" />
                                    </div>
                                    <div className="">
                                        <h3 className=' font-hakto font-medium text-[16px] text-[#3F509E]'>It is a long established fact</h3>
                                        <p className=' font-hakto font-normal text-[13px] text-[#8A8FB9]'>Aug 09 2020</p>
                                    </div>
                                </div>
                                <div className=" flex gap-x-[20px] py-[15px]">
                                    <div className="">
                                        <img src={Maurisone} className=' w-[70px] h-[51px]' alt="" />
                                    </div>
                                    <div className="">
                                        <h3 className=' font-hakto font-medium text-[16px] text-[#3F509E]'>It is a long established fact</h3>
                                        <p className=' font-hakto font-normal text-[13px] text-[#8A8FB9]'>Aug 09 2020</p>
                                    </div>
                                </div>
                            </div>

                            <div className=" flex gap-x-[30px]">
                                <div className="">
                                    <img src={Maurisfive} className=' w-[126px] h-[80px]' alt="" />
                                    <div className=" text-center py-2">
                                        <h2 className=' font-hakto font-medium text-[#151875] text-[16px]'>Sed placerat.</h2>
                                        <p className=' font-hakto font-normal text-[13px] text-[#8A8FB9]'>$12.00 - $15.00</p>
                                    </div>
                                </div>
                                <div className="">
                                    <img src={Maurisfive} className=' w-[126px] h-[80px]' alt="" />
                                    <div className=" text-center py-2">
                                        <h2 className=' font-hakto font-medium text-[#151875] text-[16px]'>Sed placerat.</h2>
                                        <p className=' font-hakto font-normal text-[13px] text-[#8A8FB9]'>$12.00 - $15.00</p>
                                    </div>
                                </div>
                            </div>

                            <div className=" flex gap-x-[30px]">
                                <div className="">
                                    <img src={Maurisfive} className=' w-[126px] h-[80px]' alt="" />
                                    <div className=" text-center py-2">
                                        <h2 className=' font-hakto font-medium text-[#151875] text-[16px]'>Sed placerat.</h2>
                                        <p className=' font-hakto font-normal text-[13px] text-[#8A8FB9]'>$12.00 - $15.00</p>
                                    </div>
                                </div>
                                <div className="">
                                    <img src={Maurisfive} className=' w-[126px] h-[80px]' alt="" />
                                    <div className=" text-center py-2">
                                        <h2 className=' font-hakto font-medium text-[#151875] text-[16px]'>Sed placerat.</h2>
                                        <p className=' font-hakto font-normal text-[13px] text-[#8A8FB9]'>$12.00 - $15.00</p>
                                    </div>
                                </div>
                            </div>

                            <div className="">
                                <h3 className=' font-hakto font-semibold text-[22px] text-[#151875]'>Follow</h3>
                                <div className=" flex gap-x-[30px] py-[20px]">
                                    <FaFacebookF className=' text-[#151875]' />
                                    <FaInstagramSquare className='text-[#FB2E86]' />
                                    <FaTwitter className='text-[#1BE982]' />
                                </div>
                            </div>

                            <div className="">
                                <h3 className=' font-hakto font-semibold text-[22px] text-[#151875]'>Tags</h3>
                                <div className=" flex gap-x-[40px] py-[20px]">
                                    <a className=' font-hakto font-medium text-[#151875] text-[18px] border-b-[1px] border-[#151875] py-1 hover:text-[#FB2E86] hover:border-[#FB2E86]'>General</a>
                                    <a className=' font-hakto font-medium text-[#151875] text-[18px] border-b-[1px] border-[#151875] py-1 hover:text-[#FB2E86] hover:border-[#FB2E86]'>Atsanil</a>
                                    <a className=' font-hakto font-medium text-[#151875] text-[18px] border-b-[1px] border-[#151875] py-1 hover:text-[#FB2E86] hover:border-[#FB2E86]'>Insas.</a>
                                </div>
                                <div className=" flex gap-x-[40px] py-[20px]">
                                    <a className=' font-hakto font-medium text-[#151875] text-[18px] border-b-[1px] border-[#151875] py-1 hover:text-[#FB2E86] hover:border-[#FB2E86]'>Bibsaas</a>
                                    <a className=' font-hakto font-medium text-[#151875] text-[18px] border-b-[1px] border-[#151875] py-1 hover:text-[#FB2E86] hover:border-[#FB2E86]'>Nulla.</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className=" mx-auto py-[50px]">
                        <img src={newss} alt="" />
                    </div>
                </Container>
            </div>
        </>
    )
}

export default SingleBlog