
import { FaFacebookF } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useState } from "react";
import { Link} from "react-router-dom";


const SingUp = () => {
    const [show, setShow] = useState(false)
    const handleClick = () => {
        setShow(!show)
    }

    return (
        <div className="xl:px-20 lg:px-16 md:px-14 sm:px-12 px-12 py-14">
            <div className="flex items-center justify-center w-full">
                <form  className="border lg:w-2/4">
                    <div className="px-20 py-8 text-center bg-[#072159]">
                        <h2 className=" font-bold text-white text-xl">Sign Up to  Connect</h2>
                        <p className="py-1 text-[#ebe8e8]">to continue to Westren Education Group</p>
                    </div>
                    <div className="flex flex-col  px-12 py-8 space-y-3">
                        <div className="flex flex-col space-y-1">
                            <label className="font-semibold text-sm text-[#454545]">Your Full Name<sup className="text-[#EF645A]">*</sup></label>
                            <input
                                
                                type="text" className="py-2 px-2 border outline-none" placeholder="Enter Your Name" />
                            
                        </div>

                        <div className="flex flex-col space-y-1">
                            <label className="font-semibold text-sm text-[#454545]">Your Email<sup className="text-[#EF645A]">*</sup></label>
                            <input
                                
                                type="email" className="py-2 px-2 border outline-none" placeholder="Enter Your Email" />
                            
                        </div>

                        <div className="flex flex-col space-y-1">
                            <label className="font-semibold text-sm text-[#454545]">Your Institute Name<sup className="text-[#EF645A]">*</sup></label>
                            <input
                                
                                type="text" className="py-2 px-2 border outline-none" placeholder="Institute ex: university of dhaka" />
                            
                        </div>

                        <div className="flex flex-col space-y-1">
                            <label className="font-semibold text-sm text-[#454545]">Name Of Your Dept.<sup className="text-[#EF645A]">*</sup></label>
                            <input
                                
                                type="text" className="py-2 px-2 border outline-none" placeholder="Dept. ex: CSE" />
                            
                        </div>



                        <div className="flex flex-col space-y-1">
                            <label className="font-semibold text-sm text-[#454545]">Name Of Your Position<sup className="text-[#EF645A]">*</sup></label>
                            <input
                                
                                type="text" className="py-2 px-2 border outline-none" placeholder="Position. ex: lecturer " />
                            
                        </div>

                        <div className="flex flex-col space-y-1">
                            <label className="font-semibold text-sm flex items-center text-[#454545]">Contact Number<sup className="text-[#EF645A]">*</sup> <span className="text-[14px]"> (preferred cell phone number)</span></label>
                            <input
                                
                                type="text" className="py-2 px-2 border outline-none" placeholder="ex: +88016..." />
                            
                        </div>

                        <div className="w-full space-y-1">
                            <label className="font-semibold text-sm flex items-center text-[#454545]">Password<sup className="text-[#EF645A]">*</sup></label>
                            <div className="flex items-center justify-center ">
                                <div className="w-full">
                                    <input
                                        
                                        type={show ? "text" : "password"} className="py-2 px-2 border outline-none w-full" placeholder="Enter Password" />
                                    
                                </div>
                                <p onClick={handleClick} className='ml-[-4vh]  text-xl cursor-pointer hover:text-[red] duration-300'>{show ? <AiOutlineEyeInvisible></AiOutlineEyeInvisible> : <AiOutlineEye></AiOutlineEye>}</p>
                            </div>

                        </div>

                        <input type="submit" className="py-2 px-2 border bg-[#91000D] hover:bg-[#0A2258] duration-300 font-medium text-white outline-none w-full cursor-pointer" value="Sign Up" />
                        <h2 className="text-center  font-bold">Sign up with</h2>

                        <div className='flex items-center justify-center space-x-2'>
                            <p className='px-2 py-2  bg-[#E43A39] cursor-pointer text-white rounded-full hover:bg-[#3674fa] hover:scale-105 duration-300'><FaGooglePlusG /></p>
                            <a className='px-2 py-2  bg-[#D43B78] text-white rounded-full hover:bg-[#ff3787] hover:scale-105 duration-300' href='' target="_blank"><FaFacebookF/></a>
                            <a className='px-2 py-2  bg-[#3098E7] text-white rounded-full hover:bg-[#2ca3ff] hover:scale-105 duration-300' href='https://twitter.com/' target="_blank"><FaTwitter /></a>
                            <a className='px-2 py-2  bg-[#2E66AA] text-white rounded-full hover:bg-[#2f8dff] hover:scale-105 duration-300' href='https://bd.linkedin.com/' target="_blank"><FaLinkedinIn /></a>
                        </div>
                        <p className="text-center font-medium py-2">If you have already account ? Please  <Link to='/login'>
                            <span className="font-bold text-[#EA5F5C] cursor-pointer hover:text-[#1B577F] duration-300">Log In</span>
                        </Link> Now</p>
                    </div>


                </form>
            </div>
        </div>
    );
};
export default SingUp;