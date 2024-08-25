import React, { useContext ,useState,useEffect} from 'react'
import Container from './Container'
import { IoGridSharp } from "react-icons/io5";
import { FaList, FaRegHeart, FaCartPlus } from "react-icons/fa";
import { TbZoomIn } from "react-icons/tb";
import newss from '../assets/Newsd.png'
import { DataApi } from './ContextApi';
import { Link, useParams } from 'react-router-dom'
import PagenationArrea from './Pagenation/PagenationArrea';
import { useDispatch } from 'react-redux';
import { FaRegStar } from "react-icons/fa6";
import axios from 'axios';
import { addtoCart } from './Slice/productSlice';



const EcommerceAcceories = () => {
    let data = useContext(DataApi)
    let [pagenumber, setpagenumber] = useState(1)
    let [parpage, setparpage] = useState(8)
    let [cotagory, setcotagory] = useState([])
    let [brands, setbrands] = useState([])
    let [cotagoryFiter, setcotagoryFiter] = useState([])
    let [filtervags, setfiltervags] = useState([])
    let [RatingProduct,setRatingProduct] = useState([])
    let dispacth = useDispatch()
    let productId = useParams()

    let lastpage = pagenumber * parpage
    let fastpage = lastpage - parpage
    let Allpage = data.slice(fastpage, lastpage)


    let dataId = () => {
        axios.get(`https://dummyjson.com/products/${productId.Id}`).then((response) => {
            setRatingProduct(response.data)
        })
    }

    useEffect(() => {
        dataId()
    }, [])

    let pageNumber = []
    for (let i = 0; i < Math.ceil(cotagoryFiter.length > 0 ? cotagoryFiter : data.length / parpage); i++) {
        pageNumber.push(i)
    }
    let pageAreaNbr = ((pageNumber) => {
        setpagenumber(pageNumber + 1)
    })
    let nextPage = ((pageNumber) => {
        setpagenumber((state) => state + 1)
    })
    let prewPage = (() => {
        setpagenumber((state) => state - 1)
    })
    useEffect(() => {
        let Showvag = cotagoryFiter.slice(0, 5)
        setfiltervags(Showvag)
    }, [cotagoryFiter])


    useEffect(() => {
        setcotagory([...new Set(data.map((item) => item.category))])
        setbrands([...new Set(data.map((item) => item.brand))])
    }, [data])

    let Reating = Array.from({length : 5},(elm , index)=>{
        let number = index + 0.5
        return(
            RatingProduct.rating > index + 1  ? <IoIosStar /> : RatingProduct.rating > number  ? <IoMdStarHalf /> : <FaRegStar/>
        )
    })
  
    let cartitemt = ((item)=>{
        dispacth(addtoCart({...item, qun:1 }))
    })
    let Lovecartt = ((item)=>{
        dispacth(addtoCart({...item , qun:1}))
    })

    return (
        <div>
            <div className='bg-[#F6F5FF] py-[100px]'>
                <Container>
                    <div className="">
                        <h2 className=' font-hakto font-semibold text-[#101750] text-[35px]'>Shop Grid Default</h2>
                        <h2><Link to='/'><span className=' font-hakto font-medium text-[16px] text-[#101750]  hover:text-[#FB2E86] duration-300'>Home.Pages</span>
                        </Link> <Link to='/'><span className=' font-hakto font-medium text-[16px] text-[#101750]  hover:text-[#FB2E86] duration-300'>.Shop Grid Default</span></Link></h2>
                    </div>
                </Container>
            </div>
            <Container>
                <div className=" lg:flex justify-between items-center py-[30px]">
                    <div className="lg:w-[50%]">
                        <h4 className=' font-hakto font-semibold text-[#151875] text-[22px]'>Ecommerce Acceories & Fashion item </h4>
                        <p className=' font-hakto font-normal text-[#8A8FB9] text-[12px]'>About 9,620 results (0.62 seconds)</p>
                    </div>
                    <div className="lg:w-[50%]">
                        <div className=" lg:flex justify-between">
                          <div className=" flex justify-between">
                          <div className=" flex gap-x-[10px] items-center">
                                <h5 className=' font-hakto font-medium text-[#3F509E] text-[16px]'>Per Page:</h5>
                                <input type="text" className=' border-[1px] border-[#E7E6EF] w-[80px] h-[40px] outline-none ' />
                            </div>
                            <div className="flex gap-x-[10px] items-center">
                                <h4 className=' font-hakto font-medium text-[#3F509E] text-[16px]'>Sort By:</h4>
                                <input type="text" className=' border-[1px] border-[#E7E6EF] w-[100px] h-[40px] outline-none font-hakto font-medium text-[#8A8FB9] text-[12px] pl-[5px]'
                                    placeholder='Best Match ' />
                            </div>
                          </div>
                            <div className="flex gap-x-[10px] items-center lg:my-0 my-[10px]">
                                <div className=" flex gap-x-[10px] items-center">
                                    <h3 className=' font-hakto font-medium text-[#3F509E] text-[16px]'>View:</h3>
                                    <Link to={'/ShopGrid'}>
                                    <div className="">
                                      <IoGridSharp /> 
                                    </div>
                                    </Link>
                                    <Link to={'/ShopList'}>
                                    <div className="">
                                      <FaList />
                                    </div>
                                    </Link>
                                </div>
                                <input type="text" className=' border-[1px] border-[#E7E6EF] lg:w-[200px] w-full h-[40px] outline-none ' />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="">
                    {cotagoryFiter.length > 0 ?
                        <div className=" flex flex-wrap">
                        {filtervags.map((item) => (
                            <div className="w-[24%] flex  flex-wrap">
    
                                <div className=" group overflow-hidden">
                                    <div className="   bg-[#F6F7FB] relative group-hover:bg-[#EBF4F3] duration-300">
                                    
                                        <div className=" w-[90%] justify-center">
                                            <img src={item.thumbnail} className='py-[40px] w-full ' alt="" />
                                        </div>
                                       
                                        <div className=" absolute bottom-1 left-[-50px] group-hover:left-0 duration-300">
                                           <div  className="">
                                             <FaCartPlus className=' text-[40px] py-[10px]' />
                                           </div>
                                            <TbZoomIn className=' text-[40px] py-[10px]' />
                                            <div  className="">
                                              <FaRegHeart className=' text-[40px] py-[10px]' />
                                            </div>
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
                    </div>
                     :
                     <div className=" flex flex-wrap">
                     {Allpage.map((item) => (
                         <div className="w-[24%] flex  flex-wrap">
 
                             <div className=" group overflow-hidden">
                                 <div className="   bg-[#F6F7FB] relative group-hover:bg-[#EBF4F3] duration-300">
                                 <Link to={`/Shopsidebar/${item.id}`}>
                                     <div className=" w-[90%] justify-center">
                                         <img src={item.thumbnail} className='py-[40px] w-full ' alt="" />
                                     </div>
                                     </Link>
                                     <div className=" absolute bottom-1 left-[-50px] group-hover:left-0 duration-300">
                                         <div onClick={()=> cartitemt(item)} className="  cursor-pointer">
                                           <FaCartPlus className=' text-[40px] py-[10px]' />
                                         </div>
                                         <TbZoomIn className=' text-[40px] py-[10px]' />
                                         <div onClick={()=> Lovecartt(item)} className=" cursor-pointer">
                                            <FaRegHeart className=' text-[40px] py-[10px]' />
                                         </div>
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
                 </div>
                    }
                
                </div>

                <div className=" text-center">
                        <PagenationArrea  pageNumber={pageNumber} prewPage={prewPage} nextPage={nextPage} pageAreaNbr={pageAreaNbr} />
                    </div>


                <div className=" mx-auto py-4">
                    <img src={newss} alt="" />
                </div>
            </Container>
        </div>
    )
}

export default EcommerceAcceories
