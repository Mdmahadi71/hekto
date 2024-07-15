import React, { useContext, useEffect, useState } from 'react'
import Container from './Container'
import { Link, useParams } from 'react-router-dom'
import { FaStar, FaRegHeart, FaFacebookF, FaTwitter, FaInstagramSquare } from "react-icons/fa";
import productImgone from '../assets/prodetils.png'
import productImgtow from '../assets/prodetils2.png'
import { FaArrowRightLong } from "react-icons/fa6";
import relatedImg from '../assets/related.png'
import newss from '../assets/Newsd.png'
import axios from 'axios';
import { DataApi } from './ContextApi';
import { IoIosStar } from "react-icons/io";
import { FaRegStar } from "react-icons/fa6";
import { IoMdStarHalf } from "react-icons/io";
import { useDispatch } from 'react-redux';
import { addtoCart } from './Slice/productSlice';


const ProductTocart = () => {
    let data = useContext(DataApi)
    let [product, setproduct] = useState([])
    let productId = useParams()
    let dispacth = useDispatch()




    let dataId = () => {
        axios.get(`https://dummyjson.com/products/${productId.Id}`).then((response) => {
            setproduct(response.data)
        })
    }

    useEffect(() => {
        dataId()
    }, [])

    let Reating = Array.from({length : 5},(elm , index)=>{
        let number = index + 0.5
        return(
            product.rating > index + 1  ?<IoIosStar /> : product.rating > number  ? <IoMdStarHalf /> : <FaRegStar/>
        )
    })

    let handelcart = ((item)=>{
        dispacth(addtoCart({...item , qun:1}))
    })


    return (
        <>
            <div className=' bg-[#F6F5FF] py-[90px]'>
                <Container>
                    <div className="">
                        <h2 className=' font-hakto font-semibold text-[#101750] text-[35px]'>Product Details</h2>
                        <h2><Link to='/'><span className=' font-hakto font-medium text-[16px] text-[#101750]  hover:text-[#FB2E86] duration-300'>Home.Pages</span>
                        </Link> <Link to='/ProductDetails'><span className=' font-hakto font-medium text-[16px] text-[#101750]  hover:text-[#FB2E86] duration-300'>.Product Details</span></Link></h2>

                    </div>
                </Container>
            </div>
            <div className=' py-[100px]'>
                <Container>
                    <div className=" border-[1px] px-[15px] py-[20px]  shadow-md">

                        <div className=" flex justify-between items-center">
                            <div className="w-[50%]">
                                {product?.images?.map((item) => (
                                    <div className="flex gap-x-[50px] ">
                                        <div className="w-[20%]">
                                            <div className=" ">
                                                <div className="w-[151px] h-[155px] my-[11px]">
                                                    <img src={item} alt="" />
                                                </div>
                                                <div className="w-[151px] h-[155px] my-[11px]">
                                                    <img src={item} alt="" />
                                                </div>
                                                <div className="w-[151px] h-[155px] my-[11px]">
                                                    <img src={item} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-[27%]">
                                            <div className=" w-[375px] h-[487px] my-[11px]">
                                                <img src={item} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                ))}

                            </div>

                            <div className="w-[50%]">

                                <div className="">
                                 
                                        <div className="">

                                        <h3 className=' font-hakto font-semibold text-[#0D134E] text-[35px]'>{product.title}</h3>

                                        <div className=" flex gap-x-[10px] items-center text-[#FFC416]">
                                          {Reating}
                                            <p>(22)</p>
                                        </div>
                                        <h5><span className=' font-hakto font-light text-[#151875] text-[16px]'>${product.price}</span> <span className=' font-hakto font-light text-[#FB2E86] text-[16px]'>${product.price}</span></h5>
                                        <h3 className=' font-hakto font-medium text-[19px] text-[#0D134E] py-[7px]'>color</h3>
                                        <p className=' font-hakto font-light text-[#A9ACC6] text-[16px] py-[7px]'>{product.description}</p>
                                        <div className=" flex gap-x-[20px] items-center justify-center">
                                            <Link to='/Shopping'>
                                            <button onClick={()=>handelcart(product)} className=' border-[1px] px-4 py-3 bg-[#FB2E86] text-[#151875] rounded-[5px]'>
                                                <a className=' font-hakto font-medium text-[18px]'>Add To cart</a>
                                            </button>
                                            </Link>
                                            <i><FaRegHeart /></i>
                                        </div>
                                        <h3 ><span className=' font-hakto font-medium text-[19px] text-[#0D134E] py-[7px]'>Categories:</span> <span className=' font-hakto font-medium text-[19px] text-[#FB2E86] py-[7px]'>{product.category}</span></h3>
                                        <h5><span  className=' font-hakto font-medium text-[19px] text-[#0D134E] py-[7px]'>Tags:</span> <span className=' font-hakto font-medium text-[19px] text-[#FB2E86] py-[7px]'>{product.tags}</span></h5>
                                        <div className=" flex gap-x-[20px] items-center py-[7px]">
                                            <h3 className=' font-hakto font-medium text-[19px] text-[#0D134E]'>Share</h3>
                                            <div className=" flex gap-x-[20px]">
                                                <FaFacebookF />
                                                <FaInstagramSquare />
                                                <FaTwitter />
                                            </div>
                                        </div>

                                    </div>
                                    
                                </div>

                            </div>

                        </div>



                    </div>
                </Container>
            </div>
            <div className=' bg-[#F9F8FE] py-[40px]'>
                <Container>
                    <div className="">
                        <ul className='flex gap-x-5 justify-center'>
                            <li>
                                <a className=' font-hakto font-semibold text-[18px] text-[#151875]  hover:border-b-[2px] hover:border-[#151875] duration-200 gap-x-[50px]'>Description</a>
                            </li>
                            <li>
                                <a className=' font-hakto font-semibold text-[18px] text-[#151875] hover:border-b-[2px] hover:border-[#151875] duration-200 gap-x-[50px]'>Additional Info</a>
                            </li>
                            <li>
                                <a className=' font-hakto font-semibold text-[18px] text-[#151875] hover:border-b-[2px] hover:border-[#151875] duration-200 gap-x-[50px]'>Reviews</a>
                            </li>
                            <li>
                                <a className=' font-hakto font-semibold text-[18px] text-[#151875]  hover:border-b-[2px] hover:border-[#151875] duration-200 gap-x-[50px]'>Video</a>
                            </li>
                        </ul>
                    </div>
                    <div className="">
                        <h3 className=' font-hakto font-semibold text-[22px] text-[#151875] py-[10px]'>Varius tempor.</h3>
                        <p className=' font-hakto font-normal text-[16px] text-[#A9ACC6]'>Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel
                            sed et eleifend habitasse amet. Montes, mauris varius ac est bibendum. Scelerisque a, risus ac ante.
                            Velit consectetur neque, elit, aliquet. Non varius proin sed urna, egestas consequat laoreet diam tincidunt.
                            Magna eget faucibus cras justo, tortor sed donec tempus. Imperdiet consequat,
                            quis diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
                    </div>
                    <div className=" py-3">
                        <h3 className=' font-hakto font-semibold text-[22px] text-[#151875]'>More details</h3>
                        <div className=" flex gap-x-[10px] items-center py-2">
                            <FaArrowRightLong />
                            <p className=' font-hakto font-normal text-[16px] text-[#A9ACC6]'>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>

                        </div>
                        <div className=" flex gap-x-[10px] items-center py-2">
                            <FaArrowRightLong />
                            <p className=' font-hakto font-normal text-[16px] text-[#A9ACC6]'>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>

                        </div>
                        <div className=" flex gap-x-[10px] items-center py-2">
                            <FaArrowRightLong />
                            <p className=' font-hakto font-normal text-[16px] text-[#A9ACC6]'>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>

                        </div>
                        <div className=" flex gap-x-[10px] items-center py-2">
                            <FaArrowRightLong />
                            <p className=' font-hakto font-normal text-[16px] text-[#A9ACC6]'>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>

                        </div>
                    </div>
                </Container>
            </div>
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
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
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
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
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
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
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
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                    </div>
                                </div>
                                <h6 className=' font-hakto font-medium text-[13px] text-[#151875]'>$43.00</h6>
                            </div>
                        </div>
                    </div>
                    <div className=" pl-[200px] py-4">
                        <img src={newss} alt="" />
                    </div>
                </Container>
            </div>
        </>
    )
}

export default ProductTocart