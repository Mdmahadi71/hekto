import React from 'react'
import Container from './Container'
import newss from '../assets/Newsd.png'

const Loginmain = () => {
  return (
    <div className=' py-[100px]'>
        <Container>
            <div className=" ml-[390px]">
                <div className="w-[60%]">
                   <div className=" border-[1px] px-[30px] py-[40px] shadow-md">
                   <div className="">
                        <h2 className=' font-hakto font-semibold text-[#000000] text-[35px] text-center'>Login</h2>
                        <p className=' font-hakto font-normal text-[#9096B2] text-[18px] text-center'>Please login using account detail bellow.</p>
                    </div>
                    <div className="">
                        <input type="Email" className=' font-hakto font-normal text-[#9096B2] text-[18px] border-[2px] border-[#9096B2] w-full h-[50px] outline-none pl-[10px] my-[30px]' placeholder='Email Address' />
                        <input type="Password" className=' font-hakto font-normal text-[#9096B2] text-[18px] border-[2px] border-[#9096B2] w-full h-[50px] outline-none pl-[10px] my-[10px]' placeholder='Password' />
                    </div>

                    <p className=' font-hakto font-medium text-[#9096B2] text-[17px]'>Forgot your password?</p>


                    <button className=' border-[1px] border-[#FB2E86] py-[15px] w-full bg-[#FB2E86] rounded-[5px] my-[30px]'>
                         <a className='font-hakto font-medium text-[17px] text-[#FFFFFF]'>Sign In</a>
                    </button>

                    <h5 className=' font-hakto font-medium text-[17px] text-[#9096B2] text-center'>Don’t have an Account?Create account</h5>
                   </div>
                </div>
            </div>
            <div className=" pl-[200px] py-[50px]">
                    <img src={newss} alt="" />
                </div>
        </Container>
    </div>
  )
}

export default Loginmain