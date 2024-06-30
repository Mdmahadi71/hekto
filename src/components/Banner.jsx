import React from 'react'
import Container from './Container'
import banner from '../assets/banner.png'

const Banner = () => {
  return (
    <div className=' bg-[#F2F0FF]'>
      <Container>
        <div className=" flex justify-between">
            <div className="w-[60%]">
                <div className=" py-[200px]">
                    <p className=' font-hakto font-normal text-[16px] text-[#FB2E86]'>Best Furniture For Your Castle....</p>
                    <h2 className=' font-hakto font-semibold text-[#000000] text-[53px]'>New Furniture Collection Trends in 2020</h2>
                    <span className=' font-hakto font-normal text-[16px] text-[#8A8FB9]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
                    in phasellus non in justo.</span>
                    <div className=" border-[1px] border-[#FB2E86] py-[10px] px-[20px] bg-[#FB2E86] inline-block
                     text-[#ffffff] hover:bg-[#7E33E0] hover:text-[#FB2E86] duration-500 mt-[20px]">
                        <a className=' font-hakto font-semibold text-[17px]'>Shop Now</a>
                    </div>
                </div>
            </div>
            <div className="w-[40%]">
                <div className="">
                    <img src={banner} alt="" />
                </div>
            </div>
        </div>
      </Container>
    </div>
  )
}

export default Banner
