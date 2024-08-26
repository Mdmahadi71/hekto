import React from 'react'
import Container from '../components/Container'
import not404Img from '../assets/not404.png'
import newss from '../assets/Newsd.png'
import { Link } from 'react-router-dom'
import TextImg from '../components/reusable/TextImg'

const Not404 = () => {
    return (
        <div className=' py-[50px]'>
            <Container>
                <div className=" text-center">
                    <h3 className=' font-hakto font-semibold text-[36px] text-[#101750]'>404 Not Found</h3>
                </div>
                <div className=" lg:w-[600px] mx-auto">
                    <img src={not404Img} className=' w-full' alt="" />

                </div>
                <div className=" items-center justify-center text-center py-[40px]">
                    <button className=' border-[1px] bg-[#FB2E86] px-4 py-[10px] mt-[30px]'>
                        <a className=' font-hakto font-medium text-[#FFFFFF] text-[16px]'><Link to='/'>Back To Home</Link> </a>
                    </button>
                </div>

                <div className=" mx-auto py-[50px]">
                    <TextImg/>
                </div>
            </Container>
        </div>
    )
}

export default Not404
