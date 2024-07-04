import React from 'react'
import Container from './Container'
import fotter from '../assets/Hekto.png'

const Fotter = () => {
  return (
    <div className=' py-[100px] bg-[#EEEFFB]'>
      <Container>
        <div className="">
            <div className="w-[35%]">
                <div className="">
                    <img src={fotter} alt="" />
                    <div className="">
                        <input type="text" placeholder='Enter Email Address' className=' border-[1px] border-white w-[250px] h-[50px]
                         bg-[#FFFFFF] font-hakto font-medium text-[16px] text-[#8A8FB9] pl-[10px] outline-none' />
                         <button className=' font-hakto font-semibold '>
                            <a >Sign Up</a>
                         </button>
                    </div>
                </div>
            </div>
            <div className="w-[65%]"></div>
        </div>
      </Container>
    </div>
  )
}

export default Fotter
