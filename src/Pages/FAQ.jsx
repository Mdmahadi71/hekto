import React from 'react'
import Container from '../components/Container'
import { Link } from 'react-router-dom'
import newss from '../assets/Newsd.png'

const FAQ = () => {
    return (
        <>
            <div>
                <div className=' bg-[#F6F5FF] py-[90px]'>
                    <Container>
                        <div className="">
                            <h2 className=' font-hakto font-semibold text-[#101750] text-[35px]'>FAQ</h2>
                            <h2><Link to='/'><span className=' font-hakto font-medium text-[16px] text-[#101750]  hover:text-[#FB2E86] duration-300'>Home.Pages</span>
                            </Link> <Link to='/Faq'><span className=' font-hakto font-medium text-[16px] text-[#101750]  hover:text-[#FB2E86] duration-300'>.FAQ</span></Link></h2>
                        </div>
                    </Container>
                </div>
            </div>

            <div className=" py-[50px]">
                <Container>
                    <div className=" flex justify-between">
                        <div className="w-[50%]">
                            <div className="">
                                <h3 className=' font-hakto font-medium text-[#1D3178] text-[35px] pt-[20px]'>Generel Information</h3>
                                <h6 className=' font-hakto font-normal text-[17px] text-[#1D3178]'>Eu dictumst cum at sed euismood condimentum?</h6>
                                <p className=' font-hakto font-light text-[16px] text-[#A1ABCC]'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.</p>

                                <h6 className=' font-hakto font-normal text-[17px] text-[#1D3178] pt-[20px]'>Eu dictumst cum at sed euismood condimentum?</h6>
                                <p className=' font-hakto font-light text-[16px] text-[#A1ABCC]'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.</p>


                                <h6 className=' font-hakto font-normal text-[17px] text-[#1D3178] pt-[20px]'>Eu dictumst cum at sed euismood condimentum?</h6>
                                <p className=' font-hakto font-light text-[16px] text-[#A1ABCC]'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.</p>

                                <h6 className=' font-hakto font-normal text-[17px] text-[#1D3178] pt-[20px]'>Eu dictumst cum at sed euismood condimentum?</h6>
                                <p className=' font-hakto font-light text-[16px] text-[#A1ABCC]'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.</p>

                            </div>
                        </div>
                        <div className="w-[50%]">
                            <div className=" border-[1px] px-[30px] py-[40px] bg-[#F8F8FD]">
                                <h3 className=' font-hakto font-medium text-[#1D3178] text-[24px]'>Ask a Question</h3>

                                <input type="text" className=' font-hakto font-light text-[#8990B1] text-[16px] w-[70%] h-[50px] border-[1px] outline-none my-[40px]' placeholder='Your Name*' />
                                <input type="text" className=' font-hakto font-light text-[#8990B1] text-[16px] w-[70%] h-[50px] border-[1px] outline-none my-[20px]' placeholder='Subject*' />
                                <input type="text" className=' font-hakto font-light text-[#8990B1] text-[16px] w-[70%] h-[150px] border-[1px] outline-none my-[20px]' placeholder='Type Your Message*' />

                                <div className="">
                                    <button className=' border-[1px] bg-[#FB2E86] py-[10px] px-[15px]'>
                                        <a className=' font-hakto font-medium text-[16px] text-[#FFFFFF]'>Send Mail</a>
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className=" pl-[200px] py-[40px]">
                        <img src={newss} alt="" />
                    </div>
                </Container>
            </div>
        </>
    )
}

export default FAQ