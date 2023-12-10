
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useState } from "react";
import { Link, } from "react-router-dom";


const LogIn = () => {
    const [show, setShow] = useState(false)
    const handleClick = () => {
        setShow(!show)
    }
    return (
        <div className="xl:px-20 lg:px-16 md:px-14 sm:px-12 px-12 py-14">
            <div className="flex items-center justify-center w-full">
                <form  className="border lg:w-2/4">
                    <div className="px-20 py-8 text-center bg-[#072159]">
                        <h2 className=" font-bold text-white text-xl">Log In to Connect</h2>
                        <p className="py-1 text-[#ebe8e8]">to continue with Westren Education Group</p>
                    </div>
                    <div className="flex flex-col  px-12 py-8 space-y-3">
                        <div className="w-full space-y-1">
                            <label className="font-semibold text-sm flex items-center text-[#454545]">Your Email<sup className="text-[#EF645A]">*</sup></label>
                            <input
                               
                                type="email" className="py-2 px-2 border w-full outline-none" placeholder="Enter Email" />
                           
                        </div>
                        <div className="w-full  space-y-1">
                            <label className="font-semibold text-sm flex items-center text-[#454545]">Your Password<sup className="text-[#EF645A]">*</sup></label>
                            <div className="flex items-center justify-center ">
                                <div className="w-full">
                                    <input
                                     
                                        type={show ? "text" : "password"} className="py-2 px-2 border outline-none w-full" placeholder="Enter Password" />
                                       
                                </div>
                                <p onClick={handleClick} className='ml-[-4vh]  text-xl cursor-pointer hover:text-[#8D0012] duration-300'>{show ? <AiOutlineEyeInvisible></AiOutlineEyeInvisible> : <AiOutlineEye></AiOutlineEye>}</p>
                            </div>
                            <p className="py-2 text-sm font-medium text-[#898989] cursor-pointer hover:text-[#8D0012] duration-300">Forget Password</p>
                        </div>

                        <input type="submit" className="py-2 px-2 border bg-[#91000D] hover:bg-[#0A2258] duration-300 font-medium text-white outline-none w-full cursor-pointer" value="Log In" />
                        <h2 className="text-center  font-bold">Login with</h2>

                        <div className='flex items-center justify-center space-x-2'>
                            <a className='px-2 py-2  bg-[#4B68A8] text-white rounded-full hover:bg-[#3674fa] hover:scale-105 duration-300' href='https://www.facebook.com/' target="_blank"><FaFacebookF /></a>
                            <a className='px-2 py-2  bg-[#D43B78] text-white rounded-full hover:bg-[#ff3787] hover:scale-105 duration-300' href='https://www.instagram.com/' target="_blank"><FaInstagram /></a>
                            <a className='px-2 py-2  bg-[#3098E7] text-white rounded-full hover:bg-[#2ca3ff] hover:scale-105 duration-300' href='https://twitter.com/' target="_blank"><FaTwitter /></a>
                            <a className='px-2 py-2  bg-[#2E66AA] text-white rounded-full hover:bg-[#2f8dff] hover:scale-105 duration-300' href='https://bd.linkedin.com/' target="_blank"><FaLinkedinIn /></a>
                        </div>
                        <p className="text-center font-medium py-2">If you are new in WEG ? Please  <Link to='/singUp'>
                            <span className="font-bold text-[#EA5F5C] cursor-pointer hover:text-[#1B577F] duration-300">Sing Up</span>
                        </Link> Now</p>
                    </div>


                </form>
            </div>
        </div>
    );
};
export default LogIn;