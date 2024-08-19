import React from 'react'
import Container from './Container'
import catess from '../assets/chayar.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Cate = () => {

  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    autoplay: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],


    appendDots: dots => (
      <div
        style={{

          borderRadius: "10px",
          padding: "-10px",
          marginTop: "100px"
        }}
      >
        <ul style={{ margin: "-10px" }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div
        style={{
          color: "transparent",
          height: "8px",
          redius: "10px",
          width: "8px",
          background: "#FEBAD7",
          borderRadius: "10px",
        }}
      >
        {i + 1}
      </div>
    )
  };


  return (
    <div className=' py-[40px]'>
      <Container>
        <div className="">
          <h4 className=' font-hakto font-semibold text-[42px] text-[#151875] text-center py-[20px]'>Top Categories</h4>
        </div>

        <Slider {...settings}>

          <div className="lg:w-[24%] w-full mx-auto">
            <div className="relative group overflow-hidden">
              <div className="bg-[#31208A] w-[200px] h-[200px] lg:w-[250px] lg:h-[250px] mx-auto rounded-[50%] group relative">
                <div className="bg-[#F6F7FB] w-[200px] h-[200px] lg:w-[250px] lg:h-[250px] mx-auto rounded-[50%] absolute group-hover:top-[-5px] group-hover:right-[-5px] duration-300">
                  <div className="absolute p-[30%]">
                    <img src={catess} className="w-full h-[100%]" alt="" />
                  </div>
                  <button className="border-[1px] border-[#08D15F] bg-[#08D15F] px-[10px] py-[8px] lg:px-[15px] lg:py-[10px] inline-block rounded-[10px] 
                  absolute bottom-[-200px] left-[75px] lg:left-[85px] group-hover:bottom-[15px] duration-300">
                    <a className="font-hakto font-medium text-[14px] lg:text-[16px] text-[#FFFFFF]">View Shop</a>
                  </button>
                </div>
              </div>
              <div className="text-center py-[15px] lg:py-[20px]">
                <h4 className="font-hakto font-semibold text-[#151875] text-[18px] lg:text-[20px]">Mini LCW Chair</h4>
                <p className="font-hakto font-semibold text-[#151875] text-[14px] lg:text-[16px]">$56.00</p>
              </div>
            </div>
          </div>
          <div className="lg:w-[24%] w-full mx-auto">
            <div className="relative group overflow-hidden">
              <div className="bg-[#31208A] w-[200px] h-[200px] lg:w-[250px] lg:h-[250px] mx-auto rounded-[50%] group relative">
                <div className="bg-[#F6F7FB] w-[200px] h-[200px] lg:w-[250px] lg:h-[250px] mx-auto rounded-[50%] absolute group-hover:top-[-5px] group-hover:right-[-5px] duration-300">
                  <div className="absolute p-[30%]">
                    <img src={catess} className="w-full h-[100%]" alt="" />
                  </div>
                  <button className="border-[1px] border-[#08D15F] bg-[#08D15F] px-[10px] py-[8px] lg:px-[15px] lg:py-[10px] inline-block rounded-[10px] absolute bottom-[-200px] left-[75px] lg:left-[85px] group-hover:bottom-[15px] duration-300">
                    <a className="font-hakto font-medium text-[14px] lg:text-[16px] text-[#FFFFFF]">View Shop</a>
                  </button>
                </div>
              </div>
              <div className="text-center py-[15px] lg:py-[20px]">
                <h4 className="font-hakto font-semibold text-[#151875] text-[18px] lg:text-[20px]">Mini LCW Chair</h4>
                <p className="font-hakto font-semibold text-[#151875] text-[14px] lg:text-[16px]">$56.00</p>
              </div>
            </div>
          </div>
          <div className="lg:w-[24%] w-full mx-auto">
            <div className="relative group overflow-hidden">
              <div className="bg-[#31208A] w-[200px] h-[200px] lg:w-[250px] lg:h-[250px] mx-auto rounded-[50%] group relative">
                <div className="bg-[#F6F7FB] w-[200px] h-[200px] lg:w-[250px] lg:h-[250px] mx-auto rounded-[50%] absolute group-hover:top-[-5px] group-hover:right-[-5px] duration-300">
                  <div className="absolute p-[30%]">
                    <img src={catess} className="w-full h-[100%]" alt="" />
                  </div>
                  <button className="border-[1px] border-[#08D15F] bg-[#08D15F] px-[10px] py-[8px] lg:px-[15px] lg:py-[10px] inline-block rounded-[10px] absolute bottom-[-200px] left-[75px] lg:left-[85px] group-hover:bottom-[15px] duration-300">
                    <a className="font-hakto font-medium text-[14px] lg:text-[16px] text-[#FFFFFF]">View Shop</a>
                  </button>
                </div>
              </div>
              <div className="text-center py-[15px] lg:py-[20px]">
                <h4 className="font-hakto font-semibold text-[#151875] text-[18px] lg:text-[20px]">Mini LCW Chair</h4>
                <p className="font-hakto font-semibold text-[#151875] text-[14px] lg:text-[16px]">$56.00</p>
              </div>
            </div>
          </div>
          <div className="lg:w-[24%] w-full mx-auto">
            <div className="relative group overflow-hidden">
              <div className="bg-[#31208A] w-[200px] h-[200px] lg:w-[250px] lg:h-[250px] mx-auto rounded-[50%] group relative">
                <div className="bg-[#F6F7FB] w-[200px] h-[200px] lg:w-[250px] lg:h-[250px] mx-auto rounded-[50%] absolute group-hover:top-[-5px] group-hover:right-[-5px] duration-300">
                  <div className="absolute p-[30%]">
                    <img src={catess} className="w-full h-[100%]" alt="" />
                  </div>
                  <button className="border-[1px] border-[#08D15F] bg-[#08D15F] px-[10px] py-[8px] lg:px-[15px] lg:py-[10px] inline-block rounded-[10px] absolute bottom-[-200px] left-[75px] lg:left-[85px] group-hover:bottom-[15px] duration-300">
                    <a className="font-hakto font-medium text-[14px] lg:text-[16px] text-[#FFFFFF]">View Shop</a>
                  </button>
                </div>
              </div>
              <div className="text-center py-[15px] lg:py-[20px]">
                <h4 className="font-hakto font-semibold text-[#151875] text-[18px] lg:text-[20px]">Mini LCW Chair</h4>
                <p className="font-hakto font-semibold text-[#151875] text-[14px] lg:text-[16px]">$56.00</p>
              </div>
            </div>
          </div>

         

        </Slider>

      </Container>
    </div>
  )
}

export default Cate
