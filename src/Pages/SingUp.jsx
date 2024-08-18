import React, { useState } from 'react'
import Container from '../components/Container'
import { Link, useNavigate } from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword ,updateProfile } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { ToastContainer, toast } from 'react-toastify';
import { IoMdEye ,IoMdEyeOff } from "react-icons/io";

const SingUp = () => {
    const auth = getAuth();
    const db = getDatabase();
    let [name, setname] = useState('')
    let [email, setemail] = useState('')
    let [password, setpassword] = useState('')
    let navegate = useNavigate([])
    let [passeye,setpasseye] = useState(false)


    let hanleclick = (() => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((user) => {
                updateProfile(auth.currentUser, {
                    displayName: name
                  }).then(() => {
                    toast('Successfull , Go to Log in Page')
                    setTimeout(()=>{
                        navegate('/LoginPage')
                    },1000)

                  }).then(() => {
                    set(ref(db, 'user/' +user.user.uid), {
                        username: name,
                        email: email,

                      });
                  });
            })
            .catch((error) => {
                toast('Fill Up Tasks')
                const errorCode = error.code;
                const errorMessage = error.message;
     
            });
    })

    return (
        <div className=' py-[100px]'>
            <Container>
                <div className=" lg:w-[500px] mx-auto text-center items-center py-[50px] px-[40px] bg-[#F8F8FB]">
                    <div className="">
                        <h3 className=' font-hakto font-semibold text-[#000000] text-[32px]'>Sing Up</h3>
                    </div>
                    <div onChange={(e) => setname(e.target.value)} className="">
                        <input type="text" className=' outline-none w-full h-[50px] bg-[#F8F8FB] border-[1px] border-[#C2C5E1] my-[20px]' placeholder='Enter Your Name' name="" id="" />
                    </div>
                    <div onChange={(e) => setemail(e.target.value)} className="">
                        <input type="email" className=' outline-none w-full h-[50px] bg-[#F8F8FB] border-[1px] border-[#C2C5E1] my-[20px]' placeholder='Enter Your Email' name="" id="" />
                    </div>
                    <div onChange={(e) => setpassword(e.target.value)} onClick={()=>setpasseye(!passeye)} className=" relative">
                        <input type={passeye == true ? 'password' : 'text'} className=' outline-none w-full h-[50px] bg-[#F8F8FB] border-[1px] border-[#C2C5E1] my-[20px]' placeholder='Enter Your Password' name="" id="" />
                        <div className=" absolute top-[40px] right-[20px]">
                            {passeye==true ? <IoMdEyeOff/> : <IoMdEye/>}
                        </div>
                    </div>
                    <div onClick={hanleclick} className=" bg-[#FB2E86] py-[8px] px-[15px] inline-block my-[20px] cursor-pointer">
                        <button className=' font-hakto font-medium text-[17px] text-white'>Sing Up</button>
                        <ToastContainer />
                    </div>
                    <div className="">
                        <p className=' font-hakto font-normal text-[#9096B2] text-[17px]'>You have an Account? <Link to={'/LoginPage'} > <span className=' text-[#FB2E86]'> Log in</span></Link></p>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default SingUp