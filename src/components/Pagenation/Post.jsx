import React, { useEffect, useState } from 'react'
import { IoMdStarOutline } from "react-icons/io";
import { TbZoomIn } from "react-icons/tb";
import { FaList, FaRegHeart, FaCartPlus } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";
import { Link, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addtoCart } from '../Slice/productSlice';
import axios from 'axios';
import { IoIosStar } from "react-icons/io";
import { IoMdStarHalf } from "react-icons/io";

const Post = ({ Allpage, cotagoryFiter, Multi }) => {
    let [filtervags, setfiltervags] = useState([])
    let [count, setCount] = useState(true)
    let [RatingProduct,setRatingProduct] = useState([])
    let dispacth = useDispatch()
    let productId = useParams()


    let dataId = () => {
        axios.get(`https://dummyjson.com/products/${productId.Id}`).then((response) => {
            setRatingProduct(response.data)
        })
    }

    useEffect(() => {
        dataId()
    }, [])

    useEffect(() => {
        let Showvag = cotagoryFiter.slice(0, 5)
        setfiltervags(Showvag)
    }, [cotagoryFiter])



    let handelFilShow = () => {
        setfiltervags(cotagoryFiter)
        setCount(false)
    }

    let handelFilHide = () => {
        setCount(true)
        let filterVag = cotagoryFiter.slice(0,5)
        setfiltervags(filterVag)
    }

    let cartNav = (item) => {
        dispacth(addtoCart({ ...item, qun: 1 }))
    }
    let handelLove = ((item) => {
        dispacth(addtoCart({ ...item, qun: 1 }))
    })

    
    let Reating = Array.from({length : 5},(elm , index)=>{
        let number = index + 0.5
        return(
            RatingProduct.rating > index + 1  ? <IoIosStar /> : RatingProduct.rating > number  ? <IoMdStarHalf /> : <FaRegStar/>
        )
    })

    
    return (
        <div>
            {cotagoryFiter.length > 0 ?
                <div className="">
                    {filtervags.map((item) => (
                        <div className="">
                            <div className=" border-[1px]  px-4 py-4 my-[25px] shadow-sm">
                                <div className=" flex gap-x-[40px] items-center">
                                    <Link to={`/Shopsidebar/${item.id}`}>
                                        <div className="">
                                            <img src={item.thumbnail} alt="" />
                                        </div>
                                    </Link>
                                    <div className=" w-[50%]">
                                        <div className=" flex  items-center gap-x-[20px] py-[8px]">
                                            <h3 className=' font-hakto font-medium text-[#111C85] text-[20px]'>{item.title}</h3>
                                            <div className=" flex gap-x-[10px] ">
                                                <div className=" w-[10px] h-[10px] rounded-[50%] bg-[#DE9034]"></div>
                                                <div className=" w-[10px] h-[10px] rounded-[50%] bg-[#EC42A2]"></div>
                                                <div className=" w-[10px] h-[10px] rounded-[50%] bg-[#8568FF]"></div>
                                            </div>
                                        </div>
                                        <div className=" lg:flex gap-x-[20px] items-center py-4">
                                        <div className="flex gap-x-[20px]">
                                        <h5 className=' font-hakto font-normal text-[16px] text-[#111C85] hover:text-[#FF2AAA] duration-300'>${item.price}</h5>
                                        <h5 className=' font-hakto font-normal text-[16px] text-[#FF2AAA] hover:text-[#111C85] duration-300'>${item.price}</h5>
                                        </div>
                                        <div className=" flex gap-x-[10px] text-[#FFC416]">
                                         
                                            {Reating}
                                        </div>
                                    </div>
                                        <p className=' font-hakto font-light text-[17px] text-[#9295AA]'>{item.description}</p>
                                        <div className=" flex gap-x-[40px] pt-[18px]">
                                            <div onClick={() => cartNav(item)} className="">
                                                <FaCartPlus />
                                            </div>
                                            <TbZoomIn />
                                            <div onClick={() => handelLove(item)} className="">
                                                <FaRegHeart />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
             
                        </div>
                    ))
                    }
                    {count ? cotagoryFiter.length > 5 &&
                        <div className="">
                            <button onClick={handelFilShow} className='h-[50px] font-dm font-normal w-[100px] border-[1px] border-[#262626] rounded-[5px] hover:bg-[#262626] hover:text-[#fff] duration-500'>Show All</button>
                        </div>
                        :
                        cotagoryFiter.length > 5 &&
                      <div className="">
                          <button onClick={handelFilHide} className='h-[50px] font-dm font-normal w-[100px] border-[1px] border-[#262626] rounded-[5px] hover:bg-[#262626] hover:text-[#fff] duration-500'>Hide All</button>
                      </div>

                    }
                </div>

                :
                <div className={`${Multi == "ActiveMulti" ?
                    
                   
                    (<div className=" flex flex-wrap">
                        {Allpage.map((item)=>(
                            <div className="w-[24%] flex flex-wrap">

                                    <div className=" group overflow-hidden">
                                    <div className="   bg-[#F6F7FB] relative group-hover:bg-[#EBF4F3] duration-300">
                                         <div className=" w-[90%] justify-center">
                                           <img src={item.thumbnail} className='py-[40px] w-full ' alt="" />
                                         </div>
                                        <div className=" absolute bottom-1 left-[-50px] group-hover:left-0 duration-300">              
                                            <FaCartPlus className=' text-[40px] py-[10px]'/>
                                            <TbZoomIn className=' text-[40px] py-[10px]'/>
                                            <FaRegHeart className=' text-[40px] py-[10px]'/>
                                    </div>
                                    </div>

                                    <div className=" text-center py-[20px]">
                                        <h3 className=' font-hakto font-medium text-[18px] text-[#151875]'>{item.title}</h3>
                                        <div className=" flex gap-x-[10px] justify-center py-[10px] items-center">
                                            <div className=" w-[10px] h-[10px] rounded-[50%] bg-[#DE9034]"></div>
                                            <div className=" w-[10px] h-[10px] rounded-[50%] bg-[#EC42A2]"></div>
                                            <div className=" w-[10px] h-[10px] rounded-[50%] bg-[#8568FF]"></div>
                                        </div>
                                        <h4><span className=' font-hakto font-normal text-[14px] text-[#151875]'>${item.price} </span> <span className=' font-hakto font-normal text-[14px] text-[#FB2E86]'>${item.price}</span></h4>
                                    </div>
                                </div>
                            </div>
                             ))}
                         </div>)
                    :


                    ('')}`}>
                    {Allpage.map((item) => (
                        <div className=" border-[1px]  px-4 py-4 my-[25px] shadow-sm">
                            <div className=" flex lg:gap-x-[40px] gap-x-[10px] items-center">
                                <Link to={`/Shopsidebar/${item.id}`}>
                                    <div className="">
                                        <img src={item.thumbnail} alt="" />
                                    </div>
                                </Link>
                                <div className=" w-[50%]">
                                    <div className=" lg:flex  items-center gap-x-[20px] py-[8px]">
                                        <h3 className=' font-hakto font-medium text-[#111C85] text-[20px]'>{item.title}</h3>
                                        <div className=" flex gap-x-[10px] ">
                                            <div className=" w-[10px] h-[10px] rounded-[50%] bg-[#DE9034]"></div>
                                            <div className=" w-[10px] h-[10px] rounded-[50%] bg-[#EC42A2]"></div>
                                            <div className=" w-[10px] h-[10px] rounded-[50%] bg-[#8568FF]"></div>
                                        </div>
                                    </div>
                                    <div className=" lg:flex gap-x-[20px] items-center py-4">
                                        <div className="flex gap-x-[20px]">
                                        <h5 className=' font-hakto font-normal text-[16px] text-[#111C85] hover:text-[#FF2AAA] duration-300'>${item.price}</h5>
                                        <h5 className=' font-hakto font-normal text-[16px] text-[#FF2AAA] hover:text-[#111C85] duration-300'>${item.price}</h5>
                                        </div>
                                        <div className=" flex gap-x-[10px] text-[#FFC416]">
                                          
                                            {Reating}
                                        </div>
                                    </div>
                                    <p className=' font-hakto font-light text-[17px] text-[#9295AA]'>{item.description}</p>
                                    <div className=" flex gap-x-[40px] pt-[18px]">
                                        <div onClick={() => cartNav(item)} className=" cursor-pointer">
                                            <FaCartPlus />
                                        </div>
                                        <TbZoomIn />
                                        <div onClick={() => handelLove(item)} className=" cursor-pointer">
                                            <FaRegHeart />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                    }
                </div>
            }
        </div>
    )
}

export default Post