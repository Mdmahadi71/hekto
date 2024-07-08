import React from 'react'
import Container from './Container'
import { Link } from 'react-router-dom'


const ShopingBanner = () => {
  return (
    <div>
       <div className=' bg-[#F6F5FF] py-[90px]'>
            <Container>
                <div className="">
                    <h2 className=' font-hakto font-semibold text-[#101750] text-[35px]'>Shopping Curt</h2>
                       <h2><Link to='/'><span className=' font-hakto font-medium text-[16px] text-[#101750]  hover:text-[#FB2E86] duration-300'>Home.Pages</span>
                    </Link> <Link to='/ProductDetails'><span className=' font-hakto font-medium text-[16px] text-[#101750]  hover:text-[#FB2E86] duration-300'>.Shopping Curt</span></Link></h2>
                </div>
            </Container>
        </div>
    </div>
  )
}

export default ShopingBanner
