import React from 'react'
import Container from './Container'
import Whats from '../assets/Whats.png'

const Whatss = () => {
  return (
      <div className=' py-[50px]'>
        <Container>
            <div className="">
                <h2 className=' font-hakto font-semibold text-[#151875] text-[42px] text-center py-[20px]'>What Shopex Offer!</h2>
            </div>
         <div className=" flex gap-x-1">
            <div className="w-[24%]">
                <div className=" border-[1px]  px-3 py-[50px] text-center">
                    <div className=" translate-x-[40%] py-[30px]">
                    <img src={Whats} alt="" />
                    </div>
                    <div className="">
                        <h2 className=' font-hakto font-semibold text-[22px] text-[#151875]'>24/7 Support</h2>
                        <p  className=' font-hakto font-light text-[16px] text-[#1A0B5B]'
                        >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                    </div>
                </div>
            </div>
            <div className="w-[24%]">
                <div className=" border-[1px]  px-3 py-[50px] text-center">
                    <div className=" translate-x-[40%] py-[30px]">
                    <img src={Whats} alt="" />
                    </div>
                    <div className="">
                        <h2 className=' font-hakto font-semibold text-[22px] text-[#151875]'>24/7 Support</h2>
                        <p  className=' font-hakto font-light text-[16px] text-[#1A0B5B]'
                        >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                    </div>
                </div>
            </div>
            <div className="w-[24%]">
                <div className=" border-[1px]  px-3 py-[50px] text-center">
                    <div className=" translate-x-[40%] py-[30px]">
                    <img src={Whats} alt="" />
                    </div>
                    <div className="">
                        <h2 className=' font-hakto font-semibold text-[22px] text-[#151875]'>24/7 Support</h2>
                        <p  className=' font-hakto font-light text-[16px] text-[#1A0B5B]'
                        >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                    </div>
                </div>
            </div>
            <div className="w-[24%]">
                <div className=" border-[1px]  px-3 py-[50px] text-center">
                    <div className=" translate-x-[40%] py-[30px]">
                    <img src={Whats} alt="" />
                    </div>
                    <div className="">
                        <h2 className=' font-hakto font-semibold text-[22px] text-[#151875]'>24/7 Support</h2>
                        <p  className=' font-hakto font-light text-[16px] text-[#1A0B5B]'
                        >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                    </div>
                </div>
            </div>
         </div>
        </Container>
      </div>
  )
}

export default Whatss
