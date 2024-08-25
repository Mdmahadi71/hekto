import React, { useEffect, useState } from 'react'
import Container from './Container'
import { FaCheckCircle } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { RxCrossCircled } from "react-icons/rx";
import { productremove } from './Slice/productSlice';
import { Link } from 'react-router-dom'
import { getDatabase, ref, onValue } from "firebase/database";


const HdemoMain = () => {
    let cartdata = useSelector((state) => state.product.cartItem)
    let dispacth = useDispatch()
    const db = getDatabase();
    let [delivary , setdelivary] = useState([])


    let hendelremove = ((item) => {
        dispacth(productremove(item))
    })
    useEffect(() => {
        const starCountRef = ref(db, 'user/' );
        onValue(starCountRef, (snapshot) => {
            const arrr = [];
            snapshot.forEach((item)=>{
                arrr.push({...item.val()})
            })
            setdelivary(arrr)
        });
        

    }, [db])
    



    const { totalPrice, totatQuntity } = cartdata.reduce((acc, item) => {
        acc.totalPrice += item.price * item.qun
        acc.totatQuntity += item.qun
        return acc
    }, { totalPrice: 0, totatQuntity: 0 })

    return (
        <div className=''>

            <div className=' bg-[#F6F5FF] py-[90px]'>
                <Container>
                    <div className="">
                        <h2 className=' font-hakto font-semibold text-[#101750] text-[35px]'>Hekto Demo</h2>
                        <h2><Link to='/'><span className=' font-hakto font-medium text-[16px] text-[#101750]  hover:text-[#FB2E86] duration-300'>Home.Pages</span>
                        </Link> <Link to='/DemoPage'><span className=' font-hakto font-medium text-[16px] text-[#101750]  hover:text-[#FB2E86] duration-300'>Hekto Demo</span></Link></h2>

                    </div>
                </Container>
            </div>

            <div className="py-[40px]">
                <Container>
                    <div className=" py-[20px]">
                        <h3 className=' font-hakto font-semibold text-[#1D3178] text-[35px]'>Hekto Demo</h3>
                        <p className=' font-hakto font-medium text-[#1D3178] text-[16px]'>Cart/ Information/ Shipping/ Payment</p>
                    </div>

                    <div className=" lg:flex justify-between ">
                        <div className="lg:w-[68%] mb-[50px] lg:mb-0">
                            
                            <div className=" border-[2px] border-[#E1E1E4] p-[40px] mt-[100px] bg-[#E1E1E4] rounded-[15px] shadow-2xl shadow-[#b7b7e3]">
                                <div className=" text-center">
                                    <h2 className=' font-hakto font-semibold text-[26px] text-[#1D3178]'>Shoping All Address</h2>
                                </div>
                                <div className=" text-center">
                                    {delivary.map((item)=>(
                                        <div className=" py-[10px]">
                                        <h2 className=' font-hakto font-medium text-[20px] text-[#000000]'>Name:  {item.username} </h2>
                                        <h2 className=' font-hakto font-medium text-[20px] text-[#000000]'>Email:  {item.email} </h2>
                                    </div>
                                    ))}
                                    

                                    <div className=" py-[10px]">
                                        <h2 className=' font-hakto font-medium text-[20px] text-[#000000]'>Phone Number: 01317159871</h2>
                                        <h2 className=' font-hakto font-medium text-[20px] text-[#000000]'>Delivery Address: Mohammadpur/Nurjahan road /R-42 </h2>
                                        <h2 className=' font-hakto font-medium text-[20px] text-[#000000]'>Delivary Date: Sep/10/2024 </h2>
                                        <h3 className=' font-hakto font-medium text-[20px] text-[#000000]'>Delivery Time: 12:00 PM</h3>
                                    </div>
                                    <div className=" py-[10px]">
                                        <h2 className=' font-hakto font-medium text-[20px] text-[#000000]'>Product Num:  {totatQuntity}</h2>
                                        <h2 className=' font-hakto font-medium text-[20px] text-[#000000]'>Product Price:  ${totalPrice}</h2>
                                    </div>
                                    <div className="">
                                        <p className=' font-hakto font-medium text-[20px] text-cyan-400'>Paid Cash on Delivary</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="lg:w-[29%]">
                            {cartdata.map((item, i) => (
                                <div className=" flex justify-between items-center border-b-[1px] border-[#E1E1E4] py-[10px] mt-[15px]">
                                    <div className=" flex gap-x-[20px]">
                                        <div className=" relative">
                                            <img src={item.thumbnail} className=' w-[83px] h-[87px]' alt="" />
                                            <div onClick={() => hendelremove(i)} className=" absolute top-[-10px] right-[-10px]">
                                                <RxCrossCircled className=' text-[25px] text-[#000000]' />
                                            </div>
                                        </div>
                                        <div className="">
                                            <h5 className=' font-hakto font-medium text-[16px] text-[#000000]'>{item.title}</h5>
                                            <h6 className=' font-hakto font-normal text-[14px] text-[#A1A8C1]'>{item.brand}</h6>
                                            <p className=' font-hakto font-normal text-[14px] text-[#A1A8C1]'>Size: XL</p>
                                        </div>
                                    </div>
                                    <h4 className=' font-hakto font-medium text-[16px] text-[#15245E]'>${item.price}</h4>
                                </div>
                            ))}
                            <div className=" text-center py-[20px]">
                                <h3 className=' font-hakto font-semibold text-[#1D3178] text-[20px]'>Cart Totals</h3>
                            </div>
                            <div className=" border-[1px] border-[#F4F4FC] bg-[#F4F4FC] px-[20px] py-[20px] rounded-[10px]">
                                <div className=" flex justify-between border-b-[1px] border-[#E8E6F1] py-3">
                                    <h3 className=' font-hakto font-medium text-[#1D3178] text-[16px]'>Subtotals:</h3>
                                    <h3 className=' font-hakto font-medium text-[#1D3178] text-[16px]'>£{totalPrice}</h3>
                                </div>
                                <div className=" flex justify-between border-b-[1px] border-[#E8E6F1] py-3 mt-[40px]">
                                    <h3 className=' font-hakto font-medium text-[#1D3178] text-[16px]'>Totals Quntity:</h3>
                                    <h3 className=' font-hakto font-medium text-[#1D3178] text-[16px]'>£{totatQuntity}</h3>
                                </div>
                                <div className=" flex justify-between border-b-[1px] border-[#E8E6F1] py-3 mt-[40px]">
                                    <h3 className=' font-hakto font-medium text-[#1D3178] text-[16px]'>Totals:</h3>
                                    <h3 className=' font-hakto font-medium text-[#1D3178] text-[16px]'>£{totalPrice}</h3>
                                </div>
                                <div className=" flex gap-x-[20px] items-center my-[30px]">
                                    <FaCheckCircle className=' text-[#19D16F] text-[18px]' />
                                    <p className=' font-hakto font-medium text-[#8A91AB] text-[12px]'>Shipping & taxes calculated at checkout</p>
                                </div>
                                <Link to={'/OrderCompleted'} >
                                    <button className=' border-[1px] py-[15px] bg-[#19D16F] w-full'>
                                        <a className=' font-hakto font-medium text-[#FFFFFF] text-[16px]'>Proceed To Order</a>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>

        </div>
    )
}

export default HdemoMain
