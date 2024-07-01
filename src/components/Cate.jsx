import React from 'react'
import Container from './Container'
import catess from '../assets/chayar.png'

const Cate = () => {
  return (
    <div className=' py-[40px]'>
      <Container>
         <div className="">
            <h4 className=' font-hakto font-semibold text-[42px] text-[#151875] text-center py-[20px]'>Top Categories</h4>
         </div>
         <div className=" flex justify-between">
            <div className="w-[24%]">
                <div className=" border-[1px] border-[] px-[5px] py-[15px] relative group overflow-hidden ">
                    <div className=" bg-[#F6F7FB] w-[300px] h-[300px] rounded-[45%] relative">
                        <div className=" absolute top-[25%] right-[25%]">
                          <img src={catess} className=' top-0 right-0' alt="" />
                        </div>
                        <button className=" border-[1px] border-[#08D15F] bg-[#08D15F] px-[15px] py-[10px] inline-block
                         absolute bottom-[-200px] left-[85px] group-hover:bottom-[15px] duration-300 ">
                            <a className=' font-hakto font-medium text-[16px] text-[#FFFFFF]'>View Shop</a>
                        </button>
                        
                    </div> 
                    <div className=" text-center py-[20px]">
                        <h4 className=' font-hakto font-semibold text-[#151875] text-[20px]'>Mini LCW Chair</h4>
                        <p className=' font-hakto font-semibold text-[#151875] text-[16px]'>$56.00</p>
                    </div>
                </div>
            </div>
            <div className="w-[24%]">
                <div className=" border-[1px] border-[] px-[5px] py-[15px] relative group overflow-hidden ">
                    <div className=" bg-[#F6F7FB] w-[300px] h-[300px] rounded-[45%] relative">
                        <div className=" absolute top-[25%] right-[25%]">
                          <img src={catess} className=' top-0 right-0' alt="" />
                        </div>
                        <button className=" border-[1px] border-[#08D15F] bg-[#08D15F] px-[15px] py-[10px] inline-block
                         absolute bottom-[-200px] left-[85px] group-hover:bottom-[15px] duration-300 ">
                            <a className=' font-hakto font-medium text-[16px] text-[#FFFFFF]'>View Shop</a>
                        </button>
                        
                    </div> 
                    <div className=" text-center py-[20px]">
                        <h4 className=' font-hakto font-semibold text-[#151875] text-[20px]'>Mini LCW Chair</h4>
                        <p className=' font-hakto font-semibold text-[#151875] text-[16px]'>$56.00</p>
                    </div>
                </div>
            </div>
            <div className="w-[24%]">
                <div className=" border-[1px] border-[] px-[5px] py-[15px] relative group overflow-hidden ">
                    <div className=" bg-[#F6F7FB] w-[300px] h-[300px] rounded-[45%] relative">
                        <div className=" absolute top-[25%] right-[25%]">
                          <img src={catess} className=' top-0 right-0' alt="" />
                        </div>
                        <button className=" border-[1px] border-[#08D15F] bg-[#08D15F] px-[15px] py-[10px] inline-block
                         absolute bottom-[-200px] left-[85px] group-hover:bottom-[15px] duration-300 ">
                            <a className=' font-hakto font-medium text-[16px] text-[#FFFFFF]'>View Shop</a>
                        </button>
                        
                    </div> 
                    <div className=" text-center py-[20px]">
                        <h4 className=' font-hakto font-semibold text-[#151875] text-[20px]'>Mini LCW Chair</h4>
                        <p className=' font-hakto font-semibold text-[#151875] text-[16px]'>$56.00</p>
                    </div>
                </div>
            </div>
            <div className="w-[24%]">
                <div className=" border-[1px] border-[] px-[5px] py-[15px] relative group overflow-hidden ">
                    <div className=" bg-[#F6F7FB] w-[300px] h-[300px] rounded-[45%] relative">
                        <div className=" absolute top-[25%] right-[25%]">
                          <img src={catess} className=' top-0 right-0' alt="" />
                        </div>
                        <button className=" border-[1px] border-[#08D15F] bg-[#08D15F] px-[15px] py-[10px] inline-block
                         absolute bottom-[-200px] left-[85px] group-hover:bottom-[15px] duration-300 ">
                            <a className=' font-hakto font-medium text-[16px] text-[#FFFFFF]'>View Shop</a>
                        </button>
                        
                    </div> 
                    <div className=" text-center py-[20px]">
                        <h4 className=' font-hakto font-semibold text-[#151875] text-[20px]'>Mini LCW Chair</h4>
                        <p className=' font-hakto font-semibold text-[#151875] text-[16px]'>$56.00</p>
                    </div>
                </div>
            </div>
            
         </div>
      </Container>
    </div>
  )
}

export default Cate
