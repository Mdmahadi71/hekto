import React from 'react'
import Container from './Container'
import { Link } from 'react-router-dom'

const ShopGcomponents = () => {
  return (
    <div className='bg-[#F6F5FF] py-[100px]'>
      <Container>
      <div className="">
            <h2 className=' font-hakto font-semibold text-[#101750] text-[35px]'>Shop Grid Default</h2>
            <h2><Link to ='/'><span className=' font-hakto font-medium text-[16px] text-[#101750]  hover:text-[#FB2E86] duration-300'>Home.Pages</span>
            </Link> <Link to ='/'><span className=' font-hakto font-medium text-[16px] text-[#101750]  hover:text-[#FB2E86] duration-300'>.Shop Grid Default</span></Link></h2>
           
        </div>
        
      </Container>
    </div>
  )
}

export default ShopGcomponents
