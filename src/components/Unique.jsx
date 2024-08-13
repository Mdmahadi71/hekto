import React from 'react'
import Container from './Container'
import Uniquet from '../assets/Unique.png'

const Unique = () => {
  return (
    <div>
      <Container>
        <div className=" lg:flex justify-between items-center">
            <div className="lg:w-[50%]">
                <div className="">
                    <img src={Uniquet} alt="" />
                </div>
            </div>
            <div className="lg:w-[50%]">
                <div className="">
                    <h2 className=' font-hakto font-semibold text-[35px] text-[#151875]'>Unique Features Of leatest &
                    Trending Poducts</h2>
                    <div className=" flex gap-x-1 items-center">
                         <h2  className=' h-[10px] w-[10px] bg-[#F52B70] rounded-[50%]'></h2>
                        <p className=' font-hakto font-normal text-[16px] text-[#ACABC3]'>All frames constructed with hardwood solids and laminates</p>
                    </div>
                    <div className=" flex gap-x-1 ">
                         <h2  className=' h-[10px] w-[10px] bg-[#2B2BF5] rounded-[50%] mt-1'></h2>
                        <p className=' font-hakto font-normal text-[16px] text-[#ACABC3]'>Reinforced with double wood dowels, glue, screw - nails corner 
                        blocks and machine nails</p>
                    </div>
                    <div className=" flex gap-x-1 items-center">
                         <h2  className=' h-[10px] w-[10px] bg-[#2BF5CC] rounded-[50%]'></h2>
                        <p className=' font-hakto font-normal text-[16px] text-[#ACABC3]'>Arms, backs and seats are structurally reinforced</p>
                    </div>
                    <div className="">

                    </div>
                </div>
            </div>
        </div>
      </Container>
    </div>
  )
}

export default Unique
