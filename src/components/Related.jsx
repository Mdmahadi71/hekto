import React from 'react'
import Container from './Container'
import relatedImg from '../assets/related.png'
import { FaStar } from "react-icons/fa";
import newss from '../assets/Newsd.png'


const Related = () => {
  return (
    <div>
        <Container>
            <div className="">
                <h5 className=' font-hakto font-semibold text-[#101750] text-[36px]'>Related Products</h5>
            </div>
            <div className=" flex justify-between">
                <div className="w-[24%]">
                    <div className=" py-3">
                        <img src={relatedImg} className='w-full' alt="" />
                        <div className=" flex justify-between items-center py-[10px]">
                            <h3 className=' font-hakto font-medium text-[16px] text-[#151875]'>Mens Fashion Wear</h3>
                            <div className=" flex gap-x-[10px]">
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                            </div>
                        </div>
                        <h6 className=' font-hakto font-medium text-[13px] text-[#151875]'>$43.00</h6>
                    </div>
                </div>
                <div className="w-[24%]">
                    <div className=" py-3">
                        <img src={relatedImg} className='w-full' alt="" />
                        <div className=" flex justify-between items-center py-[10px]">
                            <h3 className=' font-hakto font-medium text-[16px] text-[#151875]'>Mens Fashion Wear</h3>
                            <div className=" flex gap-x-[10px]">
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                            </div>
                        </div>
                        <h6 className=' font-hakto font-medium text-[13px] text-[#151875]'>$43.00</h6>
                    </div>
                </div>
                <div className="w-[24%]">
                    <div className=" py-3">
                        <img src={relatedImg} className='w-full' alt="" />
                        <div className=" flex justify-between items-center py-[10px]">
                            <h3 className=' font-hakto font-medium text-[16px] text-[#151875]'>Mens Fashion Wear</h3>
                            <div className=" flex gap-x-[10px]">
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                            </div>
                        </div>
                        <h6 className=' font-hakto font-medium text-[13px] text-[#151875]'>$43.00</h6>
                    </div>
                </div>
                <div className="w-[24%]">
                    <div className=" py-3">
                        <img src={relatedImg} className='w-full' alt="" />
                        <div className=" flex justify-between items-center py-[10px]">
                            <h3 className=' font-hakto font-medium text-[16px] text-[#151875]'>Mens Fashion Wear</h3>
                            <div className=" flex gap-x-[10px]">
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                            </div>
                        </div>
                        <h6 className=' font-hakto font-medium text-[13px] text-[#151875]'>$43.00</h6>
                    </div>
                </div>
            </div>
            <div className=" pl-[200px] py-4">
              <img src={newss}  alt="" />
           </div>
        </Container>
    </div>
  )
}

export default Related