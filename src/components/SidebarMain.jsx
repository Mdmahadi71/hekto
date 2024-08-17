import React, { useContext, useEffect, useState } from 'react'
import Container from './Container'
import { IoGridSharp } from "react-icons/io5";
import { FaList, FaRegHeart, FaCartPlus ,FaBars} from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";
import { IoMdStarOutline } from "react-icons/io";
import { TbZoomIn } from "react-icons/tb";
import ShopList from '../assets/shopllistt.png'
import newss from '../assets/Newsd.png'
import { MdCheckBox } from "react-icons/md";
import { IoStar } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { DataApi } from './ContextApi';
import Post from './Pagenation/Post';
import PagenationArrea from './Pagenation/PagenationArrea';
import { Link } from 'react-router-dom'
import { RxCross1 } from "react-icons/rx";


const SidebarMain = () => {
    let data = useContext(DataApi)
    let [pagenumber, setpagenumber] = useState(1)
    let [parpage, setparpage] = useState(5)
    let [cotagory, setcotagory] = useState([])
    let [brands, setbrands] = useState([])
    let [cotagoryFiter, setcotagoryFiter] = useState([])
    let [Multi, setMulti] = useState('')
    let [catebares,setcatebares] = useState(false)


    let lastpage = pagenumber * parpage
    let fastpage = lastpage - parpage
    let Allpage = data.slice(fastpage, lastpage)


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
        setcotagory([...new Set(data.map((item) => item.category))])
        setbrands([...new Set(data.map((item) => item.brand))])
    }, [data])

    let handelcata = ((cItem) => {
        let Filtercate = data.filter((item) => item.category == cItem)
        setcotagoryFiter(Filtercate)
    })
    let handelGrid = () => {
        setMulti('ActiveMulti')
    }

    return (
        <div>
            <div className=' bg-[#F6F5FF] py-[90px]'>
                <Container>
                    <div className="">
                        <h2 className=' font-hakto font-semibold text-[#101750] text-[35px]'>Shop Left Sidebar</h2>
                        <h2><Link to='/'><span className=' font-hakto font-medium text-[16px] text-[#101750]  hover:text-[#FB2E86] duration-300'>Home.Pages</span>
                        </Link> <Link to='/Shopsidebar'><span className=' font-hakto font-medium text-[16px] text-[#101750]  hover:text-[#FB2E86] duration-300'>.Shop Left Sidebar</span></Link></h2>

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
                                    <div onClick={() => setMulti("")} className="">
                                        <FaList />
                                    </div>
                                    <div onClick={handelGrid} className="">
                                        <IoGridSharp />
                                    </div>
                                </div>
                                <input type="text" className=' border-[1px] border-[#E7E6EF] lg:w-[200px] w-full h-[40px] outline-none ' />
                            </div>
                        </div>
                    </div>
                </div>

                <div className=" lg:flex justify-between">
                    <div onClick={()=>setcatebares(!catebares)} className=" lg:hidden flex gap-x-[20px] items-center">
                        <h3 className=' font-hakto font-medium text-[20px] '>Catagory Bars</h3>
                        <h2>{catebares==true ? <RxCross1/> : <FaBars/>}</h2>
                    </div>
                    <div className={`lg:w-[25%] absolute lg:static duration-300 ${catebares==true ? " top-[800px] left-[0] bg-[#dfc9c9]" :" top-[800px] left-[-500px] "}`}>
                        <div className="">
                            <div className="">
                                <h2 className=' font-hakto font-semibold text-[#151875] text-[20px] border-b-[1px] border-[#151875] py-1 inline-block'>Product Brand</h2>
                                {brands.map((item) => (
                                    <div className=" flex gap-x-[10px] items-center py-2">
                                        <MdCheckBox className=' text-[#E5E0FC]' />
                                        <p className=' font-hakto font-light text-[16px] text-[#7E81A2]'>{item}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="">
                                <h2 className=' font-hakto font-semibold text-[#151875] text-[20px] border-b-[1px] border-[#151875] py-1 inline-block'>Discount Offer</h2>
                                <div className=" flex gap-x-[10px] items-center py-2">
                                    <MdCheckBox className=' text-[#FF3EB2]' />
                                    <p className=' font-hakto font-light text-[16px] text-[#7E81A2]'>20% Cashback</p>
                                </div>
                                <div className=" flex gap-x-[10px] items-center py-2">
                                    <MdCheckBox className=' text-[#FF3EB2]' />
                                    <p className=' font-hakto font-light text-[16px] text-[#7E81A2]'>5% Cashback Offer</p>
                                </div>
                                <div className=" flex gap-x-[10px] items-center py-2">
                                    <MdCheckBox className=' text-[#FF3EB2]' />
                                    <p className=' font-hakto font-light text-[16px] text-[#7E81A2]'>25% Discount Offer</p>
                                </div>

                            </div>
                            <div className="">
                                <h2 className=' font-hakto font-semibold text-[#151875] text-[20px] border-b-[1px] border-[#151875] py-1 inline-block'>Rating Item</h2>
                                <div className=" flex gap-x-[10px] items-center py-2">

                                    <div className="">
                                        <MdCheckBox className=' text-[#FFC107]' />
                                    </div>
                                    <div className=" flex gap-x-[10px]">
                                        <IoStar className=' text-[#FFC107]' />
                                        <IoStar className=' text-[#FFC107]' />
                                        <IoStar className=' text-[#FFC107]' />
                                        <IoStar className=' text-[#FFC107]' />
                                        <FaRegStar />
                                    </div>
                                    <p>(2341)</p>

                                </div>
                                <div className=" flex gap-x-[10px] items-center py-2">
                                    <div className="">
                                        <MdCheckBox className=' text-[#FFC107]' />
                                    </div>
                                    <div className=" flex gap-x-[10px]">
                                        <IoStar className=' text-[#FFC107]' />
                                        <IoStar className=' text-[#FFC107]' />
                                        <IoStar className=' text-[#FFC107]' />
                                        <FaRegStar />
                                        <FaRegStar />
                                    </div>
                                    <p>(1726)</p>

                                </div>
                                <div className=" flex gap-x-[10px] items-center py-2">
                                    <div className="">
                                        <MdCheckBox className=' text-[#FFC107]' />
                                    </div>
                                    <div className=" flex gap-x-[10px]">
                                        <IoStar className=' text-[#FFC107]' />
                                        <IoStar className=' text-[#FFC107]' />
                                        <FaRegStar />
                                        <FaRegStar />
                                        <FaRegStar />
                                    </div>
                                    <p>(258)</p>

                                </div>
                                <div className=" flex gap-x-[10px] items-center py-2">
                                    <div className="">
                                        <MdCheckBox className=' text-[#FFC107]' />
                                    </div>
                                    <div className=" flex gap-x-[10px]">
                                        <IoStar className=' text-[#FFC107]' />
                                        <IoStar className=' text-[#FFC107]' />
                                        <FaRegStar />
                                        <FaRegStar />
                                        <FaRegStar />
                                    </div>
                                    <p>(25)</p>

                                </div>


                            </div>



                            <div className="">
                                <div className="">
                                    <h2 className=' font-hakto font-semibold text-[#151875] text-[20px] border-b-[1px] border-[#151875] py-1 inline-block'>Categories</h2>
                                </div>
                                {cotagory.map((item) => (
                                    <div className=" flex gap-x-[10px] items-center py-2">
                                        <MdCheckBox className=' text-[#FF3EB2]' />
                                        <p onClick={() => handelcata(item)} className=' font-hakto font-light text-[16px] text-[#7E81A2]'>{item}</p>
                                    </div>
                                ))}


                            </div>


                            <div className="">
                                <h2 className=' font-hakto font-semibold text-[#151875] text-[20px] border-b-[1px] border-[#151875] py-1 inline-block'>Price Filter</h2>
                                <div className=" flex gap-x-[10px] items-center py-2">
                                    <MdCheckBox className=' text-[#FF3EB2]' />
                                    <p className=' font-hakto font-light text-[16px] text-[#7E81A2]'>$0.00 - $150.00</p>
                                </div>
                                <div className=" flex gap-x-[10px] items-center py-2">
                                    <MdCheckBox className=' text-[#FF3EB2]' />
                                    <p className=' font-hakto font-light text-[16px] text-[#7E81A2]'>$150.00 - $350.00</p>
                                </div>
                                <div className=" flex gap-x-[10px] items-center py-2">
                                    <MdCheckBox className=' text-[#FF3EB2]' />
                                    <p className=' font-hakto font-light text-[16px] text-[#7E81A2]'>$150.00 - $504.00</p>
                                </div>
                                <div className=" flex gap-x-[10px] items-center py-2">
                                    <MdCheckBox className=' text-[#FF3EB2]' />
                                    <p className=' font-hakto font-light text-[16px] text-[#7E81A2]'>$450.00 +</p>
                                </div>

                            </div>
                            <div className="relative py-[30px]">
                                <input type=" text" className=' border-[1px] border-[#BCBDDB] w-full h-[35px] outline-none 
                                 font-hakto font-light text-[12px] text-[#151875] pl-[10px]' placeholder='$10.00 - 20000$' />
                                <div className=" absolute top-[40px] right-[40px] font-light text-[16px] text-[#151875]">
                                    <CiSearch />
                                </div>
                            </div>
                            <div className="">
                                <h2 className=' font-hakto font-semibold text-[#151875] text-[20px] border-b-[1px] border-[#151875] py-1 inline-block'>Filter By Color</h2>
                                <div className=" flex gap-x-[10px] items-center py-2">
                                    <div className=" flex gap-x-[10px] items-center">
                                        <div className=" w-[10px] h-[10px] rounded-[50%] bg-[#5E37FF]"></div>
                                        <h3 className=' font-hakto font-light text-[15px] text-[#7E81A2]'>Blue</h3>
                                    </div>
                                    <div className=" flex gap-x-[10px] items-center">
                                        <div className=" w-[10px] h-[10px] rounded-[50%] bg-[#FF9437]"></div>
                                        <h3 className=' font-hakto font-light text-[15px] text-[#7E81A2]'>Orange</h3>
                                    </div>
                                    <div className=" flex gap-x-[10px] items-center">
                                        <div className=" w-[10px] h-[10px] rounded-[50%] bg-[#FFBF95]"></div>
                                        <h3 className=' font-hakto font-light text-[15px] text-[#7E81A2]'>Brown</h3>
                                    </div>

                                </div>
                                <div className=" flex gap-x-[10px] items-center py-2">
                                    <div className=" flex gap-x-[10px] items-center">
                                        <div className=" w-[10px] h-[10px] rounded-[50%] bg-[#33D221]"></div>
                                        <h3 className=' font-hakto font-light text-[15px] text-[#7E81A2]'>Green</h3>
                                    </div>
                                    <div className=" flex gap-x-[10px] items-center">
                                        <div className=" w-[10px] h-[10px] rounded-[50%] bg-[#E248FF]"></div>
                                        <h3 className=' font-hakto font-light text-[15px] text-[#7E81A2]'>Purple</h3>
                                    </div>
                                    <div className=" flex gap-x-[10px] items-center">
                                        <div className=" w-[10px] h-[10px] rounded-[50%] bg-[#26CBFF]"></div>
                                        <h3 className=' font-hakto font-light text-[15px] text-[#7E81A2]'>Sky</h3>
                                    </div>

                                </div>


                            </div>
                        </div>
                    </div>
                    <div className="lg:w-[75%]">
                        <Post Allpage={Allpage} cotagoryFiter={cotagoryFiter} Multi={Multi} />
                        <div className=" text-end">
                            <PagenationArrea pageNumber={pageNumber} prewPage={prewPage} nextPage={nextPage} pageAreaNbr={pageAreaNbr} />
                        </div>
                    </div>

                </div>

                <div className=" mx-auto py-4">
                    <img src={newss} alt="" />
                </div>
            </Container>
        </div>
    )
}

export default SidebarMain
