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
         <div className=" lg:flex lg:gap-x-1">
            <div className="lg:w-[24%] my-[20px]">
                <div className=" border-[1px] bg-white shadow-xl px-3 py-[50px] text-center">
                    <div className=" w-[100px] mx-auto py-[30px] ">
                    <img src={Whats} className='  w-full' alt="" />
                    </div>
                    <div className="">
                        <h2 className=' font-hakto font-semibold text-[22px] text-[#151875]'>24/7 Support</h2>
                        <p  className=' font-hakto font-light text-[16px] text-[#1A0B5B]'
                        >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                    </div>
                </div>
            </div>
            <div className="lg:w-[24%] my-[20px]">
                <div className=" border-[1px] bg-white shadow-xl px-3 py-[50px] text-center">
                    <div className=" w-[100px] mx-auto py-[30px] ">
                    <img src={Whats} className='  w-full' alt="" />
                    </div>
                    <div className="">
                        <h2 className=' font-hakto font-semibold text-[22px] text-[#151875]'>24/7 Support</h2>
                        <p  className=' font-hakto font-light text-[16px] text-[#1A0B5B]'
                        >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                    </div>
                </div>
            </div>
            <div className="lg:w-[24%] my-[20px]">
                <div className=" border-[1px] bg-white shadow-xl px-3 py-[50px] text-center">
                    <div className=" w-[100px] mx-auto py-[30px] ">
                    <img src={Whats} className='  w-full' alt="" />
                    </div>
                    <div className="">
                        <h2 className=' font-hakto font-semibold text-[22px] text-[#151875]'>24/7 Support</h2>
                        <p  className=' font-hakto font-light text-[16px] text-[#1A0B5B]'
                        >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                    </div>
                </div>
            </div>
            <div className="lg:w-[24%] my-[20px]">
                <div className=" border-[1px] bg-white shadow-xl px-3 py-[50px] text-center">
                    <div className=" w-[100px] mx-auto py-[30px] ">
                    <img src={Whats} className='  w-full' alt="" />
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
