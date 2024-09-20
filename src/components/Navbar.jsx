import React, { useContext, useEffect, useState } from 'react'
import Container from './Container'
import Hakto from '../assets/Hekto.png'
import { CiSearch } from "react-icons/ci";
import { Link, useNavigate } from 'react-router-dom';
import { RxCross1 } from "react-icons/rx";
import { FaBars } from "react-icons/fa";
import { DataApi } from './ContextApi';


const Navbar = () => {
  let data = useContext(DataApi)
  let [show, setshow] = useState(false)
  let [Activemanu, setActivemanu] = useState(localStorage.getItem('Activemanu' || ''))
  let [searchItem, setsearchItem] = useState('')
  let [searchFiltem, setsearchFiltem] = useState('')
  let navigate = useNavigate([])
  let [selectedItemIndex, setSelectedItemIndex] = useState(-1);

  useEffect(() => {
    localStorage.setItem('Activemanu', Activemanu)
  }, [Activemanu])
  let handelbars = (() => {
    setshow(!show)
  })
  let handelsearch = (e) => {
    setsearchItem(e.target.value);
    if (e.target.value == '') {
      setsearchFiltem([])
    } else {
      let searchFind = data.filter((item) => item.title.toLowerCase().includes(e.target.value))
      setsearchFiltem(searchFind)
    }


  }
  let handelcart = (id) =>{
    navigate(`/Shopsidebar/${id}`)
    setsearchFiltem('')
    setsearchItem('')
  }
  let handelpas = () => {
    navigate('/Shopsidebar')

  }
  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      setSelectedItemIndex((prevIndex) =>
        Math.min(prevIndex + 1, searchFiltem.length - 1)
      );
    } else if (e.key === "ArrowUp") {
      setSelectedItemIndex((prevIndex) => Math.max(prevIndex - 1, -1));
    } else if (e.key === "Enter" && selectedItemIndex !== -1) {
      handelcart(searchFiltem[selectedItemIndex].id);
    }
  };



  return (

    <div className=' py-[20px]'>
      <Container>
        <div className="flex lg:justify-between gap-x-[5px] justify-around items-center">
          <div className="lg:w-[15%] w-[40%] flex justify-between items-center">
            <img src={Hakto} alt="" />
            <div onClick={handelbars} className=" lg:hidden text-[25px]">
              {show ? <RxCross1 /> : <FaBars />}
            </div>
          </div>
          <div className="lg:w-[60%] mt-2">
            <ul className={`lg:flex justify-center text-center gap-x-[35px] absolute lg:static duration-300 ${show == true ? 'top-[270px] left-0 bg-[#EBF4F3] w-full' : 'top-[270px] left-[-250px]'}`}>
              <li onClick={() => setActivemanu('Home')}>
                <Link to='/'>
                  <a className={`${Activemanu === 'Home' ? ' font-hakto font-medium text-[16px]  text-[#FB2E86]' : 'font-hakto font-medium text-[16px] text-[#0D0E43]'}`}>Home</a>
                </Link>
              </li>
              <li onClick={() => setActivemanu('Shop')}>
                <Link to='/Shopsidebar'>
                  <a className={`${Activemanu === 'Shop' ? 'font-hakto font-medium text-[16px]  text-[#FB2E86]' : 'font-hakto font-medium text-[16px] text-[#0D0E43] '}`}>Shop</a>
                </Link>
              </li>
              <li onClick={() => setActivemanu('ShopList')}>
                <Link to='/ShopList'>
                  <a className={`${Activemanu === 'ShopList' ? 'font-hakto font-medium text-[16px]  text-[#FB2E86]' : 'font-hakto font-medium text-[16px] text-[#0D0E43] '}`}>Shop List</a>
                </Link>
              </li>
              <li onClick={() => setActivemanu('ShopGrid')}>
                <Link to='/ShopGrid'>
                  <a className={`${Activemanu === 'ShopGrid' ? 'font-hakto font-medium text-[16px]  text-[#FB2E86]' : 'font-hakto font-medium text-[16px] text-[#0D0E43]'}`}>Shop Grid</a>
                </Link>
              </li>
              <li onClick={() => setActivemanu('BlogPage')}>
                <Link to='/BlogPage'>
                  <a className={`${Activemanu === 'BlogPage' ? 'font-hakto font-medium text-[16px]  text-[#FB2E86]' : 'font-hakto font-medium text-[16px] text-[#0D0E43]'}`}>Blog </a>
                </Link>
              </li>

              <li onClick={() => setActivemanu('ContactUs')}>
                <Link to='/ContactUs'>
                  <a className={`${Activemanu === 'ContactUs' ? 'font-hakto font-medium text-[16px]  text-[#FB2E86]' : 'font-hakto font-medium text-[16px] text-[#0D0E43]'}`}>Contact</a>
                </Link>
              </li>
            </ul>

          </div>


          <div className="lg:w-[17%]  lg:justify-end  relative">
            <div className=" flex">
              <input onChange={handelsearch} onKeyDown={handleKeyDown} type="text" className=' bg-[#D9D9D9] outline-none' />
              <div className=" bg-[#FB2E86] p-[8px]">
                <div onClick={handelpas} className="">
                  <CiSearch />
                </div>
              </div>
            </div>
            {searchFiltem.length > 0 &&
              <div className=" absolute  h-[300px] overflow-y-scroll bg-slate-400">
                {searchFiltem.map((item) => (
                  <div onClick={()=>handelcart(item.id)} className=" flex  items-center">
                    <div className=" w-[100px] h-[100px]">
                      <img src={item.thumbnail} alt="" />
                    </div>
                    <div className="">
                      <h2>{item.title}</h2>
                    </div>
                  </div>
                ))}

              </div>
            }
          </div>


        </div>

      </Container>
    </div>
  )
}

export default Navbar
