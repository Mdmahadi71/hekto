import React from 'react'
import Container from './Container'
import TextImg from './reusable/TextImg'

const Newslater = () => {
  return (
    <div className=' py-[30px]'>
      <Container>
        <div className="bg-[url('../src/assets/News.png')] bg-no-repeat bg-center bg-cover py-[174px] text-center">
          <h4 className=' font-hakto font-semibold text-[25px] text-[#151875]'>Get Leatest Update By Subscribe 0ur Newslater</h4>
          <button className=' border-[1px] border-[] py-[10px] px-4 bg-[#FB2E86] 
          inline-block mt-4 hover:bg-[#08D15F] duration-300 text-[#FFFFFF]'>
            <a className=' font-hakto font-medium text-[16px]'>Shop Now</a>
          </button>
        </div>
        <div className="">
          <TextImg/>
        </div>
      </Container>
    </div>
  )
}

export default Newslater
