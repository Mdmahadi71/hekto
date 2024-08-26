import React, { useState } from 'react'
import Container from './Container'
import { Link, useNavigate } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { toast ,ToastContainer} from 'react-toastify';
import { IoMdEye ,IoMdEyeOff } from "react-icons/io";
import TextImg from './reusable/TextImg';

const Loginmain = () => {
    const auth = getAuth();
    let [email, setemail] = useState('')
    let [password, setpassword] = useState('')
    let navegate = useNavigate([])
    let [eyepss , seteyepass] = useState(false)





    let handelsingin = (() => {
        signInWithEmailAndPassword(auth, email, password)
            .then((user) => {
                toast('Log In successfull , Go to My account')
                setTimeout(()=>{
                    navegate('/DemoPage')
                },1000)
            })
            .catch((error) => {
                toast('Wrong password')
                const errorCode = error.code;
                const errorMessage = error.message;
            });

    })
    return (
        <div className=' '>
            <div className=' bg-[#F6F5FF] py-[90px]'>
                <Container>
                    <div className="">
                        <h2 className=' font-hakto font-semibold text-[#101750] text-[35px]'>My Account</h2>
                        <h2><Link to='/'><span className=' font-hakto font-medium text-[16px] text-[#101750]  hover:text-[#FB2E86] duration-300'>Home.Pages</span>
                        </Link> <Link to='/LoginPage'><span className=' font-hakto font-medium text-[16px] text-[#101750]  hover:text-[#FB2E86] duration-300'>My Account</span></Link></h2>

                    </div>
                </Container>
            </div>

            <div className="py-[100px]">
                <Container>
                    <div className=" lg:w-[600px] mx-auto px-[40px]">
                        <div className="">
                            <div className=" border-[1px] px-[30px] py-[40px] shadow-md">
                                <div className="">
                                    <h2 className=' font-hakto font-semibold text-[#000000] text-[35px] text-center'>Login</h2>
                                    <p className=' font-hakto font-normal text-[#9096B2] text-[18px] text-center'>Please login using account detail bellow.</p>
                                </div>
                                <div className="">
                                    <div onChange={(e) => setemail(e.target.value)} className="">
                                        <input type="Email" className=' font-hakto font-normal text-[#9096B2] text-[18px] border-[2px] border-[#9096B2] w-full h-[50px] outline-none pl-[10px] my-[30px]' placeholder='Email Address' />
                                    </div>
                                    <div onChange={(e) => setpassword(e.target.value)} onClick={()=>seteyepass(!eyepss)} className=" relative">
                                        <input type={eyepss==true ? 'password' : 'text'} className=' font-hakto font-normal text-[#9096B2] text-[18px] border-[2px] border-[#9096B2] w-full h-[50px] outline-none pl-[10px] my-[10px]' placeholder='Password' />
                                        <div className=" absolute top-[30px] right-[20px]">
                                            {eyepss==true ? <IoMdEyeOff/> : <IoMdEye/>}
                                        </div>
                                    </div>
                                </div>
                                <p className=' font-hakto font-medium text-[#9096B2] text-[17px]'>Forgot your password?</p>

                                <div onClick={handelsingin} className="border-[1px] border-[#FB2E86] py-[15px] w-full bg-[#FB2E86] text-center cursor-pointer rounded-[5px] my-[30px]">
                                    <button className='font-hakto font-medium text-[17px] text-[#FFFFFF]'>Sign In</button>
                                    <ToastContainer />
                                </div>


                                <h5 className=' font-hakto font-medium text-[17px] text-[#9096B2] text-center'>Don’t have an Account?Create account</h5>
                            </div>
                        </div>
                    </div>
                    <div className=" mx-auto py-[50px]">
                        <TextImg/>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Loginmain