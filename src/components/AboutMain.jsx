import React from 'react'
import Container from './Container'
import AboutImg from '../assets/aboutmain.png'
import Whats from '../assets/Whats.png'
import sayImg from '../assets/Say.png'
import { Link } from 'react-router-dom'

const AboutMain = () => {
  return (
    <>
      <div className=' bg-[#F6F5FF] py-[90px]'>
        <Container>
          <div className="">
            <h2 className=' font-hakto font-semibold text-[#101750] text-[35px]'>About Us</h2>
            <h2><Link to='/'><span className=' font-hakto font-medium text-[16px] text-[#101750]  hover:text-[#FB2E86] duration-300'>Home.Pages</span>
            </Link> <Link to='/About'><span className=' font-hakto font-medium text-[16px] text-[#101750]  hover:text-[#FB2E86] duration-300'>About Us</span></Link></h2>

          </div>
        </Container>
      </div>


      <div className=' py-[50px]'>
        <Container>
          <div className=" lg:flex justify-between lg:gap-x-[100px] items-center">
            <div className="lg:w-[50%]">
              <div className="bg-[#2B3CAB] lg:w-[555px] w-[300px] lg:h-[390px] h-[200px]  rounded-[7px] relative group">
                <div className=" lg:w-[555px] w-[300px] lg:h-[390px]  h-[200px]  absolute group-hover:top-[-20px] group-hover:right-[-20px] duration-300">
                <img src={AboutImg} className=' w-full' alt="" />
                </div>
              </div>
            </div>
            <div className="lg:w-[50%]">
              <div className=" py-[30px]">
                <h3 className=' font-hakto font-medium text-[#151875] text-[35px]'>Know About Our Ecomerce
                  Business, History</h3>
                <p className=' font-hakto font-light text-[16px] text-[#8A8FB9]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique
                  amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.</p>

                <button className=' border-[1px] border-[#FB2E86] px-[15px] py-[10px] bg-[#FB2E86] rounded-[5px]'>
                  <a className=' font-hakto font-medium text-[18px] '>Contact us</a>
                </button>
              </div>
            </div>
          </div>
        </Container>
      </div>


      <div className="">
        <Container>
          <div className=" py-[10px] text-center">
            <h4 className=' font-hakto font-medium text-[42px] text-[#000000]'>Our Features</h4>
          </div>
          <div className=" lg:flex  justify-between py-[30px]">
            <div className="lg:w-[24%] w-full  hover:border-b-[3px] hover:border-[#FF9100] duration-300 lg:my-0 my-[20px]">
              <div className=" border-[1px] bg-white shadow-xl px-3 py-[50px] text-center">
                <div className=" w-[100px] mx-auto py-[30px]">
                  <img src={Whats} className=' w-full' alt="" />
                </div>
                <div className="">
                  <h2 className=' font-hakto font-semibold text-[22px] text-[#151875]'>24/7 Support</h2>
                  <p className=' font-hakto font-light text-[16px] text-[#1A0B5B]'
                  >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                </div>
              </div>
            </div>
            <div className="lg:w-[24%] w-full  hover:border-b-[3px] hover:border-[#FF9100] duration-300 lg:my-0 my-[20px]">
              <div className=" border-[1px] bg-white shadow-xl px-3 py-[50px] text-center">
                <div className=" w-[100px] mx-auto py-[30px]">
                  <img src={Whats} className=' w-full' alt="" />
                </div>
                <div className="">
                  <h2 className=' font-hakto font-semibold text-[22px] text-[#151875]'>24/7 Support</h2>
                  <p className=' font-hakto font-light text-[16px] text-[#1A0B5B]'
                  >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                </div>
              </div>
            </div>
            <div className="lg:w-[24%] w-full  hover:border-b-[3px] hover:border-[#FF9100] duration-300 lg:my-0 my-[20px]">
              <div className=" border-[1px] bg-white shadow-xl px-3 py-[50px] text-center">
                <div className=" w-[100px] mx-auto py-[30px]">
                  <img src={Whats} className=' w-full' alt="" />
                </div>
                <div className="">
                  <h2 className=' font-hakto font-semibold text-[22px] text-[#151875]'>24/7 Support</h2>
                  <p className=' font-hakto font-light text-[16px] text-[#1A0B5B]'
                  >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                </div>
              </div>
            </div>
            <div className="lg:w-[24%] w-full  hover:border-b-[3px] hover:border-[#FF9100] duration-300 lg:my-0 my-[20px]">
              <div className=" border-[1px] bg-white shadow-xl px-3 py-[50px] text-center">
                <div className=" w-[100px] mx-auto py-[30px]">
                  <img src={Whats} className=' w-full' alt="" />
                </div>
                <div className="">
                  <h2 className=' font-hakto font-semibold text-[22px] text-[#151875]'>24/7 Support</h2>
                  <p className=' font-hakto font-light text-[16px] text-[#1A0B5B]'
                  >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                </div>
              </div>
            </div>


           
          </div>
        </Container>
      </div>
{/* 
      <div className=" bg-[#FBFBFF] py-[50px]">
        <Container>
          <div className="">
            <h3 className=' font-hakto font-medium text-[35px] text-[#000000] text-center'>Our Client Say!</h3>
            <div className=" flex justify-center gap-x-[20px] ">
              <div className=" mt-[10px]">
                <img src={sayImg} alt="" />
              </div>
              <div className="">
                <img src={sayImg} alt="" />
              </div>
              <div className=" mt-[10px]">
                <img src={sayImg} alt="" />
              </div>
            </div>
            <div className=" text-center w-[50%] mx-auto">
              <h4 className=' font-hakto font-medium text-[#151875] text-[22px]'>Selina Gomez</h4>
              <p className=' font-hakto font-light text-[#8A8FB9] text-[10px] '>Ceo At Webecy Digital</p>

              <h3 className=' font-hakto font-normal text-[16px] text-[#8A8FB9]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel
                dui sollicitudin aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam lacus volutpat praesent.</h3>
            </div>
          </div>
        </Container>
      </div> */}

    </>
  )
}

export default AboutMain