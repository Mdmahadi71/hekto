import React from 'react'
import Container from './Container'
import { FaArrowRightLong } from "react-icons/fa6";

const DescriptionPD = () => {
  return (
    <div className=' bg-[#F9F8FE] py-[40px]'>
        <Container>
            <div className="">
                <ul className='flex gap-x-5 justify-center'>
                     <li>
                        <a className=' font-hakto font-semibold text-[18px] text-[#151875]  hover:border-b-[2px] hover:border-[#151875] duration-200 gap-x-[50px]'>Description</a>
                     </li>
                     <li>
                        <a  className=' font-hakto font-semibold text-[18px] text-[#151875] hover:border-b-[2px] hover:border-[#151875] duration-200 gap-x-[50px]'>Additional Info</a>
                     </li>
                     <li>
                        <a className=' font-hakto font-semibold text-[18px] text-[#151875] hover:border-b-[2px] hover:border-[#151875] duration-200 gap-x-[50px]'>Reviews</a>
                     </li>
                     <li>
                        <a  className=' font-hakto font-semibold text-[18px] text-[#151875]  hover:border-b-[2px] hover:border-[#151875] duration-200 gap-x-[50px]'>Video</a>
                     </li>
                </ul>
            </div>
            <div className="">
                <h3 className=' font-hakto font-semibold text-[22px] text-[#151875] py-[10px]'>Varius tempor.</h3>
                <p className=' font-hakto font-normal text-[16px] text-[#A9ACC6]'>Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel 
                    sed et eleifend habitasse amet. Montes, mauris varius ac est bibendum. Scelerisque a, risus ac ante. 
                    Velit consectetur neque, elit, aliquet. Non varius proin sed urna, egestas consequat laoreet diam tincidunt.
                    Magna eget faucibus cras justo, tortor sed donec tempus. Imperdiet consequat,
                    quis diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
            </div>
            <div className=" py-3">
               <h3 className=' font-hakto font-semibold text-[22px] text-[#151875]'>More details</h3>
                <div className=" flex gap-x-[10px] items-center py-2">
                    <FaArrowRightLong/>
                    <p className=' font-hakto font-normal text-[16px] text-[#A9ACC6]'>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>

                </div>
                <div className=" flex gap-x-[10px] items-center py-2">
                    <FaArrowRightLong/>
                    <p className=' font-hakto font-normal text-[16px] text-[#A9ACC6]'>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>

                </div>
                <div className=" flex gap-x-[10px] items-center py-2">
                    <FaArrowRightLong/>
                    <p className=' font-hakto font-normal text-[16px] text-[#A9ACC6]'>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>

                </div>
                <div className=" flex gap-x-[10px] items-center py-2">
                    <FaArrowRightLong/>
                    <p className=' font-hakto font-normal text-[16px] text-[#A9ACC6]'>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>

                </div>
            </div>
        </Container>
    </div>
  )
}

export default DescriptionPD