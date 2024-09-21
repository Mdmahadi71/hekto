import React, { useEffect, useState } from 'react'
import Container from './Container'
import { SlArrowUp } from "react-icons/sl";


const BackBottomTotop = () => {
    let [backtoTop , setbacktoTop] = useState(false)

    useEffect(()=>{
        window.addEventListener('scroll' ,()=>{
            if(window.scrollY > 100){
                setbacktoTop(true)
            }else{
                setbacktoTop(false)
            }
        })
    },[])
    let scrollUp=(()=>{
        window.scrollTo({
             top:'0',
            behavior:'smooth',
           
        })
    })


  return (
    <div>
        {backtoTop &&
      <Container>
        <button className='lg:w-[50px] lg:h-[50px]  w-[30px] h-[30px] bottom-[50px] lg:right-[50px] right-[10px] fixed lg:text-[50px] rounded-[5px] text-[30px]  bg-sky-500' onClick={scrollUp}><SlArrowUp/></button>
      </Container>
      }
    </div>
  )
}

export default BackBottomTotop